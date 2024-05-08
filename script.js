const url = "https://api.openweathermap.org/data/2.5/weather?"

const apikey = "16f00dd6edca31d9934c7fd9cdfba77c"
const form = document.querySelector('.input-form')
const inputCity = document.querySelector('.input-city')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const temp = document.querySelector('.temp')
const sky = document.querySelector('.sky')
const minMax = document.querySelector('.min-max')

// Função para buscar o clima na API

async function buscarClima(cidade){
    const apiUrl = `${url}q=${cidade}&lang=pt_br&units=metric&appid=${apikey}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    city.innerText = data.name
    country.innerText = data.sys.country
    temp.innerText = `${Math.round(data.main.temp)}°C`
    sky.innerText = data.weather[0].description
    minMax.innerText = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C`
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    buscarClima(inputCity.value)

    if(inputCity.value == ''){
        alert('Digite o nome de uma Cidade')
    }
})

buscarClima('Fortaleza')