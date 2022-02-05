//dom events are actions that occur as a result of user action or change of state of elements of dom tree
//eg->user clicks mouse and page ,image reloades
function btnClick(){
    alert('button was clicked')
}
let btn=document.getElementById('btn')
//one in '' and other just function
btn.addEventListener('click',btnClick)
btn.addEventListener('mouseover',function(){console.log('mouseover ')})
btn.addEventListener('mouseout',function(){console.log('mouse out')})
btn.removeEventListener('click',btnClick)

//page load events in javascript

//mouse events
// btn.addEventListener('mousedown')
// btn.addEventListener('mouseup')
// btn.addEventListener('dblclick')

//key down events
window.addEventListener('keydown',checkKey)
function checkKey(event){console.log(event.key)}
//checks all the keys pressed by keyboard

//scroll events
window.addEventListener('scroll',function(){console.log('scrolling')})

//to check scrolling done upward or downward
window.addEventListener('wheel',function(event){
    if(event.deltaY<0)console.log('scrolling upward')
    if(event.deltaY>0)console.log('scrolling downward')
})

window.addEventListener('scroll',function(){
    if(window.pageYOffset>150){
        document.body.style.background="red"
    }
    if(window.pageYOffset<150){
        document.body.style.background="green"
    }
})

//form events
let input=document.getElementById('texts')
input.addEventListener('focus',function(){input.style.background="red"})
input.addEventListener('blur',function(){input.style.background="purple"})

input.addEventListener('change',function(){console.log(this.value)})
input.addEventListener('input',function(){console.log(this.value)})

//bubbling abd capuring
// addEventListener('bubble',function)//by default bubbling->child executed first then parent
// addEventListener('bubble',function,true)//by capuring ->parent executed first then child
//event.stopPropagation()->stops flow 

//preventdefault function->to natural behaviour of dom
// event.preventdefault()

