    var div = document.createElement("div");
    div.setAttribute("id", "weather")
    
    var main = document.createElement("h3");
    var icon = document.createElement("img");
    var des = document.createElement("p");

    main.innerHTML = "Hello";

    document.body.appendChild(icon);
    document.body.appendChild(des);
    document.getElementById("weather").appendChild(main);

var weather = {
    apiKey: "d6281ee6840fffdb9fc51043fcb476c7",
    fetchWeather: function (city) {
        fetch ("http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        
    }
};


/*
var url ="http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d6281ee6840fffdb9fc51043fcb476c7"



var search = document.createElement("input")
search.innerText = "Search"
search.setAttribute("class", "")
search.setAttribute("type", "search")
document.body.appendChild(search)


function createDiv(obj){
    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    var img = document.createElement("img");
    var p = document.createElement("p");

    h3.textContent = obj.weather;
    img.src = obj.icon;
    p.textContent = obj.description;

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);

    document.body.appendChild(div);
}

console.log();
*/