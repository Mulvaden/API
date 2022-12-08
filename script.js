var url ="http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=d6281ee6840fffdb9fc51043fcb476c7"

console.log("https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=d6281ee6840fffdb9fc51043fcb476c7")

var button = document.createElement("button")
button.innerText = "Search"
document.body.appendChild(button)

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
