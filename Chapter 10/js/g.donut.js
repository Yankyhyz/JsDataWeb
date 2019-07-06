Raphael.fn.donutChart = function (cx, cy, r, values, options) {
  var paper = this,
      chart = this.set(),
      rad   = Math.PI / 180;
  
  // define options
  var o = options || {};
  o.width = o.width || r * .15;
  o.strokeWidth = o.strokeWidth || 0;
  o.strokeColor = o.strokeColor || '#000';
  
  o.onclick = o.onclick || function() {};
  o.onmouseover = o.onmouseover || function() {};
  o.onmouseout = o.onmouseout || function() {};
  
  o.animationDuration = o.animationDuration || 300;
  o.animationScale = o.animationScale || 1.1;
  o.animationEasing = o.animationEasing || 'backOut';
  
  o.labels = o.labels || [];
  o.labelOffsetX = o.labelOffsetX || 50;
  o.labelOffsetY = o.labelOffsetY || 30;
  
  // create colors if not set
  if ( typeof o.colors == 'undefined' ) {
    o.colors = [];
    
    for (var i = 0, max = values.length; i < max; i++) {
      o.colors.push( Raphael.hsb(i / 10, .75, 1) );
    }
  }

  // interior radius
  var rin = r - o.width;
  
  // draw arc 
  function draw_arc(startAngle, endAngle, styleOpts) {
    // get the coordinates
    var x1 = cx + r * Math.cos(-startAngle * rad),
        y1 = cy + r * Math.sin(-startAngle * rad),
        x2 = cx + r * Math.cos(-endAngle * rad),
        y2 = cy + r * Math.sin(-endAngle * rad),
        
        xin1 = cx + rin * Math.cos(-startAngle * rad),
        yin1 = cy + rin * Math.sin(-startAngle * rad),
        xin2 = cx + rin * Math.cos(-endAngle * rad),
        yin2 = cy + rin * Math.sin(-endAngle * rad);
    
    // draw the arc
    return paper.path(
      ["M", xin1, yin1,
       "L", x1, y1, 
       "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, 
       "L", xin2, yin2, 
       "A", rin, rin, 0, +(endAngle - startAngle > 180), 1, xin1, yin1, "z"]
     ).attr(styleOpts);
  }
  
  // add label at given angle
  function draw_label( label, angle, styleOpts ) {
    var style = {};
    
    style.fill = styleOpts.fill || '#000';
    style['font-size'] = styleOpts['font-size'] || 20;
        
    var labelX = cx + ( r + o.labelOffsetX ) * Math.cos( -angle * rad ),
        labelY = cy + ( r + o.labelOffsetY ) * Math.sin( -angle * rad ),
        txt    = paper.text( labelX, labelY, label ).attr( style );
    
    return txt;
  } 
  
  // process each segment of the arc and render
  function build_segment(j) {
    var value = values[j],
        angleplus = 360 * value / total,
        styleOpts = {
          fill: o.colors[j]
        };
    
    if ( o.strokeWidth ) {
      styleOpts.stroke = o.strokeColor;
      styleOpts['stroke-width'] = o.strokeWidth;
    }
    else {
      styleOpts.stroke = 'none';
    }
    
    // draw the arc
    var arc = draw_arc( angle, angle + angleplus, styleOpts );
    
    // create labels if they exist
    if ( o.labels[j] !== 'undefined' ) {
      var halfAngle = angle + (angleplus / 2),
          label = draw_label( o.labels[j], halfAngle, {
            fill: o.colors[j]
          });
    }
    
    // mouse event handlers
    arc.click( function() {
      o.onclick(j);
    });
    
    arc.mouseover(function () {
      arc.stop().animate({transform: 's' + o.animationScale + ' ' + o.animationScale + ' ' + cx + " " + cy}, o.animationDuration, o.animationEasing);
    
      o.onmouseover(j);
    }).mouseout(function () {
      arc.stop().animate({transform: ""}, o.animationDuration, o.animationEasing);
    
      o.onmouseout(j);
    });
    
    angle += angleplus;
    
    chart.push( arc );
    
    if ( typeof label != 'undefined' ) chart.push( label );
  }
  
  var angle = 0,
      total = 0;
  
  // fetch total
  for (var i = 0, max = values.length; i < max; i++) {
    total += values[i];
  }
  
  // build each segment of the chart
  for (i = 0; i < max; i++) {
    build_segment(i);
  }
  
  return chart;
};