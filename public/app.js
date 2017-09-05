
var init = function(){
  var coords = {lat: 51.507351, lng: -0.122758}
  var operaHouse = {lat: 51.512922, lng: -0.122201}
  var edinburgh = {lat: 55.957806, lng: -3.21809}
  var mapDiv = document.querySelector('#main-map');
  var mainMap = new MapWrapper(mapDiv,coords, 10);
  var bounceButton = document.querySelector('#button-bounce-markers');
  var toEdinburghButton = document.querySelector('#to-edinburgh');

  toEdinburghButton.addEventListener('click', mainMap.setCenter.bind(mainMap));
  bounceButton.addEventListener('click', mainMap.bounceMarker.bind(mainMap))
  mainMap.addMarker(coords, "London");
  mainMap.addMarker(operaHouse, "The beautiful Opera House");
  mainMap.addMarker(edinburgh, "My house bitches");
  mainMap.addClickEvent();
}

window.addEventListener('load', init)