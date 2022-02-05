function changeBG(x){
    document.body.style.backgroundColor =x;
    let txt=document.getElementsByClassName("text")
    if(x=="#000000"){
        for(i of txt){
            i.style.color="white"

        }
        console.log(x)
    }
    else{
        for(i of txt){
            i.style.color="black"

        }
    }
    console.log(x)

}