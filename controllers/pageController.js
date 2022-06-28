const Freelancer = require("../models/Freelancer")


exports.getIndexPage=async(req,res)=>{
    const freelances=await Freelancer.find()
    res.render('index',{
        freelances,

    })
   
}

exports.getAboutPage=async(req,res)=>{
    res.render('about')
}

exports.getAddPage=async(req,res)=>{
    res.render('add')
}


exports.getEditPage=async(req,res)=>{
    const freelancer = await Freelancer.findById({_id: req.params.id})
    res.render('edit',{
        freelancer
    })
}
