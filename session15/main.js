




// if(number == 5){
//     // '' , ""
//     console.log('10 = 5')
// }else if(number > 5){
//     console.log('number > 5')
// }
// else {
//     console.log('error') 
// }

var number = 100

// switch(number){
//     case 10:
//         console.log('number = 10')
//     break; 
    
//     case 15:
//         console.log('number = 15')
//     break; 

//     case 20:
//         console.log('number = 20')
//     break; 
//     default :
//         console.log('error')
// }

// 1 =>female , 0 => male 
// var gender = 1

//                            true      false
// var result = (gender == 1) ? 'female' : 'male';


// :
// ;




// console.log(result)

// if(gender == 1){
//     console.log('female')
// }else {
//     console.log('male')
// }



// var number = 1
// // ++number  // pre 
// // number++ // post 

// console.log(number++)

// console.log(number)





 // loop 

    // for 
    // while 
    // do .. while 

//  var i = 0   
// while(i<10){
//     console.log(i)
//     i++
// }


// for(var i = 0;i<10;i++){
//     console.log(i)
// }



var numbers = [23,2142,4534,45]

// 45 
//4534
//2142
//23
// while(n = numbers.pop()){
//     console.log(n)
// }


// for(;n = numbers.pop();){
//     console.log(n)
// }


// var i =0;
// do {

//     console.log(i)
//     i++
// }while(i>10);



// function hi(name,age){
    // console.log('hi '+name+' your age is '+age)
    // console.log(` hi ${name}  your age is ${age} `)
// }



 /// var + string
// hi('eslam',20)





// function sum(x,y){
//     return x+y
// }


// if(sum(10,20) > 20){
//     console.log('30 > 20')
// }






// var person = ['mohamed','']

// var person = {firstname:'mohamed',age:20}

// console.log(person.firstname)





// dom 


// var text = document.getElementById('text')

// text.innerText = 'hi kimit'



// var show  = document.getElementById('show')
// var password = document.getElementById('password')


// show.onclick = function(){
//     if(password.type == 'password'){
//         password.type = 'text'
//     }else{
//         password.type = 'password'
//     }
// }


// var send = document.getElementById('send')

// var email = document.getElementById('email')
// var mail = document.getElementById('mail')


// var fromemail = document.getElementById('fromemail')
// var description = document.getElementById('description')

// send.onclick = function () {
//     fromemail.innerText = email.value
//     description.innerText = mail.value
// }




// var blue = document.getElementById('blue')
// var yellow = document.getElementById('yellow')



// blue.onmousemove =function (){
//     if(yellow.style.opacity == '1'){
//       yellow.style.opacity = '0'
//     }else {
//         yellow.style.opacity = '1'
//     }
// }


// yellow.onmousemove =function (){
//     if(blue.style.opacity == '1'){
//         blue.style.opacity = '0'
//     }else {
//         blue.style.opacity = '1'
//     }
// }

var salary = document.getElementById('salary')
var tax = document.getElementById('tax')
var bonus = document.getElementById('bonus')
var result = 0
function netsalary(){
    var s = parseInt(salary.value)
    var t = parseInt(tax.value)
    var b = parseInt(bonus.value)
    result = s - (s*t/100)
    result += b
    console.log(result)
    document.getElementById('net').innerText = result
}