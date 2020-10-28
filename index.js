let input=document.querySelector('#add');
let btn=document.querySelector("#btn");
let list=document.querySelector('#list');
let el=document.getElementsByTagName('li');

btn.addEventListener('click',()=>{
let text= input.value;
if(text===""){
    alert('i am cool')
}
else{
     let li=document.createElement('li');
     li.innerHTML=text;
     list.insertBefore(li, list.childNodes[0])
     input.value="";
}
})
list.addEventListener('click', e =>{
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked');
    }
})
function isMy(mathematics){
    if(mathematics===''){
        return true
    }
    else{
        return false
    }
    
}
console.log(isMy(2))
