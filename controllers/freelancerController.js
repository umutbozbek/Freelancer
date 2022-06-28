const Freelancer=require('../models/Freelancer')
const fs=require("fs")


exports.createFreelancer=async(req,res)=>{
    const uploadDir="public/uploads"
    if(!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir)
    }

    let uploadImage=req.files.image
    console.log(req.files.image)
    let uploadPath=__dirname + '/../public/uploads/'+uploadImage.name

    uploadImage.mv(uploadPath,async()=>{
        await Freelancer.create({

            ...req.body,
            image:'/uploads/'+uploadImage.name
        })
        res.redirect('/')
    })
}


exports.updateFrelancer=async(req,res)=>{
    const freelancer=await Freelancer.findOne({_id:req.params.id}) 
     
    freelancer.name=req.body.name
    
    freelancer.save()

    res.redirect('/')
}

exports.deleteFreelancer=async(req,res)=>{
    const freelancer=await Freelancer.findOne({_id:req.params.id})
    await Freelancer.findByIdAndRemove(req.params.id)
    res.redirect('/')
}