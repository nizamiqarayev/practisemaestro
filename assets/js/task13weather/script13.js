const body= document.querySelector('body')


let locationdata



window.onload=function(){
    const cityinputdiv=document.createElement('div')
    cityinputdiv.setAttribute('class', 'cityinputdiv')
    cityinputdiv.id='cityinputdiv'
    cityinputdiv.innerHTML=`<i class="fa-solid fa-magnifying-glass"></i>`

    const cityinput=document.createElement('input')

    cityinput.setAttribute('class', 'cityinput')
    cityinput.id='cityinput'

    cityinput.addEventListener("keypress", (event)=> {
        if (event.keyCode === 13) { 
          event.preventDefault();
            if(cityinput.value==''){
                alert('Please enter a valid number')
            }
            else{
               weatherpageloader(cityinput.value) 

            }
            
    
        }
      });
      cityinputdiv.appendChild(cityinput)
    body.appendChild(cityinputdiv)
    
    }
async function weatherpageloader(city){
   const locApiKey='abfc99ca74ebd73b71778a4b48b3b468'
    // locationApiUrl=`https://us1.locationiq.com/v1/search.php?key=pk.6071c5c3a9cb08816a0322571ed3bb53&q=${city}&format=json`
   const locationApiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${locApiKey}`
 await fetch(locationApiUrl)
 .then(response => response.json())
 .then(data => weatherdatafetcher(data))
} 
async function weatherdatafetcher(locationdata){
    console.log(locationdata)

    // console.log(locationdata[0].lat)
    // console.log(locationdata[0].lon)
    // console.log(locationdata[0].display_name)

    proxy='https://cors-anywhere.herokuapp.com/'
    weatherApi=`https://api.darksky.net/forecast/f1fda39a7fe27931d4d00a90d7cafe04/${locationdata.coord.lat},${(locationdata.coord.lon)}?units=si`
    console.log(weatherApi)
 await fetch(proxy+weatherApi)
 .then(response => response.json())
 .then(data => weatherDisplayer(data,locationdata))
}

