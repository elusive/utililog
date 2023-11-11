!function(o){"use strict";function e(){}e.prototype.createBasic=function(e){return new GMaps({div:e,lat:-12.043333,lng:-77.028333})},e.prototype.createMarkers=function(e){e=new GMaps({div:e,lat:-12.043333,lng:-77.028333});return e.addMarker({lat:-12.043333,lng:-77.03,title:"Lima",details:{database_id:42,author:"HPNeo"},click:function(e){console.log&&console.log(e),alert("You clicked in this marker")}}),e.addMarker({lat:-12.042,lng:-77.028333,title:"Marker with InfoWindow",infoWindow:{content:"<p>HTML Content</p>"}}),e},e.prototype.createWithPolygon=function(e,t){e=new GMaps({div:e,lat:-12.043333,lng:-77.028333});e.drawPolygon({paths:t,strokeColor:"#BBD8E9",strokeOpacity:1,strokeWeight:3,fillColor:"#BBD8E9",fillOpacity:.6});return e},e.prototype.createWithOverlay=function(e){e=new GMaps({div:e,lat:-12.043333,lng:-77.028333});return e.drawOverlay({lat:e.getCenter().lat(),lng:e.getCenter().lng(),content:'<div class="gmaps-overlay">Our Office!<div class="gmaps-overlay_arrow above"></div></div>',verticalAlign:"top",horizontalAlign:"center"}),e},e.prototype.createWithStreetview=function(e,t,n){return GMaps.createPanorama({el:e,lat:t,lng:n})},e.prototype.createWithRoutes=function(e,t,n){var a=new GMaps({div:e,lat:t,lng:n});return o("#start_travel").click(function(e){e.preventDefault(),a.travelRoute({origin:[-12.044012922866312,-77.02470665341184],destination:[-12.090814532191756,-77.02271108990476],travelMode:"driving",step:function(e){o("#instructions").append("<li>"+e.instructions+"</li>"),o("#instructions li:eq("+e.step_number+")").delay(450*e.step_number).fadeIn(200,function(){a.setCenter(e.end_location.lat(),e.end_location.lng()),a.drawPolyline({path:e.path,strokeColor:"#131540",strokeOpacity:.6,strokeWeight:6})})}})}),a},e.prototype.createMapByType=function(e,t,n){e=new GMaps({div:e,lat:t,lng:n,mapTypeControlOptions:{mapTypeIds:["hybrid","roadmap","satellite","terrain","osm","cloudmade"]}});return e.addMapType("osm",{getTileUrl:function(e,t){return"http://tile.openstreetmap.org/"+t+"/"+e.x+"/"+e.y+".png"},tileSize:new google.maps.Size(256,256),name:"OpenStreetMap",maxZoom:18}),e.addMapType("cloudmade",{getTileUrl:function(e,t){return"http://b.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/1/256/"+t+"/"+e.x+"/"+e.y+".png"},tileSize:new google.maps.Size(256,256),name:"CloudMade",maxZoom:18}),e.setMapTypeId("osm"),e},e.prototype.createWithMenu=function(e,t,n){new GMaps({div:e,lat:t,lng:n}).setContextMenu({control:"map",options:[{title:"Add marker",name:"add_marker",action:function(e){this.addMarker({lat:e.latLng.lat(),lng:e.latLng.lng(),title:"New marker"}),this.hideContextMenu()}},{title:"Center here",name:"center_here",action:function(e){this.setCenter(e.latLng.lat(),e.latLng.lng())}}]})},e.prototype.init=function(){var e=this;o(document).ready(function(){e.createBasic("#gmaps-basic"),e.createMarkers("#gmaps-markers");e.createWithPolygon("#gmaps-polygons",[[-12.040397656836609,-77.03373871559225],[-12.040248585302038,-77.03993927003302],[-12.050047116528843,-77.02448169303511],[-12.044804866577001,-77.02154422636042]]),e.createWithOverlay("#gmaps-overlay"),e.createWithStreetview("#panorama",42.3455,-71.0983),e.createWithRoutes("#gmaps-route",-12.043333,-77.028333),e.createMapByType("#gmaps-types",-12.043333,-77.028333),e.createWithMenu("#gmaps-menu",-12.043333,-77.028333)})},o.GoogleMap=new e,o.GoogleMap.Constructor=e}(window.jQuery),function(){"use strict";window.jQuery.GoogleMap.init()}();