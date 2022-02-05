//classes and objects

class Seller{
    constructor(n){
        this.name=n+' solanki';
    }
    age=10;
    sold=()=>{
        console.log(this.name)
    }
}
class GuestSeller extends Seller{
    sayHi=()=>{
        //parent constructor is used and can be accessed using this.
        console.log(this.name)
    }
}
let seller = new GuestSeller('anurag')
seller.sayHi()
seller.sold()
console.log(seller.age)
