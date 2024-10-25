const key = "e41ea2fe660d7990fbed032e19a92521"

function colocarDadosNaTela(dados) {
  document.querySelector(".img-prevision").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  document.querySelector(".city").innerHTML = dados.name + ", " + dados.sys.country
  document.querySelector(".temp-max").innerHTML =(dados.main.temp_max.toFixed(1).toString().replace(".", ",")) + " C°"
  document.querySelector(".temp-min").innerHTML = (dados.main.temp_min.toFixed(1).toString().replace(".", ",")) + " C°"
  document.querySelector(".temp").innerHTML = Math.round(dados.main.temp) + `<sup style="font-size: 30px; padding-left: 5px">C°</sup>`
  document.querySelector(".weather").innerHTML = dados.weather[0].description
  document.querySelector(".humi").innerHTML = "Umidade de " + dados.main.humidity + "%"
  document.querySelector(".wind").innerHTML = "Vento de " + dados.wind.speed + " km/h"
  console.log(dados)
  }

async function buscarCicade(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
  colocarDadosNaTela(dados)
}

function clicarNoBotao () {
  const cidade = document.querySelector(".search-bar").value
  if (cidade !== "") {
    document.querySelector(".second-container").classList.remove("hide");
} else {
    document.querySelector(".second-container").classList.add("hide");
}
  buscarCicade(cidade)
} 
