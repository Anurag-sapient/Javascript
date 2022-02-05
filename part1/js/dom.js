//document object model is api for manipulating the html and xml -add,remove,modify the document/html

//only one element selection using id
let el=document.getElementById("first")
console.log(el)
// console.log(el.innerHTML)
el.innerHTML="changed by js"
el.innerHTML="<h1>list2</h1>"

//multiple element by using classname
let ele=document.getElementsByClassName("cl")
console.log(ele.length)
for(i=0;i<ele.length;i++){
    ele[i].innerHTML="<p>changed by using class id in js</p>"
}

//using tag change multiple elements
let tags = document.getElementsByTagName("h2")
console.log(tags.length)
for(i=0;i<tags.length;i++)
{
    tags[i].innerHTML="changed by tag name"
}
//another way for particularly present in div only h2
let tagById = document.getElementById("divId")
let h2=tagById.getElementsByTagName("h2");
for(i=0;i<h2.length;i++)
{
    h2[i].innerHTML="changed by div and then using tag name"
}

//query selector- css based selection are done here

//querySelector selects only the first that satisifies its condition
let querySelector1 = document.querySelector("p.intro")
console.log(querySelector1.innerHTML)

//queryselectorAll selects all that satisifies the requirement
let querySelectorAll = document.querySelectorAll("p.intro")
console.log(querySelectorAll)


//we could also select parent element ,child element,first child ,last child and siblings

//append child/create element
let h1=document.createElement("h1")//type of element created
h1.id="h1Id"
h1.className="try pi"
let x=document.getElementById('divId')
// let text=document.createTextNode('this h1 created by javascript')
// h1.appendChild(text)
h1.textContent="using this also we could add text content"
//using text content  we can add content and read content also
x.appendChild(h1)



