import express from 'express'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
// import { createBooking, getAllBooking, getBooking, getUserBookings } from '../controllers/bookingController.js'
import { createBooking, getAllBooking, getUserBookings, deleteBooking, getBooking, getBookingByBookId } from '../controllers/bookingController.js'

const router=express.Router()


// router.post('/',verifyUser,createBooking)
router.post('/',createBooking)







// ************

router.get('/:userId',getUserBookings)

router.get('/getBookingByBookId/:bookId',getBookingByBookId)


router.get('/',verifyAdmin,getAllBooking)

router.delete('/',deleteBooking)

router.get('/:userId/:bookId',getBooking)




export default router