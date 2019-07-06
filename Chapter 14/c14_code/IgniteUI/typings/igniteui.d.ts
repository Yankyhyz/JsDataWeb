
interface DataSourceSettingsPaging {
	enabled?: boolean;
	type?: string;
	pageSize?: number;
	pageSizeUrlKey?: string;
	pageIndexUrlKey?: string;
	pageIndex?: number;
	appendPage?: boolean;
}

interface DataSourceSettingsFiltering {
	type?: string;
	caseSensitive?: boolean;
	applyToAllData?: boolean;
	customFunc?: any;
	filterExprUrlKey?: string;
	filterLogicUrlKey?: string;
	defaultFields?: any[];
	expressions?: any[];
	exprString?: string;
}

interface DataSourceSettingsSorting {
	defaultDirection?: string;
	defaultFields?: any[];
	applyToAllData?: boolean;
	customFunc?: any;
	compareFunc?: any;
	customConvertFunc?: any;
	type?: string;
	caseSensitive?: boolean;
	sortUrlKey?: string;
	sortUrlAscValueKey?: string;
	sortUrlDescValueKey?: string;
	expressions?: any[];
	exprString?: string;
}

interface DataSourceSettingsSummaries {
	type?: string;
	summaryExprUrlKey?: string;
	summariesResponseKey?: string;
	summaryExecution?: string;
	columnSettings?: any[];
}

interface DataSourceSettings {
	id?: string;
	outputResultsName?: string;
	callback?: Function;
	callee?: any;
	data?: any[];
	dataSource?: any;
	dataBinding?: any;
	dataBound?: any;
	requestType?: string;
	type?: string;
	schema?: any;
	primaryKey?: string;
	responseTotalRecCountKey?: string;
	responseDataKey?: string;
	responseDataType?: string;
	responseContentType?: string;
	localSchemaTransform?: boolean;
	urlParamsEncoding?: any;
	urlParamsEncoded?: any;
	paging?: DataSourceSettingsPaging;
	filtering?: DataSourceSettingsFiltering;
	sorting?: DataSourceSettingsSorting;
	summaries?: DataSourceSettingsSummaries;
	fields?: any[];
	serializeTransactionLog?: boolean;
	aggregateTransactions?: boolean;
	autoCommit?: boolean;
	updateUrl?: string;
	rowAdded?: Function;
	rowUpdated?: Function;
	rowInserted?: Function;
	rowDeleted?: Function;
}

declare module Infragistics {
export class DataSource  {
	constructor(settings: DataSourceSettings);
	public init(options: Object): void;
	public fields(fields: Object): Object;
	public analyzeDataSource(): string;
	public dataView(): Object;
	public data(): Object;
	public transformedData(transformedExecution: Object): Object;
	public dataSummaries(): Object;
	public schema(s: Object, t: string): void;
	public pagingSettings(p: Object): void;
	public filterSettings(f: Object): void;
	public sortSettings(s: Object): void;
	public summariesSettings(s: Object): void;
	public dataSource(ds: Object): Object;
	public type(t: Object): void;
	public findRecordByKey(key: string, ds: Object): Object;
	public removeRecordByKey(key: string, origDs: Object): void;
	public removeRecordByIndex(index: number, origDs: Object): void;
	public setCellValue(rowId: Object, colId: Object, val: Object, autoCommit: boolean): Object;
	public updateRow(rowId: Object, rowObject: Object, autoCommit: boolean): Object;
	public addRow(rowId: Object, rowObject: Object, autoCommit: boolean): Object;
	public insertRow(rowId: Object, rowObject: Object, rowIndex: boolean, autoCommit: Object): Object;
	public deleteRow(rowId: Object, autoCommit: boolean): Object;
	public addNode(data: Object): void;
	public removeNode(data: Object): void;
	public getDetachedRecord(t: Object): Object;
	public commit(id: number): void;
	public rollback(id: number): void;
	public pendingTransactions(): any[];
	public allTransactions(): any[];
	public transactionsAsString(): string;
	public saveChanges(success: Function, error: Function): void;
	public dataBind(callback: string, callee: Object): void;
	public summariesResponse(key: Object, dsObj: Object): void;
	public sort(fields: Object, direction: string, keepSortState: boolean): void;
	public clearLocalSorting(): void;
	public filter(fieldExpressions: Object, boolLogic: Object, keepFilterState: boolean, fieldExpressionsOnStrings: Object): void;
	public clearLocalFilter(): void;
	public totalRecordsCount(count: number, key: Object, dsObj: Object, context: Object): void;
	public hasTotalRecordsCount(hasCount: boolean): void;
	public metadata(key: string): Object;
	public totalLocalRecordsCount(): number;
	public pageCount(): number;
	public pageIndex(index: number): number;
	public prevPage(): void;
	public nextPage(): void;
	public pageSize(s: number): void;
	public pageSizeDirty(dirty: Object): void;
	public recordsForPage(p: number): void;
	public tableToObject(tableDOM: Element): Object;
	public stringToJSONObject(s: string): void;
	public stringToXmlObject(s: string): void;
}
}

declare module Infragistics {
export class TypeParser  {
	public toStr(obj: Object): void;
	public toDate(obj: Object, pk: Object, key: Object): void;
	public toNumber(obj: Object): void;
	public toBool(obj: Object): void;
	public isNullOrUndefined(obj: Object): void;
	public empty(): void;
	public num(): void;
}
}

interface DataSchemaSchema {
	fields?: any[];
	searchField?: string;
	outputResultsName?: string;
}

declare module Infragistics {
export class DataSchema  {
	constructor(schema: DataSchemaSchema);
	public init(type: Object, options: Object): void;
	public transform(data: Object): Object;
	public isEmpty(o: Object): Object;
	public isObjEmpty(obj: Object): Object;
	public fields(): void;
}
}

declare module Infragistics {
export class RemoteDataSource extends DataSource {
	public init(options: Object): void;
}
}

declare module Infragistics {
export class JSONDataSource extends DataSource {
	public init(options: Object): void;
}
}

interface RESTDataSourceSettingsRestSettingsCreate {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface RESTDataSourceSettingsRestSettingsUpdate {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface RESTDataSourceSettingsRestSettingsRemove {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface RESTDataSourceSettingsRestSettings {
	create?: RESTDataSourceSettingsRestSettingsCreate;
	update?: RESTDataSourceSettingsRestSettingsUpdate;
	remove?: RESTDataSourceSettingsRestSettingsRemove;
	encodeRemoveInRequestUri?: boolean;
	contentSerializer?: Function;
	contentType?: string;
}

interface RESTDataSourceSettings {
	restSettings?: RESTDataSourceSettingsRestSettings;
}

declare module Infragistics {
export class RESTDataSource extends DataSource {
	constructor(settings: RESTDataSourceSettings);
	public init(options: Object): void;
	public saveChanges(): void;
}
}

interface JSONPDataSourceSettings {
	jsonp?: string;
	jsonpCallback?: string;
}

declare module Infragistics {
export class JSONPDataSource extends DataSource {
	constructor(settings: JSONPDataSourceSettings);
	public init(options: Object): void;
}
}

declare module Infragistics {
export class XmlDataSource extends DataSource {
	public init(options: Object): void;
}
}

declare module Infragistics {
export class FunctionDataSource extends DataSource {
	public init(options: Object): void;
}
}

declare module Infragistics {
export class HtmlTableDataSource extends DataSource {
	public init(options: Object): void;
}
}

declare module Infragistics {
export class ArrayDataSource extends DataSource {
	public init(options: Object): void;
}
}

interface MashupDataSourceMashupSettings {
	ignorePartialRecords?: boolean;
	dataSource?: any[];
}

declare module Infragistics {
export class MashupDataSource extends DataSource {
	constructor(mashupSettings: MashupDataSourceMashupSettings);
	public init(options: Object): void;
	public dataBind(): void;
}
}

interface HierarchicalDataSourceSettingsPaging {
}

interface HierarchicalDataSourceSettingsSorting {
}

interface HierarchicalDataSourceSettingsFiltering {
}

interface HierarchicalDataSourceSettings {
	autogenerate?: boolean;
	initialDataBindDepth?: number;
	maxDataBindDepth?: number;
	defaultChildrenDataProperty?: string;
	callback?: any;
	callee?: any;
	data?: any[];
	dataSource?: any;
	dataBinding?: any;
	dataBound?: any;
	type?: string;
	responseDataType?: any;
	responseContentType?: any;
	localSchemaTransform?: boolean;
	urlParamsEncoding?: any;
	urlParamsEncoded?: any;
	requestType?: string;
	odata?: boolean;
	paging?: HierarchicalDataSourceSettingsPaging;
	sorting?: HierarchicalDataSourceSettingsSorting;
	filtering?: HierarchicalDataSourceSettingsFiltering;
	schema?: any[];
}

declare module Infragistics {
export class HierarchicalDataSource  {
	constructor(settings: HierarchicalDataSourceSettings);
	public init(options: Object): void;
	public dataBind(callback: Object, callee: Object): void;
	public root(): void;
	public dataAt(path: Object, keyspath: Object): void;
}
}

declare module Infragistics {
export class DvCommonWidget  {
	public init(widget: Object): void;
}
}

interface SimpleTextMarkerTemplateSettings {
	padding?: number;
	getText?: any;
	backgroundColor?: string;
	borderColor?: string;
	borderThickness?: number;
	textColor?: string;
	font?: any;
}

declare module Infragistics {
export class SimpleTextMarkerTemplate  {
	constructor(requireThis: boolean);
	constructor(settings: SimpleTextMarkerTemplateSettings);
	public init(options: Object): void;
	public getText(item: Object, textDelegate: Object): void;
	public measure(measureInfo: Object): void;
	public render(renderInfo: Object): void;
}
}

interface OlapXmlaDataSourceOptionsRequestOptions {
	withCredentials?: boolean;
	beforeSend?: Function;
}

interface OlapXmlaDataSourceOptionsMdxSettings {
	nonEmptyOnRows?: boolean;
	nonEmptyOnColumns?: boolean;
	addCalculatedMembersOnRows?: boolean;
	addCalculatedMembersOnColumns?: boolean;
	dimensionPropertiesOnRows?: any[];
	dimensionPropertiesOnColumns?: any[];
}

interface OlapXmlaDataSourceOptions {
	serverUrl?: string;
	catalog?: string;
	cube?: string;
	measureGroup?: string;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
	requestOptions?: OlapXmlaDataSourceOptionsRequestOptions;
	enableResultCache?: boolean;
	discoverProperties?: any;
	executeProperties?: any;
	mdxSettings?: OlapXmlaDataSourceOptionsMdxSettings;
}

declare module Infragistics {
export class OlapXmlaDataSource  {
	constructor(options: OlapXmlaDataSourceOptions);
	public initialize(): Object;
	public isInitialized(): boolean;
	public isModified(): boolean;
	public isUpdating(): boolean;
	public catalogs(): any[];
	public catalog(): Object;
	public setCatalog(catalogName: string): Object;
	public cubes(): any[];
	public cube(): Object;
	public setCube(cubeName: string): Object;
	public measureGroups(): any[];
	public measureGroup(): Object;
	public setMeasureGroup(measureGroupName: string): Object;
	public metadataTree(): Object;
	public addRowItem(rowItem: Object): void;
	public removeRowItem(rowItem: Object): void;
	public addColumnItem(columnItem: Object): void;
	public removeColumnItem(columnItem: Object): void;
	public addFilterItem(filterItem: Object): void;
	public removeFilterItem(filterItem: Object): void;
	public addMeasureItem(measureItem: Object): void;
	public removeMeasureItem(measureItem: Object): void;
	public setMeasureListIndex(index: number): void;
	public setMeasureListLocation(location: Object): void;
	public expandTupleMember(axisName: string, tupleIndex: number, memberIndex: number): void;
	public collapseTupleMember(axisName: string, tupleIndex: number, memberIndex: number): void;
	public rowAxis(): any[];
	public columnAxis(): any[];
	public filters(): any[];
	public measures(): any[];
	public result(): Object;
	public clearPendingChanges(): void;
	public update(): Object;
	public getCoreElement(predicate: Function, elementType: Object): Object;
	public getCoreElements(predicate: Function, elementType: Object): Object;
	public getDimension(dimensionUniqueName: string): Object;
	public getHierarchy(hierarchyUniqueName: string): Object;
	public getLevel(levelUniqueName: string): Object;
	public getMeasure(measureUniqueName: string): Object;
	public getMeasureList(): Object;
}
}

interface OlapFlatDataSourceOptionsMetadataCubeMeasuresDimensionMeasure {
	name?: string;
	caption?: string;
	aggregator?: Function;
	displayFolder?: string;
}

interface OlapFlatDataSourceOptionsMetadataCubeMeasuresDimension {
	name?: string;
	caption?: string;
	measures?: OlapFlatDataSourceOptionsMetadataCubeMeasuresDimensionMeasure[];
}

interface OlapFlatDataSourceOptionsMetadataCubeDimensionHierarchieLevel {
	name?: string;
	caption?: string;
	memberProvider?: Function;
}

interface OlapFlatDataSourceOptionsMetadataCubeDimensionHierarchie {
	name?: string;
	caption?: string;
	displayFolder?: string;
	levels?: OlapFlatDataSourceOptionsMetadataCubeDimensionHierarchieLevel[];
}

interface OlapFlatDataSourceOptionsMetadataCubeDimension {
	name?: string;
	caption?: string;
	hierarchies?: OlapFlatDataSourceOptionsMetadataCubeDimensionHierarchie[];
}

interface OlapFlatDataSourceOptionsMetadataCube {
	name?: string;
	caption?: string;
	measuresDimension?: OlapFlatDataSourceOptionsMetadataCubeMeasuresDimension;
	dimensions?: OlapFlatDataSourceOptionsMetadataCubeDimension[];
}

interface OlapFlatDataSourceOptionsMetadata {
	cube?: OlapFlatDataSourceOptionsMetadataCube;
}

interface OlapFlatDataSourceOptions {
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
	metadata?: OlapFlatDataSourceOptionsMetadata;
}

declare module Infragistics {
export class OlapFlatDataSource  {
	constructor(options: OlapFlatDataSourceOptions);
	public initialize(): Object;
	public isInitialized(): boolean;
	public isModified(): boolean;
	public isUpdating(): boolean;
	public cubes(): any[];
	public cube(): Object;
	public setCube(cubeName: string): Object;
	public metadataTree(): Object;
	public addRowItem(rowItem: Object): void;
	public removeRowItem(rowItem: Object): void;
	public addColumnItem(columnItem: Object): void;
	public removeColumnItem(columnItem: Object): void;
	public addFilterItem(filterItem: Object): void;
	public removeFilterItem(filterItem: Object): void;
	public addMeasureItem(measureItem: Object): void;
	public removeMeasureItem(measureItem: Object): void;
	public setMeasureListIndex(index: number): void;
	public setMeasureListLocation(location: Object): void;
	public expandTupleMember(axisName: string, tupleIndex: number, memberIndex: number): void;
	public collapseTupleMember(axisName: string, tupleIndex: number, memberIndex: number): void;
	public rowAxis(): any[];
	public columnAxis(): any[];
	public filters(): any[];
	public measures(): any[];
	public result(): Object;
	public clearPendingChanges(): void;
	public update(): Object;
	public getCoreElement(predicate: Function, elementType: Object): Object;
	public getCoreElements(predicate: Function, elementType: Object): Object;
	public getDimension(dimensionUniqueName: string): Object;
	public getHierarchy(hierarchyUniqueName: string): Object;
	public getLevel(levelUniqueName: string): Object;
	public getMeasure(measureUniqueName: string): Object;
	public getMeasureList(): Object;
}
}

declare module Infragistics {
export class OlapMetadataTreeItem  {
	public item(): Object;
	public type(): number;
	public caption(): string;
	public children(): Object;
}
}

interface OlapResultViewOptions {
	result?: any;
	visibleResult?: any;
	hasColumns?: boolean;
	hasRows?: boolean;
}

declare module Infragistics {
export class OlapResultView  {
	constructor(options: OlapResultViewOptions);
	public collapseTupleMember(axisName: Object, tupleIndex: Object, memberIndex: Object): Object;
	public expandTupleMember(axisName: Object, tupleIndex: Object, memberIndex: Object): Object;
	public extend(partialResult: Object, axisName: Object): Object;
}
}

interface OlapTableViewOptionsViewSettings {
	isParentInFrontForColumns?: boolean;
	isParentInFrontForRows?: boolean;
	compactColumnHeaders?: boolean;
	compactRowHeaders?: boolean;
}

interface OlapTableViewOptions {
	result?: any;
	hasColumns?: boolean;
	hasRows?: boolean;
	viewSettings?: OlapTableViewOptionsViewSettings;
}

declare module Infragistics {
export class OlapTableView  {
	constructor(options: OlapTableViewOptions);
	public initialize(): void;
	public viewSettings(): Object;
	public columnSortDirections(columnSortDirections: any[]): any[];
	public appliedColumnSortDirections(): any[];
	public levelSortDirections(levelSortDirections: any[]): any[];
	public appliedLevelSortDirections(): any[];
	public appliedSortDirectionsMap(): Object;
	public rowHeaders(): any[];
	public columnHeaders(): any[];
	public resultCells(): any[];
	public result(): Object;
}
}

declare module Infragistics {
export class OlapTableViewHeaderCell  {
	public caption(): string;
	public isExpanded(): boolean;
	public isExpanable(): boolean;
	public rowIndex(): number;
	public rowSpan(): number;
	public columnIndex(): number;
	public columnSpan(): number;
	public axisName(): string;
	public tupleIndex(): number;
	public memberIndex(): number;
}
}

declare module Infragistics {
export class OlapTableViewResultCell  {
	public value(): Object;
	public formattedValue(): string;
	public cellOrdinal(): number;
	public resultCellIndex(): number;
}
}

declare module Infragistics {
export class Catalog  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
}
}

declare module Infragistics {
export class Cube  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public cubeType(value: Object): number;
	public lastProcessed(value: Object): Object;
	public lastUpdated(value: Object): Object;
}
}

declare module Infragistics {
export class Dimension  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public dimensionType(value: Object): number;
}
}

declare module Infragistics {
export class Hierarchy  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public defaultMember(value: Object): string;
	public allMember(value: Object): string;
	public dimensionUniqueName(value: Object): string;
	public hierarchyOrigin(value: Object): number;
	public hierarchyDisplayFolder(value: Object): string;
}
}

declare module Infragistics {
export class Measure  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public measureGroupName(value: Object): string;
	public aggregatorType(value: Object): number;
	public defaultFormatString(value: Object): string;
	public measureDisplayFolder(value: Object): string;
}
}

declare module Infragistics {
export class Level  {
	public name(value: Object): string;
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public depth(value: Object): number;
	public hierarchyUniqueName(value: Object): string;
	public dimensionUniqueName(value: Object): string;
	public membersCount(value: Object): number;
	public levelOrigin(value: Object): number;
	public levelOrderingProperty(value: Object): number;
}
}

declare module Infragistics {
export class MeasureGroup  {
	public name(value: Object): string;
	public caption(value: Object): string;
	public description(value: Object): string;
	public catalogName(value: Object): string;
	public cubeName(value: Object): string;
}
}

declare module Infragistics {
export class MeasureList  {
	public caption(value: Object): string;
	public measures(value: Object): any[];
}
}

declare module Infragistics {
export class OlapResult  {
	public isEmpty(value: Object): boolean;
	public axes(value: Object): any[];
	public cells(value: Object): any[];
}
}

interface OlapResultAxisOptions {
	tuples?: any[];
	tupleSize?: number;
}

declare module Infragistics {
export class OlapResultAxis  {
	constructor(options: OlapResultAxisOptions);
	public tuples(): any[];
	public tupleSize(): number;
}
}

interface OlapResultTupleOptions {
	members?: any[];
}

declare module Infragistics {
export class OlapResultTuple  {
	constructor(options: OlapResultTupleOptions);
	public members(): any[];
}
}

declare module Infragistics {
export class OlapResultAxisMember  {
	public uniqueName(value: Object): string;
	public caption(value: Object): string;
	public levelUniqueName(value: Object): string;
	public hierarchyUniqueName(value: Object): string;
	public levelNumber(value: Object): number;
	public displayInfo(value: Object): number;
	public childCount(value: Object): number;
	public drilledDown(value: Object): boolean;
	public parentSameAsPrev(value: Object): boolean;
	public properties(value: Object): Object;
}
}

declare module Infragistics {
export class OlapResultCell  {
	public cellOrdinal(value: Object): number;
	public properties(value: Object): Object;
}
}

interface IgTemplatingRegExp {
}

declare module Infragistics {
export class igTemplating  {
	constructor(regExp: IgTemplatingRegExp);
	public tmpl(template: string, data: Object, args: any[]): string;
	public clearTmplCache(): void;
	public encode(value: string): string;
}
}

interface DataBindingEvent {
	(event: Event, ui: DataBindingEventUIParam): void;
}

interface DataBindingEventUIParam {
}

interface DataBoundEvent {
	(event: Event, ui: DataBoundEventUIParam): void;
}

interface DataBoundEventUIParam {
}

interface UpdateTooltipEvent {
	(event: Event, ui: UpdateTooltipEventUIParam): void;
}

interface UpdateTooltipEventUIParam {
}

interface HideTooltipEvent {
	(event: Event, ui: HideTooltipEventUIParam): void;
}

interface HideTooltipEventUIParam {
}

interface IgBaseChart {
	width?: number;
	height?: number;
	tooltipTemplate?: string;
	maxRecCount?: number;
	dataSource?: any;
	dataSourceType?: string;
	dataSourceUrl?: string;
	responseTotalRecCountKey?: string;
	responseDataKey?: string;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	updateTooltip?: UpdateTooltipEvent;
	hideTooltip?: HideTooltipEvent;
}

interface JQuery {
	igBaseChart(options: IgBaseChart): JQuery;
	igBaseChart(optionLiteral: string, options: IgBaseChart): JQuery;
	igBaseChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igBaseChart(optionLiteral: string, optionName: string): any;
	igBaseChart(methodName: string): any;
}
interface IgDataChartCrosshairPoint {
	x?: number;
	y?: number;
}

interface IgDataChartLegend {
	element?: string;
	type?: string;
	width?: string;
	height?: string;
}

interface IgDataChartAxes {
	type?: string;
	name?: string;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	remove?: boolean;
	labelLocation?: string;
	labelVisibility?: string;
	labelExtent?: number;
	labelAngle?: number;
	labelTextStyle?: string;
	labelTextColor?: string;
	formatLabel?: any;
	stroke?: string;
	strokeThickness?: number;
	strip?: string;
	majorStroke?: string;
	majorStrokeThickness?: number;
	minorStroke?: string;
	minorStrokeThickness?: number;
	isInverted?: boolean;
	crossingAxis?: string;
	crossingValue?: any;
	coercionMethods?: any;
	label?: any;
	gap?: number;
	overlap?: number;
	startAngleOffset?: number;
	interval?: number;
	displayType?: string;
	minimumValue?: number;
	maximumValue?: number;
	dateTimeMemberPath?: string;
	referenceValue?: number;
	isLogarithmic?: boolean;
	logarithmBase?: number;
	radiusExtentScale?: number;
	innerRadiusExtentScale?: number;
	title?: string;
	titleTextStyle?: string;
	titleMargin?: number;
	titleHorizontalAlignment?: string;
	titleVerticalAlignment?: string;
	titlePosition?: string;
	titleTopMargin?: number;
	titleLeftMargin?: number;
	titleRightMargin?: number;
	titleBottomMargin?: number;
	labelHorizontalAlignment?: string;
	labelVerticalAlignment?: string;
	labelMargin?: number;
	labelTopMargin?: number;
	labelLeftMargin?: number;
	labelRightMargin?: number;
	labelBottomMargin?: number;
	showFirstLabel?: boolean;
	titleAngle?: number;
	tickLength?: number;
	tickStrokeThickness?: number;
	tickStroke?: any;
	useClusteringMode?: boolean;
}

