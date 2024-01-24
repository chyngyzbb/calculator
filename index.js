const inputANode=document.querySelector('.input-a')
const inputBNode=document.querySelector('.input-b')
const selectNode=document.querySelector('.select')
const btnNode=document.querySelector('.js-btn')
const outputNode=document.querySelector('.output')


btnNode.addEventListener('click',function(){
    const a=Number(inputANode.value)
    const b=Number(inputBNode.value)
    const operation=selectNode.value

    const result=calculate({a,b,operation})

    outputNode.innerHTML=result
})