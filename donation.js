

console.log(document.getElementsByClassName('donation-btn'))
const btns=document.getElementsByClassName('donation-btn')
for(const btn of btns){
    btn.addEventListener("click",(e)=>{
      
      console.log(e.target.parentNode.children[3].value)
    if(!isNaN(e.target.parentNode.children[3].value) && parseFloat(e.target.parentNode.children[3].value)>0){
      e.preventDefault()
    



      e.target.parentNode.children[0].children[1].innerText=parseFloat(e.target.parentNode.children[3].value)+parseFloat(e.target.parentNode.children[0].children[1].innerText)+" BDT"
      document.getElementById('available-amount').innerText=parseFloat(document.getElementById('available-amount').innerText)-parseFloat(e.target.parentNode.children[3].value)+"BDT"
      const div=document.createElement('div')
      const htwo=document.createElement('h1')
      const paragraph=document.createElement('p')
      htwo.innerText=e.target.parentNode.children[3].value+' tk Donated for '+e.target.parentNode.children[1].children[0].innerText;
    
      paragraph.innerHTML="Date: "+new Date().toString()
      div.appendChild(htwo)
      div.appendChild(paragraph)
      htwo.classList.add("text-2xl","font-bold")
      div.classList.add("p-5","border-2")
      const divContainer=document.createElement('div')
      divContainer.classList.add("p-7")
      divContainer.appendChild(div)
      document.getElementById('history-part').appendChild(divContainer)
      document.getElementById('my_modal_1').showModal()

    } else{
      alert('Invalid amount') 
    }
    })
}