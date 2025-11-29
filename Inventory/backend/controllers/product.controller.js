import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json({success: true, data: products})
    }catch(e){
        console.error(`Error while getting products ${e}`)
        res.status(500).json({success: false, message: `Error while getting products ${e}`})
    }
}

export const createProduct = async (req, res)=>{

    const product = req.body

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({sucess: false, message: "All fields are required"})
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save();
        res.status(200).json({success: true, data: newProduct, message: "Product created successfully"})
    }catch(e){
        console.error(`Error creating product ${e}`)
        return res.status(500).json({success: false, message: `Error creating product \nError: ${e}`})
    }
}

export const deleteProduct =  async(req, res) =>{
    const {id} = req.params

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted! "})
    }catch(e){
        console.error(`Error deleting the product ${e}`)
        res.status(500).json({
            success: false,
            message: `Error deleting the product ${e}`
        })
    }
}

export const updateProduct = async (req, res)=>{
    const {id} = req.params
    const product = req.body

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({sucess: false, message: "All fields are required"})
    }

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success: false,
            message: "Invalid Id, no product found!"
        })
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new: true})
        res.status(200).json({success: true, data: updatedProduct});
    }catch(e){
        res.status(500).json({success: false, message: `Error updading product \nError: ${e }`})
    }
}