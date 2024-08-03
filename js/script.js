let apiKey="44770f35b7b65df402030e24037d8ece";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric`;

let g_data;

document.getElementById('search').addEventListener('click',()=>
{
    const city=document.getElementById('city');
    Weather(city.value);
});

async function Weather(city) {
    try{
        const response=await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

        if(!response)
        {
            throw new console.error("unable to fetch weather data");
            
        }
        const data=await response.json();
        g_data=data;
        const humidity=document.querySelector('.humidity');
        const pressure=document.querySelector('.pressure');
        humidity.textContent=data.main.humidity+'%';
        pressure.textContent=data.main.pressure;
        document.getElementById('temp').textContent=Math.round(data.main.temp);
        document.querySelector('.city-name').textContent=data.name;
    }
    catch(error){
        console.error(error);
    }
}