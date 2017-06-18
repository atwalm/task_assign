
 var displayContainer=document.getElementById("list-container")
 displayContainer.innerHTML="";
  var creatUL = document.createElement("ul");
  creatUL.id =  "ullist";
  displayContainer.appendChild(creatUL);
  var ulbyId = document.getElementById("ullist");

function drawList()
{
  var TaskSelected=document.getElementById("taskListOpts").value;
  var name=document.mainForm.person.value;
  var task=document.mainForm.myname.value;
  var createLi=document.createElement("li");
  var messageString = "You "+name+" need to go for "+ task +"(task)"+TaskSelected;
  var TestNode=document.createTextNode(messageString)
    createLi.appendChild(TestNode);
  ulbyId.appendChild(createLi);
}

function houseBuilder(){
  console.log("task assign")
  event.preventDefault();
  var form=document.querySelector("form");


  drawList();
}
window.onload=function()
{

  drawList();
  var form =document.querySelector("form");
  form.onsubmit =houseBuilder;
}
