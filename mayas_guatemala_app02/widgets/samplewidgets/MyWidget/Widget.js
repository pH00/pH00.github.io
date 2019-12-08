// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
	startup: function() {
	      this.inherited(arguments);
	      this.mapIdNode.innerHTML = 'map id is:' + this.map.id;
	    },
    baseClass: 'jimu-widget-mywidget'
  });
});