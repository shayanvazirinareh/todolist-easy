let addtodo=document.getElementById('addToDo');
let todocontainer=document.getElementById('toDoContainer');
let inputfield=document.getElementById('inputField');
addtodo.addEventListener('click',()=>{
    if(inputfield.value==''){
        inputfield.setAttribute('placeholder','only string and number')
        inputfield.style.textAlign='center'
        inputfield.style.background='red'
        inputfield.style.color='white'
        inputfield.style.fontWeight='300'
    }else if (inputfield.style.background==='red'){
        inputfield.style.fontSize='1rem'
        inputfield.value='plaese refersh page';
        inputfield.style.fontSize='25px'
        inputfield.style.fontStyle='italic'
        todocontainer.value='';  
    }else{
        var paragraph=document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerHTML=inputfield.value;
        todocontainer.appendChild(paragraph);
        inputfield.value='';
        paragraph.addEventListener('click',()=>{
            paragraph.style.textDecoration='line-through';
            paragraph.style.background='green';
        })
    }
paragraph.addEventListener('dblclick',()=>{
    todocontainer.removeChild(paragraph)
})

})