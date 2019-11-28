function student(rollno,name,age,mark){
    this.rollno=rollno
    this.name=name
    this.age=age
    this.mark=mark
    this.details=function(){
        console.log("name",this.name)
        console.log("rollno",this.rollno)
        console.log("age",this.age)
        console.log("mark",this.mark)
    }
    this.average=function(){
        sum=0
        for(i of this.mark){
            sum+=i
        }
        avg=sum/this.mark.length
    }
}
var s1=new student("1","ann","12",[26,78,90])
var s2=new student("2","anna","13")
s1.details()
s1.average()
console.log(s1)
console.log(s1.name)
console.log(s2.name)
console.log(s1.age)