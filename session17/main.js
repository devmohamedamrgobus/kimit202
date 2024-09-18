// ajax
// api 
// json 
// var person = {name:'ahmed',age:10}






// xmlhttprequest
// fetch 
// axios
// ajax by jquery
var city = document.getElementById('city')
var search = document.getElementById('search')
var result = document.getElementById('result')
search.onclick = function(){
    var ajax = new XMLHttpRequest
    ajax.open('GET','https://api.weatherapi.com/v1/current.json?key=b627adc120ca4636ad0162946243008&q='+city.value)
    ajax.send()
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            var data = JSON.parse(ajax.response)
            result.innerText = 'temp :'+data.current.temp_c+" c" 
        }
    }
}