interface IgDataChartSeriesLegend {
	element?: string;
	type?: string;
	width?: string;
	height?: string;
}

interface IgDataChartSeries {
	type?: string;
	name?: string;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	remove?: boolean;
	showTooltip?: boolean;
	tooltipTemplate?: string;
	legend?: IgDataChartSeriesLegend;
	legendItemVisibility?: string;
	legendItemBadgeTemplate?: any;
	legendItemTemplate?: any;
	discreteLegendItemTemplate?: any;
	transitionDuration?: number;
	transitionEasingFunction?: any;
	resolution?: number;
	title?: string;
	brush?: string;
	outline?: string;
	thickness?: number;
	coercionMethods?: any;
	markerType?: string;
	markerTemplate?: any;
	markerBrush?: string;
	markerOutline?: string;
	xAxis?: string;
	yAxis?: string;
	xMemberPath?: string;
	yMemberPath?: string;
	trendLineType?: string;
	trendLineBrush?: string;
	trendLineThickness?: number;
	trendLinePeriod?: number;
	trendLineZIndex?: number;
	maximumMarkers?: number;
	unknownValuePlotting?: string;
	radiusMemberPath?: string;
	radiusScale?: any;
	labelMemberPath?: string;
	fillMemberPath?: string;
	fillScale?: any;
	angleAxis?: string;
	valueAxis?: string;
	clipSeriesToBounds?: boolean;
	valueMemberPath?: string;
	radiusX?: number;
	radiusY?: number;
	angleMemberPath?: number;
	radiusAxis?: string;
	useCartesianInterpolation?: boolean;
	negativeBrush?: string;
	splineType?: string;
	lowMemberPath?: string;
	highMemberPath?: string;
	openMemberPath?: string;
	closeMemberPath?: string;
	volumeMemberPath?: string;
	displayType?: string;
	ignoreFirst?: number;
	period?: number;
	shortPeriod?: number;
	longPeriod?: number;
	markerCollisionAvoidance?: string;
	useHighMarkerFidelity?: boolean;
	useBruteForce?: boolean;
	progressiveLoad?: boolean;
	mouseOverEnabled?: boolean;
	useSquareCutoffStyle?: boolean;
	heatMinimum?: number;
	heatMaximum?: number;
	heatMinimumColor?: any;
	heatMaximumColor?: any;
	series?: any[];
	isDropShadowEnabled?: boolean;
	useSingleShadow?: boolean;
	shadowColor?: any;
	shadowBlur?: number;
	shadowOffsetX?: number;
	shadowOffsetY?: number;
	isTransitionInEnabled?: boolean;
	transitionInSpeedType?: string;
	transitionInMode?: string;
	transitionInDuration?: number;
	radius?: number;
	areaFillOpacity?: number;
	expectFunctions?: boolean;
	useInterpolation?: boolean;
	skipUnknownValues?: boolean;
	verticalLineVisibility?: boolean;
	horizontalLineVisibility?: boolean;
	targetSeries?: string;
	targetAxis?: string;
	isCustomCategoryStyleAllowed?: boolean;
	isCustomCategoryMarkerStyleAllowed?: boolean;
	isHighlightingEnabled?: boolean;
	bandHighlightWidth?: number;
	highlightType?: string;
	tooltipPosition?: string;
	cursorPosition?: any;
	isDefaultCrosshairDisabled?: boolean;
	useIndex?: boolean;
	useLegend?: boolean;
}

interface TooltipShowingEvent {
	(event: Event, ui: TooltipShowingEventUIParam): void;
}

interface TooltipShowingEventUIParam {
}

interface TooltipShownEvent {
	(event: Event, ui: TooltipShownEventUIParam): void;
}

interface TooltipShownEventUIParam {
}

interface TooltipHidingEvent {
	(event: Event, ui: TooltipHidingEventUIParam): void;
}

interface TooltipHidingEventUIParam {
}

interface TooltipHiddenEvent {
	(event: Event, ui: TooltipHiddenEventUIParam): void;
}

interface TooltipHiddenEventUIParam {
}

interface BrowserNotSupportedEvent {
	(event: Event, ui: BrowserNotSupportedEventUIParam): void;
}

interface BrowserNotSupportedEventUIParam {
}

interface SeriesCursorMouseMoveEvent {
	(event: Event, ui: SeriesCursorMouseMoveEventUIParam): void;
}

interface SeriesCursorMouseMoveEventUIParam {
}

interface SeriesMouseLeftButtonDownEvent {
	(event: Event, ui: SeriesMouseLeftButtonDownEventUIParam): void;
}

interface SeriesMouseLeftButtonDownEventUIParam {
}

interface SeriesMouseLeftButtonUpEvent {
	(event: Event, ui: SeriesMouseLeftButtonUpEventUIParam): void;
}

interface SeriesMouseLeftButtonUpEventUIParam {
}

interface SeriesMouseMoveEvent {
	(event: Event, ui: SeriesMouseMoveEventUIParam): void;
}

interface SeriesMouseMoveEventUIParam {
}

interface SeriesMouseEnterEvent {
	(event: Event, ui: SeriesMouseEnterEventUIParam): void;
}

interface SeriesMouseEnterEventUIParam {
}

interface SeriesMouseLeaveEvent {
	(event: Event, ui: SeriesMouseLeaveEventUIParam): void;
}

interface SeriesMouseLeaveEventUIParam {
}

interface WindowRectChangedEvent {
	(event: Event, ui: WindowRectChangedEventUIParam): void;
}

interface WindowRectChangedEventUIParam {
}

interface GridAreaRectChangedEvent {
	(event: Event, ui: GridAreaRectChangedEventUIParam): void;
}

interface GridAreaRectChangedEventUIParam {
}

interface RefreshCompletedEvent {
	(event: Event, ui: RefreshCompletedEventUIParam): void;
}

interface RefreshCompletedEventUIParam {
}

interface AxisRangeChangedEvent {
	(event: Event, ui: AxisRangeChangedEventUIParam): void;
}

interface AxisRangeChangedEventUIParam {
}

interface TypicalBasedOnEvent {
	(event: Event, ui: TypicalBasedOnEventUIParam): void;
}

interface TypicalBasedOnEventUIParam {
}

interface ProgressiveLoadStatusChangedEvent {
	(event: Event, ui: ProgressiveLoadStatusChangedEventUIParam): void;
}

interface ProgressiveLoadStatusChangedEventUIParam {
}

interface AssigningCategoryStyleEvent {
	(event: Event, ui: AssigningCategoryStyleEventUIParam): void;
}

interface AssigningCategoryStyleEventUIParam {
}

interface AssigningCategoryMarkerStyleEvent {
	(event: Event, ui: AssigningCategoryMarkerStyleEventUIParam): void;
}

interface AssigningCategoryMarkerStyleEventUIParam {
}

interface IgDataChart {
	syncChannel?: string;
	synchronizeVertically?: boolean;
	syncrhonizeHorizontally?: boolean;
	crosshairPoint?: IgDataChartCrosshairPoint;
	windowRect?: any;
	horizontalZoomable?: boolean;
	verticalZoomable?: boolean;
	windowResponse?: string;
	windowRectMinWidth?: number;
	overviewPlusDetailPaneVisibility?: string;
	crosshairVisibility?: string;
	plotAreaBackground?: string;
	defaultInteraction?: string;
	dragModifier?: string;
	panModifier?: string;
	previewRect?: any;
	windowPositionHorizontal?: number;
	windowPositionVertical?: number;
	windowScaleHorizontal?: number;
	windowScaleVertical?: number;
	circleMarkerTemplate?: any;
	triangleMarkerTemplate?: any;
	pyramidMarkerTemplate?: any;
	squareMarkerTemplate?: any;
	diamondMarkerTemplate?: any;
	pentagonMarkerTemplate?: any;
	hexagonMarkerTemplate?: any;
	tetragramMarkerTemplate?: any;
	pentagramMarkerTemplate?: any;
	hexagramMarkerTemplate?: any;
	topMargin?: number;
	leftMargin?: number;
	rightMargin?: number;
	bottomMargin?: number;
	autoMarginWidth?: number;
	autoMarginHeight?: number;
	isSquare?: boolean;
	gridMode?: string;
	brushes?: any;
	markerBrushes?: any;
	outlines?: any;
	markerOutlines?: any;
	width?: number;
	height?: number;
	size?: any;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	isSurfaceInteractionDisabled?: boolean;
	animateSeriesWhenAxisRangeChanges?: boolean;
	title?: string;
	subtitle?: string;
	titleTextStyle?: string;
	titleTopMargin?: number;
	titleLeftMargin?: number;
	titleRightMargin?: number;
	titleBottomMargin?: number;
	subtitleTextStyle?: string;
	subtitleTopMargin?: number;
	subtitleLeftMargin?: number;
	subtitleRightMargin?: number;
	subtitleBottomMargin?: number;
	titleTextColor?: any;
	subtitleTextColor?: any;
	titleHorizontalAlignment?: string;
	subtitleHorizontalAlignment?: string;
	highlightingTransitionDuration?: number;
	legend?: IgDataChartLegend;
	axes?: IgDataChartAxes[];
	series?: IgDataChartSeries[];
	theme?: string;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
	seriesCursorMouseMove?: SeriesCursorMouseMoveEvent;
	seriesMouseLeftButtonDown?: SeriesMouseLeftButtonDownEvent;
	seriesMouseLeftButtonUp?: SeriesMouseLeftButtonUpEvent;
	seriesMouseMove?: SeriesMouseMoveEvent;
	seriesMouseEnter?: SeriesMouseEnterEvent;
	seriesMouseLeave?: SeriesMouseLeaveEvent;
	windowRectChanged?: WindowRectChangedEvent;
	gridAreaRectChanged?: GridAreaRectChangedEvent;
	refreshCompleted?: RefreshCompletedEvent;
	axisRangeChanged?: AxisRangeChangedEvent;
	typicalBasedOn?: TypicalBasedOnEvent;
	progressiveLoadStatusChanged?: ProgressiveLoadStatusChangedEvent;
	assigningCategoryStyle?: AssigningCategoryStyleEvent;
	assigningCategoryMarkerStyle?: AssigningCategoryMarkerStyleEvent;
}

interface IgPieChartLegend {
	element?: string;
	type?: string;
	width?: number;
	height?: number;
}

interface SliceClickEvent {
	(event: Event, ui: SliceClickEventUIParam): void;
}

interface SliceClickEventUIParam {
}

interface IgPieChart {
	width?: number;
	height?: number;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	valueMemberPath?: string;
	labelMemberPath?: string;
	labelsPosition?: string;
	leaderLineVisibility?: string;
	leaderLineType?: string;
	leaderLineMargin?: number;
	othersCategoryThreshold?: number;
	formatLabel?: Function;
	othersCategoryStyle?: any;
	othersCategoryType?: string;
	othersCategoryText?: string;
	explodedRadius?: number;
	radiusFactor?: number;
	allowSliceSelection?: boolean;
	allowSliceExplosion?: boolean;
	explodedSlices?: any[];
	showTooltip?: boolean;
	tooltipTemplate?: string;
	legend?: IgPieChartLegend;
	labelExtent?: number;
	startAngle?: number;
	sweepDirection?: string;
	selectedStyle?: any;
	brushes?: any;
	outlines?: any;
	legendItemTemplate?: any;
	legendItemBadgeTemplate?: any;
	textStyle?: string;
	theme?: string;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
	sliceClick?: SliceClickEvent;
}

interface JQuery {
	igDataChart(options: IgDataChart): JQuery;
	igDataChart(optionLiteral: string, options: IgDataChart): JQuery;
	igDataChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDataChart(optionLiteral: string, optionName: string): any;
	igDataChart(methodName: string): any;
}
interface JQuery {
	igPieChart(options: IgPieChart): JQuery;
	igPieChart(optionLiteral: string, options: IgPieChart): JQuery;
	igPieChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPieChart(optionLiteral: string, optionName: string): any;
	igPieChart(methodName: string): any;
}
interface LegendItemMouseLeftButtonDownEvent {
	(event: Event, ui: LegendItemMouseLeftButtonDownEventUIParam): void;
}

interface LegendItemMouseLeftButtonDownEventUIParam {
}

interface LegendItemMouseLeftButtonUpEvent {
	(event: Event, ui: LegendItemMouseLeftButtonUpEventUIParam): void;
}

interface LegendItemMouseLeftButtonUpEventUIParam {
}

interface LegendItemMouseEnterEvent {
	(event: Event, ui: LegendItemMouseEnterEventUIParam): void;
}

interface LegendItemMouseEnterEventUIParam {
}

interface LegendItemMouseLeaveEvent {
	(event: Event, ui: LegendItemMouseLeaveEventUIParam): void;
}

interface LegendItemMouseLeaveEventUIParam {
}

interface IgChartLegend {
	type?: string;
	width?: number;
	height?: number;
	theme?: string;
	legendItemMouseLeftButtonDown?: LegendItemMouseLeftButtonDownEvent;
	legendItemMouseLeftButtonUp?: LegendItemMouseLeftButtonUpEvent;
	legendItemMouseEnter?: LegendItemMouseEnterEvent;
	legendItemMouseLeave?: LegendItemMouseLeaveEvent;
}

