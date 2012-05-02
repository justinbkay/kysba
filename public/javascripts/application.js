var initialize = function () {
   var myOptions = {
     center: new google.maps.LatLng(43.49558479636108, -116.4150918994751),
     zoom: 14,
     mapTypeId: google.maps.MapTypeId.SATELLITE
   };
   var fields = [{title: "Candlestick", lat: 43.499011, lng: -116.429007},
                 {title: "City Fields", lat: 43.4892611111111, lng: -116.415448684178},
                 ]
   
   var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
   var markers = [];
   
   for (var i = 0; i < fields.length; i++){
    markers.push(buildMarker(fields[i]));
   };
   
   for (var i=0; i < markers.length; i++) {
    markers[i].setMap(map);
   };
   
   var iWindow = new google.maps.InfoWindow({                        
   });
   
   var panZoom = function(marker) {
     map.panTo(marker.position);
     map.setZoom(16);
     iWindow.content= marker.title;
     iWindow.position = marker.position;
     iWindow.open(map);
     return false;
   };
              
    $('#candlestick').click(function() {
      panZoom(markers[0])
    });
    
    $('#cityfields').click(function() {
     panZoom(markers[1]) 
    });
}

var buildMarker = function(marker) {
  var mark = new google.maps.Marker({                    
     position: new google.maps.LatLng(marker.lat, marker.lng),                    
     animation: google.maps.Animation.DROP,                    
     title: marker.title                
  });
  return mark;
};
