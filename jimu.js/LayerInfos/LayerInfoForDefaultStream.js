// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/promise/all","./LayerInfoForDefault"],function(d,g,h,k,e){return d(e,{getSupportTableInfo:function(){var f=new h,a={isSupportedLayer:!1,isSupportQuery:!0,layerType:null,otherReasonCanNotSupport:!0},d=this.getLayerType(),e=this.getLayerObject();k({type:d,layerObject:e}).then(g.hitch(this,function(b){var c=b.type;b=b.layerObject;a.layerType=c;0<=this._getLayerTypesOfSupportTable().indexOf(c)&&(a.isSupportedLayer=!0);(c=b.getLatestObservations())&&
0<c.length&&(a.otherReasonCanNotSupport=!1);f.resolve(a)}),function(){f.resolve(a)});return f}})});