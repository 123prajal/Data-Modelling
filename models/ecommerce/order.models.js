import mongoose, { trusted } from "mongoose";

const orderitemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }

})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderitems: {
        type: [orderitemSchema]
    }
}, {timestamps: true})

export const Order = mongoose.model("Order", orderSchema)