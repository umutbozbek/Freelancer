const express=require('express')
const freelancerController=require('../controllers/freelancerController')

const router=express.Router()

router.route('/add').post(freelancerController.createFreelancer)
router.route('/edit/:id').put(freelancerController.updateFrelancer)
router.route('/edit/:id').delete(freelancerController.deleteFreelancer)



module.exports=router