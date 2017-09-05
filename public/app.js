
var init = function(){
  var coords = {lat: 51.507351, lng: -0.122758}
  var operaHouse = {lat: 51.512922, lng: -0.122201}
  var mapDiv = document.querySelector('#main-map');
  var bounceButton = document.querySelector('#button-bounce-markers');
  var mainMap = new MapWrapper(mapDiv,coords, 10);

  bounceButton.addEventListener('click', mainMap.bounceMarker.bind(mainMap))
  mainMap.addMarker(coords);
  mainMap.addMarker(operaHouse);
  mainMap.addClickEvent();
}

window.addEventListener('load', init)