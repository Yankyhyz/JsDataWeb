/* make sure to add your API key on line 446 */

var Census = Backbone.Model.extend({
  defaults: {
    loc: "00",
    loc_str: "United States"
  },
  
  validate: function( options ) {
    if ( ! options.api_key ) {
      return "You must enter your API key from www.census.gov/developers/";
    }
  },
  
  // creates new location string for API
  buildLocQuery: function() {
    var loc = this.get("loc");
    if ( loc === "00" ) {
      this.set("loc_query", "us");
    }
    else {
      this.set("loc_query", "state:" + loc);
    }
  },
  
  initialize: function() {
    this.on("invalid", function(e, error) {
      console.log(error);
    });
    
    this.on("change:loc", this.buildLocQuery, this);
    
    this.buildLocQuery();
  }
});

var States = Backbone.Collection.extend();

var states = new States([
  { name: "United States", fips: "00" },
  { name: "Alabama", fips: "01" },
  { name: "Alaska", fips: "02" },
  { name: "Arizona", fips: "04" },
  { name: "Arkansas", fips: "05" },
  { name: "California", fips: "06" },
  { name: "Colorado", fips: "08" },
  { name: "Connecticut", fips: "09" },
  { name: "Delaware", fips: "10" },
  { name: "District of Columbia", fips: "11" },
  { name: "Florida", fips: "12" },
  { name: "Georgia", fips: "13" },
  { name: "Hawaii", fips: "15" },
  { name: "Idaho", fips: "16" },
  { name: "Illinois", fips: "17" },
  { name: "Indiana", fips: "18" },
  { name: "Iowa", fips: "19" },
  { name: "Kansas", fips: "20" },
  { name: "Kentucky", fips: "21" },
  { name: "Louisiana", fips: "22" },
  { name: "Maine", fips: "23" },
  { name: "Maryland", fips: "24" },
  { name: "Massachusetts", fips: "25" },
  { name: "Michigan", fips: "26" },
  { name: "Minnesota", fips: "27" },
  { name: "Mississippi", fips: "28" },
  { name: "Missouri", fips: "29" },
  { name: "Montana", fips: "30" },
  { name: "Nebraska", fips: "31" },
  { name: "Nevada", fips: "32" },
  { name: "New Hampshire", fips: "33" },
  { name: "New Jersey", fips: "34" },
  { name: "New Mexico", fips: "35" },
  { name: "New York", fips: "36" },
  { name: "North Carolina", fips: "37" },
  { name: "North Dakota", fips: "38" },
  { name: "Ohio", fips: "39" },
  { name: "Oklahoma", fips: "40" },
  { name: "Oregon", fips: "41" },
  { name: "Pennsylvania", fips: "42" },
  { name: "Rhode Island", fips: "44" },
  { name: "South Carolina", fips: "45" },
  { name: "South Dakota", fips: "46" },
  { name: "Tennessee", fips: "47" },
  { name: "Texas", fips: "48" },
  { name: "Utah", fips: "49" },
  { name: "Vermont", fips: "50" },
  { name: "Virginia", fips: "51" },
  { name: "Washington", fips: "53" },
  { name: "West Virginia", fips: "54" },
  { name: "Wisconsin", fips: "55" },
  { name: "Wyoming", fips: "56" }
]);

