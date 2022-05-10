const Booking = require("../models/bookingSchema")


//add site
const addBookingSite = (req, res) => {
     const newBooking = new Booking(
         {
             name: req.body.name,
             image: req.body.image,
             description: req.body.description,
             contact: req.body.contact,
             link: req.body.link
         } 
    )
    newBooking.save()
    res.status(200).json(newBooking)
}
 //get all sites
const getSites = async (req, res) => {
    const bookings = await Booking.find();
    res.status(200).json(bookings)
}
 
module.exports = {addBookingSite, getSites}