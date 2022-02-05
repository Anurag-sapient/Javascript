let cel=document.getElementById('cel')
let fh=document.getElementById('fh')

cel.addEventListener('input',function(){
    let c=this.value;
    fh.value=(9/5)*c+32
})

fh.addEventListener('input',function(){
    let f=this.value;
    cel.value=(f-32)*5/9

})


