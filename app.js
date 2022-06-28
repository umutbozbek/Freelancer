const express=require("express")
const mongoose=require("mongoose")
const fileUpload=require("express-fileupload")
const methodOverride=require("method-override")
const pageRoute=require('./routes/pageRoute')
const freelancerRoute=require('./routes/freelancerRoute')


const ejs =require('ejs')

const app=express()


//connect mongodb
mongoose.connect('mongodb://0.0.0.0:27017/Freelancer-db',{
}).then(()=>{
    console.log('DB CONNECTED!');
  }).catch((err)=>{
    console.log(err);
  })
  

  //Tamplate Engine
  app.set("view engine","ejs")

  //Middlewares
  app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(fileUpload())
app.use(methodOverride('_method',{
    methods: ['POST','GET']
}))


//routes
app.use('/',pageRoute)
app.use('/',freelancerRoute)

const port=3000

app.listen(port,()=>{
    console.log(`sunucu ${port} portunda başlatıldı`);
})