// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/DistanceAndDirection/setting/js/ColorPickerEditor":function(){define("dojo/_base/declare dojo/_base/Color dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/ColorPickerEditor.html jimu/dijit/ColorPickerPopup dijit/form/NumberSpinner".split(" "),function(g,k,c,e,d,f,l){return g([c,e,d],{_defaultColor:"#485566",templateString:f,nls:null,postCreate:function(){this.colorPicker=new l({color:this._defaultColor,width:this._defaultWidth},
this.colorPicker);this.colorPicker.startup();this.inherited(arguments)},startup:function(){this.inherited(arguments)},_isSameVal:function(){return this.slider.getValue()===this.spinner.getValue()},getValues:function(){var b=null,c=this.colorPicker.getColor();c&&(b=c);return b},setValues:function(b){if("object"===typeof b||"string"===typeof b)b=this._rgbToHex(b.color),this.colorPicker.setColor(new k(b))},_hexToRgb:function(b){return(b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b))?{r:parseInt(b[1],
16),g:parseInt(b[2],16),b:parseInt(b[3],16)}:null},_componentToHex:function(b){b=b.toString(16);return 1===b.length?"0"+b:b},_rgbToHex:function(b){return"#"+this._componentToHex(b.r)+this._componentToHex(b.g)+this._componentToHex(b.b)}})})},"jimu/dijit/ColorPickerPopup":function(){define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/html dojo/on dojo/_base/Color dijit/TooltipDialog dijit/popup jimu/dijit/ColorPalette jimu/utils".split(" "),function(g,k,c,e,
d,f,l,b,m,n,p){return g([k,c],{baseClass:"jimu-color-pickerPopup",declaredClass:"jimu.dijit.ColorPickerPopup",templateString:'\x3cdiv class\x3d"jimu-color-picker"\x3e\x3c/div\x3e',_isTooltipDialogOpened:!1,color:null,showLabel:!1,around:null,_ENABLE:!0,recordUID:"",postCreate:function(){this.inherited(arguments);this._createTooltipDialog(this.domNode);this._hideTooltipDialog()},destroy:function(){m.close(this.tooltipDialog);this.picker.destroy();this.tooltipDialog.destroy();this.inherited(arguments)},
enable:function(){this._ENABLE=!0;d.removeClass(this.domNode,"disable")},disable:function(){this._ENABLE=!1;d.addClass(this.domNode,"disable")},isPartOfPopup:function(b){var c=this.tooltipDialog.domNode;return b===c||d.isDescendant(b,c)},hideTooltipDialog:function(){this._hideTooltipDialog()},showTooltipDialog:function(){this._showTooltipDialog()},initUI:function(){this.picker.initUI()},_showTooltipDialog:function(){m.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.around?this.around:
this.domNode,orient:this.orient});this._isTooltipDialogOpened=!0},_hideTooltipDialog:function(){m.hide(this.tooltipDialog);this._isTooltipDialogOpened=!1},_createTooltipDialog:function(){var c=d.create("div");this.tooltipDialog=new b({content:c});d.addClass(this.tooltipDialog.domNode,"jimu-color-picker-popup-dialog");var h=new n({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showColorPickerOK:!0,showColorPickerApply:!0,showCoustomRecord:!0,closeDialogWhenChange:!0},recordUID:this.recordUID,
onChange:e.hitch(this,function(a){a&&(a=new l(a),this.setColor(a),this.onChange(a))})});h.placeAt(c);h.startup();this.own(f(h,"close",e.hitch(this,function(){this._hideTooltipDialog()})));this.own(f(h,"change-style",e.hitch(this,function(){this._hideTooltipDialog();this._showTooltipDialog()})));this.own(f(this.domNode,"click",e.hitch(this,function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():!1!==this._ENABLE&&this._showTooltipDialog()})));this.own(f(document,
"click",e.hitch(this,function(a){this.isPartOfPopup(a.srcElement||a.target)||this._hideTooltipDialog()})));this.picker=h},setColor:function(b){if(b instanceof l){null===this.color&&!0===this.showLabel&&this._changeLabel(b);var c=b.toHex();this.color=b;d.setStyle(this.domNode,"backgroundColor",c);this.picker&&(this.picker.refreshRecords(),this.picker.setColor(c,!1,!0));this.showLabel&&this._changeLabel(this.color)}},getColor:function(){return this.color},_changeLabel:function(b){d.empty(this.domNode);
d.create("span",{innerHTML:b.toHex(),className:"color-label",style:{color:p.invertColor(b.toHex())}},this.domNode)},onChange:function(b){b&&this.showLabel&&this._changeLabel(b)},changeColor:function(){this.picker&&this.picker.changeColor();this.showLabel&&this._changeLabel(this.color)},setTitle:function(b){this.domNode.title=b},getTooltipDialog:function(){return this.tooltipDialog||null}})})},"widgets/DistanceAndDirection/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/DistanceAndDirection/setting/templates/ColorPickerEditor.html":'\x3cdiv class\x3d"colorPickerEditor"\x3e\r\n  \x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPicker"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/DistanceAndDirection/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;overflow:hidden;" class\x3d"nihilo"\x3e\r\n    \x3cdiv\x3e\r\n      \x3ch3 class\x3d"distance-and-direction-setting-h3"\x3e${nls.feedbackStyleLabel}\x3c/h3\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"feedbackTable" class\x3d"table-feedbacks"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"labelTable" class\x3d"table-labels"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/DistanceAndDirection/setting/css/style.css":".distance-and-direction-setting .table-feedbacks{width: 100%; height: 197px; margin-top: 15px;}.distance-and-direction-setting .table-labels{width: 100%; height: 77px; margin-top: 15px;}.distance-and-direction-setting .simple-table-row{height: 40px;}.jimu-simple-table .body-section .table-div {background-image: url(./images/table_under_line.png) !important;}.distance-and-direction-setting {margin-left: 0px;}.distance-and-direction-setting-h3 {color: #596679;}.distance-and-direction-setting-style table {color: #333333; width: 100%; border-collapse: collapse;}.distance-and-direction-setting-style th {background-color: #518dca; padding: 8px; text-align: left; color: #ffffff;}.distance-and-direction-setting-style tr {background-color: #ffffff;}.distance-and-direction-setting-style td {padding: 8px;}.settings-section tr {vertical-align: top;}.distance-and-direction-setting-line-size {width: 70px;}.distance-and-direction-setting-color-picker {width: 70px;}.distance-and-direction-setting-interval-width {border-color: #000; border-style: hidden solid solid solid; border-width: 1px; height: 10px; margin: auto;}.distance-and-direction-setting-style-map {width: 500px; height: 550px; float: left;}",
"*now":function(g){g(['dojo/i18n!*preload*widgets/DistanceAndDirection/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/_base/array dojo/_base/Color dojo/query jimu/BaseWidgetSetting jimu/dijit/SimpleTable dijit/form/NumberSpinner dijit/registry jimu/dijit/Message dijit/_WidgetsInTemplateMixin ./js/ColorPickerEditor dijit/ColorPalette".split(" "),function(g,k,c,e,d,f,l,b,m,n,p,q,h){return g([l,q],{baseClass:"distance-and-direction-setting",startup:function(){this.inherited(arguments);var a={fields:[{name:"showTab",title:this.nls.showTabLabel,width:"16%",
type:"checkbox",onChange:c.hitch(this,this._checkBoxChange),"class":"show"},{name:"index",title:"index",type:"text",hidden:!0},{name:"feedbackShape",title:this.nls.feedbackShapeLabel,width:"28%",type:"text"},{name:"lineColor",title:this.nls.lineColorLabel,create:c.hitch(this,this._createColorPicker),setValue:c.hitch(this,this._setColorPicker),getValue:c.hitch(this,this._getColorPicker),width:"28%",type:"extension"},{name:"lineWidth",title:this.nls.lineWidthLabel,create:c.hitch(this,this._createNumberSpinner),
setValue:c.hitch(this,this._setNumberSpinnerValue),getValue:c.hitch(this,this._getNumberSpinnerValue),type:"extension",width:"28%"}],selectable:!0,autoHeight:!1};this.displayFeedbackTable=new b(a);this.displayFeedbackTable.placeAt(this.feedbackTable);k.setStyle(this.displayFeedbackTable.domNode,{height:"100%"});a={fields:[{name:"index",title:"index",type:"text",hidden:!0},{name:"feedbackLabel",title:this.nls.feedbackLabel,width:"44%",type:"text"},{name:"textColor",title:this.nls.textColorLabel,create:c.hitch(this,
this._createColorPicker),setValue:c.hitch(this,this._setColorPicker),getValue:c.hitch(this,this._getColorPicker),width:"28%",type:"extension"},{name:"textSize",title:this.nls.textSizeLabel,create:c.hitch(this,this._createTextNumberSpinner),setValue:c.hitch(this,this._setNumberSpinnerValue),getValue:c.hitch(this,this._getNumberSpinnerValue),type:"extension",width:"28%"}],selectable:!0,autoHeight:!1};this.displayLabelTable=new b(a);this.displayLabelTable.placeAt(this.labelTable);k.setStyle(this.displayLabelTable.domNode,
{height:"100%"});this.setConfig(this.config)},_createColorPicker:function(a){var b=new h({nls:this.nls});b.placeAt(a);b.startup()},_getColorPicker:function(a){return n.byId(a.childNodes[0].id).getValues()},_setColorPicker:function(a,b){n.byId(a.childNodes[0].id).setValues({color:new d(b)})},_createNumberSpinner:function(a){(new m({value:2,smallDelta:1,constraints:{min:1,max:10,places:0},style:"width:100px"})).placeAt(a)},_createTextNumberSpinner:function(a){(new m({value:12,smallDelta:1,constraints:{min:1,
max:36,places:0},style:"width:100px"})).placeAt(a)},_getNumberSpinnerValue:function(a){return f(".dijitInputInner",a)[0].value},_setNumberSpinnerValue:function(a,b){f(".dijitInputInner",a)[0].value=b},setConfig:function(a){a=[{showTab:a.feedback.lineSymbol.showTab,color:a.feedback.lineSymbol.color,width:a.feedback.lineSymbol.width},{showTab:a.feedback.circleSymbol.showTab,color:a.feedback.circleSymbol.outline.color,width:a.feedback.circleSymbol.outline.width},{showTab:a.feedback.ellipseSymbol.showTab,
color:a.feedback.ellipseSymbol.outline.color,width:a.feedback.ellipseSymbol.outline.width},{showTab:a.feedback.rangeRingSymbol.showTab,color:a.feedback.rangeRingSymbol.color,width:a.feedback.rangeRingSymbol.width},{color:a.feedback.labelSymbol.color,width:a.feedback.labelSymbol.font.size}];this._setFeedbackTable([{shape:this.nls.lineLabel},{shape:this.nls.circleLabel},{shape:this.nls.ellipseLabel},{shape:this.nls.ringsLabel}],a);this.displayLabelTable.clear();this.displayLabelTable.addRow({feedbackLabel:this.nls.feedbackLabel,
index:"0",textColor:a[4].color,textSize:a[4].width})},_setFeedbackTable:function(a,b){this.displayFeedbackTable.clear();for(var c=0;c<a.length;c++)this.displayFeedbackTable.addRow({feedbackShape:a[c].shape,index:""+c,showTab:b[c].showTab,lineColor:b[c].color,lineWidth:b[c].width})},getConfig:function(){var a=this.displayFeedbackTable.getData(),b=this.displayLabelTable.getData(),c=0;e.forEach(a,function(a){a.showTab&&(c+=1)});if(0!==c)return this.config.feedback={lineSymbol:{showTab:a[0].showTab,type:"esriSLS",
style:"esriSLSSolid",color:a[0].lineColor,width:a[0].lineWidth},circleSymbol:{showTab:a[1].showTab,type:"esriSFS",style:"esriSFSNull",color:[255,0,0,0],outline:{color:a[1].lineColor,width:a[1].lineWidth,type:"esriSLS",style:"esriSLSSolid"}},ellipseSymbol:{showTab:a[2].showTab,type:"esriSFS",style:"esriSFSNull",color:[255,0,0,0],outline:{color:a[2].lineColor,width:a[2].lineWidth,type:"esriSLS",style:"esriSLSSolid"}},rangeRingSymbol:{showTab:a[3].showTab,type:"esriSLS",style:"esriSLSSolid",color:a[3].lineColor,
width:a[3].lineWidth},labelSymbol:{type:"esriTS",color:b[0].textColor,verticalAlignment:"middle",horizontalAlignment:"center",xoffset:0,yoffset:0,kerning:!0,font:{family:"arial",size:b[0].textSize,style:"normal",weight:"normal",decoration:"none"}}},this.config;new p({message:this.nls.tabErrorMessage});return!1}})});