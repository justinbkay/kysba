var initialize = function () {
  var ZOOM = 17,
      markers = [];
  
  var myOptions = {
    center: new google.maps.LatLng(43.49558479636108, -116.4150918994751),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  
  var fields = [
                {title: "Candlestick", lat: 43.499011, lng: -116.429007},
                {title: "City Fields", lat: 43.4892611111111, lng: -116.415448684178},
                {title: "Fenway", lat: 43.4979245906609, lng: -116.432025413758},
                {title: "JV Field", lat: 43.4968222222222, lng: -116.432380637676},
                {title: "KMS Babe Ruth", lat: 43.4981867215503, lng: -116.430229327442},
                {title: "KMS Majors", lat: 43.4986466731188, lng: -116.430314422537},
                {title: "Softball #1", lat: 43.4959219206125, lng: -116.432333698278},
                {title: "Softball #2", lat: 43.4963957479183, lng: -116.433055495464},
                {title: "T-Ball #1", lat: 43.4974640322184, lng: -116.407290273884},
                {title: "T-Ball #2", lat: 43.4974482321025, lng: -116.405519037728},
                {title: "T-Ball #3", lat: 43.4969404955389, lng: -116.407572870332},
                {title: "T-Ball #4", lat: 43.4958973800104, lng: -116.407599760568},
                {title: "T-Ball #5", lat: 43.4958441577605, lng: -116.405541313717},
                {title: "Wrigley", lat: 43.4974226752375, lng: -116.432313145377}
               ]
   
   var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
   
  var panZoom = function(marker) {
    map.panTo(marker.position);
    iWindow.content= marker.title;
    iWindow.position = marker.position;
     
    map.setZoom(ZOOM);
    iWindow.open(map);
    return false;
  };
   
   for (var i = 0; i < fields.length; i++){
    markers.push(buildMarker(fields[i]));
   };
   
   for (var i=0; i < markers.length; i++) {
     markers[i].setMap(map);
   };
   
   var iWindow = new google.maps.InfoWindow({                        
   });
   
              
    $('#candlestick').click(function() {
      panZoom(markers[0])
    });
    
    $('#cityfields').click(function() {
     panZoom(markers[1]) 
    });
    
    $('#fenway').click(function() {
     panZoom(markers[2]) 
    });
    
    $('#jvfield').click(function() {
     panZoom(markers[3]) 
    });
    
    $('#kmsbaberuth').click(function() {
     panZoom(markers[4]) 
    });
    
    $('#kmsmajors').click(function() {
     panZoom(markers[5]) 
    });
    
    $('#softball1').click(function() {
     panZoom(markers[6]) 
    });
    
    $('#softball2').click(function() {
     panZoom(markers[7]) 
    });
    
    $('#tball1').click(function() {
     panZoom(markers[8]) 
    });
    
    $('#tball2').click(function() {
     panZoom(markers[9]) 
    });
    
    $('#tball3').click(function() {
     panZoom(markers[10]) 
    });
    
    $('#tball4').click(function() {
     panZoom(markers[11]) 
    });
    
    $('#tball5').click(function() {
     panZoom(markers[12]) 
    });
    
    $('#wrigley').click(function() {
     panZoom(markers[13]) 
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
