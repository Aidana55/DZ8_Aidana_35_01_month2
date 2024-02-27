

const tr = document.querySelectorAll("tr")
const buy = document.querySelectorAll(".buy")
const modal = document.querySelector(".modal")
const yes = document.querySelector(".yes")
const no = document.querySelector(".no")


modal.style.display  = "none"

buy.forEach((elem , index)=>{
  elem.onclick=(e)=>{
    modal.style.display="flex"
    yes.onclick = ()=>{
      
      
        e.target.style.display="none" 
        e.target.innerText = "cancel"
        tr[index+1].style.background = "grey"
        modal.style.display="none"
        
      
    }
    no.onclick =()=>{
      modal.style.display="none"
    }
    

    
  }
})

