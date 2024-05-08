const router = require('express').Router();
const {  bookingController } = require('../controller');

router.post('/', bookingController.createBooking);
// router.put('/',carController.approvedByAdmin);
router.get("/",bookingController.getAllBookings);
// router.get("/approved",carController.getApprovedCars);

module.exports = router;