var CensusView = Backbone.View.extend({
  el: ".charts",
  template: _.template( $(".census-tpl").text() ),

  initialize: function() {
    this.model.on("change", this.render, this);
    
    this.buildDropdown();
    
    google.load("visualization", "1", {packages:["corechart"]});
    
    google.setOnLoadCallback($.proxy(this.render, this));
    
    // redraw charts on window resize
    var debouncedRender = _.debounce($.proxy(this.render, this), 1000);
    $(window).resize(debouncedRender);
  },
  
  // builds the state dropdown with change listener
  buildDropdown: function() {
    // compile the state dropdown template
    var tpl = _.template( $(".state-dropdown-tpl").text() ),
        compiled = tpl({
          states: this.collection.toJSON()
        });
    
    // append to the DOM    
    var $dropdown = $(compiled).appendTo( this.$el.parent() );
    
    $dropdown.on("change", $.proxy(function(e) {
      this.model.set({
        loc: $dropdown.val(),
        loc_str: $dropdown.find("option:selected").text()
      });
    }, this));
  },
  
  // render the new charts based on this location
  render: function() {
    // render the main template
    var compiled = this.template( this.model.toJSON() );
    this.$el.html(compiled);
    
    // create the charts from this markup
    this.renderPopulation();
    
    // render the other charts if not the national data
    if ( this.model.get("loc") !== "00" ) {
      this.renderAge();
      this.renderRace();
      this.renderSex();
      this.renderHousing();
      this.renderTenure();
    }
    
    return this;
  },
  
  renderPopulation: function() {
    $.ajax({
      url: "http://api.census.gov/data/2013/pep/natstprc",
      data: {
        get: "POP,DATE",
        for: this.model.get("loc_query"),
        key: this.model.get("api_key")
      },
      success: function(data) {
        var processed = [
          ["Year", "Population"]
        ];
      
        for ( i in data ) {
          if ( i == 0 ) continue;
          processed[i] = [ ~~data[i][1] + 2007, ~~data[i][0] ];
        }
    
        var chartData = google.visualization.arrayToDataTable(processed);

        var options = {
          title: "Population Growth",
          legend: "none"
        };

        var chart = new google.visualization.LineChart(document.getElementById("population-chart"));
        chart.draw(chartData, options);
      }
    });
  },
  
  renderAge: function() {
    // get sex by age
  
    // build age request string
    function build_age_request_string(offset) {
      var out = "";
    
      for ( var i = 0; i < 23; i++ ) {
        var this_index = ("0" + (i + offset)).slice(-2);
    
        out += "P01200" + this_index + ",";
      }
    
      return out;
    }
  
    var age_request_keys = build_age_request_string(3) + build_age_request_string(27);
  
    age_request_keys = age_request_keys.slice(0,-1);
  
    $.ajax({
      url: "http://api.census.gov/data/2010/sf1",
      data: {
        get: age_request_keys,
        for: this.model.get("loc_query"),
        key: this.model.get("api_key")
      },
      success: function(data) {
        var male_data   = data[1].slice(0,23),
            female_data = data[1].slice(23,46);
      
        // merge the dissimilar age ranges
      
        function combine_vals(arr, start, end) {
          var total = 0;
        
          for ( var i = start; i <= end; i++ ) {
            total += arr[i];
          }
        
          arr[start] = total;
        
          arr.splice( start + 1, end - start);
        
          return arr;
        }
      
        function clean_age_range( age_data ) {
          // convert all the values to numeric
          for ( var i in age_data ) {
            age_data[i] = ~~age_data[i];
          }
        
          // merge values starting with highest (to preserve array keys)
        
          // merge 65-66 && 67-69
          age_data = combine_vals( age_data, 17, 18 );
        
          // merge 60-61 & 62-64
          age_data = combine_vals( age_data, 15, 16 );
        
          // merge 20, 21 & 22-24
          age_data = combine_vals( age_data, 5, 7 );
        
          // merge 15-17 & 18-19
          age_data = combine_vals( age_data, 3, 4 );
        
          return age_data;
        }
      
        male_data = clean_age_range(male_data);
        female_data = clean_age_range(female_data);
      
        var processed = [
          ["Age", "Male", "Female"]
        ];
    
        for ( var i = 0, max = male_data.length; i < max; i++ ) {
          var row = [];
      
          switch(i) {
            case 0:
              row[0] = "Under 5";
            break;
        
            default:
              row[0] = (i * 5) + "-" + (i * 5 + 4);
            break;
        
            case max - 1:
              row[0] = (i * 5) + "+";
            break;
          }
      
          row[1] = male_data[i];
          row[2] = female_data[i];
      
          processed.push(row);
        }
      
        var chartData = google.visualization.arrayToDataTable(processed);

        var options = {
          title: "Age"
        };

        var chart = new google.visualization.ColumnChart(document.getElementById("age-chart"));
      
        chart.draw(chartData, options);
      }
    });
  },
  
  renderRace: function() {
    // get race data
    $.ajax({
      url: "http://api.census.gov/data/2010/sf1",
      data: {
        get: "P0080003,P0080004,P0080005,P0080006,P0080007,P0080008,P0080009",
        for: this.model.get("loc_query"),
        key: this.model.get("api_key")
      },
      success: function(data) {
        var races = [
          "White",
          "Black",
          "American Indian or Alaskan Native",
          "Asian",
          "Native Hawaiian or Pacific Islander",
          "Other",
          "Mixed"
        ],
        processed = [
          ["Race", "Population"]
        ];
      
        // lose the last value (state ID)
        data[1].pop();
      
        for ( i in data[1] ) {
          processed.push([
            races[i],
            ~~data[1][i]
          ]);
        }
      
        var chartData = google.visualization.arrayToDataTable(processed);

        var options = {
          title: "Race",
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById("race-chart"));
      
        chart.draw(chartData, options);
      }
    });
  },
  
  renderSex: function() {
    // get basic sex data
    $.ajax({
      url: "http://api.census.gov/data/2010/sf1",
      data: {
        get: "P0120002,P0120026",
        for: this.model.get("loc_query"),
        key: this.model.get("api_key")
      },
      success: function(data) {
        var processed = [
          ["Sex", "Population"],
          ["Male", ~~data[1][0]],
          ["Female", ~~data[1][1]]
        ];
      
        var chartData = google.visualization.arrayToDataTable(processed);

        var options = {
          title: "Sex",
          pieHole: 0.8,
          pieSliceText: "none"
        };

        var chart = new google.visualization.PieChart(document.getElementById("sex-chart"));
      
        chart.draw(chartData, options);
      }
    });
  },
  
  renderHousing: function() {
    // get household size
    $.ajax({
      url: "http://api.census.gov/data/2010/sf1",
      data: {
        get: "H0130002,H0130003,H0130004,H0130005,H0130006,H0130007,H0130008",
        for: this.model.get("loc_query"),
        key: this.model.get("api_key")
      },
      success: function(data) {
        var processed = [
          ["Household Size", "Households"]
        ];
      
        // lose the last value (state ID)
        data[1].pop();
      
        for ( i in data[1] ) {
          processed.push([
            (~~i+1) + ( i == 6 ? "+" : "" ) + " Person",
            ~~data[1][i]
          ]);
        }
      
        var chartData = google.visualization.arrayToDataTable(processed);

        var options = {
          title: "Household Size",
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById("household-chart"));
      
        chart.draw(chartData, options);
      }
    });
  },
  
  renderTenure: function() {
    // get housing tenure
    $.ajax({
      url: "http://api.census.gov/data/2010/sf1",
      data: {
        get: "H0110002,H0110003,H0110004",
        for: this.model.get("loc_query"),
        key: this.model.get("api_key")
      },
      success: function(data) {
        var processed = [
          ["Tenure", "Housing Units"],
          ["Owned with Mortgage", ~~data[1][0]],
          ["Owned Outright", ~~data[1][1]],
          ["Rented", ~~data[1][2]]
        ];
      
        var chartData = google.visualization.arrayToDataTable(processed);

        var options = {
          title: "Housing Tenure",
          pieHole: 0.8,
          pieSliceText: "none"
        };

        var chart = new google.visualization.PieChart(document.getElementById("tenure-chart"));
      
        chart.draw(chartData, options);
      }
    });
  }
});

var census = new Census({
  api_key: "[your API key]"
});

var censusView = new CensusView({
  model: census,
  collection: states
});