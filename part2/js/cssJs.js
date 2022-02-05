let x=document.getElementById("btn")
x.setAttribute('name','form1')
console.log(x.getAttribute('name'))
x.removeAttribute('name')
//to change styling of button
x.style.cssText="background-color:black; color: white"
// console.log(getComputedStyle(x))

//get class and print them
for(classes of x.classList){
    console.log(classes)
}

//height and width
width = x.offsetWidth
height=x.offsetHeight
console.log(height)
console.log(width)