function weatherDisplayer(weatherdata,locationdata){
    console.log(weatherdata)
    console.log('================')
    console.log(locationdata)

    document.getElementById('cityinputdiv').style.display='none'



    const primaryWeatherdiv=document.createElement('div')
    primaryWeatherdiv.setAttribute('class','primaryWeatherdiv')
    primaryWeatherdiv.id='primaryWeatherdiv'


    const firstChildWeatherdiv=document.createElement('div')
    firstChildWeatherdiv.setAttribute('class','firstChildWeatherdiv')
    firstChildWeatherdiv.id='firstChildWeatherdiv'

    const firstChildWeatherdivTop=document.createElement('div')
    firstChildWeatherdivTop.setAttribute('class','firstChildWeatherdivTop')
    firstChildWeatherdivTop.id='firstChildWeatherdivTop'

    const todaysDateH1=document.createElement('h1')
    todaysDateH1.innerText=`${todaysweekday()}`
    todaysDateH1.setAttribute('class','todaysDateH1')
    todaysDateH1.id='todaysDateH1'


    const todaysDateH4=document.createElement('h3')
    

    todaysDateH4.innerText=`${date()}`
    todaysDateH4.setAttribute('class','todaysDateH4')
    todaysDateH4.id='todaysDateH4'

    const LocationH4=document.createElement('h4')
    LocationH4.innerText=`${locationdata.name},${locationdata.sys.country}`
    LocationH4.setAttribute('class','LocationH4')
    LocationH4.id='LocationH4'


    firstChildWeatherdivTop.appendChild(todaysDateH1)
    firstChildWeatherdivTop.appendChild(todaysDateH4)
    firstChildWeatherdivTop.appendChild(LocationH4)


    const firstChildWeatherdivBottom=document.createElement('div')
    firstChildWeatherdivBottom.setAttribute('class','firstChildWeatherdivBottom')
    firstChildWeatherdivBottom.id='firstChildWeatherdivBottom'

    firstChildWeatherdivBottom.innerHTML=`${iconpicker(0,weatherdata)}`
    // new Date().getDay()
    const firstChildWeatherdivBottomH1=document.createElement('h1')
    firstChildWeatherdivBottomH1.setAttribute('class','firstChildWeatherdivBottomH1')
    firstChildWeatherdivBottomH1.id='firstChildWeatherdivBottomH1'
    firstChildWeatherdivBottomH1.innerText=`${Math.round(weatherdata.daily.data[0].apparentTemperatureHigh)}℃`
    
    const firstChildWeatherdivBottomH3=document.createElement('h3')
    firstChildWeatherdivBottomH3.setAttribute('class','firstChildWeatherdivBottomH3')
    firstChildWeatherdivBottomH3.id='firstChildWeatherdivBottomH3'
    firstChildWeatherdivBottomH3.innerText=`${weatherdata.daily.data[0].summary}`
    



    firstChildWeatherdiv.appendChild(firstChildWeatherdivTop)
    firstChildWeatherdiv.appendChild(firstChildWeatherdivBottom)
    firstChildWeatherdiv.appendChild(firstChildWeatherdivBottomH1)
    firstChildWeatherdiv.appendChild(firstChildWeatherdivBottomH3)




    const secondaryChildWeatherdiv=document.createElement('div')
    secondaryChildWeatherdiv.setAttribute('class','secondaryChildWeatherdiv')
    secondaryChildWeatherdiv.id='secondaryChildWeatherdiv'

    const humidity=document.createElement('div')
    humidity.setAttribute('class','humiditydiv')
    humidity.id='humiditydiv'
    const humiditytext=document.createElement('p')
    humiditytext.innerText='Humidity'
    const humidityvalue=document.createElement('p')
    humidityvalue.innerText=`${Math.round((weatherdata.daily.data[0].humidity)*100)}%`

    humidity.appendChild(humiditytext)
    humidity.appendChild(humidityvalue)

    const wind=document.createElement('div')
    humidity.setAttribute('class','humiditydiv')
    humidity.id='winddiv'
    const windtext=document.createElement('p')
    humiditytext.innerText='Wind'
    const windvalue=document.createElement('p')
    windvalue.innerText=`${weatherdata.daily.data[0].wind}km/h`

    humidity.appendChild(humiditytext)
    humidity.appendChild(humidityvalue)





    

    secondaryChildWeatherdiv.appendChild(humidity)







    body.appendChild(firstChildWeatherdiv)
    body.appendChild(secondaryChildWeatherdiv)

}






function todaysweekday(){
    let arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let dateObj = new Date()
let  weekdayNumber = dateObj.getDay()
let weekdayName = arrayOfWeekdays[weekdayNumber]
return weekdayName
}
function date(){
    const today = new Date()
    return today.toLocaleString('en-GB', { month: 'short' })    +" "+today.getDate()+", "+today.getFullYear()

}


var icons = {
    'wind' : '<i class="fas fa-wind"></i>',
    'cloudy' : '<i class="fas fa-cloud"></i>',
    'clear-day' : '<i class="far fa-sun"></i>',
    'clear-night' : '<i class="far fa-moon"></i>',
    'rain' : '<i class="fas fa-cloud-showers-heavy"></i>',
    'snow' : '<i class="far fa-snowflake"></i>',
    'fog' : '<i class="fas fa-smog"></i>',
    'partly-cloudy-day' : '<i class="fas fa-cloud-sun"></i>',
    'partly-cloudy-night' : '<i class="fas fa-cloud-moon"></i>'
}
function iconpicker(day,weatherdata){
    const icon=weatherdata.daily.data[day+1].icon
    switch(icon){
        case 'wind':
            return icons.wind
            break;
        case 'cloudy':
            return icons.cloudy
            break;
        case 'clear-day':
            return icons["clear-day"]
            break; 
        case 'clear-night':
            return icons["clear-night"]
            break;
        case 'rain':
            return icons.rain
            break;
        case 'snow':
            return icons.snow
            break;
        case 'fog':
            return icons.fog
            break;
        case 'partly-cloudy-day':
            return icons["partly-cloudy-day"]
            break;
        case 'partly-cloudy-night':
            return icons["partly-cloudy-night"]
            break;
    }
}

function temperature(day,weatherdata){
    return weatherdata.daily.data[day]
}


