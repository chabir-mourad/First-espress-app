const express =require("express")
const app=express()
const getHours = new Date()



app.get('/home.html',(req,res)=>{
if  ((getHours>8)&&(getHours<17)) {
    res.sendFile(__dirname + '/public/home/home.html')
}
else {
    res.sendFile(__dirname + '/public/home/officeclosed.html')
}
})


app.use(express.static(__dirname + 'public'))


app.get('/services.html',(req,res)=>{
    res.sendFile(__dirname + '/public/services_doc/services.html')
})

app.get('/contact.html', (req,res)=>{
    res.sendFile(__dirname + '/public/contact_doc/contact.html')
})



app.listen(9000,(err)=> {
    if (err){
      console.log("server is not running")
        
    }
    else {
        console.log("server is running ")
    }
}
)