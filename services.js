// SERVICES
weatherApp.service('cityService', function() {
  this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
  this.GetWeather = function(city, days) {
  var weatherAPI = $resource("//api.openweathermap.org/data/2.5/forecast/daily?APPID=6c23fe5cadc19522c91a039f295ca89e", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

  return weatherAPI.get({ q: city, cnt: days });
  }
}]);
