const apikey = "4510019758c63a1a711db4087780ecf6";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector("#weatherImg");
        const cardColor = document.querySelector(".card");
        const weatherType = document.querySelector(".forecast");
        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apikey}`);

            //show invalid cityname
            if (response.status == 404) {
                document.querySelector(".errorMessage").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
                const data = await response.json();
                console.log(data);

                // Update the DOM elements with the fetched data
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                //update image according to weather conditions
                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "assests/clouds.png";
                    weatherType.textContent = "cloudy"
                    cardColor.style.background = "radial-gradient(circle, rgba(1,231,253,1) 0%, rgba(0,117,255,1) 100%)";
                } else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "assests/clear.png";
                    weatherType.textContent = "Clear"
                    cardColor.style.background = "linear-gradient(0deg, rgba(251,116,6,1) 28%, rgba(249,255,3,1) 100%)";
                } else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "assests/rain.png";
                    weatherType.textContent = "Rain"
                    cardColor.style.background = "linear-gradient(0deg, rgba(43,40,38,1) 10%, rgba(107,103,101,1) 54%)";
                } else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "assests/mist.png";
                    weatherType.textContent = "Mist"
                    cardColor.style.background = "linear-gradient(0deg, rgba(171,72,14,1) 0%, rgba(153,151,150,1) 66%)";
                } else if (data.weather[0].main == "Haze") {
                    weatherIcon.src = "assests/haze.png";
                    weatherType.textContent = "Haze"
                    cardColor.style.background = "linear-gradient(0deg, rgba(43,102,142,1) 0%, rgba(252,107,3,1) 66%)";
                } else if (data.weather[0].main == "Thunderstorm") {
                    weatherIcon.src = "assests/thunderstorm.png";
                    weatherType.textContent = "Thunderstorm"
                    cardColor.style.background = "radial-gradient(circle, rgba(93,107,111,1) 5%, rgba(11,11,11,1) 100%)";
                }else if (data.weather[0].main == "Dust") {
                    weatherIcon.src = "assests/clouds.png";
                    weatherType.textContent = "Dust"
                    cardColor.style.background = "linear-gradient(0deg, rgba(170,137,114,1) 10%, rgba(251,134,0,1) 100%)";
                }else if (data.weather[0].main == "Fog") {
                    weatherIcon.src = "assests/fog.png";
                    weatherType.textContent = "Fog"
                    cardColor.style.background = "linear-gradient(0deg, rgba(142,142,142,1) 19%, rgba(255,255,255,1) 100%)";
                } else {
                    weatherIcon.src = "assests/snow.png";
                    weatherType.textContent = "Snow"
                    cardColor.style.background = "radial-gradient(circle, rgba(1,201,253,1) 0%, rgba(250,250,250,1) 100%)";
                }
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".errorMessage").style.display = "none";
            }
        }
        // Add event listener to the search button
        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);

        });