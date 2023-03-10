import express from 'express'
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getUserOrders,
    updateOrderStatus,
    getAllOrders
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect,getUserOrders)
router.route('/allorders').get(protect,getAllOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/status').put(updateOrderStatus)



export default router
