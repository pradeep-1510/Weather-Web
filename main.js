const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey = "7eb7cdae946a9cd8a1049b957dec433e"



let searchbox=document.querySelector(".search input");
let searchbtn=document.querySelector(".search button");
let weathericon=document.querySelector(".weather-icon");






async function checkweather(city) {
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
    

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    



        if(data.weather[0].main=="Clouds"){
            weathericon.src="weather-app-img/clouds.png"
        }else if(data.weather[0].main=="Clear"){
            weathericon.src="weather-app-img/clear.png"
        }else if(data.weather[0].main=="Rain"){
            weathericon.src="weather-app-img/rain.png"
        }else if(data.weather[0].main=="Mist"){
            weathericon.src="weather-app-img/mist.png"
        }else if(data.weather[0].main=="Drizzle"){
            weathericon.src="weather-app-img/drizzle.png"
        }else if(data.weather[0].main=="Snow"){
            weathericon.src="weather-app-img/snow.png"
        }else if(data.weather[0].main=="Haze"){
            weathericon.src="weather-app-img/haze.png"
        }
    
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
    }



}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

















