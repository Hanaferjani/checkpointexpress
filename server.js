const express=require("express")
const app=express()
const path=require("path")
const port=4000
const day=new Date().getDay()
const hour=new Date().getHours()
console.log(day)
console.log(hour)
console.log(__dirname)


app.listen(port,()=>{
    console.log("server is runing")
})

const verification=(req,res,next)=>{
if (day<1||day>5){
    res.send("we are closed today")
}
else if(hour<9||hour>16){
    res.send("we are closed today")
}
else next()
}

app.get("/home",verification,(req,res)=>{
res.sendfile(path.join(__dirname,"public","home.html"))
})

app.get("/contact",verification,(req,res)=>{
    res.sendfile(path.join(__dirname,"public","contact.html"))
    })


app.get("/about",verification,(req,res)=>{
    res.sendfile(path.join(__dirname,"public","about.html"))
        })