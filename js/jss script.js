function product(pid,name,price){
    this.pid=pid
    this.name=name
    this.price=price
    this.incprice=function(amount){
        this.price=this.price+amount
        console.log("price",this.price)

    }
    
    
}   
var s1=new product("34","book",560)
var s2=new product("67","book",767)
console.log(s1)
console.log(s1.pid)
console.log(s2.name)
console.log(s1.price)