interface JQuery {
	igChartLegend(options: IgChartLegend): JQuery;
	igChartLegend(optionLiteral: string, options: IgChartLegend): JQuery;
	igChartLegend(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igChartLegend(optionLiteral: string, optionName: string): any;
	igChartLegend(methodName: string): any;
}
interface IgComboSelectedItem {
	index?: number;
	value?: any;
	text?: string;
}

interface IgComboLoadOnDemandSettings {
	enabled?: boolean;
	pageSize?: number;
}

interface DropDownOpeningEvent {
	(event: Event, ui: DropDownOpeningEventUIParam): void;
}

interface DropDownOpeningEventUIParam {
}

interface DropDownOpenedEvent {
	(event: Event, ui: DropDownOpenedEventUIParam): void;
}

interface DropDownOpenedEventUIParam {
}

interface DropDownClosingEvent {
	(event: Event, ui: DropDownClosingEventUIParam): void;
}

interface DropDownClosingEventUIParam {
}

interface DropDownClosedEvent {
	(event: Event, ui: DropDownClosedEventUIParam): void;
}

interface DropDownClosedEventUIParam {
}

interface TextChangedEvent {
	(event: Event, ui: TextChangedEventUIParam): void;
}

interface TextChangedEventUIParam {
}

interface SelectionChangingEvent {
	(event: Event, ui: SelectionChangingEventUIParam): void;
}

interface SelectionChangingEventUIParam {
}

interface SelectionChangedEvent {
	(event: Event, ui: SelectionChangedEventUIParam): void;
}

interface SelectionChangedEventUIParam {
}

interface ActiveItemChangingEvent {
	(event: Event, ui: ActiveItemChangingEventUIParam): void;
}

interface ActiveItemChangingEventUIParam {
}

interface ActiveItemChangedEvent {
	(event: Event, ui: ActiveItemChangedEventUIParam): void;
}

interface ActiveItemChangedEventUIParam {
}

interface NoMatchFoundEvent {
	(event: Event, ui: NoMatchFoundEventUIParam): void;
}

interface NoMatchFoundEventUIParam {
}

interface FilteringEvent {
	(event: Event, ui: FilteringEventUIParam): void;
}

interface FilteringEventUIParam {
}

interface FilteredEvent {
	(event: Event, ui: FilteredEventUIParam): void;
}

interface FilteredEventUIParam {
}

interface IgCombo {
	height?: string;
	width?: string;
	tabIndex?: number;
	animationShowDuration?: number;
	animationHideDuration?: number;
	enableDisplayBlock?: boolean;
	mode?: string;
	dropDownOnFocus?: boolean;
	renderMatchItems?: string;
	caseSensitive?: boolean;
	filteringCondition?: string;
	filteringType?: string;
	filterExprUrlKey?: string;
	autoComplete?: boolean;
	format?: string;
	selectedItems?: IgComboSelectedItem[];
	multiSelection?: string;
	enableActiveItem?: boolean;
	allowCustomValue?: boolean;
	clearSelectionOnBlur?: boolean;
	selectItemBySpaceKey?: boolean;
	itemSeparator?: string;
	dropDownWidth?: number;
	dropDownMaxHeight?: number;
	dropDownMinHeight?: number;
	dropDownAsChild?: boolean;
	virtualization?: boolean;
	showDropDownButton?: boolean;
	enableClearButton?: boolean;
	noMatchFoundText?: string;
	dropDownButtonTitle?: string;
	clearButtonTitle?: string;
	text?: string;
	itemTemplate?: string;
	headerTemplate?: string;
	footerTemplate?: string;
	nullText?: string;
	dataSource?: any;
	dataSourceType?: string;
	dataSourceUrl?: string;
	responseTotalRecCountKey?: string;
	responseDataKey?: string;
	responseContentType?: string;
	requestType?: string;
	validatorOptions?: any;
	inputName?: string;
	loadOnDemandSettings?: IgComboLoadOnDemandSettings;
	dataBindOnOpen?: boolean;
	closeDropDownOnSelect?: boolean;
	closeDropDownOnBlur?: boolean;
	valueKeyType?: string;
	textKeyType?: string;
	valueKey?: string;
	textKey?: string;
	parentCombo?: string;
	cascadingDataSources?: any;
	parentComboKey?: string;
	dropDownOpening?: DropDownOpeningEvent;
	dropDownOpened?: DropDownOpenedEvent;
	dropDownClosing?: DropDownClosingEvent;
	dropDownClosed?: DropDownClosedEvent;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	textChanged?: TextChangedEvent;
	selectionChanging?: SelectionChangingEvent;
	selectionChanged?: SelectionChangedEvent;
	activeItemChanging?: ActiveItemChangingEvent;
	activeItemChanged?: ActiveItemChangedEvent;
	noMatchFound?: NoMatchFoundEvent;
	filtering?: FilteringEvent;
	filtered?: FilteredEvent;
}

interface JQuery {
	igCombo(options: IgCombo): JQuery;
	igCombo(optionLiteral: string, options: IgCombo): JQuery;
	igCombo(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igCombo(optionLiteral: string, optionName: string): any;
	igCombo(methodName: string): any;
}
interface StateChangingEvent {
	(event: Event, ui: StateChangingEventUIParam): void;
}

interface StateChangingEventUIParam {
}

interface StateChangedEvent {
	(event: Event, ui: StateChangedEventUIParam): void;
}

interface StateChangedEventUIParam {
}

interface AnimationEndedEvent {
	(event: Event, ui: AnimationEndedEventUIParam): void;
}

interface AnimationEndedEventUIParam {
}

interface FocusEvent {
	(event: Event, ui: FocusEventUIParam): void;
}

interface FocusEventUIParam {
}

interface BlurEvent {
	(event: Event, ui: BlurEventUIParam): void;
}

interface BlurEventUIParam {
}

interface IgDialog {
	mainElement?: Element;
	state?: string;
	pinned?: boolean;
	closeOnEscape?: boolean;
	showCloseButton?: boolean;
	showMaximizeButton?: boolean;
	showMinimizeButton?: boolean;
	showPinButton?: boolean;
	pinOnMinimized?: boolean;
	imageClass?: string;
	headerText?: string;
	showHeader?: boolean;
	showFooter?: boolean;
	footerText?: string;
	dialogClass?: string;
	container?: any;
	height?: number;
	width?: number;
	minHeight?: number;
	minWidth?: number;
	maxHeight?: number;
	maxWidth?: number;
	draggable?: boolean;
	position?: any;
	resizable?: boolean;
	tabIndex?: number;
	openAnimation?: any;
	closeAnimation?: any;
	zIndex?: number;
	modal?: boolean;
	trackFocus?: boolean;
	closeButtonTitle?: string;
	minimizeButtonTitle?: string;
	maximizeButtonTitle?: string;
	pinButtonTitle?: string;
	unpinButtonTitle?: string;
	restoreButtonTitle?: string;
	temporaryUrl?: string;
	enableHeaderFocus?: boolean;
	enableDblclick?: string;
	stateChanging?: StateChangingEvent;
	stateChanged?: StateChangedEvent;
	animationEnded?: AnimationEndedEvent;
	focus?: FocusEvent;
	blur?: BlurEvent;
}

interface JQuery {
	igDialog(options: IgDialog): JQuery;
	igDialog(optionLiteral: string, options: IgDialog): JQuery;
	igDialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDialog(optionLiteral: string, optionName: string): any;
	igDialog(methodName: string): any;
}
interface IgDoughnutChartSeries {
	type?: string;
	showTooltip?: boolean;
	tooltipTemplate?: string;
	itemsSource?: any;
	valueMemberPath?: string;
	labelMemberPath?: string;
	labelsPosition?: string;
	leaderLineVisibility?: string;
	leaderLineStyle?: any;
	leaderLineType?: string;
	leaderLineMargin?: number;
	othersCategoryThreshold?: number;
	othersCategoryType?: string;
	othersCategoryText?: string;
	legend?: any;
	formatLabel?: any;
	labelExtent?: number;
	startAngle?: number;
	selectedStyle?: any;
	brushes?: any;
	outlines?: any;
	isSurfaceInteractionDisabled?: boolean;
	radiusFactor?: number;
}

interface HoleDimensionsChangedEvent {
	(event: Event, ui: HoleDimensionsChangedEventUIParam): void;
}

interface HoleDimensionsChangedEventUIParam {
}

interface IgDoughnutChart {
	series?: IgDoughnutChartSeries[];
	allowSliceSelection?: boolean;
	isSurfaceInteractionDisabled?: boolean;
	allowSliceExplosion?: boolean;
	innerExtent?: number;
	selectedStyle?: any;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
	sliceClick?: SliceClickEvent;
	holeDimensionsChanged?: HoleDimensionsChangedEvent;
}

interface JQuery {
	igDoughnutChart(options: IgDoughnutChart): JQuery;
	igDoughnutChart(optionLiteral: string, options: IgDoughnutChart): JQuery;
	igDoughnutChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDoughnutChart(optionLiteral: string, optionName: string): any;
	igDoughnutChart(methodName: string): any;
}
interface KeydownEvent {
	(event: Event, ui: KeydownEventUIParam): void;
}

interface KeydownEventUIParam {
}

interface KeypressEvent {
	(event: Event, ui: KeypressEventUIParam): void;
}

interface KeypressEventUIParam {
}

interface KeyupEvent {
	(event: Event, ui: KeyupEventUIParam): void;
}

interface KeyupEventUIParam {
}

interface MousedownEvent {
	(event: Event, ui: MousedownEventUIParam): void;
}

interface MousedownEventUIParam {
}

interface MouseupEvent {
	(event: Event, ui: MouseupEventUIParam): void;
}

interface MouseupEventUIParam {
}

interface MousemoveEvent {
	(event: Event, ui: MousemoveEventUIParam): void;
}

interface MousemoveEventUIParam {
}

interface MouseoverEvent {
	(event: Event, ui: MouseoverEventUIParam): void;
}

interface MouseoverEventUIParam {
}

interface MouseleaveEvent {
	(event: Event, ui: MouseleaveEventUIParam): void;
}

interface MouseleaveEventUIParam {
}

interface ValueChangingEvent {
	(event: Event, ui: ValueChangingEventUIParam): void;
}

interface ValueChangingEventUIParam {
}

interface ValueChangedEvent {
	(event: Event, ui: ValueChangedEventUIParam): void;
}

interface ValueChangedEventUIParam {
}

interface InvalidValueEvent {
	(event: Event, ui: InvalidValueEventUIParam): void;
}

interface InvalidValueEventUIParam {
}

interface SpinEvent {
	(event: Event, ui: SpinEventUIParam): void;
}

interface SpinEventUIParam {
}

interface ButtonClickEvent {
	(event: Event, ui: ButtonClickEventUIParam): void;
}

interface ButtonClickEventUIParam {
}

interface ShowDropDownEvent {
	(event: Event, ui: ShowDropDownEventUIParam): void;
}

interface ShowDropDownEventUIParam {
}

interface HideDropDownEvent {
	(event: Event, ui: HideDropDownEventUIParam): void;
}

interface HideDropDownEventUIParam {
}

interface ListSelectingEvent {
	(event: Event, ui: ListSelectingEventUIParam): void;
}

interface ListSelectingEventUIParam {
}

interface ListSelectedEvent {
	(event: Event, ui: ListSelectedEventUIParam): void;
}

interface ListSelectedEventUIParam {
}

interface IgEditor {
	value?: any;
	tabIndex?: number;
	nullText?: string;
	button?: string;
	textAlign?: string;
	listItems?: any[];
	theme?: string;
	type?: string;
	locale?: any;
	width?: number;
	height?: number;
	validatorOptions?: any;
	required?: boolean;
	display?: string;
	renderInContainer?: boolean;
	selectionOnFocus?: string;
	readOnly?: boolean;
	spinOnReadOnly?: boolean;
	focusOnSpin?: boolean;
	spinWrapAround?: boolean;
	hideEnterKey?: boolean;
	dropDownOnReadOnly?: boolean;
	dropDownTriggers?: string;
	listDropDownAsChild?: boolean;
	listWidth?: number;
	listMaxHeight?: number;
	listColumns?: number;
	animationShowDuration?: number;
	animationHideDuration?: number;
	inputName?: string;
	keydown?: KeydownEvent;
	keypress?: KeypressEvent;
	keyup?: KeyupEvent;
	mousedown?: MousedownEvent;
	mouseup?: MouseupEvent;
	mousemove?: MousemoveEvent;
	mouseover?: MouseoverEvent;
	mouseleave?: MouseleaveEvent;
	focus?: FocusEvent;
	blur?: BlurEvent;
	valueChanging?: ValueChangingEvent;
	valueChanged?: ValueChangedEvent;
	textChanged?: TextChangedEvent;
	invalidValue?: InvalidValueEvent;
	spin?: SpinEvent;
	buttonClick?: ButtonClickEvent;
	showDropDown?: ShowDropDownEvent;
	hideDropDown?: HideDropDownEvent;
	listSelecting?: ListSelectingEvent;
	listSelected?: ListSelectedEvent;
}

interface IgTextEditor {
	textMode?: string;
	maxLength?: number;
	includeKeys?: string;
	excludeKeys?: string;
	toUpper?: boolean;
	toLower?: boolean;
	listMatchIgnoreCase?: boolean;
	listMatchOnly?: boolean;
	listMatchContains?: boolean;
	listAutoComplete?: boolean;
}

interface IgMaskEditor {
	includeKeys?: string;
	excludeKeys?: string;
	toUpper?: boolean;
	toLower?: boolean;
	listMatchIgnoreCase?: boolean;
	listMatchOnly?: boolean;
	listMatchContains?: boolean;
	listAutoComplete?: boolean;
	inputMask?: string;
	promptChar?: string;
	padChar?: string;
	emptyChar?: string;
	dataMode?: string;
	hideMaskOnFocus?: boolean;
}

interface IgDateEditor {
	regional?: any;
	spin1Field?: boolean;
	minValue?: Object;
	maxValue?: Object;
	dateDisplayFormat?: string;
	dateInputFormat?: string;
	promptChar?: string;
	dataMode?: string;
	minNumberOfDateFields?: number;
	useLastGoodDate?: boolean;
	reduceDayOfInvalidDate?: boolean;
	hideMaskOnFocus?: boolean;
	centuryThreshold?: number;
	enableUTCDates?: boolean;
	spinDelta?: number;
	nullable?: boolean;
	yearShift?: number;
}

interface IgDatePicker {
	button?: string;
	focusOnDropDownOpen?: boolean;
	datepickerOptions?: any;
}

interface IgNumericEditor {
	regional?: any;
	negativePattern?: string;
	negativeSign?: string;
	decimalSeparator?: string;
	groupSeparator?: string;
	groups?: any;
	maxDecimals?: number;
	minDecimals?: number;
	minValue?: number;
	maxValue?: number;
	scientificFormat?: string;
	nullValue?: number;
	spinDelta?: number;
	nullable?: boolean;
	maxLength?: number;
	dataMode?: string;
}

interface IgCurrencyEditor {
	positivePattern?: string;
	negativePattern?: string;
	symbol?: string;
}

interface IgPercentEditor {
	positivePattern?: string;
	negativePattern?: string;
	symbol?: string;
	displayFactor?: number;
}

interface JQuery {
	igEditor(options: IgEditor): JQuery;
	igEditor(optionLiteral: string, options: IgEditor): JQuery;
	igEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igEditor(optionLiteral: string, optionName: string): any;
	igEditor(methodName: string): any;
}
interface JQuery {
	igTextEditor(options: IgTextEditor): JQuery;
	igTextEditor(optionLiteral: string, options: IgTextEditor): JQuery;
	igTextEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTextEditor(optionLiteral: string, optionName: string): any;
	igTextEditor(methodName: string): any;
}
interface JQuery {
	igMaskEditor(options: IgMaskEditor): JQuery;
	igMaskEditor(optionLiteral: string, options: IgMaskEditor): JQuery;
	igMaskEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igMaskEditor(optionLiteral: string, optionName: string): any;
	igMaskEditor(methodName: string): any;
}
interface JQuery {
	igDateEditor(options: IgDateEditor): JQuery;
	igDateEditor(optionLiteral: string, options: IgDateEditor): JQuery;
	igDateEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDateEditor(optionLiteral: string, optionName: string): any;
	igDateEditor(methodName: string): any;
}
interface JQuery {
	igDatePicker(options: IgDatePicker): JQuery;
	igDatePicker(optionLiteral: string, options: IgDatePicker): JQuery;
	igDatePicker(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igDatePicker(optionLiteral: string, optionName: string): any;
	igDatePicker(methodName: string): any;
}
interface JQuery {
	igNumericEditor(options: IgNumericEditor): JQuery;
	igNumericEditor(optionLiteral: string, options: IgNumericEditor): JQuery;
	igNumericEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igNumericEditor(optionLiteral: string, optionName: string): any;
	igNumericEditor(methodName: string): any;
}
interface JQuery {
	igCurrencyEditor(options: IgCurrencyEditor): JQuery;
	igCurrencyEditor(optionLiteral: string, options: IgCurrencyEditor): JQuery;
	igCurrencyEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igCurrencyEditor(optionLiteral: string, optionName: string): any;
	igCurrencyEditor(methodName: string): any;
}
interface JQuery {
	igPercentEditor(options: IgPercentEditor): JQuery;
	igPercentEditor(optionLiteral: string, options: IgPercentEditor): JQuery;
	igPercentEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPercentEditor(optionLiteral: string, optionName: string): any;
	igPercentEditor(methodName: string): any;
}
interface SliceClickedEvent {
	(event: Event, ui: SliceClickedEventUIParam): void;
}

interface SliceClickedEventUIParam {
}

interface IgFunnelChart {
	bezierPoints?: string;
	legend?: any;
	valueMemberPath?: string;
	brushes?: any;
	outlines?: any;
	bottomEdgeWidth?: number;
	innerLabelMemberPath?: string;
	outerLabelMemberPath?: string;
	innerLabelVisibility?: string;
	outerLabelVisibility?: string;
	outerLabelAlignment?: string;
	funnelSliceDisplay?: string;
	formatInnerLabel?: any;
	formatOuterLabel?: any;
	transitionDuration?: number;
	isInverted?: boolean;
	useBezierCurve?: boolean;
	allowSliceSelection?: boolean;
	useUnselectedStyle?: boolean;
	selectedSliceStyle?: any;
	unselectedSliceStyle?: any;
	useOuterLabelsForLegend?: boolean;
	outlineThickness?: number;
	sliceClicked?: SliceClickedEvent;
}

interface JQuery {
	igFunnelChart(options: IgFunnelChart): JQuery;
	igFunnelChart(optionLiteral: string, options: IgFunnelChart): JQuery;
	igFunnelChart(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igFunnelChart(optionLiteral: string, optionName: string): any;
	igFunnelChart(methodName: string): any;
}
interface CellsMergingEvent {
	(event: Event, ui: CellsMergingEventUIParam): void;
}

interface CellsMergingEventUIParam {
}

interface CellsMergedEvent {
	(event: Event, ui: CellsMergedEventUIParam): void;
}

interface CellsMergedEventUIParam {
}

interface IgGridCellMerging {
	initialState?: string;
	cellsMerging?: CellsMergingEvent;
	cellsMerged?: CellsMergedEvent;
}

interface JQuery {
	igGridCellMerging(options: IgGridCellMerging): JQuery;
	igGridCellMerging(optionLiteral: string, options: IgGridCellMerging): JQuery;
	igGridCellMerging(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridCellMerging(optionLiteral: string, optionName: string): any;
	igGridCellMerging(methodName: string): any;
}
interface IgGridColumnFixingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowFixing?: boolean;
	isFixed?: boolean;
}

interface ColumnFixingEvent {
	(event: Event, ui: ColumnFixingEventUIParam): void;
}

interface ColumnFixingEventUIParam {
}

interface ColumnFixedEvent {
	(event: Event, ui: ColumnFixedEventUIParam): void;
}

interface ColumnFixedEventUIParam {
}

interface ColumnUnfixingEvent {
	(event: Event, ui: ColumnUnfixingEventUIParam): void;
}

interface ColumnUnfixingEventUIParam {
}

interface ColumnUnfixedEvent {
	(event: Event, ui: ColumnUnfixedEventUIParam): void;
}

interface ColumnUnfixedEventUIParam {
}

interface ColumnFixingRefusedEvent {
	(event: Event, ui: ColumnFixingRefusedEventUIParam): void;
}

interface ColumnFixingRefusedEventUIParam {
}

interface IgGridColumnFixing {
	headerFixButtonText?: string;
	headerUnfixButtonText?: string;
	showFixButtons?: boolean;
	syncRowHeights?: boolean;
	scrollDelta?: number;
	fixingDirection?: string;
	columnSettings?: IgGridColumnFixingColumnSetting[];
	featureChooserTextFixedColumn?: string;
	featureChooserTextUnfixedColumn?: string;
	minimalVisibleAreaWidth?: string;
	fixNondataColumns?: boolean;
	columnFixing?: ColumnFixingEvent;
	columnFixed?: ColumnFixedEvent;
	columnUnfixing?: ColumnUnfixingEvent;
	columnUnfixed?: ColumnUnfixedEvent;
	columnFixingRefused?: ColumnFixingRefusedEvent;
}

interface JQuery {
	igGridColumnFixing(options: IgGridColumnFixing): JQuery;
	igGridColumnFixing(optionLiteral: string, options: IgGridColumnFixing): JQuery;
	igGridColumnFixing(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridColumnFixing(optionLiteral: string, optionName: string): any;
	igGridColumnFixing(methodName: string): any;
}
interface IgGridColumnMovingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowMoving?: boolean;
}

interface ColumnDragStartEvent {
	(event: Event, ui: ColumnDragStartEventUIParam): void;
}

interface ColumnDragStartEventUIParam {
}

interface ColumnDragEndEvent {
	(event: Event, ui: ColumnDragEndEventUIParam): void;
}

interface ColumnDragEndEventUIParam {
}

interface ColumnDragCanceledEvent {
	(event: Event, ui: ColumnDragCanceledEventUIParam): void;
}

interface ColumnDragCanceledEventUIParam {
}

interface ColumnMovingEvent {
	(event: Event, ui: ColumnMovingEventUIParam): void;
}

interface ColumnMovingEventUIParam {
}

interface ColumnMovedEvent {
	(event: Event, ui: ColumnMovedEventUIParam): void;
}

interface ColumnMovedEventUIParam {
}

interface MovingDialogOpeningEvent {
	(event: Event, ui: MovingDialogOpeningEventUIParam): void;
}

interface MovingDialogOpeningEventUIParam {
}

interface MovingDialogOpenedEvent {
	(event: Event, ui: MovingDialogOpenedEventUIParam): void;
}

interface MovingDialogOpenedEventUIParam {
}

interface MovingDialogDraggedEvent {
	(event: Event, ui: MovingDialogDraggedEventUIParam): void;
}

interface MovingDialogDraggedEventUIParam {
}

interface MovingDialogClosingEvent {
	(event: Event, ui: MovingDialogClosingEventUIParam): void;
}

interface MovingDialogClosingEventUIParam {
}

interface MovingDialogClosedEvent {
	(event: Event, ui: MovingDialogClosedEventUIParam): void;
}

interface MovingDialogClosedEventUIParam {
}

interface MovingDialogContentsRenderingEvent {
	(event: Event, ui: MovingDialogContentsRenderingEventUIParam): void;
}

interface MovingDialogContentsRenderingEventUIParam {
}

interface MovingDialogContentsRenderedEvent {
	(event: Event, ui: MovingDialogContentsRenderedEventUIParam): void;
}

interface MovingDialogContentsRenderedEventUIParam {
}

interface MovingDialogMoveUpButtonPressedEvent {
	(event: Event, ui: MovingDialogMoveUpButtonPressedEventUIParam): void;
}

interface MovingDialogMoveUpButtonPressedEventUIParam {
}

interface MovingDialogMoveDownButtonPressedEvent {
	(event: Event, ui: MovingDialogMoveDownButtonPressedEventUIParam): void;
}

interface MovingDialogMoveDownButtonPressedEventUIParam {
}

interface MovingDialogDragColumnMovingEvent {
	(event: Event, ui: MovingDialogDragColumnMovingEventUIParam): void;
}

interface MovingDialogDragColumnMovingEventUIParam {
}

interface MovingDialogDragColumnMovedEvent {
	(event: Event, ui: MovingDialogDragColumnMovedEventUIParam): void;
}

interface MovingDialogDragColumnMovedEventUIParam {
}

interface IgGridColumnMoving {
	columnSettings?: IgGridColumnMovingColumnSetting[];
	mode?: string;
	moveType?: string;
	addMovingDropdown?: boolean;
	movingDialogWidth?: number;
	movingDialogHeight?: number;
	movingDialogAnimationDuration?: number;
	movingAcceptanceTolerance?: number;
	movingScrollTolerance?: number;
	scrollSpeedMultiplier?: number;
	scrollDelta?: number;
	hideHeaderContentsDuringDrag?: boolean;
	dragHelperOpacity?: number;
	movingDialogCaptionButtonDesc?: string;
	movingDialogCaptionButtonAsc?: string;
	movingDialogCaptionText?: string;
	movingDialogDisplayText?: string;
	dropDownMoveLeftText?: string;
	dropDownMoveRightText?: string;
	dropDownMoveFirstText?: string;
	dropDownMoveLastText?: string;
	movingToolTipMove?: string;
	featureChooserSubmenuText?: string;
	columnDragStart?: ColumnDragStartEvent;
	columnDragEnd?: ColumnDragEndEvent;
	columnDragCanceled?: ColumnDragCanceledEvent;
	columnMoving?: ColumnMovingEvent;
	columnMoved?: ColumnMovedEvent;
	movingDialogOpening?: MovingDialogOpeningEvent;
	movingDialogOpened?: MovingDialogOpenedEvent;
	movingDialogDragged?: MovingDialogDraggedEvent;
	movingDialogClosing?: MovingDialogClosingEvent;
	movingDialogClosed?: MovingDialogClosedEvent;
	movingDialogContentsRendering?: MovingDialogContentsRenderingEvent;
	movingDialogContentsRendered?: MovingDialogContentsRenderedEvent;
	movingDialogMoveUpButtonPressed?: MovingDialogMoveUpButtonPressedEvent;
	movingDialogMoveDownButtonPressed?: MovingDialogMoveDownButtonPressedEvent;
	movingDialogDragColumnMoving?: MovingDialogDragColumnMovingEvent;
	movingDialogDragColumnMoved?: MovingDialogDragColumnMovedEvent;
}

interface JQuery {
	igGridColumnMoving(options: IgGridColumnMoving): JQuery;
	igGridColumnMoving(optionLiteral: string, options: IgGridColumnMoving): JQuery;
	igGridColumnMoving(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridColumnMoving(optionLiteral: string, optionName: string): any;
	igGridColumnMoving(methodName: string): any;
}
interface IgGridFeatureChooserPopover {
	gridId?: string;
	targetButton?: any;
	closeOnBlur?: boolean;
	containment?: any;
}

interface FeatureChooserRenderingEvent {
	(event: Event, ui: FeatureChooserRenderingEventUIParam): void;
}

interface FeatureChooserRenderingEventUIParam {
}

interface FeatureChooserRenderedEvent {
	(event: Event, ui: FeatureChooserRenderedEventUIParam): void;
}

interface FeatureChooserRenderedEventUIParam {
}

interface FeatureChooserDropDownOpeningEvent {
	(event: Event, ui: FeatureChooserDropDownOpeningEventUIParam): void;
}

interface FeatureChooserDropDownOpeningEventUIParam {
}

interface FeatureChooserDropDownOpenedEvent {
	(event: Event, ui: FeatureChooserDropDownOpenedEventUIParam): void;
}

interface FeatureChooserDropDownOpenedEventUIParam {
}

interface MenuTogglingEvent {
	(event: Event, ui: MenuTogglingEventUIParam): void;
}

interface MenuTogglingEventUIParam {
}

interface FeatureTogglingEvent {
	(event: Event, ui: FeatureTogglingEventUIParam): void;
}

interface FeatureTogglingEventUIParam {
}

interface FeatureToggledEvent {
	(event: Event, ui: FeatureToggledEventUIParam): void;
}

interface FeatureToggledEventUIParam {
}

interface IgGridFeatureChooser {
	dropDownWidth?: any;
	animationDuration?: number;
	featureChooserRendering?: FeatureChooserRenderingEvent;
	featureChooserRendered?: FeatureChooserRenderedEvent;
	featureChooserDropDownOpening?: FeatureChooserDropDownOpeningEvent;
	featureChooserDropDownOpened?: FeatureChooserDropDownOpenedEvent;
	menuToggling?: MenuTogglingEvent;
	featureToggling?: FeatureTogglingEvent;
	featureToggled?: FeatureToggledEvent;
}

interface ModalDialogOpeningEvent {
	(event: Event, ui: ModalDialogOpeningEventUIParam): void;
}

interface ModalDialogOpeningEventUIParam {
}

interface ModalDialogOpenedEvent {
	(event: Event, ui: ModalDialogOpenedEventUIParam): void;
}

interface ModalDialogOpenedEventUIParam {
}

interface ModalDialogMovingEvent {
	(event: Event, ui: ModalDialogMovingEventUIParam): void;
}

interface ModalDialogMovingEventUIParam {
}

interface ModalDialogClosingEvent {
	(event: Event, ui: ModalDialogClosingEventUIParam): void;
}

interface ModalDialogClosingEventUIParam {
}

interface ModalDialogClosedEvent {
	(event: Event, ui: ModalDialogClosedEventUIParam): void;
}

interface ModalDialogClosedEventUIParam {
}

interface ModalDialogContentsRenderingEvent {
	(event: Event, ui: ModalDialogContentsRenderingEventUIParam): void;
}

interface ModalDialogContentsRenderingEventUIParam {
}

interface ModalDialogContentsRenderedEvent {
	(event: Event, ui: ModalDialogContentsRenderedEventUIParam): void;
}

interface ModalDialogContentsRenderedEventUIParam {
}

interface ButtonOKClickEvent {
	(event: Event, ui: ButtonOKClickEventUIParam): void;
}

interface ButtonOKClickEventUIParam {
}

interface IgGridModalDialog {
	buttonApplyText?: string;
	buttonCancelText?: string;
	modalDialogCaptionText?: string;
	modalDialogWidth?: number;
	modalDialogHeight?: number;
	renderFooterButtons?: boolean;
	animationDuration?: number;
	modalDialogOpening?: ModalDialogOpeningEvent;
	modalDialogOpened?: ModalDialogOpenedEvent;
	modalDialogMoving?: ModalDialogMovingEvent;
	modalDialogClosing?: ModalDialogClosingEvent;
	modalDialogClosed?: ModalDialogClosedEvent;
	modalDialogContentsRendering?: ModalDialogContentsRenderingEvent;
	modalDialogContentsRendered?: ModalDialogContentsRenderedEvent;
	buttonOKClick?: ButtonOKClickEvent;
}

interface JQuery {
	igGridFeatureChooserPopover(options: IgGridFeatureChooserPopover): JQuery;
	igGridFeatureChooserPopover(optionLiteral: string, options: IgGridFeatureChooserPopover): JQuery;
	igGridFeatureChooserPopover(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridFeatureChooserPopover(optionLiteral: string, optionName: string): any;
	igGridFeatureChooserPopover(methodName: string): any;
}
interface JQuery {
	igGridFeatureChooser(options: IgGridFeatureChooser): JQuery;
	igGridFeatureChooser(optionLiteral: string, options: IgGridFeatureChooser): JQuery;
	igGridFeatureChooser(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridFeatureChooser(optionLiteral: string, optionName: string): any;
	igGridFeatureChooser(methodName: string): any;
}
interface JQuery {
	igGridModalDialog(options: IgGridModalDialog): JQuery;
	igGridModalDialog(optionLiteral: string, options: IgGridModalDialog): JQuery;
	igGridModalDialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridModalDialog(optionLiteral: string, optionName: string): any;
	igGridModalDialog(methodName: string): any;
}
interface IgGridFilteringColumnSettingDefaultExpressions {
}

interface IgGridFilteringColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowFiltering?: boolean;
	condition?: string;
	defaultExpressions?: IgGridFilteringColumnSettingDefaultExpressions;
}

interface IgGridFilteringNullTexts {
	startsWith?: string;
	endsWith?: string;
	contains?: string;
	doesNotContain?: string;
	equals?: string;
	doesNotEqual?: string;
	greaterThan?: string;
	lessThan?: string;
	greaterThanOrEqualTo?: string;
	lessThanOrEqualTo?: string;
	on?: string;
	notOn?: string;
	after?: string;
	before?: string;
	thisMonth?: string;
	lastMonth?: string;
	nextMonth?: string;
	thisYear?: string;
	lastYear?: string;
	nextYear?: string;
	empty?: string;
	notEmpty?: string;
	null?: string;
	notNull?: string;
}

interface IgGridFilteringLabels {
	noFilter?: string;
	clear?: string;
	startsWith?: string;
	endsWith?: string;
	contains?: string;
	doesNotContain?: string;
	equals?: string;
	doesNotEqual?: string;
	greaterThan?: string;
	lessThan?: string;
	greaterThanOrEqualTo?: string;
	lessThanOrEqualTo?: string;
	trueLabel?: string;
	falseLabel?: string;
	after?: string;
	before?: string;
	today?: string;
	yesterday?: string;
	thisMonth?: string;
	lastMonth?: string;
	nextMonth?: string;
	thisYear?: string;
	lastYear?: string;
	nextYear?: string;
	on?: string;
	notOn?: string;
	advancedButtonLabel?: string;
	filterDialogCaptionLabel?: string;
	filterDialogConditionLabel1?: string;
	filterDialogConditionLabel2?: string;
	filterDialogOkLabel?: string;
	filterDialogCancelLabel?: string;
	filterDialogAnyLabel?: string;
	filterDialogAllLabel?: string;
	filterDialogAddLabel?: string;
	filterDialogErrorLabel?: string;
	filterSummaryTitleLabel?: string;
	filterDialogClearAllLabel?: string;
	empty?: string;
	notEmpty?: string;
	nullLabel?: string;
	notNull?: string;
}

interface DataFilteringEvent {
	(event: Event, ui: DataFilteringEventUIParam): void;
}

interface DataFilteringEventUIParam {
}

interface DataFilteredEvent {
	(event: Event, ui: DataFilteredEventUIParam): void;
}

interface DataFilteredEventUIParam {
}

interface FilterDialogOpeningEvent {
	(event: Event, ui: FilterDialogOpeningEventUIParam): void;
}

interface FilterDialogOpeningEventUIParam {
}

interface FilterDialogOpenedEvent {
	(event: Event, ui: FilterDialogOpenedEventUIParam): void;
}

interface FilterDialogOpenedEventUIParam {
}

interface FilterDialogMovingEvent {
	(event: Event, ui: FilterDialogMovingEventUIParam): void;
}

interface FilterDialogMovingEventUIParam {
}

interface FilterDialogFilterAddingEvent {
	(event: Event, ui: FilterDialogFilterAddingEventUIParam): void;
}

interface FilterDialogFilterAddingEventUIParam {
}

interface FilterDialogFilterAddedEvent {
	(event: Event, ui: FilterDialogFilterAddedEventUIParam): void;
}

interface FilterDialogFilterAddedEventUIParam {
}

interface FilterDialogClosingEvent {
	(event: Event, ui: FilterDialogClosingEventUIParam): void;
}

interface FilterDialogClosingEventUIParam {
}

interface FilterDialogClosedEvent {
	(event: Event, ui: FilterDialogClosedEventUIParam): void;
}

interface FilterDialogClosedEventUIParam {
}

interface FilterDialogContentsRenderingEvent {
	(event: Event, ui: FilterDialogContentsRenderingEventUIParam): void;
}

interface FilterDialogContentsRenderingEventUIParam {
}

interface FilterDialogContentsRenderedEvent {
	(event: Event, ui: FilterDialogContentsRenderedEventUIParam): void;
}

interface FilterDialogContentsRenderedEventUIParam {
}

interface FilterDialogFilteringEvent {
	(event: Event, ui: FilterDialogFilteringEventUIParam): void;
}

interface FilterDialogFilteringEventUIParam {
}

interface IgGridFiltering {
	caseSensitive?: boolean;
	filterSummaryAlwaysVisible?: boolean;
	renderFC?: boolean;
	filterSummaryTemplate?: string;
	filterDropDownAnimations?: string;
	filterDropDownAnimationDuration?: number;
	filterDropDownWidth?: string;
	filterDropDownHeight?: any;
	filterExprUrlKey?: string;
	filterDropDownItemIcons?: string;
	columnSettings?: IgGridFilteringColumnSetting[];
	type?: string;
	filterDelay?: number;
	mode?: string;
	advancedModeEditorsVisible?: boolean;
	advancedModeHeaderButtonLocation?: string;
	filterDialogWidth?: string;
	filterDialogMaxHeight?: string;
	filterDialogHeight?: string;
	filterDialogFilterDropDownDefaultWidth?: string;
	filterDialogExprInputDefaultWidth?: string;
	filterDialogColumnDropDownDefaultWidth?: string;
	renderFilterButton?: boolean;
	filterButtonLocation?: string;
	nullTexts?: IgGridFilteringNullTexts;
	labels?: IgGridFilteringLabels;
	tooltipTemplate?: string;
	filterDialogAddConditionTemplate?: string;
	filterDialogAddConditionDropDownTemplate?: string;
	filterDialogFilterTemplate?: string;
	filterDialogFilterConditionTemplate?: string;
	filterDialogAddButtonWidth?: string;
	filterDialogOkCancelButtonWidth?: string;
	filterDialogMaxFilterCount?: number;
	filterDialogContainment?: string;
	showEmptyConditions?: boolean;
	showNullConditions?: boolean;
	featureChooserText?: string;
	featureChooserTextHide?: string;
	featureChooserTextAdvancedFilter?: string;
	persist?: boolean;
	dataFiltering?: DataFilteringEvent;
	dataFiltered?: DataFilteredEvent;
	dropDownOpening?: DropDownOpeningEvent;
	dropDownOpened?: DropDownOpenedEvent;
	dropDownClosing?: DropDownClosingEvent;
	dropDownClosed?: DropDownClosedEvent;
	filterDialogOpening?: FilterDialogOpeningEvent;
	filterDialogOpened?: FilterDialogOpenedEvent;
	filterDialogMoving?: FilterDialogMovingEvent;
	filterDialogFilterAdding?: FilterDialogFilterAddingEvent;
	filterDialogFilterAdded?: FilterDialogFilterAddedEvent;
	filterDialogClosing?: FilterDialogClosingEvent;
	filterDialogClosed?: FilterDialogClosedEvent;
	filterDialogContentsRendering?: FilterDialogContentsRenderingEvent;
	filterDialogContentsRendered?: FilterDialogContentsRenderedEvent;
	filterDialogFiltering?: FilterDialogFilteringEvent;
}

interface JQuery {
	igGridFiltering(options: IgGridFiltering): JQuery;
	igGridFiltering(optionLiteral: string, options: IgGridFiltering): JQuery;
	igGridFiltering(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridFiltering(optionLiteral: string, optionName: string): any;
	igGridFiltering(methodName: string): any;
}
interface IgGridColumn {
	headerText?: string;
	key?: string;
	formatter?: any;
	format?: string;
	dataType?: string;
	width?: string;
	hidden?: boolean;
	template?: string;
	unbound?: boolean;
	group?: any[];
	rowspan?: number;
	formula?: string;
	unboundValues?: any[];
}

interface IgGridFeatures {
}

interface IgGridRestSettingsCreate {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface IgGridRestSettingsUpdate {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface IgGridRestSettingsRemove {
	url?: string;
	template?: string;
	batch?: boolean;
}

interface IgGridRestSettings {
	create?: IgGridRestSettingsCreate;
	update?: IgGridRestSettingsUpdate;
	remove?: IgGridRestSettingsRemove;
	encodeRemoveInRequestUri?: boolean;
	contentSerializer?: Function;
	contentType?: string;
}

interface CellClickEvent {
	(event: Event, ui: CellClickEventUIParam): void;
}

interface CellClickEventUIParam {
}

interface RenderingEvent {
	(event: Event, ui: RenderingEventUIParam): void;
}

interface RenderingEventUIParam {
}

interface RenderedEvent {
	(event: Event, ui: RenderedEventUIParam): void;
}

interface RenderedEventUIParam {
}

interface DataRenderingEvent {
	(event: Event, ui: DataRenderingEventUIParam): void;
}

interface DataRenderingEventUIParam {
}

interface DataRenderedEvent {
	(event: Event, ui: DataRenderedEventUIParam): void;
}

interface DataRenderedEventUIParam {
}

interface HeaderRenderingEvent {
	(event: Event, ui: HeaderRenderingEventUIParam): void;
}

interface HeaderRenderingEventUIParam {
}

interface HeaderRenderedEvent {
	(event: Event, ui: HeaderRenderedEventUIParam): void;
}

interface HeaderRenderedEventUIParam {
}

interface FooterRenderingEvent {
	(event: Event, ui: FooterRenderingEventUIParam): void;
}

interface FooterRenderingEventUIParam {
}

interface FooterRenderedEvent {
	(event: Event, ui: FooterRenderedEventUIParam): void;
}

interface FooterRenderedEventUIParam {
}

interface HeaderCellRenderedEvent {
	(event: Event, ui: HeaderCellRenderedEventUIParam): void;
}

interface HeaderCellRenderedEventUIParam {
}

interface RowsRenderingEvent {
	(event: Event, ui: RowsRenderingEventUIParam): void;
}

interface RowsRenderingEventUIParam {
}

interface RowsRenderedEvent {
	(event: Event, ui: RowsRenderedEventUIParam): void;
}

interface RowsRenderedEventUIParam {
}

interface SchemaGeneratedEvent {
	(event: Event, ui: SchemaGeneratedEventUIParam): void;
}

interface SchemaGeneratedEventUIParam {
}

interface ColumnsCollectionModifiedEvent {
	(event: Event, ui: ColumnsCollectionModifiedEventUIParam): void;
}

interface ColumnsCollectionModifiedEventUIParam {
}

interface RequestErrorEvent {
	(event: Event, ui: RequestErrorEventUIParam): void;
}

interface RequestErrorEventUIParam {
}

interface CreatedEvent {
	(event: Event, ui: CreatedEventUIParam): void;
}

interface CreatedEventUIParam {
}

interface DestroyedEvent {
	(event: Event, ui: DestroyedEventUIParam): void;
}

interface DestroyedEventUIParam {
}

interface IgGrid {
	width?: string;
	height?: string;
	autoAdjustHeight?: boolean;
	avgRowHeight?: string;
	avgColumnWidth?: string;
	defaultColumnWidth?: string;
	autoGenerateColumns?: boolean;
	virtualization?: boolean;
	virtualizationMode?: string;
	requiresDataBinding?: boolean;
	rowVirtualization?: boolean;
	columnVirtualization?: boolean;
	virtualizationMouseWheelStep?: number;
	adjustVirtualHeights?: boolean;
	rowTemplate?: string;
	jQueryTemplating?: boolean;
	templatingEngine?: string;
	columns?: IgGridColumn[];
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseTotalRecCountKey?: string;
	requestType?: string;
	responseContentType?: string;
	showHeader?: boolean;
	showFooter?: boolean;
	fixedHeaders?: boolean;
	fixedFooters?: boolean;
	caption?: string;
	features?: IgGridFeatures;
	tabIndex?: number;
	accessibilityRendering?: boolean;
	localSchemaTransform?: boolean;
	primaryKey?: string;
	serializeTransactionLog?: boolean;
	autoCommit?: boolean;
	aggregateTransactions?: boolean;
	autoFormat?: string;
	renderCheckboxes?: boolean;
	updateUrl?: string;
	restSettings?: IgGridRestSettings;
	alternateRowStyles?: boolean;
	autofitLastColumn?: boolean;
	enableHoverStyles?: boolean;
	enableUTCDates?: boolean;
	mergeUnboundColumns?: boolean;
	jsonpRequest?: boolean;
	enableResizeContainerCheck?: boolean;
	cellClick?: CellClickEvent;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	rendering?: RenderingEvent;
	rendered?: RenderedEvent;
	dataRendering?: DataRenderingEvent;
	dataRendered?: DataRenderedEvent;
	headerRendering?: HeaderRenderingEvent;
	headerRendered?: HeaderRenderedEvent;
	footerRendering?: FooterRenderingEvent;
	footerRendered?: FooterRenderedEvent;
	headerCellRendered?: HeaderCellRenderedEvent;
	rowsRendering?: RowsRenderingEvent;
	rowsRendered?: RowsRenderedEvent;
	schemaGenerated?: SchemaGeneratedEvent;
	columnsCollectionModified?: ColumnsCollectionModifiedEvent;
	requestError?: RequestErrorEvent;
	created?: CreatedEvent;
	destroyed?: DestroyedEvent;
}

interface JQuery {
	igGrid(options: IgGrid): JQuery;
	igGrid(optionLiteral: string, options: IgGrid): JQuery;
	igGrid(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGrid(optionLiteral: string, optionName: string): any;
	igGrid(methodName: string): any;
}
interface IgGridGroupByGroupedColumns {
	key?: string;
	dir?: string;
	layout?: string;
	col?: any;
}

interface IgGridGroupBySummarySettings {
	multiSummaryDelimiter?: string;
	summaryFormat?: string;
}

interface IgGridGroupByColumnSettingsSummaries {
	summaryFunction?: string;
	text?: any;
	customSummary?: any;
}

interface IgGridGroupByColumnSettings {
	allowGrouping?: boolean;
	isGroupBy?: boolean;
	groupComparerFunction?: Function;
	groupLabelFormatter?: Function;
	summaries?: IgGridGroupByColumnSettingsSummaries;
}

interface GroupedColumnsChangingEvent {
	(event: Event, ui: GroupedColumnsChangingEventUIParam): void;
}

interface GroupedColumnsChangingEventUIParam {
}

interface GroupedColumnsChangedEvent {
	(event: Event, ui: GroupedColumnsChangedEventUIParam): void;
}

interface GroupedColumnsChangedEventUIParam {
}

interface ModalDialogButtonApplyClickEvent {
	(event: Event, ui: ModalDialogButtonApplyClickEventUIParam): void;
}

interface ModalDialogButtonApplyClickEventUIParam {
}

interface ModalDialogButtonResetClickEvent {
	(event: Event, ui: ModalDialogButtonResetClickEventUIParam): void;
}

interface ModalDialogButtonResetClickEventUIParam {
}

interface ModalDialogGroupingColumnEvent {
	(event: Event, ui: ModalDialogGroupingColumnEventUIParam): void;
}

interface ModalDialogGroupingColumnEventUIParam {
}

interface ModalDialogGroupColumnEvent {
	(event: Event, ui: ModalDialogGroupColumnEventUIParam): void;
}

interface ModalDialogGroupColumnEventUIParam {
}

interface ModalDialogUngroupingColumnEvent {
	(event: Event, ui: ModalDialogUngroupingColumnEventUIParam): void;
}

interface ModalDialogUngroupingColumnEventUIParam {
}

interface ModalDialogUngroupColumnEvent {
	(event: Event, ui: ModalDialogUngroupColumnEventUIParam): void;
}

interface ModalDialogUngroupColumnEventUIParam {
}

interface ModalDialogSortGroupedColumnEvent {
	(event: Event, ui: ModalDialogSortGroupedColumnEventUIParam): void;
}

interface ModalDialogSortGroupedColumnEventUIParam {
}

interface IgGridGroupBy {
	groupByAreaVisibility?: string;
	initialExpand?: boolean;
	emptyGroupByAreaContent?: string;
	emptyGroupByAreaContentSelectColumns?: string;
	expansionIndicatorVisibility?: boolean;
	groupByLabelWidth?: number;
	labelDragHelperOpacity?: number;
	indentation?: number;
	defaultSortingDirection?: string;
	groupedColumns?: IgGridGroupByGroupedColumns;
	resultResponseKey?: string;
	groupedRowTextTemplate?: string;
	type?: string;
	groupByUrlKey?: string;
	groupByUrlKeyAscValue?: string;
	groupByUrlKeyDescValue?: string;
	summarySettings?: IgGridGroupBySummarySettings;
	columnSettings?: IgGridGroupByColumnSettings;
	expandTooltip?: string;
	collapseTooltip?: string;
	removeButtonTooltip?: string;
	featureChooserText?: string;
	featureChooserTextHide?: string;
	modalDialogGroupByOnClick?: boolean;
	modalDialogGroupByButtonText?: string;
	modalDialogCaptionButtonDesc?: string;
	modalDialogCaptionButtonAsc?: string;
	modalDialogCaptionButtonUngroup?: string;
	modalDialogCaptionText?: string;
	modalDialogDropDownLabel?: string;
	modalDialogRootLevelHierarchicalGrid?: string;
	modalDialogDropDownButtonCaption?: string;
	modalDialogClearAllButtonLabel?: string;
	emptyGroupByAreaContentSelectColumnsCaption?: string;
	modalDialogDropDownWidth?: number;
	modalDialogDropDownAreaWidth?: number;
	modalDialogAnimationDuration?: number;
	modalDialogWidth?: number;
	modalDialogHeight?: number;
	modalDialogButtonApplyText?: string;
	modalDialogButtonCancelText?: string;
	useGridColumnFormatter?: boolean;
	persist?: boolean;
	groupedColumnsChanging?: GroupedColumnsChangingEvent;
	groupedColumnsChanged?: GroupedColumnsChangedEvent;
	modalDialogMoving?: ModalDialogMovingEvent;
	modalDialogClosing?: ModalDialogClosingEvent;
	modalDialogClosed?: ModalDialogClosedEvent;
	modalDialogOpening?: ModalDialogOpeningEvent;
	modalDialogOpened?: ModalDialogOpenedEvent;
	modalDialogContentsRendering?: ModalDialogContentsRenderingEvent;
	modalDialogContentsRendered?: ModalDialogContentsRenderedEvent;
	modalDialogButtonApplyClick?: ModalDialogButtonApplyClickEvent;
	modalDialogButtonResetClick?: ModalDialogButtonResetClickEvent;
	modalDialogGroupingColumn?: ModalDialogGroupingColumnEvent;
	modalDialogGroupColumn?: ModalDialogGroupColumnEvent;
	modalDialogUngroupingColumn?: ModalDialogUngroupingColumnEvent;
	modalDialogUngroupColumn?: ModalDialogUngroupColumnEvent;
	modalDialogSortGroupedColumn?: ModalDialogSortGroupedColumnEvent;
}

interface JQuery {
	igGridGroupBy(options: IgGridGroupBy): JQuery;
	igGridGroupBy(optionLiteral: string, options: IgGridGroupBy): JQuery;
	igGridGroupBy(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridGroupBy(optionLiteral: string, optionName: string): any;
	igGridGroupBy(methodName: string): any;
}
interface IgGridHidingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowHiding?: boolean;
	hidden?: boolean;
}

interface ColumnHidingEvent {
	(event: Event, ui: ColumnHidingEventUIParam): void;
}

interface ColumnHidingEventUIParam {
}

interface ColumnHidingRefusedEvent {
	(event: Event, ui: ColumnHidingRefusedEventUIParam): void;
}

interface ColumnHidingRefusedEventUIParam {
}

interface ColumnShowingRefusedEvent {
	(event: Event, ui: ColumnShowingRefusedEventUIParam): void;
}

interface ColumnShowingRefusedEventUIParam {
}

interface MultiColumnHidingEvent {
	(event: Event, ui: MultiColumnHidingEventUIParam): void;
}

interface MultiColumnHidingEventUIParam {
}

interface ColumnHiddenEvent {
	(event: Event, ui: ColumnHiddenEventUIParam): void;
}

interface ColumnHiddenEventUIParam {
}

interface ColumnShowingEvent {
	(event: Event, ui: ColumnShowingEventUIParam): void;
}

interface ColumnShowingEventUIParam {
}

interface ColumnShownEvent {
	(event: Event, ui: ColumnShownEventUIParam): void;
}

interface ColumnShownEventUIParam {
}

interface ColumnChooserOpeningEvent {
	(event: Event, ui: ColumnChooserOpeningEventUIParam): void;
}

interface ColumnChooserOpeningEventUIParam {
}

interface ColumnChooserOpenedEvent {
	(event: Event, ui: ColumnChooserOpenedEventUIParam): void;
}

interface ColumnChooserOpenedEventUIParam {
}

interface ColumnChooserMovingEvent {
	(event: Event, ui: ColumnChooserMovingEventUIParam): void;
}

interface ColumnChooserMovingEventUIParam {
}

interface ColumnChooserClosingEvent {
	(event: Event, ui: ColumnChooserClosingEventUIParam): void;
}

interface ColumnChooserClosingEventUIParam {
}

interface ColumnChooserClosedEvent {
	(event: Event, ui: ColumnChooserClosedEventUIParam): void;
}

interface ColumnChooserClosedEventUIParam {
}

interface ColumnChooserContentsRenderingEvent {
	(event: Event, ui: ColumnChooserContentsRenderingEventUIParam): void;
}

interface ColumnChooserContentsRenderingEventUIParam {
}

interface ColumnChooserContentsRenderedEvent {
	(event: Event, ui: ColumnChooserContentsRenderedEventUIParam): void;
}

interface ColumnChooserContentsRenderedEventUIParam {
}

interface ColumnChooserButtonApplyClickEvent {
	(event: Event, ui: ColumnChooserButtonApplyClickEventUIParam): void;
}

interface ColumnChooserButtonApplyClickEventUIParam {
}

interface ColumnChooserButtonResetClickEvent {
	(event: Event, ui: ColumnChooserButtonResetClickEventUIParam): void;
}

interface ColumnChooserButtonResetClickEventUIParam {
}

interface IgGridHiding {
	columnSettings?: IgGridHidingColumnSetting[];
	hiddenColumnIndicatorHeaderWidth?: number;
	columnChooserContainment?: string;
	columnChooserWidth?: number;
	columnChooserHeight?: number;
	dropDownAnimationDuration?: number;
	columnChooserCaptionText?: string;
	columnChooserDisplayText?: string;
	hiddenColumnIndicatorTooltipText?: string;
	columnHideText?: string;
	columnChooserShowText?: string;
	columnChooserHideText?: string;
	columnChooserHideOnClick?: boolean;
	columnChooserResetButtonLabel?: string;
	columnChooserAnimationDuration?: number;
	columnChooserButtonApplyText?: string;
	columnChooserButtonCancelText?: string;
	columnHiding?: ColumnHidingEvent;
	columnHidingRefused?: ColumnHidingRefusedEvent;
	columnShowingRefused?: ColumnShowingRefusedEvent;
	multiColumnHiding?: MultiColumnHidingEvent;
	columnHidden?: ColumnHiddenEvent;
	columnShowing?: ColumnShowingEvent;
	columnShown?: ColumnShownEvent;
	columnChooserOpening?: ColumnChooserOpeningEvent;
	columnChooserOpened?: ColumnChooserOpenedEvent;
	columnChooserMoving?: ColumnChooserMovingEvent;
	columnChooserClosing?: ColumnChooserClosingEvent;
	columnChooserClosed?: ColumnChooserClosedEvent;
	columnChooserContentsRendering?: ColumnChooserContentsRenderingEvent;
	columnChooserContentsRendered?: ColumnChooserContentsRenderedEvent;
	columnChooserButtonApplyClick?: ColumnChooserButtonApplyClickEvent;
	columnChooserButtonResetClick?: ColumnChooserButtonResetClickEvent;
}

interface JQuery {
	igGridHiding(options: IgGridHiding): JQuery;
	igGridHiding(optionLiteral: string, options: IgGridHiding): JQuery;
	igGridHiding(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridHiding(optionLiteral: string, optionName: string): any;
	igGridHiding(methodName: string): any;
}
interface IgHierarchicalGridColumnLayouts {
	key?: string;
	primaryKey?: string;
	foreignKey?: string;
}

interface RowExpandingEvent {
	(event: Event, ui: RowExpandingEventUIParam): void;
}

interface RowExpandingEventUIParam {
}

interface RowExpandedEvent {
	(event: Event, ui: RowExpandedEventUIParam): void;
}

interface RowExpandedEventUIParam {
}

interface RowCollapsingEvent {
	(event: Event, ui: RowCollapsingEventUIParam): void;
}

interface RowCollapsingEventUIParam {
}

interface RowCollapsedEvent {
	(event: Event, ui: RowCollapsedEventUIParam): void;
}

interface RowCollapsedEventUIParam {
}

interface ChildrenPopulatingEvent {
	(event: Event, ui: ChildrenPopulatingEventUIParam): void;
}

interface ChildrenPopulatingEventUIParam {
}

interface ChildrenPopulatedEvent {
	(event: Event, ui: ChildrenPopulatedEventUIParam): void;
}

interface ChildrenPopulatedEventUIParam {
}

interface ChildGridCreatingEvent {
	(event: Event, ui: ChildGridCreatingEventUIParam): void;
}

interface ChildGridCreatingEventUIParam {
}

interface ChildGridCreatedEvent {
	(event: Event, ui: ChildGridCreatedEventUIParam): void;
}

interface ChildGridCreatedEventUIParam {
}

interface IgHierarchicalGrid {
	initialDataBindDepth?: number;
	initialExpandDepth?: number;
	odata?: boolean;
	rest?: boolean;
	maxDataBindDepth?: number;
	defaultChildrenDataProperty?: string;
	autoGenerateLayouts?: boolean;
	expandCollapseAnimations?: boolean;
	expandColWidth?: number;
	pathSeparator?: string;
	animationDuration?: number;
	expandTooltip?: string;
	collapseTooltip?: string;
	columns?: any[];
	columnLayouts?: IgHierarchicalGridColumnLayouts;
	rowExpanding?: RowExpandingEvent;
	rowExpanded?: RowExpandedEvent;
	rowCollapsing?: RowCollapsingEvent;
	rowCollapsed?: RowCollapsedEvent;
	childrenPopulating?: ChildrenPopulatingEvent;
	childrenPopulated?: ChildrenPopulatedEvent;
	childGridCreating?: ChildGridCreatingEvent;
	childGridCreated?: ChildGridCreatedEvent;
}

interface JQuery {
	igHierarchicalGrid(options: IgHierarchicalGrid): JQuery;
	igHierarchicalGrid(optionLiteral: string, options: IgHierarchicalGrid): JQuery;
	igHierarchicalGrid(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igHierarchicalGrid(optionLiteral: string, optionName: string): any;
	igHierarchicalGrid(methodName: string): any;
}
interface IgGridMultiColumnHeaders {
}

interface JQuery {
	igGridMultiColumnHeaders(options: IgGridMultiColumnHeaders): JQuery;
	igGridMultiColumnHeaders(optionLiteral: string, options: IgGridMultiColumnHeaders): JQuery;
	igGridMultiColumnHeaders(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridMultiColumnHeaders(optionLiteral: string, optionName: string): any;
	igGridMultiColumnHeaders(methodName: string): any;
}
interface PageIndexChangingEvent {
	(event: Event, ui: PageIndexChangingEventUIParam): void;
}

interface PageIndexChangingEventUIParam {
}

interface PageIndexChangedEvent {
	(event: Event, ui: PageIndexChangedEventUIParam): void;
}

interface PageIndexChangedEventUIParam {
}

interface PageSizeChangingEvent {
	(event: Event, ui: PageSizeChangingEventUIParam): void;
}

interface PageSizeChangingEventUIParam {
}

interface PageSizeChangedEvent {
	(event: Event, ui: PageSizeChangedEventUIParam): void;
}

interface PageSizeChangedEventUIParam {
}

interface PagerRenderingEvent {
	(event: Event, ui: PagerRenderingEventUIParam): void;
}

interface PagerRenderingEventUIParam {
}

interface PagerRenderedEvent {
	(event: Event, ui: PagerRenderedEventUIParam): void;
}

interface PagerRenderedEventUIParam {
}

interface IgGridPaging {
	pageSize?: number;
	recordCountKey?: string;
	pageSizeUrlKey?: string;
	pageIndexUrlKey?: string;
	currentPageIndex?: number;
	type?: string;
	showPageSizeDropDown?: boolean;
	pageSizeDropDownLabel?: string;
	pageSizeDropDownTrailingLabel?: string;
	pageSizeDropDownLocation?: string;
	showPagerRecordsLabel?: boolean;
	pagerRecordsLabelTemplate?: string;
	nextPageLabelText?: string;
	prevPageLabelText?: string;
	firstPageLabelText?: string;
	lastPageLabelText?: string;
	showFirstLastPages?: boolean;
	showPrevNextPages?: boolean;
	currentPageDropDownLeadingLabel?: string;
	currentPageDropDownTrailingLabel?: string;
	currentPageDropDownTooltip?: string;
	pageSizeDropDownTooltip?: string;
	pagerRecordsLabelTooltip?: string;
	prevPageTooltip?: string;
	nextPageTooltip?: string;
	firstPageTooltip?: string;
	lastPageTooltip?: string;
	pageTooltipFormat?: string;
	pageSizeList?: any[];
	pageCountLimit?: number;
	visiblePageCount?: number;
	defaultDropDownWidth?: number;
	delayOnPageChanged?: number;
	pageIndexChanging?: PageIndexChangingEvent;
	pageIndexChanged?: PageIndexChangedEvent;
	pageSizeChanging?: PageSizeChangingEvent;
	pageSizeChanged?: PageSizeChangedEvent;
	pagerRendering?: PagerRenderingEvent;
	pagerRendered?: PagerRenderedEvent;
}

interface JQuery {
	igGridPaging(options: IgGridPaging): JQuery;
	igGridPaging(optionLiteral: string, options: IgGridPaging): JQuery;
	igGridPaging(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridPaging(optionLiteral: string, optionName: string): any;
	igGridPaging(methodName: string): any;
}
interface IgGridResizingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	allowResizing?: boolean;
	minimumWidth?: number;
	maximumWidth?: any;
}

interface ColumnResizingEvent {
	(event: Event, ui: ColumnResizingEventUIParam): void;
}

interface ColumnResizingEventUIParam {
}

interface ColumnResizingRefusedEvent {
	(event: Event, ui: ColumnResizingRefusedEventUIParam): void;
}

interface ColumnResizingRefusedEventUIParam {
}

interface ColumnResizedEvent {
	(event: Event, ui: ColumnResizedEventUIParam): void;
}

interface ColumnResizedEventUIParam {
}

interface IgGridResizing {
	allowDoubleClickToResize?: boolean;
	deferredResizing?: boolean;
	columnSettings?: IgGridResizingColumnSetting[];
	handleTreshold?: number;
	columnResizing?: ColumnResizingEvent;
	columnResizingRefused?: ColumnResizingRefusedEvent;
	columnResized?: ColumnResizedEvent;
}

interface JQuery {
	igGridResizing(options: IgGridResizing): JQuery;
	igGridResizing(optionLiteral: string, options: IgGridResizing): JQuery;
	igGridResizing(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridResizing(optionLiteral: string, optionName: string): any;
	igGridResizing(methodName: string): any;
}
interface IgGridResponsiveColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	classes?: string;
	configuration?: any;
}

interface IgGridResponsiveAllowedColumnWidthPerType {
	string?: number;
	number?: number;
	bool?: number;
	date?: number;
	object?: number;
}

interface ResponsiveColumnHidingEvent {
	(event: Event, ui: ResponsiveColumnHidingEventUIParam): void;
}

interface ResponsiveColumnHidingEventUIParam {
}

interface ResponsiveColumnHiddenEvent {
	(event: Event, ui: ResponsiveColumnHiddenEventUIParam): void;
}

interface ResponsiveColumnHiddenEventUIParam {
}

interface ResponsiveColumnShowingEvent {
	(event: Event, ui: ResponsiveColumnShowingEventUIParam): void;
}

interface ResponsiveColumnShowingEventUIParam {
}

interface ResponsiveColumnShownEvent {
	(event: Event, ui: ResponsiveColumnShownEventUIParam): void;
}

interface ResponsiveColumnShownEventUIParam {
}

interface ResponsiveModeChangedEvent {
	(event: Event, ui: ResponsiveModeChangedEventUIParam): void;
}

interface ResponsiveModeChangedEventUIParam {
}

interface IgGridResponsive {
	columnSettings?: IgGridResponsiveColumnSetting[];
	reactOnContainerWidthChanges?: boolean;
	forceResponsiveGridWidth?: boolean;
	responsiveSensitivity?: number;
	responsiveModes?: any;
	enableVerticalRendering?: boolean;
	windowWidthToRenderVertically?: string;
	propertiesColumnWidth?: string;
	valuesColumnWidth?: string;
	allowedColumnWidthPerType?: IgGridResponsiveAllowedColumnWidthPerType;
	responsiveColumnHiding?: ResponsiveColumnHidingEvent;
	responsiveColumnHidden?: ResponsiveColumnHiddenEvent;
	responsiveColumnShowing?: ResponsiveColumnShowingEvent;
	responsiveColumnShown?: ResponsiveColumnShownEvent;
	responsiveModeChanged?: ResponsiveModeChangedEvent;
}

interface ResponsiveModeSettings {
	minWidth?: number;
	maxWidth?: any;
	minHeight?: number;
	maxHeight?: any;
}

declare module Infragistics {
export class ResponsiveMode  {
	constructor(settings: ResponsiveModeSettings);
	public init(options: Object): void;
	public isActive(): void;
}
}

interface InfragisticsModeSettings {
	key?: string;
	visibilityTester?: any;
}

declare module Infragistics {
export class InfragisticsMode extends ResponsiveMode {
	constructor(settings: InfragisticsModeSettings);
	public init(options: Object): void;
	public isActive(): void;
}
}

interface BootstrapModeSettings {
	key?: string;
	visibilityTester?: any;
}

declare module Infragistics {
export class BootstrapMode extends ResponsiveMode {
	constructor(settings: BootstrapModeSettings);
	public init(options: Object): void;
	public isActive(): void;
}
}

interface JQuery {
	igGridResponsive(options: IgGridResponsive): JQuery;
	igGridResponsive(optionLiteral: string, options: IgGridResponsive): JQuery;
	igGridResponsive(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridResponsive(optionLiteral: string, optionName: string): any;
	igGridResponsive(methodName: string): any;
}
interface RowSelectorClickedEvent {
	(event: Event, ui: RowSelectorClickedEventUIParam): void;
}

interface RowSelectorClickedEventUIParam {
}

interface CheckBoxStateChangingEvent {
	(event: Event, ui: CheckBoxStateChangingEventUIParam): void;
}

interface CheckBoxStateChangingEventUIParam {
}

interface CheckBoxStateChangedEvent {
	(event: Event, ui: CheckBoxStateChangedEventUIParam): void;
}

interface CheckBoxStateChangedEventUIParam {
}

interface IgGridRowSelectors {
	enableRowNumbering?: boolean;
	enableCheckBoxes?: boolean;
	rowNumberingSeed?: number;
	rowSelectorColumnWidth?: string;
	requireSelection?: boolean;
	showCheckBoxesOnFocus?: boolean;
	rowSelectorClicked?: RowSelectorClickedEvent;
	checkBoxStateChanging?: CheckBoxStateChangingEvent;
	checkBoxStateChanged?: CheckBoxStateChangedEvent;
}

interface JQuery {
	igGridRowSelectors(options: IgGridRowSelectors): JQuery;
	igGridRowSelectors(optionLiteral: string, options: IgGridRowSelectors): JQuery;
	igGridRowSelectors(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridRowSelectors(optionLiteral: string, optionName: string): any;
	igGridRowSelectors(methodName: string): any;
}
interface RowSelectionChangingEvent {
	(event: Event, ui: RowSelectionChangingEventUIParam): void;
}

interface RowSelectionChangingEventUIParam {
}

interface RowSelectionChangedEvent {
	(event: Event, ui: RowSelectionChangedEventUIParam): void;
}

interface RowSelectionChangedEventUIParam {
}

interface CellSelectionChangingEvent {
	(event: Event, ui: CellSelectionChangingEventUIParam): void;
}

interface CellSelectionChangingEventUIParam {
}

interface CellSelectionChangedEvent {
	(event: Event, ui: CellSelectionChangedEventUIParam): void;
}

interface CellSelectionChangedEventUIParam {
}

interface ActiveCellChangingEvent {
	(event: Event, ui: ActiveCellChangingEventUIParam): void;
}

interface ActiveCellChangingEventUIParam {
}

interface ActiveCellChangedEvent {
	(event: Event, ui: ActiveCellChangedEventUIParam): void;
}

interface ActiveCellChangedEventUIParam {
}

interface ActiveRowChangingEvent {
	(event: Event, ui: ActiveRowChangingEventUIParam): void;
}

interface ActiveRowChangingEventUIParam {
}

interface ActiveRowChangedEvent {
	(event: Event, ui: ActiveRowChangedEventUIParam): void;
}

interface ActiveRowChangedEventUIParam {
}

interface IgGridSelection {
	multipleSelection?: boolean;
	mouseDragSelect?: boolean;
	mode?: string;
	activation?: boolean;
	wrapAround?: boolean;
	skipChildren?: boolean;
	multipleCellSelectOnClick?: boolean;
	touchDragSelect?: boolean;
	persist?: boolean;
	rowSelectionChanging?: RowSelectionChangingEvent;
	rowSelectionChanged?: RowSelectionChangedEvent;
	cellSelectionChanging?: CellSelectionChangingEvent;
	cellSelectionChanged?: CellSelectionChangedEvent;
	activeCellChanging?: ActiveCellChangingEvent;
	activeCellChanged?: ActiveCellChangedEvent;
	activeRowChanging?: ActiveRowChangingEvent;
	activeRowChanged?: ActiveRowChangedEvent;
}

interface JQuery {
	igGridSelection(options: IgGridSelection): JQuery;
	igGridSelection(optionLiteral: string, options: IgGridSelection): JQuery;
	igGridSelection(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridSelection(optionLiteral: string, optionName: string): any;
	igGridSelection(methodName: string): any;
}
interface IgGridSortingColumnSetting {
	columnKey?: string;
	columnIndex?: number;
	firstSortDirection?: string;
	currentSortDirection?: string;
	allowSorting?: boolean;
}

interface ColumnSortingEvent {
	(event: Event, ui: ColumnSortingEventUIParam): void;
}

interface ColumnSortingEventUIParam {
}

interface ColumnSortedEvent {
	(event: Event, ui: ColumnSortedEventUIParam): void;
}

interface ColumnSortedEventUIParam {
}

interface ModalDialogSortingChangedEvent {
	(event: Event, ui: ModalDialogSortingChangedEventUIParam): void;
}

interface ModalDialogSortingChangedEventUIParam {
}

interface ModalDialogButtonUnsortClickEvent {
	(event: Event, ui: ModalDialogButtonUnsortClickEventUIParam): void;
}

interface ModalDialogButtonUnsortClickEventUIParam {
}

interface ModalDialogSortClickEvent {
	(event: Event, ui: ModalDialogSortClickEventUIParam): void;
}

interface ModalDialogSortClickEventUIParam {
}

interface IgGridSorting {
	type?: string;
	caseSensitive?: boolean;
	applySortedColumnCss?: boolean;
	sortUrlKey?: string;
	sortUrlKeyAscValue?: string;
	sortUrlKeyDescValue?: string;
	mode?: string;
	customSortFunction?: Function;
	firstSortDirection?: string;
	sortedColumnTooltip?: string;
	modalDialogSortOnClick?: boolean;
	modalDialogSortByButtonText?: string;
	modalDialogResetButtonLabel?: string;
	modalDialogCaptionButtonDesc?: string;
	modalDialogCaptionButtonAsc?: string;
	modalDialogCaptionButtonUnsort?: string;
	modalDialogWidth?: number;
	modalDialogHeight?: string;
	modalDialogAnimationDuration?: number;
	featureChooserText?: string;
	unsortedColumnTooltip?: string;
	columnSettings?: IgGridSortingColumnSetting[];
	modalDialogCaptionText?: string;
	modalDialogButtonApplyText?: string;
	modalDialogButtonCancelText?: string;
	featureChooserSortAsc?: any;
	featureChooserSortDesc?: any;
	persist?: boolean;
	columnSorting?: ColumnSortingEvent;
	columnSorted?: ColumnSortedEvent;
	modalDialogOpening?: ModalDialogOpeningEvent;
	modalDialogOpened?: ModalDialogOpenedEvent;
	modalDialogMoving?: ModalDialogMovingEvent;
	modalDialogClosing?: ModalDialogClosingEvent;
	modalDialogClosed?: ModalDialogClosedEvent;
	modalDialogContentsRendering?: ModalDialogContentsRenderingEvent;
	modalDialogContentsRendered?: ModalDialogContentsRenderedEvent;
	modalDialogSortingChanged?: ModalDialogSortingChangedEvent;
	modalDialogButtonUnsortClick?: ModalDialogButtonUnsortClickEvent;
	modalDialogSortClick?: ModalDialogSortClickEvent;
	modalDialogButtonApplyClick?: ModalDialogButtonApplyClickEvent;
	modalDialogButtonResetClick?: ModalDialogButtonResetClickEvent;
}

interface JQuery {
	igGridSorting(options: IgGridSorting): JQuery;
	igGridSorting(optionLiteral: string, options: IgGridSorting): JQuery;
	igGridSorting(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridSorting(optionLiteral: string, optionName: string): any;
	igGridSorting(methodName: string): any;
}
interface IgGridSummariesColumnSettingSummaryOperand {
	rowDisplayLabel?: string;
	type?: string;
	active?: boolean;
	summaryCalculator?: string;
	order?: number;
	decimalDisplay?: number;
	isGridFormatter?: boolean;
}

interface IgGridSummariesColumnSetting {
	allowSummaries?: boolean;
	columnKey?: string;
	columnIndex?: number;
	summaryOperands?: IgGridSummariesColumnSettingSummaryOperand[];
}

interface SummariesCalculatingEvent {
	(event: Event, ui: SummariesCalculatingEventUIParam): void;
}

interface SummariesCalculatingEventUIParam {
}

interface SummariesCalculatedEvent {
	(event: Event, ui: SummariesCalculatedEventUIParam): void;
}

interface SummariesCalculatedEventUIParam {
}

interface SummariesMethodSelectionChangedEvent {
	(event: Event, ui: SummariesMethodSelectionChangedEventUIParam): void;
}

interface SummariesMethodSelectionChangedEventUIParam {
}

interface SummariesTogglingEvent {
	(event: Event, ui: SummariesTogglingEventUIParam): void;
}

interface SummariesTogglingEventUIParam {
}

interface SummariesToggledEvent {
	(event: Event, ui: SummariesToggledEventUIParam): void;
}

interface SummariesToggledEventUIParam {
}

interface DropDownOKClickedEvent {
	(event: Event, ui: DropDownOKClickedEventUIParam): void;
}

interface DropDownOKClickedEventUIParam {
}

interface DropDownCancelClickedEvent {
	(event: Event, ui: DropDownCancelClickedEventUIParam): void;
}

interface DropDownCancelClickedEventUIParam {
}

interface IgGridSummaries {
	type?: string;
	dialogButtonOKText?: string;
	dialogButtonCancelText?: string;
	calculateRenderMode?: string;
	featureChooserText?: string;
	featureChooserTextHide?: string;
	compactRenderingMode?: string;
	defaultDecimalDisplay?: number;
	showSummariesButton?: boolean;
	summariesResponseKey?: string;
	summaryExprUrlKey?: string;
	callee?: Function;
	dropDownHeight?: number;
	dropDownWidth?: number;
	showDropDownButton?: boolean;
	summaryExecution?: string;
	dropDownDialogAnimationDuration?: number;
	emptyCellText?: string;
	summariesHeaderButtonTooltip?: string;
	resultTemplate?: string;
	isGridFormatter?: boolean;
	columnSettings?: IgGridSummariesColumnSetting[];
	dropDownOpening?: DropDownOpeningEvent;
	dropDownOpened?: DropDownOpenedEvent;
	dropDownClosing?: DropDownClosingEvent;
	dropDownClosed?: DropDownClosedEvent;
	summariesCalculating?: SummariesCalculatingEvent;
	summariesCalculated?: SummariesCalculatedEvent;
	summariesMethodSelectionChanged?: SummariesMethodSelectionChangedEvent;
	summariesToggling?: SummariesTogglingEvent;
	summariesToggled?: SummariesToggledEvent;
	dropDownOKClicked?: DropDownOKClickedEvent;
	dropDownCancelClicked?: DropDownCancelClickedEvent;
}

interface JQuery {
	igGridSummaries(options: IgGridSummaries): JQuery;
	igGridSummaries(optionLiteral: string, options: IgGridSummaries): JQuery;
	igGridSummaries(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridSummaries(optionLiteral: string, optionName: string): any;
	igGridSummaries(methodName: string): any;
}
interface IgGridTooltipsColumnSettings {
	columnKey?: string;
	columnIndex?: number;
	allowTooltips?: boolean;
}

interface IgGridTooltips {
	visibility?: string;
	style?: string;
	showDelay?: number;
	hideDelay?: number;
	columnSettings?: IgGridTooltipsColumnSettings;
	fadeTimespan?: number;
	cursorLeftOffset?: number;
	cursorTopOffset?: number;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
}

interface JQuery {
	igGridTooltips(options: IgGridTooltips): JQuery;
	igGridTooltips(optionLiteral: string, options: IgGridTooltips): JQuery;
	igGridTooltips(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridTooltips(optionLiteral: string, optionName: string): any;
	igGridTooltips(methodName: string): any;
}
interface IgGridUpdatingColumnSetting {
	columnKey?: string;
	editorType?: string;
	editorProvider?: any;
	editorOptions?: any;
	required?: boolean;
	readOnly?: boolean;
	validation?: boolean;
	defaultValue?: any;
}

interface EditRowStartingEvent {
	(event: Event, ui: EditRowStartingEventUIParam): void;
}

interface EditRowStartingEventUIParam {
}

interface EditRowStartedEvent {
	(event: Event, ui: EditRowStartedEventUIParam): void;
}

interface EditRowStartedEventUIParam {
}

interface EditRowEndingEvent {
	(event: Event, ui: EditRowEndingEventUIParam): void;
}

interface EditRowEndingEventUIParam {
}

interface EditRowEndedEvent {
	(event: Event, ui: EditRowEndedEventUIParam): void;
}

interface EditRowEndedEventUIParam {
}

interface EditCellStartingEvent {
	(event: Event, ui: EditCellStartingEventUIParam): void;
}

interface EditCellStartingEventUIParam {
}

interface EditCellStartedEvent {
	(event: Event, ui: EditCellStartedEventUIParam): void;
}

interface EditCellStartedEventUIParam {
}

interface EditCellEndingEvent {
	(event: Event, ui: EditCellEndingEventUIParam): void;
}

interface EditCellEndingEventUIParam {
}

interface EditCellEndedEvent {
	(event: Event, ui: EditCellEndedEventUIParam): void;
}

interface EditCellEndedEventUIParam {
}

interface RowAddingEvent {
	(event: Event, ui: RowAddingEventUIParam): void;
}

interface RowAddingEventUIParam {
}

interface RowAddedEvent {
	(event: Event, ui: RowAddedEventUIParam): void;
}

interface RowAddedEventUIParam {
}

interface RowDeletingEvent {
	(event: Event, ui: RowDeletingEventUIParam): void;
}

interface RowDeletingEventUIParam {
}

interface RowDeletedEvent {
	(event: Event, ui: RowDeletedEventUIParam): void;
}

interface RowDeletedEventUIParam {
}

interface DataDirtyEvent {
	(event: Event, ui: DataDirtyEventUIParam): void;
}

interface DataDirtyEventUIParam {
}

interface GeneratePrimaryKeyValueEvent {
	(event: Event, ui: GeneratePrimaryKeyValueEventUIParam): void;
}

interface GeneratePrimaryKeyValueEventUIParam {
}

interface RowEditDialogOpeningEvent {
	(event: Event, ui: RowEditDialogOpeningEventUIParam): void;
}

interface RowEditDialogOpeningEventUIParam {
}

interface RowEditDialogOpenedEvent {
	(event: Event, ui: RowEditDialogOpenedEventUIParam): void;
}

interface RowEditDialogOpenedEventUIParam {
}

interface RowEditDialogContentsRenderingEvent {
	(event: Event, ui: RowEditDialogContentsRenderingEventUIParam): void;
}

interface RowEditDialogContentsRenderingEventUIParam {
}

interface RowEditDialogContentsRenderedEvent {
	(event: Event, ui: RowEditDialogContentsRenderedEventUIParam): void;
}

interface RowEditDialogContentsRenderedEventUIParam {
}

interface RowEditDialogClosingEvent {
	(event: Event, ui: RowEditDialogClosingEventUIParam): void;
}

interface RowEditDialogClosingEventUIParam {
}

interface RowEditDialogClosedEvent {
	(event: Event, ui: RowEditDialogClosedEventUIParam): void;
}

interface RowEditDialogClosedEventUIParam {
}

interface IgGridUpdating {
	columnSettings?: IgGridUpdatingColumnSetting[];
	editMode?: string;
	showReadonlyEditors?: boolean;
	enableDeleteRow?: boolean;
	enableAddRow?: boolean;
	validation?: boolean;
	doneLabel?: string;
	doneTooltip?: string;
	cancelLabel?: string;
	cancelTooltip?: string;
	addRowLabel?: string;
	addRowTooltip?: string;
	deleteRowLabel?: string;
	deleteRowTooltip?: string;
	rowEditDialogCaptionLabel?: string;
	showDoneCancelButtons?: boolean;
	enableDataDirtyException?: boolean;
	rowEditDialogContentHeight?: string;
	rowEditDialogFieldWidth?: number;
	rowEditDialogWidth?: string;
	rowEditDialogHeight?: string;
	startEditTriggers?: string;
	rowEditDialogContainment?: string;
	rowEditDialogOkCancelButtonWidth?: string;
	rowEditDialogRowTemplate?: string;
	rowEditDialogRowTemplateID?: string;
	horizontalMoveOnEnter?: boolean;
	excelNavigationMode?: boolean;
	saveChangesSuccessHandler?: string;
	saveChangesErrorHandler?: string;
	swipeDistance?: string;
	editRowStarting?: EditRowStartingEvent;
	editRowStarted?: EditRowStartedEvent;
	editRowEnding?: EditRowEndingEvent;
	editRowEnded?: EditRowEndedEvent;
	editCellStarting?: EditCellStartingEvent;
	editCellStarted?: EditCellStartedEvent;
	editCellEnding?: EditCellEndingEvent;
	editCellEnded?: EditCellEndedEvent;
	rowAdding?: RowAddingEvent;
	rowAdded?: RowAddedEvent;
	rowDeleting?: RowDeletingEvent;
	rowDeleted?: RowDeletedEvent;
	dataDirty?: DataDirtyEvent;
	generatePrimaryKeyValue?: GeneratePrimaryKeyValueEvent;
	rowEditDialogOpening?: RowEditDialogOpeningEvent;
	rowEditDialogOpened?: RowEditDialogOpenedEvent;
	rowEditDialogContentsRendering?: RowEditDialogContentsRenderingEvent;
	rowEditDialogContentsRendered?: RowEditDialogContentsRenderedEvent;
	rowEditDialogClosing?: RowEditDialogClosingEvent;
	rowEditDialogClosed?: RowEditDialogClosedEvent;
}

interface IgEditorFilter {
}

declare module Infragistics {
export class EditorProvider  {
	public createEditor(updating: Object, key: Object, columnSetting: Object, tabIndex: Object, format: Object, dataType: Object, cellValue: Object, element: Object): void;
	public getValue(): void;
	public setValue(val: Object, updating: Object): void;
	public setFocus(toggle: Object): void;
	public setSize(width: Object, height: Object): void;
	public removeFromParent(): void;
	public destroy(): void;
	public validator(): void;
	public validate(noLabel: Object): void;
	public isValid(): void;
}
}

declare module Infragistics {
export class EditorProviderDefault extends EditorProvider {
	public createEditor(updating: Object, key: Object, columnSetting: Object, tabIndex: Object, format: Object, dataType: Object, cellValue: Object, element: Object): void;
	public getValue(): void;
	public setValue(val: Object): void;
	public setSize(width: Object, height: Object): void;
	public setFocus(): void;
	public removeFromParent(): void;
	public destroy(): void;
	public validator(): void;
	public validate(noLabel: Object): void;
	public isValid(): void;
}
}

declare module Infragistics {
export class EditorProviderCombo extends EditorProvider {
	public createEditor(updating: Object, key: Object, columnSetting: Object, tabIndex: Object, format: Object, dataType: Object, cellValue: Object, element: Object): void;
	public getValue(): void;
	public setValue(val: Object): void;
	public setSize(width: Object, height: Object): void;
	public setFocus(): void;
	public removeFromParent(): void;
	public validator(): void;
	public destroy(): void;
}
}

declare module Infragistics {
export class EditorProviderRating extends EditorProvider {
	public createEditor(updating: Object, key: Object, columnSetting: Object, tabIndex: Object, format: Object, dataType: Object, cellValue: Object, element: Object): void;
	public getValue(): void;
	public setValue(val: Object): void;
	public setSize(width: Object, height: Object): void;
	public setFocus(): void;
	public validator(): void;
	public destroy(): void;
}
}

declare module Infragistics {
export class EditorProviderCheckbox extends EditorProvider {
	public createEditor(updating: Object, key: Object, columnSetting: Object, tabIndex: Object, format: Object, dataType: Object): void;
	public el(depth: Object): void;
	public getValue(): void;
	public setValue(val: Object, updating: Object): void;
	public css(foc: Object, on: Object): void;
	public setSize(width: Object, height: Object): void;
	public setFocus(toggle: Object): void;
}
}

interface JQuery {
	igGridUpdating(options: IgGridUpdating): JQuery;
	igGridUpdating(optionLiteral: string, options: IgGridUpdating): JQuery;
	igGridUpdating(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igGridUpdating(optionLiteral: string, optionName: string): any;
	igGridUpdating(methodName: string): any;
}
interface JQuery {
	igEditorFilter(options: IgEditorFilter): JQuery;
	igEditorFilter(optionLiteral: string, options: IgEditorFilter): JQuery;
	igEditorFilter(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igEditorFilter(optionLiteral: string, optionName: string): any;
	igEditorFilter(methodName: string): any;
}
interface ActionExecutingEvent {
	(event: Event, ui: ActionExecutingEventUIParam): void;
}

interface ActionExecutingEventUIParam {
}

interface ActionExecutedEvent {
	(event: Event, ui: ActionExecutedEventUIParam): void;
}

interface ActionExecutedEventUIParam {
}

interface ToolbarCollapsingEvent {
	(event: Event, ui: ToolbarCollapsingEventUIParam): void;
}

interface ToolbarCollapsingEventUIParam {
}

interface ToolbarCollapsedEvent {
	(event: Event, ui: ToolbarCollapsedEventUIParam): void;
}

interface ToolbarCollapsedEventUIParam {
}

interface ToolbarExpandingEvent {
	(event: Event, ui: ToolbarExpandingEventUIParam): void;
}

interface ToolbarExpandingEventUIParam {
}

interface ToolbarExpandedEvent {
	(event: Event, ui: ToolbarExpandedEventUIParam): void;
}

interface ToolbarExpandedEventUIParam {
}

interface CutEvent {
	(event: Event, ui: CutEventUIParam): void;
}

interface CutEventUIParam {
}

interface CopyEvent {
	(event: Event, ui: CopyEventUIParam): void;
}

interface CopyEventUIParam {
}

interface PasteEvent {
	(event: Event, ui: PasteEventUIParam): void;
}

interface PasteEventUIParam {
}

interface UndoEvent {
	(event: Event, ui: UndoEventUIParam): void;
}

interface UndoEventUIParam {
}

interface RedoEvent {
	(event: Event, ui: RedoEventUIParam): void;
}

interface RedoEventUIParam {
}

interface IgHtmlEditor {
	showFormattingToolbar?: boolean;
	showTextToolbar?: boolean;
	showInsertObjectToolbar?: boolean;
	showCopyPasteToolbar?: boolean;
	width?: number;
	height?: number;
	toolbarSettings?: any[];
	customToolbars?: any[];
	inputName?: string;
	value?: string;
	rendered?: RenderedEvent;
	rendering?: RenderingEvent;
	actionExecuting?: ActionExecutingEvent;
	actionExecuted?: ActionExecutedEvent;
	toolbarCollapsing?: ToolbarCollapsingEvent;
	toolbarCollapsed?: ToolbarCollapsedEvent;
	toolbarExpanding?: ToolbarExpandingEvent;
	toolbarExpanded?: ToolbarExpandedEvent;
	cut?: CutEvent;
	copy?: CopyEvent;
	paste?: PasteEvent;
	undo?: UndoEvent;
	redo?: RedoEvent;
}

interface IgPathFinder {
	items?: any;
}

interface ApplyEvent {
	(event: Event, ui: ApplyEventUIParam): void;
}

interface ApplyEventUIParam {
}

interface CancelEvent {
	(event: Event, ui: CancelEventUIParam): void;
}

interface CancelEventUIParam {
}

interface ShowEvent {
	(event: Event, ui: ShowEventUIParam): void;
}

interface ShowEventUIParam {
}

interface HideEvent {
	(event: Event, ui: HideEventUIParam): void;
}

interface HideEventUIParam {
}

interface IgHtmlEditorPopover {
	item?: any;
	target?: any;
	isHidden?: boolean;
	apply?: ApplyEvent;
	cancel?: CancelEvent;
	show?: ShowEvent;
	hide?: HideEvent;
}

interface IgLinkPropertiesDialog {
}

interface IgTablePropertiesDialog {
}

interface IgImagePropertiesDialog {
}

declare module Infragistics {
export class SelectionWrapper  {
	constructor(NODE: any);
	public init(window: Object, callback: Object): void;
	public surroundContents(wrapEl: Object): void;
	public getSelectedItem(): void;
	public getSelectionAsText(): void;
	public select(element: Object): void;
	public insertElement(element: Object): void;
	public applyStyle(): void;
	public execCommand(name: Object, args: Object): void;
	public replaceNode(newNode: Object): void;
	public insertTable(table: Object): void;
	public focus(): void;
}
}

declare module Infragistics {
export class ToolbarHelper  {
	public init(window: Object, toolbars: Object): void;
	public analyse(el: Object): void;
}
}

interface JQuery {
	igHtmlEditor(options: IgHtmlEditor): JQuery;
	igHtmlEditor(optionLiteral: string, options: IgHtmlEditor): JQuery;
	igHtmlEditor(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igHtmlEditor(optionLiteral: string, optionName: string): any;
	igHtmlEditor(methodName: string): any;
}
interface JQuery {
	igPathFinder(options: IgPathFinder): JQuery;
	igPathFinder(optionLiteral: string, options: IgPathFinder): JQuery;
	igPathFinder(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPathFinder(optionLiteral: string, optionName: string): any;
	igPathFinder(methodName: string): any;
}
interface JQuery {
	igHtmlEditorPopover(options: IgHtmlEditorPopover): JQuery;
	igHtmlEditorPopover(optionLiteral: string, options: IgHtmlEditorPopover): JQuery;
	igHtmlEditorPopover(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igHtmlEditorPopover(optionLiteral: string, optionName: string): any;
	igHtmlEditorPopover(methodName: string): any;
}
interface JQuery {
	igLinkPropertiesDialog(options: IgLinkPropertiesDialog): JQuery;
	igLinkPropertiesDialog(optionLiteral: string, options: IgLinkPropertiesDialog): JQuery;
	igLinkPropertiesDialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igLinkPropertiesDialog(optionLiteral: string, optionName: string): any;
	igLinkPropertiesDialog(methodName: string): any;
}
interface JQuery {
	igTablePropertiesDialog(options: IgTablePropertiesDialog): JQuery;
	igTablePropertiesDialog(optionLiteral: string, options: IgTablePropertiesDialog): JQuery;
	igTablePropertiesDialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTablePropertiesDialog(optionLiteral: string, optionName: string): any;
	igTablePropertiesDialog(methodName: string): any;
}
interface JQuery {
	igImagePropertiesDialog(options: IgImagePropertiesDialog): JQuery;
	igImagePropertiesDialog(optionLiteral: string, options: IgImagePropertiesDialog): JQuery;
	igImagePropertiesDialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igImagePropertiesDialog(optionLiteral: string, optionName: string): any;
	igImagePropertiesDialog(methodName: string): any;
}
interface IgLayoutManagerGridLayout {
	cols?: number;
	rows?: number;
	columnWidth?: any;
	columnHeight?: any;
	marginLeft?: number;
	marginTop?: number;
	rearrangeItems?: boolean;
	overrideConfigOnSetOption?: boolean;
	animationDuration?: number;
}

interface IgLayoutManagerBorderLayout {
	showHeader?: boolean;
	showFooter?: boolean;
	showLeft?: boolean;
	showRight?: boolean;
	leftWidth?: string;
	rightWidth?: string;
}

interface IgLayoutManagerItem {
	rowSpan?: number;
	colSpan?: number;
	colIndex?: number;
	rowIndex?: number;
	width?: string;
	height?: string;
}

interface ItemRenderingEvent {
	(event: Event, ui: ItemRenderingEventUIParam): void;
}

interface ItemRenderingEventUIParam {
}

interface ItemRenderedEvent {
	(event: Event, ui: ItemRenderedEventUIParam): void;
}

interface ItemRenderedEventUIParam {
}

interface InternalResizingEvent {
	(event: Event, ui: InternalResizingEventUIParam): void;
}

interface InternalResizingEventUIParam {
}

interface InternalResizedEvent {
	(event: Event, ui: InternalResizedEventUIParam): void;
}

interface InternalResizedEventUIParam {
}

interface IgLayoutManager {
	layoutMode?: string;
	itemCount?: number;
	gridLayout?: IgLayoutManagerGridLayout;
	borderLayout?: IgLayoutManagerBorderLayout;
	items?: IgLayoutManagerItem[];
	width?: string;
	height?: string;
	itemRendering?: ItemRenderingEvent;
	itemRendered?: ItemRenderedEvent;
	rendered?: RenderedEvent;
	internalResizing?: InternalResizingEvent;
	internalResized?: InternalResizedEvent;
}

interface JQuery {
	igLayoutManager(options: IgLayoutManager): JQuery;
	igLayoutManager(optionLiteral: string, options: IgLayoutManager): JQuery;
	igLayoutManager(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igLayoutManager(optionLiteral: string, optionName: string): any;
	igLayoutManager(methodName: string): any;
}
interface IgMapCrosshairPoint {
	x?: number;
	y?: number;
}

interface IgMapBackgroundContent {
	type?: string;
	key?: string;
	parameter?: string;
	tilePath?: string;
	imagerySet?: string;
	bingUrl?: string;
}

interface IgMapSeries {
	type?: string;
	name?: string;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	remove?: boolean;
	showTooltip?: boolean;
	shapeDataSource?: string;
	databaseSource?: string;
	triangulationDataSource?: string;
	legendItemBadgeTemplate?: any;
	legendItemTemplate?: any;
	discreteLegendItemTemplate?: any;
	transitionDuration?: number;
	resolution?: number;
	title?: string;
	brush?: string;
	outline?: string;
	thickness?: number;
	trianglesSource?: any;
	triangleVertexMemberPath1?: string;
	triangleVertexMemberPath2?: string;
	triangleVertexMemberPath3?: string;
	colorScale?: any;
	colorMemberPath?: string;
	visibleFromScale?: number;
	longitudeMemberPath?: string;
	latitudeMemberPath?: string;
	markerType?: string;
	markerTemplate?: any;
	shapeMemberPath?: string;
	shapeStyleSelector?: any;
	shapeStyle?: any;
	markerBrush?: string;
	markerOutline?: string;
	markerCollisionAvoidance?: string;
	fillScale?: any;
	fillMemberPath?: string;
	trendLineType?: string;
	trendLineBrush?: string;
	trendLineThickness?: number;
	trendLinePeriod?: number;
	trendLineZIndex?: number;
	maximumMarkers?: number;
	radiusMemberPath?: string;
	radiusScale?: any;
	labelMemberPath?: string;
	clipSeriesToBounds?: boolean;
	valueMemberPath?: string;
	unknownValuePlotting?: string;
	angleMemberPath?: number;
	useCartesianInterpolation?: boolean;
	stiffness?: number;
	negativeBrush?: string;
	splineType?: string;
	lowMemberPath?: string;
	highMemberPath?: string;
	openMemberPath?: string;
	closeMemberPath?: string;
	volumeMemberPath?: string;
	ignoreFirst?: number;
	period?: number;
	shortPeriod?: number;
	longPeriod?: number;
	valueResolver?: any;
	shapeFilterResolution?: number;
	useBruteForce?: boolean;
	progressiveLoad?: boolean;
	mouseOverEnabled?: boolean;
	useSquareCutoffStyle?: boolean;
	heatMinimum?: number;
	heatMaximum?: number;
}

interface TriangulationStatusChangedEvent {
	(event: Event, ui: TriangulationStatusChangedEventUIParam): void;
}

interface TriangulationStatusChangedEventUIParam {
}

interface IgMap {
	width?: number;
	height?: number;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	autoMarginWidth?: number;
	autoMarginHeight?: number;
	crosshairVisibility?: string;
	crosshairPoint?: IgMapCrosshairPoint;
	plotAreaBackground?: string;
	defaultInteraction?: string;
	dragModifier?: string;
	panModifier?: string;
	previewRect?: any;
	windowRect?: any;
	zoomable?: boolean;
	windowScale?: number;
	windowResponse?: string;
	windowRectMinWidth?: number;
	windowPositionHorizontal?: number;
	windowPositionVertical?: number;
	circleMarkerTemplate?: any;
	triangleMarkerTemplate?: any;
	pyramidMarkerTemplate?: any;
	squareMarkerTemplate?: any;
	diamondMarkerTemplate?: any;
	pentagonMarkerTemplate?: any;
	hexagonMarkerTemplate?: any;
	tetragramMarkerTemplate?: any;
	pentagramMarkerTemplate?: any;
	hexagramMarkerTemplate?: any;
	overviewPlusDetailPaneBackgroundImageUri?: string;
	backgroundContent?: IgMapBackgroundContent;
	series?: IgMapSeries[];
	theme?: string;
	tooltipShowing?: TooltipShowingEvent;
	tooltipShown?: TooltipShownEvent;
	tooltipHiding?: TooltipHidingEvent;
	tooltipHidden?: TooltipHiddenEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
	seriesCursorMouseMove?: SeriesCursorMouseMoveEvent;
	seriesMouseLeftButtonDown?: SeriesMouseLeftButtonDownEvent;
	seriesMouseLeftButtonUp?: SeriesMouseLeftButtonUpEvent;
	seriesMouseMove?: SeriesMouseMoveEvent;
	seriesMouseEnter?: SeriesMouseEnterEvent;
	seriesMouseLeave?: SeriesMouseLeaveEvent;
	windowRectChanged?: WindowRectChangedEvent;
	gridAreaRectChanged?: GridAreaRectChangedEvent;
	refreshCompleted?: RefreshCompletedEvent;
	triangulationStatusChanged?: TriangulationStatusChangedEvent;
}

interface ShapeDataSourceSettings {
	id?: string;
	shapefileSource?: string;
	databaseSource?: string;
	callback?: Function;
	callee?: any;
	transformRecord?: Function;
	transformPoint?: Function;
	transformBounds?: Function;
	importCompleted?: Function;
}

declare module Infragistics {
export class ShapeDataSource  {
	constructor(settings: ShapeDataSourceSettings);
	public init(options: Object): void;
	public dataBind(): void;
	public isBound(): boolean;
	public converter(): Object;
}
}

interface TriangulationDataSourceSettings {
	id?: string;
	source?: string;
	triangulationSource?: string;
	callback?: Function;
	callee?: any;
}

declare module Infragistics {
export class TriangulationDataSource  {
	constructor(settings: TriangulationDataSourceSettings);
	public init(options: Object): void;
	public dataBind(): void;
	public isBound(): boolean;
	public converter(): Object;
}
}

interface JQuery {
	igMap(options: IgMap): JQuery;
	igMap(optionLiteral: string, options: IgMap): JQuery;
	igMap(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igMap(optionLiteral: string, optionName: string): any;
	igMap(methodName: string): any;
}
interface IgPivotDataSelectorDataSourceOptionsXmlaOptionsRequestOptions {
	withCredentials?: boolean;
	beforeSend?: Function;
}

interface IgPivotDataSelectorDataSourceOptionsXmlaOptionsMdxSettings {
	nonEmptyOnRows?: boolean;
	nonEmptyOnColumns?: boolean;
	addCalculatedMembersOnRows?: boolean;
	addCalculatedMembersOnColumns?: boolean;
	dimensionPropertiesOnRows?: any[];
	dimensionPropertiesOnColumns?: any[];
}

interface IgPivotDataSelectorDataSourceOptionsXmlaOptions {
	serverUrl?: string;
	catalog?: string;
	cube?: string;
	measureGroup?: string;
	requestOptions?: IgPivotDataSelectorDataSourceOptionsXmlaOptionsRequestOptions;
	enableResultCache?: boolean;
	discoverProperties?: any;
	executeProperties?: any;
	mdxSettings?: IgPivotDataSelectorDataSourceOptionsXmlaOptionsMdxSettings;
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure {
	name?: string;
	caption?: string;
	aggregator?: Function;
	displayFolder?: string;
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension {
	name?: string;
	caption?: string;
	measures?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure[];
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel {
	name?: string;
	caption?: string;
	memberProvider?: Function;
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie {
	name?: string;
	caption?: string;
	displayFolder?: string;
	levels?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel[];
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimension {
	name?: string;
	caption?: string;
	hierarchies?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie[];
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCube {
	name?: string;
	caption?: string;
	measuresDimension?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension;
	dimensions?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCubeDimension[];
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadata {
	cube?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadataCube;
}

interface IgPivotDataSelectorDataSourceOptionsFlatDataOptions {
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	metadata?: IgPivotDataSelectorDataSourceOptionsFlatDataOptionsMetadata;
}

interface IgPivotDataSelectorDataSourceOptions {
	xmlaOptions?: IgPivotDataSelectorDataSourceOptionsXmlaOptions;
	flatDataOptions?: IgPivotDataSelectorDataSourceOptionsFlatDataOptions;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
}

interface IgPivotDataSelectorDragAndDropSettings {
	appendTo?: string;
	containment?: string;
	zIndex?: number;
}

interface DataSelectorRenderedEvent {
	(event: Event, ui: DataSelectorRenderedEventUIParam): void;
}

interface DataSelectorRenderedEventUIParam {
}

interface DataSourceInitializedEvent {
	(event: Event, ui: DataSourceInitializedEventUIParam): void;
}

interface DataSourceInitializedEventUIParam {
}

interface DataSourceUpdatedEvent {
	(event: Event, ui: DataSourceUpdatedEventUIParam): void;
}

interface DataSourceUpdatedEventUIParam {
}

interface DeferUpdateChangedEvent {
	(event: Event, ui: DeferUpdateChangedEventUIParam): void;
}

interface DeferUpdateChangedEventUIParam {
}

interface DragStartEvent {
	(event: Event, ui: DragStartEventUIParam): void;
}

interface DragStartEventUIParam {
}

interface DragEvent {
	(event: Event, ui: DragEventUIParam): void;
}

interface DragEventUIParam {
}

interface DragStopEvent {
	(event: Event, ui: DragStopEventUIParam): void;
}

interface DragStopEventUIParam {
}

interface MetadataDroppingEvent {
	(event: Event, ui: MetadataDroppingEventUIParam): void;
}

interface MetadataDroppingEventUIParam {
}

interface MetadataDroppedEvent {
	(event: Event, ui: MetadataDroppedEventUIParam): void;
}

interface MetadataDroppedEventUIParam {
}

interface MetadataRemovingEvent {
	(event: Event, ui: MetadataRemovingEventUIParam): void;
}

interface MetadataRemovingEventUIParam {
}

interface MetadataRemovedEvent {
	(event: Event, ui: MetadataRemovedEventUIParam): void;
}

interface MetadataRemovedEventUIParam {
}

interface FilterDropDownOpeningEvent {
	(event: Event, ui: FilterDropDownOpeningEventUIParam): void;
}

interface FilterDropDownOpeningEventUIParam {
}

interface FilterDropDownOpenedEvent {
	(event: Event, ui: FilterDropDownOpenedEventUIParam): void;
}

interface FilterDropDownOpenedEventUIParam {
}

interface FilterMembersLoadedEvent {
	(event: Event, ui: FilterMembersLoadedEventUIParam): void;
}

interface FilterMembersLoadedEventUIParam {
}

interface FilterDropDownOkEvent {
	(event: Event, ui: FilterDropDownOkEventUIParam): void;
}

interface FilterDropDownOkEventUIParam {
}

interface FilterDropDownClosingEvent {
	(event: Event, ui: FilterDropDownClosingEventUIParam): void;
}

interface FilterDropDownClosingEventUIParam {
}

interface FilterDropDownClosedEvent {
	(event: Event, ui: FilterDropDownClosedEventUIParam): void;
}

interface FilterDropDownClosedEventUIParam {
}

interface IgPivotDataSelector {
	width?: string;
	height?: string;
	dataSource?: any;
	dataSourceOptions?: IgPivotDataSelectorDataSourceOptions;
	deferUpdate?: boolean;
	dragAndDropSettings?: IgPivotDataSelectorDragAndDropSettings;
	dropDownParent?: string;
	disableRowsDropArea?: boolean;
	disableColumnsDropArea?: boolean;
	disableMeasuresDropArea?: boolean;
	disableFiltersDropArea?: boolean;
	customMoveValidation?: Function;
	dataSelectorRendered?: DataSelectorRenderedEvent;
	dataSourceInitialized?: DataSourceInitializedEvent;
	dataSourceUpdated?: DataSourceUpdatedEvent;
	deferUpdateChanged?: DeferUpdateChangedEvent;
	dragStart?: DragStartEvent;
	drag?: DragEvent;
	dragStop?: DragStopEvent;
	metadataDropping?: MetadataDroppingEvent;
	metadataDropped?: MetadataDroppedEvent;
	metadataRemoving?: MetadataRemovingEvent;
	metadataRemoved?: MetadataRemovedEvent;
	filterDropDownOpening?: FilterDropDownOpeningEvent;
	filterDropDownOpened?: FilterDropDownOpenedEvent;
	filterMembersLoaded?: FilterMembersLoadedEvent;
	filterDropDownOk?: FilterDropDownOkEvent;
	filterDropDownClosing?: FilterDropDownClosingEvent;
	filterDropDownClosed?: FilterDropDownClosedEvent;
}

interface JQuery {
	igPivotDataSelector(options: IgPivotDataSelector): JQuery;
	igPivotDataSelector(optionLiteral: string, options: IgPivotDataSelector): JQuery;
	igPivotDataSelector(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPivotDataSelector(optionLiteral: string, optionName: string): any;
	igPivotDataSelector(methodName: string): any;
}
interface IgPivotGridDataSourceOptionsXmlaOptionsRequestOptions {
	withCredentials?: boolean;
	beforeSend?: Function;
}

interface IgPivotGridDataSourceOptionsXmlaOptionsMdxSettings {
	nonEmptyOnRows?: boolean;
	nonEmptyOnColumns?: boolean;
	addCalculatedMembersOnRows?: boolean;
	addCalculatedMembersOnColumns?: boolean;
	dimensionPropertiesOnRows?: any[];
	dimensionPropertiesOnColumns?: any[];
}

interface IgPivotGridDataSourceOptionsXmlaOptions {
	serverUrl?: string;
	catalog?: string;
	cube?: string;
	measureGroup?: string;
	requestOptions?: IgPivotGridDataSourceOptionsXmlaOptionsRequestOptions;
	enableResultCache?: boolean;
	discoverProperties?: any;
	executeProperties?: any;
	mdxSettings?: IgPivotGridDataSourceOptionsXmlaOptionsMdxSettings;
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure {
	name?: string;
	caption?: string;
	aggregator?: Function;
	displayFolder?: string;
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension {
	name?: string;
	caption?: string;
	measures?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure[];
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel {
	name?: string;
	caption?: string;
	memberProvider?: Function;
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie {
	name?: string;
	caption?: string;
	displayFolder?: string;
	levels?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel[];
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimension {
	name?: string;
	caption?: string;
	hierarchies?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie[];
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCube {
	name?: string;
	caption?: string;
	measuresDimension?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension;
	dimensions?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCubeDimension[];
}

interface IgPivotGridDataSourceOptionsFlatDataOptionsMetadata {
	cube?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadataCube;
}

interface IgPivotGridDataSourceOptionsFlatDataOptions {
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	metadata?: IgPivotGridDataSourceOptionsFlatDataOptionsMetadata;
}

interface IgPivotGridDataSourceOptions {
	xmlaOptions?: IgPivotGridDataSourceOptionsXmlaOptions;
	flatDataOptions?: IgPivotGridDataSourceOptionsFlatDataOptions;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
}

interface IgPivotGridLevelSortDirection {
	levelUniqueName?: string;
	sortDirection?: string;
}

interface IgPivotGridGridOptionsFeatures {
}

interface IgPivotGridGridOptions {
	defaultColumnWidth?: string;
	fixedHeaders?: boolean;
	caption?: string;
	features?: IgPivotGridGridOptionsFeatures;
	tabIndex?: number;
	alternateRowStyles?: boolean;
	enableHoverStyles?: boolean;
}

interface IgPivotGridDragAndDropSettings {
	appendTo?: string;
	containment?: string;
	zIndex?: number;
}

interface PivotGridHeadersRenderedEvent {
	(event: Event, ui: PivotGridHeadersRenderedEventUIParam): void;
}

interface PivotGridHeadersRenderedEventUIParam {
}

interface PivotGridRenderedEvent {
	(event: Event, ui: PivotGridRenderedEventUIParam): void;
}

interface PivotGridRenderedEventUIParam {
}

interface TupleMemberExpandingEvent {
	(event: Event, ui: TupleMemberExpandingEventUIParam): void;
}

interface TupleMemberExpandingEventUIParam {
}

interface TupleMemberExpandedEvent {
	(event: Event, ui: TupleMemberExpandedEventUIParam): void;
}

interface TupleMemberExpandedEventUIParam {
}

interface TupleMemberCollapsingEvent {
	(event: Event, ui: TupleMemberCollapsingEventUIParam): void;
}

interface TupleMemberCollapsingEventUIParam {
}

interface TupleMemberCollapsedEvent {
	(event: Event, ui: TupleMemberCollapsedEventUIParam): void;
}

interface TupleMemberCollapsedEventUIParam {
}

interface SortingEvent {
	(event: Event, ui: SortingEventUIParam): void;
}

interface SortingEventUIParam {
}

interface SortedEvent {
	(event: Event, ui: SortedEventUIParam): void;
}

interface SortedEventUIParam {
}

interface HeadersSortingEvent {
	(event: Event, ui: HeadersSortingEventUIParam): void;
}

interface HeadersSortingEventUIParam {
}

interface HeadersSortedEvent {
	(event: Event, ui: HeadersSortedEventUIParam): void;
}

interface HeadersSortedEventUIParam {
}

interface IgPivotGrid {
	width?: string;
	height?: string;
	dataSource?: any;
	dataSourceOptions?: IgPivotGridDataSourceOptions;
	deferUpdate?: boolean;
	isParentInFrontForColumns?: boolean;
	isParentInFrontForRows?: boolean;
	compactColumnHeaders?: boolean;
	compactRowHeaders?: boolean;
	compactColumnHeaderIndentation?: number;
	compactRowHeaderIndentation?: number;
	defaultRowHeaderWidth?: number;
	allowSorting?: boolean;
	firstSortDirection?: string;
	allowHeaderRowsSorting?: boolean;
	allowHeaderColumnsSorting?: boolean;
	levelSortDirections?: IgPivotGridLevelSortDirection[];
	firstLevelSortDirection?: string;
	gridOptions?: IgPivotGridGridOptions;
	dragAndDropSettings?: IgPivotGridDragAndDropSettings;
	dropDownParent?: string;
	disableRowsDropArea?: boolean;
	disableColumnsDropArea?: boolean;
	disableMeasuresDropArea?: boolean;
	disableFiltersDropArea?: boolean;
	hideRowsDropArea?: boolean;
	hideColumnsDropArea?: boolean;
	hideMeasuresDropArea?: boolean;
	hideFiltersDropArea?: boolean;
	customMoveValidation?: Function;
	dataSourceInitialized?: DataSourceInitializedEvent;
	dataSourceUpdated?: DataSourceUpdatedEvent;
	pivotGridHeadersRendered?: PivotGridHeadersRenderedEvent;
	pivotGridRendered?: PivotGridRenderedEvent;
	tupleMemberExpanding?: TupleMemberExpandingEvent;
	tupleMemberExpanded?: TupleMemberExpandedEvent;
	tupleMemberCollapsing?: TupleMemberCollapsingEvent;
	tupleMemberCollapsed?: TupleMemberCollapsedEvent;
	sorting?: SortingEvent;
	sorted?: SortedEvent;
	headersSorting?: HeadersSortingEvent;
	headersSorted?: HeadersSortedEvent;
	dragStart?: DragStartEvent;
	drag?: DragEvent;
	dragStop?: DragStopEvent;
	metadataDropping?: MetadataDroppingEvent;
	metadataDropped?: MetadataDroppedEvent;
	metadataRemoving?: MetadataRemovingEvent;
	metadataRemoved?: MetadataRemovedEvent;
	filterDropDownOpening?: FilterDropDownOpeningEvent;
	filterDropDownOpened?: FilterDropDownOpenedEvent;
	filterMembersLoaded?: FilterMembersLoadedEvent;
	filterDropDownOk?: FilterDropDownOkEvent;
	filterDropDownClosing?: FilterDropDownClosingEvent;
	filterDropDownClosed?: FilterDropDownClosedEvent;
}

interface JQuery {
	igPivotGrid(options: IgPivotGrid): JQuery;
	igPivotGrid(optionLiteral: string, options: IgPivotGrid): JQuery;
	igPivotGrid(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPivotGrid(optionLiteral: string, optionName: string): any;
	igPivotGrid(methodName: string): any;
}
interface IgPivotViewDataSourceOptionsXmlaOptionsRequestOptions {
	withCredentials?: boolean;
	beforeSend?: Function;
}

interface IgPivotViewDataSourceOptionsXmlaOptionsMdxSettings {
	nonEmptyOnRows?: boolean;
	nonEmptyOnColumns?: boolean;
	addCalculatedMembersOnRows?: boolean;
	addCalculatedMembersOnColumns?: boolean;
	dimensionPropertiesOnRows?: any[];
	dimensionPropertiesOnColumns?: any[];
}

interface IgPivotViewDataSourceOptionsXmlaOptions {
	serverUrl?: string;
	catalog?: string;
	cube?: string;
	measureGroup?: string;
	requestOptions?: IgPivotViewDataSourceOptionsXmlaOptionsRequestOptions;
	enableResultCache?: boolean;
	discoverProperties?: any;
	executeProperties?: any;
	mdxSettings?: IgPivotViewDataSourceOptionsXmlaOptionsMdxSettings;
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure {
	name?: string;
	caption?: string;
	aggregator?: Function;
	displayFolder?: string;
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension {
	name?: string;
	caption?: string;
	measures?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimensionMeasure[];
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel {
	name?: string;
	caption?: string;
	memberProvider?: Function;
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie {
	name?: string;
	caption?: string;
	displayFolder?: string;
	levels?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchieLevel[];
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimension {
	name?: string;
	caption?: string;
	hierarchies?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimensionHierarchie[];
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCube {
	name?: string;
	caption?: string;
	measuresDimension?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeMeasuresDimension;
	dimensions?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCubeDimension[];
}

interface IgPivotViewDataSourceOptionsFlatDataOptionsMetadata {
	cube?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadataCube;
}

interface IgPivotViewDataSourceOptionsFlatDataOptions {
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	metadata?: IgPivotViewDataSourceOptionsFlatDataOptionsMetadata;
}

interface IgPivotViewDataSourceOptions {
	xmlaOptions?: IgPivotViewDataSourceOptionsXmlaOptions;
	flatDataOptions?: IgPivotViewDataSourceOptionsFlatDataOptions;
	measures?: string;
	filters?: string;
	rows?: string;
	columns?: string;
}

interface IgPivotViewPivotGridOptionsLevelSortDirection {
	levelUniqueName?: string;
	sortDirection?: string;
}

interface IgPivotViewPivotGridOptionsGridOptionsFeatures {
}

interface IgPivotViewPivotGridOptionsGridOptions {
	defaultColumnWidth?: string;
	fixedHeaders?: boolean;
	caption?: string;
	features?: IgPivotViewPivotGridOptionsGridOptionsFeatures;
	tabIndex?: number;
	alternateRowStyles?: boolean;
	enableHoverStyles?: boolean;
}

interface IgPivotViewPivotGridOptionsDragAndDropSettings {
	appendTo?: string;
	containment?: string;
	zIndex?: number;
}

interface IgPivotViewPivotGridOptions {
	isParentInFrontForColumns?: boolean;
	isParentInFrontForRows?: boolean;
	compactColumnHeaders?: boolean;
	compactRowHeaders?: boolean;
	compactColumnHeaderIndentation?: number;
	compactRowHeaderIndentation?: number;
	defaultRowHeaderWidth?: number;
	allowSorting?: boolean;
	firstSortDirection?: string;
	allowHeaderRowsSorting?: boolean;
	allowHeaderColumnsSorting?: boolean;
	levelSortDirections?: IgPivotViewPivotGridOptionsLevelSortDirection[];
	firstLevelSortDirection?: string;
	gridOptions?: IgPivotViewPivotGridOptionsGridOptions;
	dragAndDropSettings?: IgPivotViewPivotGridOptionsDragAndDropSettings;
	dropDownParent?: string;
	disableRowsDropArea?: boolean;
	disableColumnsDropArea?: boolean;
	disableMeasuresDropArea?: boolean;
	disableFiltersDropArea?: boolean;
	hideRowsDropArea?: boolean;
	hideColumnsDropArea?: boolean;
	hideMeasuresDropArea?: boolean;
	hideFiltersDropArea?: boolean;
	customMoveValidation?: Function;
}

interface IgPivotViewDataSelectorOptionsDragAndDropSettings {
	appendTo?: string;
	containment?: string;
	zIndex?: number;
}

interface IgPivotViewDataSelectorOptions {
	dragAndDropSettings?: IgPivotViewDataSelectorOptionsDragAndDropSettings;
	dropDownParent?: string;
	customMoveValidation?: Function;
}

interface IgPivotViewPivotGridPanel {
	resizable?: boolean;
	collapsible?: boolean;
	collapsed?: boolean;
	size?: string;
}

interface IgPivotViewDataSelectorPanel {
	location?: string;
	resizable?: boolean;
	collapsible?: boolean;
	collapsed?: boolean;
	size?: string;
}

interface IgPivotView {
	width?: string;
	height?: string;
	dataSource?: any;
	dataSourceOptions?: IgPivotViewDataSourceOptions;
	pivotGridOptions?: IgPivotViewPivotGridOptions;
	dataSelectorOptions?: IgPivotViewDataSelectorOptions;
	pivotGridPanel?: IgPivotViewPivotGridPanel;
	dataSelectorPanel?: IgPivotViewDataSelectorPanel;
}

interface JQuery {
	igPivotView(options: IgPivotView): JQuery;
	igPivotView(optionLiteral: string, options: IgPivotView): JQuery;
	igPivotView(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPivotView(optionLiteral: string, optionName: string): any;
	igPivotView(methodName: string): any;
}
interface IgPopoverHeaderTemplate {
	closeButton?: boolean;
	title?: string;
}

interface ShowingEvent {
	(event: Event, ui: ShowingEventUIParam): void;
}

interface ShowingEventUIParam {
}

interface ShownEvent {
	(event: Event, ui: ShownEventUIParam): void;
}

interface ShownEventUIParam {
}

interface HidingEvent {
	(event: Event, ui: HidingEventUIParam): void;
}

interface HidingEventUIParam {
}

interface HiddenEvent {
	(event: Event, ui: HiddenEventUIParam): void;
}

interface HiddenEventUIParam {
}

interface IgPopover {
	closeOnBlur?: boolean;
	direction?: string;
	position?: string;
	width?: string;
	height?: string;
	maxWidth?: string;
	maxHeight?: string;
	animationDuration?: number;
	contentTemplate?: string;
	selectors?: string;
	headerTemplate?: IgPopoverHeaderTemplate;
	showOn?: string;
	containment?: any;
	showing?: ShowingEvent;
	shown?: ShownEvent;
	hiding?: HidingEvent;
	hidden?: HiddenEvent;
}

interface JQuery {
	igPopover(options: IgPopover): JQuery;
	igPopover(optionLiteral: string, options: IgPopover): JQuery;
	igPopover(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igPopover(optionLiteral: string, optionName: string): any;
	igPopover(methodName: string): any;
}
interface IgRadialGaugeRange {
	name?: string;
	startValue?: number;
	endValue?: number;
	outerStartExtent?: number;
	outerEndExtent?: number;
	innerStartExtent?: number;
	innerEndExtent?: number;
	brush?: string;
	outline?: string;
	strokeThickness?: number;
	remove?: boolean;
}

interface FormatLabelEvent {
	(event: Event, ui: FormatLabelEventUIParam): void;
}

interface FormatLabelEventUIParam {
}

interface AlignLabelEvent {
	(event: Event, ui: AlignLabelEventUIParam): void;
}

interface AlignLabelEventUIParam {
}

interface IgRadialGauge {
	ranges?: IgRadialGaugeRange[];
	rangeBrushes?: any;
	rangeOutlines?: any;
	minimumValue?: number;
	maximumValue?: number;
	interval?: number;
	centerX?: number;
	centerY?: number;
	value?: number;
	scaleStartAngle?: number;
	scaleEndAngle?: number;
	scaleSweepDirection?: string;
	transitionDuration?: number;
	transitionEasingFunction?: any;
	needleBrush?: string;
	needleOutline?: string;
	needleStartExtent?: number;
	needleEndExtent?: number;
	needleShape?: string;
	needleStartWidthRatio?: number;
	needleEndWidthRatio?: number;
	needleBaseFeatureWidthRatio?: number;
	needleBaseFeatureExtent?: number;
	needlePointFeatureWidthRatio?: number;
	needlePointFeatureExtent?: number;
	needlePivotWidthRatio?: number;
	needlePivotInnerWidthRatio?: number;
	needlePivotShape?: string;
	scaleStartExtent?: number;
	needlePivotBrush?: string;
	needlePivotOutline?: string;
	needleStrokeThickness?: number;
	needlePivotStrokeThickness?: number;
	scaleEndExtent?: number;
	labelExtent?: number;
	labelInterval?: number;
	tickStartExtent?: number;
	tickEndExtent?: number;
	tickStrokeThickness?: number;
	tickBrush?: string;
	fontBrush?: string;
	minorTickStartExtent?: number;
	minorTickEndExtent?: number;
	minorTickStrokeThickness?: number;
	minorTickBrush?: string;
	minorTickCount?: number;
	scaleBrush?: string;
	backingBrush?: string;
	backingOutline?: string;
	backingStrokeThickness?: number;
	backingOuterExtent?: number;
	backingOversweep?: number;
	scaleOversweep?: number;
	scaleOversweepShape?: string;
	backingCornerRadius?: number;
	backingInnerExtent?: number;
	backingShape?: string;
	radiusMultiplier?: number;
	duplicateLabelOmissionStrategy?: string;
	font?: any;
	transitionProgress?: number;
	formatLabel?: FormatLabelEvent;
	alignLabel?: AlignLabelEvent;
}

interface JQuery {
	igRadialGauge(options: IgRadialGauge): JQuery;
	igRadialGauge(optionLiteral: string, options: IgRadialGauge): JQuery;
	igRadialGauge(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igRadialGauge(optionLiteral: string, optionName: string): any;
	igRadialGauge(methodName: string): any;
}
interface HoverChangeEvent {
	(event: Event, ui: HoverChangeEventUIParam): void;
}

interface HoverChangeEventUIParam {
}

interface ValueChangeEvent {
	(event: Event, ui: ValueChangeEventUIParam): void;
}

interface ValueChangeEventUIParam {
}

interface IgRating {
	vertical?: boolean;
	value?: number;
	valueHover?: number;
	voteCount?: number;
	voteWidth?: number;
	voteHeight?: number;
	swapDirection?: boolean;
	valueAsPercent?: boolean;
	focusable?: boolean;
	precision?: string;
	precisionZeroVote?: number;
	roundedDecimalPlaces?: number;
	theme?: string;
	validatorOptions?: any;
	cssVotes?: any;
	hoverChange?: HoverChangeEvent;
	valueChange?: ValueChangeEvent;
}

interface JQuery {
	igRating(options: IgRating): JQuery;
	igRating(optionLiteral: string, options: IgRating): JQuery;
	igRating(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igRating(optionLiteral: string, optionName: string): any;
	igRating(methodName: string): any;
}
interface StartingEvent {
	(event: Event, ui: StartingEventUIParam): void;
}

interface StartingEventUIParam {
}

interface StartedEvent {
	(event: Event, ui: StartedEventUIParam): void;
}

interface StartedEventUIParam {
}

interface ScrollingEvent {
	(event: Event, ui: ScrollingEventUIParam): void;
}

interface ScrollingEventUIParam {
}

interface ScrolledEvent {
	(event: Event, ui: ScrolledEventUIParam): void;
}

interface ScrolledEventUIParam {
}

interface StoppedEvent {
	(event: Event, ui: StoppedEventUIParam): void;
}

interface StoppedEventUIParam {
}

interface IgScroll {
	thumbOpacityDrag?: number;
	thumbOpacity?: boolean;
	cancelStart?: boolean;
	oneDirection?: boolean;
	direction?: string;
	animateShowDuration?: number;
	animateHideDuration?: number;
	hideThumbsDelay?: number;
	hideDragThumbsDelay?: number;
	xInertia?: number;
	yInertia?: number;
	xThumb?: string;
	yThumb?: string;
	xLabel?: any;
	yLabel?: any;
	marginLeft?: number;
	marginRight?: number;
	marginTop?: number;
	marginBottom?: number;
	xScroller?: Element;
	yScroller?: Element;
	starting?: StartingEvent;
	started?: StartedEvent;
	scrolling?: ScrollingEvent;
	scrolled?: ScrolledEvent;
	stopped?: StoppedEvent;
}

interface JQuery {
	igScroll(options: IgScroll): JQuery;
	igScroll(optionLiteral: string, options: IgScroll): JQuery;
	igScroll(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igScroll(optionLiteral: string, optionName: string): any;
	igScroll(methodName: string): any;
}
interface IgLoading {
	cssClass?: any;
	includeVerticalOffset?: boolean;
}

interface IgSliderBookmarks {
	value?: number;
	title?: string;
	disabled?: boolean;
	css?: string;
}

interface StartEvent {
	(event: Event, ui: StartEventUIParam): void;
}

interface StartEventUIParam {
}

interface SlideEvent {
	(event: Event, ui: SlideEventUIParam): void;
}

interface SlideEventUIParam {
}

interface StopEvent {
	(event: Event, ui: StopEventUIParam): void;
}

interface StopEventUIParam {
}

interface ChangeEvent {
	(event: Event, ui: ChangeEventUIParam): void;
}

interface ChangeEventUIParam {
}

interface BookmarkHitEvent {
	(event: Event, ui: BookmarkHitEventUIParam): void;
}

interface BookmarkHitEventUIParam {
}

interface BookmarkClickEvent {
	(event: Event, ui: BookmarkClickEventUIParam): void;
}

interface BookmarkClickEventUIParam {
}

interface IgSlider {
	animate?: boolean;
	max?: number;
	min?: number;
	orientation?: string;
	step?: number;
	value?: number;
	bookmarks?: IgSliderBookmarks;
	showBookmarkTitle?: boolean;
	syncHandleWithBookmark?: boolean;
	start?: StartEvent;
	slide?: SlideEvent;
	stop?: StopEvent;
	change?: ChangeEvent;
	bookmarkHit?: BookmarkHitEvent;
	bookmarkClick?: BookmarkClickEvent;
}

interface IgProgressBar {
	animate?: boolean;
	animateTimeout?: number;
	max?: number;
	min?: number;
	orientation?: string;
	value?: number;
	width?: string;
	height?: string;
	range?: boolean;
	endValue?: number;
	change?: ChangeEvent;
}

interface IgButtonLink {
	href?: any;
	target?: any;
	title?: any;
}

interface IgButtonIcons {
	primary?: any;
	secondary?: any;
}

interface IgButton {
	width?: any;
	height?: any;
	link?: IgButtonLink;
	labelText?: string;
	centerLabel?: boolean;
	css?: any;
	onlyIcons?: boolean;
	icons?: IgButtonIcons;
	title?: boolean;
}

interface IgTooltip {
	text?: string;
	arrowLocation?: string;
}

interface CaptureEvent {
	(event: Event, ui: CaptureEventUIParam): void;
}

interface CaptureEventUIParam {
}

interface MouseWrapper {
	cancel?: string;
	distance?: number;
	delay?: number;
	start?: StartEvent;
	drag?: DragEvent;
	stop?: StopEvent;
	capture?: CaptureEvent;
}

interface IgResponsiveContainer {
	pollingInterval?: number;
}

interface JQuery {
	igLoading(options: IgLoading): JQuery;
	igLoading(optionLiteral: string, options: IgLoading): JQuery;
	igLoading(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igLoading(optionLiteral: string, optionName: string): any;
	igLoading(methodName: string): any;
}
interface JQuery {
	igSlider(options: IgSlider): JQuery;
	igSlider(optionLiteral: string, options: IgSlider): JQuery;
	igSlider(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igSlider(optionLiteral: string, optionName: string): any;
	igSlider(methodName: string): any;
}
interface JQuery {
	igProgressBar(options: IgProgressBar): JQuery;
	igProgressBar(optionLiteral: string, options: IgProgressBar): JQuery;
	igProgressBar(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igProgressBar(optionLiteral: string, optionName: string): any;
	igProgressBar(methodName: string): any;
}
interface JQuery {
	igButton(options: IgButton): JQuery;
	igButton(optionLiteral: string, options: IgButton): JQuery;
	igButton(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igButton(optionLiteral: string, optionName: string): any;
	igButton(methodName: string): any;
}
interface JQuery {
	igTooltip(options: IgTooltip): JQuery;
	igTooltip(optionLiteral: string, options: IgTooltip): JQuery;
	igTooltip(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTooltip(optionLiteral: string, optionName: string): any;
	igTooltip(methodName: string): any;
}
interface JQuery {
	mouseWrapper(options: MouseWrapper): JQuery;
	mouseWrapper(optionLiteral: string, options: MouseWrapper): JQuery;
	mouseWrapper(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	mouseWrapper(optionLiteral: string, optionName: string): any;
	mouseWrapper(methodName: string): any;
}
interface JQuery {
	igResponsiveContainer(options: IgResponsiveContainer): JQuery;
	igResponsiveContainer(optionLiteral: string, options: IgResponsiveContainer): JQuery;
	igResponsiveContainer(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igResponsiveContainer(optionLiteral: string, optionName: string): any;
	igResponsiveContainer(methodName: string): any;
}
interface IgSparkline {
	brush?: string;
	negativeBrush?: string;
	markerBrush?: string;
	negativeMarkerBrush?: string;
	firstMarkerBrush?: string;
	lastMarkerBrush?: string;
	highMarkerBrush?: string;
	lowMarkerBrush?: string;
	trendLineBrush?: string;
	horizontalAxisBrush?: string;
	verticalAxisBrush?: string;
	normalRangeFill?: string;
	horizontalAxisVisibility?: string;
	verticalAxisVisibility?: string;
	markerVisibility?: string;
	negativeMarkerVisibility?: string;
	firstMarkerVisibility?: string;
	lastMarkerVisibility?: string;
	lowMarkerVisibility?: string;
	highMarkerVisibility?: string;
	normalRangeVisibility?: string;
	displayNormalRangeInFront?: boolean;
	markerSize?: number;
	firstMarkerSize?: number;
	lastMarkerSize?: number;
	highMarkerSize?: number;
	lowMarkerSize?: number;
	negativeMarkerSize?: number;
	lineThickness?: number;
	valueMemberPath?: string;
	labelMemberPath?: string;
	trendLineType?: string;
	trendLinePeriod?: number;
	trendLineThickness?: number;
	normalRangeMinimum?: number;
	normalRangeMaximum?: number;
	displayType?: string;
	unknownValuePlotting?: string;
	verticalAxisLabel?: any;
	horizontalAxisLabel?: any;
	formatLabel?: any;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
}

interface JQuery {
	igSparkline(options: IgSparkline): JQuery;
	igSparkline(optionLiteral: string, options: IgSparkline): JQuery;
	igSparkline(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igSparkline(optionLiteral: string, optionName: string): any;
	igSparkline(methodName: string): any;
}
interface IgSplitterPanels {
}

interface CollapsedEvent {
	(event: Event, ui: CollapsedEventUIParam): void;
}

interface CollapsedEventUIParam {
}

interface ExpandedEvent {
	(event: Event, ui: ExpandedEventUIParam): void;
}

interface ExpandedEventUIParam {
}

interface ResizeStartedEvent {
	(event: Event, ui: ResizeStartedEventUIParam): void;
}

interface ResizeStartedEventUIParam {
}

interface ResizingEvent {
	(event: Event, ui: ResizingEventUIParam): void;
}

interface ResizingEventUIParam {
}

interface ResizeEndedEvent {
	(event: Event, ui: ResizeEndedEventUIParam): void;
}

interface ResizeEndedEventUIParam {
}

interface LayoutRefreshingEvent {
	(event: Event, ui: LayoutRefreshingEventUIParam): void;
}

interface LayoutRefreshingEventUIParam {
}

interface LayoutRefreshedEvent {
	(event: Event, ui: LayoutRefreshedEventUIParam): void;
}

interface LayoutRefreshedEventUIParam {
}

interface IgSplitter {
	width?: string;
	height?: string;
	orientation?: string;
	panels?: IgSplitterPanels;
	dragDelta?: number;
	collapsed?: CollapsedEvent;
	expanded?: ExpandedEvent;
	resizeStarted?: ResizeStartedEvent;
	resizing?: ResizingEvent;
	resizeEnded?: ResizeEndedEvent;
	layoutRefreshing?: LayoutRefreshingEvent;
	layoutRefreshed?: LayoutRefreshedEvent;
}

interface JQuery {
	igSplitter(options: IgSplitter): JQuery;
	igSplitter(optionLiteral: string, options: IgSplitter): JQuery;
	igSplitter(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igSplitter(optionLiteral: string, optionName: string): any;
	igSplitter(methodName: string): any;
}
interface TileRenderingEvent {
	(event: Event, ui: TileRenderingEventUIParam): void;
}

interface TileRenderingEventUIParam {
}

interface TileRenderedEvent {
	(event: Event, ui: TileRenderedEventUIParam): void;
}

interface TileRenderedEventUIParam {
}

interface TileMaximizingEvent {
	(event: Event, ui: TileMaximizingEventUIParam): void;
}

interface TileMaximizingEventUIParam {
}

interface TileMaximizedEvent {
	(event: Event, ui: TileMaximizedEventUIParam): void;
}

interface TileMaximizedEventUIParam {
}

interface TileMinimizingEvent {
	(event: Event, ui: TileMinimizingEventUIParam): void;
}

interface TileMinimizingEventUIParam {
}

interface TileMinimizedEvent {
	(event: Event, ui: TileMinimizedEventUIParam): void;
}

interface TileMinimizedEventUIParam {
}

interface IgTileManager {
	width?: string;
	height?: string;
	columnWidth?: string;
	columnHeight?: string;
	cols?: string;
	rows?: string;
	marginLeft?: number;
	marginTop?: number;
	rearrangeItems?: boolean;
	items?: string;
	dataSource?: any;
	minimizedState?: string;
	maximizedState?: string;
	maximizedTileIndex?: string;
	rightPanelCols?: string;
	rightPanelTilesWidth?: string;
	rightPanelTilesHeight?: string;
	showRightPanelScroll?: boolean;
	showSplitter?: boolean;
	preventMaximizingSelector?: string;
	animationDuration?: number;
	dataSourceUrl?: string;
	responseDataKey?: string;
	responseDataType?: string;
	dataSourceType?: string;
	requestType?: string;
	responseContentType?: string;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	rendering?: RenderingEvent;
	rendered?: RenderedEvent;
	tileRendering?: TileRenderingEvent;
	tileRendered?: TileRenderedEvent;
	tileMaximizing?: TileMaximizingEvent;
	tileMaximized?: TileMaximizedEvent;
	tileMinimizing?: TileMinimizingEvent;
	tileMinimized?: TileMinimizedEvent;
}

interface JQuery {
	igTileManager(options: IgTileManager): JQuery;
	igTileManager(optionLiteral: string, options: IgTileManager): JQuery;
	igTileManager(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTileManager(optionLiteral: string, optionName: string): any;
	igTileManager(methodName: string): any;
}
interface IgTreeBindingsBindings {
}

interface IgTreeBindings {
	textKey?: string;
	textXPath?: string;
	valueKey?: string;
	valueXPath?: string;
	imageUrlKey?: string;
	imageUrlXPath?: string;
	navigateUrlKey?: string;
	navigateUrlXPath?: string;
	targetKey?: string;
	expandedKey?: string;
	primaryKey?: string;
	nodeContentTemplate?: string;
	childDataProperty?: string;
	childDataXPath?: string;
	searchFieldXPath?: string;
	bindings?: IgTreeBindingsBindings;
}

interface IgTreeDragAndDropSettings {
	allowDrop?: boolean;
	dragAndDropMode?: string;
	dragOpacity?: number;
	revert?: boolean;
	revertDuration?: number;
	zIndex?: number;
	dragStartDelay?: number;
	expandOnDragOver?: boolean;
	expandDelay?: number;
	helper?: string;
	customDropValidation?: Function;
	containment?: string;
	invalidMoveToMarkup?: string;
	moveToMarkup?: string;
	moveBetweenMarkup?: string;
	moveAfterMarkup?: string;
	moveBeforeMarkup?: string;
	copyToMarkup?: string;
	copyBetweenMarkup?: string;
	copyAfterMarkup?: string;
	copyBeforeMarkup?: string;
}

interface NodeCheckstateChangingEvent {
	(event: Event, ui: NodeCheckstateChangingEventUIParam): void;
}

interface NodeCheckstateChangingEventUIParam {
}

interface NodeCheckstateChangedEvent {
	(event: Event, ui: NodeCheckstateChangedEventUIParam): void;
}

interface NodeCheckstateChangedEventUIParam {
}

interface NodePopulatingEvent {
	(event: Event, ui: NodePopulatingEventUIParam): void;
}

interface NodePopulatingEventUIParam {
}

interface NodePopulatedEvent {
	(event: Event, ui: NodePopulatedEventUIParam): void;
}

interface NodePopulatedEventUIParam {
}

interface NodeCollapsingEvent {
	(event: Event, ui: NodeCollapsingEventUIParam): void;
}

interface NodeCollapsingEventUIParam {
}

interface NodeCollapsedEvent {
	(event: Event, ui: NodeCollapsedEventUIParam): void;
}

interface NodeCollapsedEventUIParam {
}

interface NodeExpandingEvent {
	(event: Event, ui: NodeExpandingEventUIParam): void;
}

interface NodeExpandingEventUIParam {
}

interface NodeExpandedEvent {
	(event: Event, ui: NodeExpandedEventUIParam): void;
}

interface NodeExpandedEventUIParam {
}

interface NodeClickEvent {
	(event: Event, ui: NodeClickEventUIParam): void;
}

interface NodeClickEventUIParam {
}

interface NodeDoubleClickEvent {
	(event: Event, ui: NodeDoubleClickEventUIParam): void;
}

interface NodeDoubleClickEventUIParam {
}

interface NodeDroppingEvent {
	(event: Event, ui: NodeDroppingEventUIParam): void;
}

interface NodeDroppingEventUIParam {
}

interface NodeDroppedEvent {
	(event: Event, ui: NodeDroppedEventUIParam): void;
}

interface NodeDroppedEventUIParam {
}

interface IgTree {
	width?: string;
	height?: string;
	checkboxMode?: string;
	singleBranchExpand?: boolean;
	hotTracking?: boolean;
	parentNodeImageUrl?: string;
	parentNodeImageClass?: string;
	parentNodeImageTooltip?: string;
	leafNodeImageUrl?: string;
	leafNodeImageClass?: string;
	leafNodeImageTooltip?: string;
	animationDuration?: number;
	pathSeparator?: string;
	dataSource?: any;
	dataSourceUrl?: string;
	dataSourceType?: string;
	responseDataKey?: string;
	responseDataType?: string;
	requestType?: string;
	responseContentType?: string;
	initialExpandDepth?: number;
	loadOnDemand?: boolean;
	bindings?: IgTreeBindings;
	defaultNodeTarget?: string;
	dragAndDrop?: boolean;
	updateUrl?: string;
	dragAndDropSettings?: IgTreeDragAndDropSettings;
	dataBinding?: DataBindingEvent;
	dataBound?: DataBoundEvent;
	rendering?: RenderingEvent;
	rendered?: RenderedEvent;
	selectionChanging?: SelectionChangingEvent;
	selectionChanged?: SelectionChangedEvent;
	nodeCheckstateChanging?: NodeCheckstateChangingEvent;
	nodeCheckstateChanged?: NodeCheckstateChangedEvent;
	nodePopulating?: NodePopulatingEvent;
	nodePopulated?: NodePopulatedEvent;
	nodeCollapsing?: NodeCollapsingEvent;
	nodeCollapsed?: NodeCollapsedEvent;
	nodeExpanding?: NodeExpandingEvent;
	nodeExpanded?: NodeExpandedEvent;
	nodeClick?: NodeClickEvent;
	nodeDoubleClick?: NodeDoubleClickEvent;
	dragStart?: DragStartEvent;
	drag?: DragEvent;
	dragStop?: DragStopEvent;
	nodeDropping?: NodeDroppingEvent;
	nodeDropped?: NodeDroppedEvent;
}

interface JQuery {
	igTree(options: IgTree): JQuery;
	igTree(optionLiteral: string, options: IgTree): JQuery;
	igTree(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igTree(optionLiteral: string, optionName: string): any;
	igTree(methodName: string): any;
}
interface IgBrowseButton {
	autoselect?: boolean;
	multipleFiles?: boolean;
	container?: any;
}

interface IgUploadFileExtensionIcons {
	ext?: string;
	css?: string;
	def?: boolean;
}

interface FileSelectingEvent {
	(event: Event, ui: FileSelectingEventUIParam): void;
}

interface FileSelectingEventUIParam {
}

interface FileSelectedEvent {
	(event: Event, ui: FileSelectedEventUIParam): void;
}

interface FileSelectedEventUIParam {
}

interface FileUploadingEvent {
	(event: Event, ui: FileUploadingEventUIParam): void;
}

interface FileUploadingEventUIParam {
}

interface FileUploadedEvent {
	(event: Event, ui: FileUploadedEventUIParam): void;
}

interface FileUploadedEventUIParam {
}

interface FileUploadAbortedEvent {
	(event: Event, ui: FileUploadAbortedEventUIParam): void;
}

interface FileUploadAbortedEventUIParam {
}

interface CancelAllClickedEvent {
	(event: Event, ui: CancelAllClickedEventUIParam): void;
}

interface CancelAllClickedEventUIParam {
}

interface OnErrorEvent {
	(event: Event, ui: OnErrorEventUIParam): void;
}

interface OnErrorEventUIParam {
}

interface IgUpload {
	width?: number;
	height?: number;
	autostartupload?: boolean;
	labelUploadButton?: string;
	labelAddButton?: string;
	labelClearAllButton?: string;
	labelSummaryTemplate?: string;
	labelSummaryProgressBarTemplate?: string;
	labelShowDetails?: string;
	labelHideDetails?: string;
	labelSummaryProgressButtonCancel?: string;
	labelSummaryProgressButtonContinue?: string;
	labelSummaryProgressButtonDone?: string;
	labelProgressBarFileNameContinue?: string;
	errorMessageMaxFileSizeExceeded?: string;
	errorMessageGetFileStatus?: string;
	errorMessageCancelUpload?: string;
	errorMessageNoSuchFile?: string;
	errorMessageOther?: string;
	errorMessageValidatingFileExtension?: string;
	errorMessageAJAXRequestFileSize?: string;
	errorMessageTryToRemoveNonExistingFile?: string;
	errorMessageTryToStartNonExistingFile?: string;
	errorMessageMaxUploadedFiles?: string;
	errorMessageMaxSimultaneousFiles?: string;
	uploadUrl?: string;
	progressUrl?: string;
	allowedExtensions?: string;
	showFileExtensionIcon?: boolean;
	css?: any;
	fileExtensionIcons?: IgUploadFileExtensionIcons;
	mode?: string;
	multipleFiles?: boolean;
	maxUploadedFiles?: number;
	maxSimultaneousFilesUploads?: number;
	fileSizeMetric?: string;
	controlId?: string;
	fileSizeDecimalDisplay?: number;
	fileSelecting?: FileSelectingEvent;
	fileSelected?: FileSelectedEvent;
	fileUploading?: FileUploadingEvent;
	fileUploaded?: FileUploadedEvent;
	fileUploadAborted?: FileUploadAbortedEvent;
	cancelAllClicked?: CancelAllClickedEvent;
	onError?: OnErrorEvent;
}

interface JQuery {
	igBrowseButton(options: IgBrowseButton): JQuery;
	igBrowseButton(optionLiteral: string, options: IgBrowseButton): JQuery;
	igBrowseButton(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igBrowseButton(optionLiteral: string, optionName: string): any;
	igBrowseButton(methodName: string): any;
}
interface JQuery {
	igUpload(options: IgUpload): JQuery;
	igUpload(optionLiteral: string, options: IgUpload): JQuery;
	igUpload(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igUpload(optionLiteral: string, optionName: string): any;
	igUpload(methodName: string): any;
}
interface CheckValueEvent {
	(event: Event, ui: CheckValueEventUIParam): void;
}

interface CheckValueEventUIParam {
}

interface ValidationEvent {
	(event: Event, ui: ValidationEventUIParam): void;
}

interface ValidationEventUIParam {
}

interface ErrorShowingEvent {
	(event: Event, ui: ErrorShowingEventUIParam): void;
}

interface ErrorShowingEventUIParam {
}

interface ErrorHidingEvent {
	(event: Event, ui: ErrorHidingEventUIParam): void;
}

interface ErrorHidingEventUIParam {
}

interface ErrorShownEvent {
	(event: Event, ui: ErrorShownEventUIParam): void;
}

interface ErrorShownEventUIParam {
}

interface ErrorHiddenEvent {
	(event: Event, ui: ErrorHiddenEventUIParam): void;
}

interface ErrorHiddenEventUIParam {
}

interface IgValidator {
	showIcon?: boolean;
	animationShow?: number;
	animationHide?: number;
	enableTargetErrorCss?: boolean;
	alignment?: string;
	keepFocus?: string;
	onchange?: boolean;
	onblur?: boolean;
	formSubmit?: boolean;
	onsubmit?: boolean;
	bodyAsParent?: boolean;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	min?: number;
	max?: number;
	regExp?: string;
	checkboxesName?: boolean;
	locale?: any;
	errorLabel?: Element;
	element?: Element;
	theme?: string;
	errorMessage?: string;
	checkValue?: CheckValueEvent;
	validation?: ValidationEvent;
	errorShowing?: ErrorShowingEvent;
	errorHiding?: ErrorHidingEvent;
	errorShown?: ErrorShownEvent;
	errorHidden?: ErrorHiddenEvent;
}

interface JQuery {
	igValidator(options: IgValidator): JQuery;
	igValidator(optionLiteral: string, options: IgValidator): JQuery;
	igValidator(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igValidator(optionLiteral: string, optionName: string): any;
	igValidator(methodName: string): any;
}
interface IgVideoPlayerBookmarks {
	time?: number;
	title?: string;
	disabled?: boolean;
}

interface IgVideoPlayerRelatedVideos {
	imageUrl?: string;
	title?: string;
	width?: number;
	height?: number;
	link?: string;
	sources?: string;
	css?: string;
}

interface IgVideoPlayerBanners {
	imageUrl?: string;
	times?: number;
	closeBanner?: boolean;
	animate?: boolean;
	visible?: boolean;
	duration?: number;
	autohide?: boolean;
	hidedelay?: number;
	link?: string;
	width?: number;
	height?: number;
	css?: string;
}

interface IgVideoPlayerCommercialsLinkedCommercials {
	sources?: string;
	startTime?: number;
	link?: string;
	title?: string;
}

interface IgVideoPlayerCommercialsEmbeddedCommercials {
	startTime?: number;
	endTime?: number;
	link?: string;
	title?: string;
}

interface IgVideoPlayerCommercialsAdMessage {
	animate?: boolean;
	autoHide?: boolean;
	hideDelay?: number;
	animationDuration?: number;
}

interface IgVideoPlayerCommercials {
	linkedCommercials?: IgVideoPlayerCommercialsLinkedCommercials;
	embeddedCommercials?: IgVideoPlayerCommercialsEmbeddedCommercials;
	alwaysPlayCommercials?: boolean;
	showBookmarks?: boolean;
	adMessage?: IgVideoPlayerCommercialsAdMessage;
}

interface EndedEvent {
	(event: Event, ui: EndedEventUIParam): void;
}

interface EndedEventUIParam {
}

interface PlayingEvent {
	(event: Event, ui: PlayingEventUIParam): void;
}

interface PlayingEventUIParam {
}

interface PausedEvent {
	(event: Event, ui: PausedEventUIParam): void;
}

interface PausedEventUIParam {
}

interface BufferingEvent {
	(event: Event, ui: BufferingEventUIParam): void;
}

interface BufferingEventUIParam {
}

interface ProgressEvent {
	(event: Event, ui: ProgressEventUIParam): void;
}

interface ProgressEventUIParam {
}

interface WaitingEvent {
	(event: Event, ui: WaitingEventUIParam): void;
}

interface WaitingEventUIParam {
}

interface EnterFullScreenEvent {
	(event: Event, ui: EnterFullScreenEventUIParam): void;
}

interface EnterFullScreenEventUIParam {
}

interface ExitFullScreenEvent {
	(event: Event, ui: ExitFullScreenEventUIParam): void;
}

interface ExitFullScreenEventUIParam {
}

interface RelatedVideoClickEvent {
	(event: Event, ui: RelatedVideoClickEventUIParam): void;
}

interface RelatedVideoClickEventUIParam {
}

interface BannerVisibleEvent {
	(event: Event, ui: BannerVisibleEventUIParam): void;
}

interface BannerVisibleEventUIParam {
}

interface BannerHiddenEvent {
	(event: Event, ui: BannerHiddenEventUIParam): void;
}

interface BannerHiddenEventUIParam {
}

interface BannerClickEvent {
	(event: Event, ui: BannerClickEventUIParam): void;
}

interface BannerClickEventUIParam {
}

interface IgVideoPlayer {
	sources?: string;
	width?: number;
	height?: number;
	posterUrl?: string;
	preload?: boolean;
	autoplay?: boolean;
	autohide?: boolean;
	volumeAutohideDelay?: number;
	centerButtonHideDelay?: number;
	loop?: boolean;
	browserControls?: boolean;
	fullscreen?: boolean;
	volume?: number;
	muted?: boolean;
	title?: string;
	showSeekTime?: boolean;
	progressLabelFormat?: string;
	bookmarks?: IgVideoPlayerBookmarks;
	relatedVideos?: IgVideoPlayerRelatedVideos;
	banners?: IgVideoPlayerBanners;
	commercials?: IgVideoPlayerCommercials;
	ended?: EndedEvent;
	playing?: PlayingEvent;
	paused?: PausedEvent;
	buffering?: BufferingEvent;
	progress?: ProgressEvent;
	waiting?: WaitingEvent;
	bookmarkHit?: BookmarkHitEvent;
	bookmarkClick?: BookmarkClickEvent;
	enterFullScreen?: EnterFullScreenEvent;
	exitFullScreen?: ExitFullScreenEvent;
	relatedVideoClick?: RelatedVideoClickEvent;
	bannerVisible?: BannerVisibleEvent;
	bannerHidden?: BannerHiddenEvent;
	bannerClick?: BannerClickEvent;
	browserNotSupported?: BrowserNotSupportedEvent;
}

interface JQuery {
	igVideoPlayer(options: IgVideoPlayer): JQuery;
	igVideoPlayer(optionLiteral: string, options: IgVideoPlayer): JQuery;
	igVideoPlayer(optionLiteral: string, optionName: string, optionValue: any): JQuery;
	igVideoPlayer(optionLiteral: string, optionName: string): any;
	igVideoPlayer(methodName: string): any;
}
