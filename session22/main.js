// fetch 
// promise 
// class 
// localstorage , sessionstorage , cookies 


// let ajax = new XMLHttpRequest;

// ajax.open('GET','https://jsonplaceholder.typicode.com/users')
// ajax.send()
// ajax.onreadystatechange = ()=>{
//     if(ajax.readyState == 4){
//         let data =  JSON.parse(ajax.response)
//         console.log(data)
//     }
// }


// fetch('https://jsonplaceholder.typicode.com/users')
// .then( (x)=> x.json() )
// .then( (data)=> console.log(data) )




// var data = ['item1','item2']

// var list = document.getElementById('list')

// function show(){
//     let result = ''
//     for(let i=0;i<data.length;i++){
//         result += `<li>${data[i]}</li>`
//     }

//     list.innerHTML = result
// }

// function add(callback){
//     setTimeout(function(){
//         data.push('item3')
//         callback()
//     },1000)
// }


// add(show)






// function show(){
//     let result = ''
//     for(let i=0;i<data.length;i++){
//         result += `<li>${data[i]}</li>`
//     }

//     list.innerHTML = result
// }

// function add(){
//     return new Promise((res,rej)=>{
//             setTimeout(function(){
//                 data.push('item3')
//                 res()
//             },1000)
//     })
// }



// add().then(show)







// XMLHttpRequest

// []
// {}
// ''


// v8



// function users(){
//     this.name = 'ahmed'
//     this.bd = function () {
//         console.log(1995)
//     }
// }



// let u = new users

// console.log(u)



// function mystring(s){
//     this.string = s
//     this.loop = function(){
//       for(let i=0;i<this.string.length;i++){
//         console.log(this.string[i])
//       }  
//     }
// }


// class mystring{
//     constructor(){
//        console.log('test') 
//     }


//     loop = ()=>{
//         console.log('loop')
//     }
// }



// let x = new mystring






// let firstname = new mystring('mohamed')


// console.log(firstname.string)
// console.log(firstname)






// console.log(document)



// class document {
//     getelementbyid = ()=>{

//     }

//     onckick = ''
// }
// document.getElementById


class validation{
    constructor(name){
        console.log('hi '+name)
    }
}



// let v = new validation('tamer')




// let firstname = new String('ahmed')


// let ajax = new XMLHttpRequest