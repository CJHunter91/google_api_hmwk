var MapWrapper = function(container,coords,zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom 
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });

  var infoWindow = new google.maps.InfoWindow({
    content: "Hello"
  });
  this.markers.push(marker);
  marker.addListener('click', function(){
    infoWindow.open(this.googleMap, marker)
  });
};

MapWrapper.prototype.setCenter = function(){
  var edinburgh = {lat: 55.957806, lng: -3.21809}
    this.googleMap.setCenter(edinburgh);
  
}

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    console.log(this.addMarker(coords));
  }.bind(this));
}

MapWrapper.prototype.bounceMarker = function(){
  console.log(this);
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
}