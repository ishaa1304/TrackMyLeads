let myLeads=[]
const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
let listItems = ""

const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads()
{for(let i =0;i<myLeads.length;i++)
{
    listItems += "<li>"+"<a target = '_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a>"+"</li>"

 }

 ulEL.innerHTML = listItems}