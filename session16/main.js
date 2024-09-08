var save  = document.getElementById('save')
var task = document.getElementById('task')
var result = document.getElementById('result')
var update = document.getElementById('update')
var todo = []
save.onclick = function (){

    todo.push(task.value)
    task.value = ''

    show()
}


function show(){
    var li = ''
    for(var i=0;i<todo.length;i++){
         li += `<li onclick=destroy(${i})>${todo[i]}</li> <button onclick='edit(${i})'>edit</button>`
    }
    result.innerHTML = li 
}


function destroy(index){
    todo.splice(index,1)
    show()
}
var i;

function edit(index) {
    i = index
    task.value = todo[index]
    update.style.display = 'inline'
    save.style.display = 'none'
}

update.onclick = function () {
    
    todo[i] = task.value
    show()
    task.value = ''
    update.style.display = 'none'
    save.style.display = 'inline'
}