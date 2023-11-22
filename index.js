let qn= document.querySelectorAll('.Qn');

qn.forEach((v,index)=>{
     
   v.addEventListener('click',()=>{
    v.nextElementSibling.classList.toggle('scale-y-100');
    v.nextElementSibling.classList.toggle('h-[auto]');
    v.nextElementSibling.classList.toggle('p-[10px]');
    v.children[1].classList.toggle("rotate-45")

    qn.forEach((e,i)=>{
        if(i!== index){
            e.nextElementSibling.classList.remove("scale-y-100","h-[auto]","p-[10px]");
            e.children[1].classList.reomve("rotate-45")
        }
    })
   })

})