let text = document.getElementById("textbox")
text.addEventListener('input',function(){
    let text=this.value;
    document.getElementById('char').innerHTML=text.length
    //trim spaces from starting and ending
    
    let arr=text.trim().split(" ")
    let cleanlist=arr.filter(function(el){
        return el!=""; 
    });
    document.getElementById('word').innerHTML=cleanlist.length
})