


// window.setTimeout(function(){
//     console.log('hi')
// },1000)



// window.setInterval(function(){
//     console.log('hi')
// },1000)


// var counter = document.getElementById('counter')


// var i = 0
// window.setInterval(function(){
//     if(i<=20){
//         counter.innerText = i++
//     }
// },40)




// var code = document.getElementById('code')
// var winners = document.getElementById('winners')
// var project = document.getElementById('project')
// var team = document.getElementById('team')



// // code 
// var codenumber = 1
// window.setInterval(function () {
//     if(codenumber <= 10000){
//         codenumber = codenumber*2
//         code.innerText = codenumber
//     }
// },500)

// // winners 
// var winnersnumber = 0
// window.setInterval(function () {
//     if(winnersnumber <= 300){
//         winners.innerText = winnersnumber++
//     }
// },100)

// // project 
// var projectnumber = 0
// window.setInterval(function () {
//     if(projectnumber <= 100){
//         project.innerText = projectnumber++
//     }
// },100)

// // team 
// var teamnumber = 0
// window.setInterval(function () {
//     if(teamnumber <= 10){
//         team.innerText = teamnumber++
//     }
// },100)


// var imgs =[
//     'img/room4.jpg.webp',
//     'img/room3.jpg.webp',
//     'img/room2.jpg.webp',
//     'img/room1.jpg.webp'
// ]

// var slider = document.getElementById('slider')
// var i = 0
// window.setInterval(function () {
//     console.log(i)
//     if(imgs.length <= i){
//         i =0
//     }
//     slider.src = imgs[i]
//     i++
// },1000)


// window.onload = function () {

// }


var loader = document.querySelector('.loader')
setTimeout(function(){
    loader.classList.add('fadeout')
},1000)


// window.onload = function () {
//     loader.classList.add('fadeout')
// }