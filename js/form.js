function product(pid,name,price){
    this.pid=pid
    this.name=name
    this.price=price
    this.incprice=function(amount){
        this.price=this.price+amount
        console.log("price",this.price)

    }
    
    
} 
function values(){
var pid=document.getElementById('pid').value
var name=document.getElementById('name').value
var price=document.getElementById('price').value
var p=new product(pid,name,price)
alert(p.pid+""+p.price+""+p.name)
pstr
productlist.push(p)
console.log(productlist)
for(obj)
}
