const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b1d4aa6b5msh19daa8c3a0e34d5p1b8bc9jsnf4da88399412',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const searchCity=()=>{
    let cityName = document.getElementById('city-input').value;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`,options).then(response=>response.json()).then(data=>{
        document.getElementById('city-name').innerHTML = cityName.toUpperCase();
        document.getElementById('weather-type').innerText = `feels_like:${data.feels_like}`;
        document.getElementById('temp').innerHTML=data.temp;
        document.getElementById('min-temp').innerHTML=data.min_temp;
        document.getElementById('max-temp').innerHTML=data.max_temp;
    });
}