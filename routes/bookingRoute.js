const {Router}=require("express")
const {addBookingSite, getSites }=require("../controllers/bookingController")

const router=Router()

router.route("/bookings").post(addBookingSite).get(getSites)

module.exports=router