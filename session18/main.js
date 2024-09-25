// var container = document.querySelector('.container')
// var ajax = new XMLHttpRequest;
// ajax.open('GET','https://fakestoreapi.com/products')
// ajax.send()
// ajax.onreadystatechange = function(){
//     if(ajax.readyState == 4 && ajax.status == 200){
//         var data = JSON.parse(ajax.response)
        
//         var htmlresult = ''
//         for(var i=0;i<data.length;i++){
//             htmlresult += `
//                 <div class='item'>
//                     <img src='${data[i].image}' />
//                     <h2>${data[i].title}</h2>
//                     <h5>${data[i].price}</h5>
//                 </div>
//             `

//         }

// container.innerHTML = htmlresult

//     }
// }

// var navbar = document.querySelector('.navbar')
// var totop = document.getElementById('totop')
// window.onscroll = function () {
//     if(window.scrollY >= 500){
//         navbar.classList.add('navbar-gray')
//         navbar.classList.remove('navbar')
//         totop.classList.add('totop')
//     }else{
//         navbar.classList.remove('navbar-gray')
//         navbar.classList.add('navbar')
//         totop.classList.remove('totop')
//     }
// }


var first = document.querySelector('.first')
var second = document.querySelector('.second')

window.onscroll = function () {
    if(first.offsetTop <= (window.scrollY + 300)){
        first.style.cssText = 'transform:translateX(100px);transition:1s';   
    }else{
        first.style.cssText = 'transform:translateX(-200px);transition:1s';   
    }


    if(second.offsetTop <= (window.scrollY + 100)){
        second.style.cssText = 'transform:translateX(100px);transition:1s';   
    }else{
        second.style.cssText = 'transform:translateX(2000px);transition:1s';   
    }
}