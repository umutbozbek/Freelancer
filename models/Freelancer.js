const  mongoose=require('mongoose')
const Schema=mongoose.Schema

// şema oluşturma

const FreelancerSchema=new Schema({
    name:String,
    image:String
})

const Freelancer=mongoose.model('Freelancer',FreelancerSchema)

module.exports=Freelancer