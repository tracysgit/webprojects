// ======== JQuery Calculator =========

$(document).ready(function(){
    var apiKey = "ac24953aac23667530930ed5ffe345b0";  
    //var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=30.00&lon=30.001&units=imperial&appid=ac24953aac23667530930ed5ffe345b0";
    var latlon = [];
    var latlonObj = { lat: "", lon: ""};
    var newURL = "";
    var temperature = 0;
    var time = new Date().getHours();
    var weatherImages = [
        {weather:"sunny",
         tod: "day",
imgsrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Altocumulus_over_Warsaw_1%2C_Poland%2C_June_26%2C_2005.jpg/640px-Altocumulus_over_Warsaw_1%2C_Poland%2C_June_26%2C_2005.jpg",
         imgalt:'"Altocumulus over Warsaw 1, Poland, June 26, 2005". Licensed under CC BY-SA 2.0 via Wikimedia Commons - https://commons.wikimedia.org/wiki/File:Altocumulus_over_Warsaw_1,_Poland,_June_26,_2005.jpg#/media/File:Altocumulus_over_Warsaw_1,_Poland,_June_26,_2005.jpg'},
        { weather: "cloudy",
          tod: "day",
          imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Altocumulus_lacunosus.JPG/640px-Altocumulus_lacunosus.JPG",
          imgalt: '"Altocumulus lacunosus". Licensed under CC BY-SA 3.0 via Wikimedia Commons - https://commons.wikimedia.org/wiki/File:Altocumulus_lacunosus.JPG#/media/File:Altocumulus_lacunosus.JPG'},
        { weather: "rainy",
          tod: "day",
          imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Rain_on_grass2.jpg/640px-Rain_on_grass2.jpg",
          imgalt: '"Rain on grass2". Licensed under CC BY-SA 3.0 via Wikimedia Commons - https://commons.wikimedia.org/wiki/File:Rain_on_grass2.jpg#/media/File:Rain_on_grass2.jpg'},
        { weather: "clear",
          tod: "night",
          imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/AustraliaSky.jpg/640px-AustraliaSky.jpg",
          imgalt: '"AustraliaSky" by R. Scott Hinks - Own work. Licensed under CC BY-SA 4.0 via Wikimedia Commons - https://commons.wikimedia.org/wiki/File:AustraliaSky.jpg#/media/File:AustraliaSky.jpg'}];
        
    // ======== Get geoposition data from browser ========
    getlocation();
    function getlocation() {
        navigator.geolocation.getCurrentPosition(callback,showError);
    }
 
    function callback(position) {
        latlon.push(position.coords.latitude,position.coords.longitude);
        latlonObj.lat = position.coords.latitude;
        latlonObj.lon = position.coords.longitude;
        //Latitude: <span id="latitude"></span>, Longitude: <span id="longitude"></span>
        document.getElementById('lat-lon').innerHTML = 'Latitude: ' + latlon[0].toFixed(3) + ', Longitude: ' + latlon[1].toFixed(3);
        //document.getElementById('longitude').innerHTML = latlon[1].toFixed(3);
       
        // --- Get weather data based on geolocation latitude and longitude ---
        lat = (latlonObj.lat);
        lon = (latlonObj.lon);
        newURL = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&appid=ac24953aac23667530930ed5ffe345b0"; 
                
        $.getJSON(newURL,function(json) { 
            
            //var sunrise = json.sys.sunrise;
            //var sunset = json.sys.sunset;
            //time = Math.floor(time/1000);
            if((time > 18) || (time < 6)){
                tod = "night";
                $("#weather").addClass("night");
                //$("body").addClass("weatherBackgnd night");
            } else {
                tod = "day";
                $("#weather").addClass("day");
                //$("body").addClass("weatherBackgnd day");
            } 
            
            var iconURL = "http://openweathermap.org/img/w/";
            var icon = '<img src="' + iconURL + (json.weather[0].icon).toString() + '.png" width="75" />';
            temperature = json.main.temp.toFixed(0);
            $("#location").html(json.name);
            $("#temp").html(icon + "  " + temperature + "&ordm;F");
            $("#outlook").html(json.weather[0].description);
            $("#humidity").html(json.main.humidity + "% humidity");
            //$("#x1").html(apiKey);
            
        });
    }
    
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
}   
    
 /*   var smpleData = {
        "coord":{"lon":-97.81,"lat":30.45},
        "weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],
        "base":"cmc stations",
        "main":{"temp":47.01,"pressure":1024,"humidity":39,"temp_min":43.34,"temp_max":50},
        "wind":{"speed":4.56,"deg":51.0007},
        "clouds":{"all":1},
        "dt":1452467638,
        "sys":{"type":1,"id":2558,"message":0.0109,"country":"US","sunrise":1452432551,"sunset":1452469745},"id":4670783,"name":"Anderson Mill","cod":200} */

});