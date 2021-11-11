var todo = []
var count = 0
var table = document.getElementById("list")
function addTodo(){
    var user = document.getElementById("user").value
    var pr = document.getElementById("dropdown").value
    var obj = {
        name : user,
        date: new Date().toLocaleTimeString(),
        priority : pr
   }
   todo.push(obj)
   console.log(todo)
   

     count++

     
    addtask()
    console.log(count)
}


function addtask(){
     document.getElementById("list").innerText = ""
     for(var i = 0 ; i < todo.length ; i++ ) {
         var tr = document.createElement("tr")
         var td = document.createElement("td")
         var td1 = document.createElement("td")
         var td2 = document.createElement("td")
         var name = document.createTextNode(todo[i].name)
         var dat = document.createTextNode(todo[i].date)
         var pri = document.createTextNode(todo[i].priority)
         
       var lo = document.createElement("div")
          if(todo[i].priority == "Low"){
            
            lo.id = "loo"
          }else if(todo[i].priority == "High"){
            lo.id = "hii"
          }else if(todo[i].priority == "Medium") {
            lo.id = "mee"
          }
           td.appendChild(name)
           td1.appendChild(dat)
           td2.appendChild(lo)
           td2.appendChild(pri)
           
         
           tr.appendChild(td)
           tr.appendChild(td1)
           tr.appendChild(td2)

        //done btn
         var donebtn = document.createElement("button")
         donebtn.id = "donebtn"
         donebtn.onclick = donebt()
         var tdbtn = document.createElement("td")
         tdbtn.appendChild(donebtn)
         tr.appendChild(tdbtn)

       // Edit btn
          var editbtn = document.createElement("button")
          editbtn.id ="editbtn"
          editbtn.onclick = edit(i)
          var tdbtn1 = document.createElement("td")
          tdbtn1.appendChild(editbtn)
          tr.appendChild(tdbtn1)


       //delete btn
         var dltbtn = document.createElement("button")
         dltbtn.id ="dltbtn"
         dltbtn.onclick = dlttbtn(i)
        
         var tdbtn2 = document.createElement("td")
         tdbtn2.appendChild(dltbtn)
         tr.appendChild(tdbtn2)
        



     //display total
         total()
  

         table.appendChild(tr)
        
         document.getElementById("user").value = ""
     }
     return
}

function edit(i){
  return function(){
    
     document.getElementById("user").value = todo[i].name
     todo.splice(i,1)
     
  count--
  var total = document.getElementById("total")
    if(count <= 0 ){
      total.innerText = 0
    }else{
      total.innerHTML = count
    }
  }

}
function dlttbtn(i){
  return function(){
    todo.splice(i,1)
    count--
    var total = document.getElementById("total")
    if(count <= 0 ){
      total.innerText = 0
    }else{
      total.innerHTML = count
    }
    
    
  
    addtask()
  }
}
function donebt(){
  

    
  
}
function total(){
  var total = document.getElementById("total")
   if(count <= 0 ){
     total.innerText = 0
   }else{
     total.innerHTML = count
   }
   
}
function clr(){
  todo = []
  count = 0
  var total = document.getElementById("total")
  total.innerText = count
  addtask()
}

