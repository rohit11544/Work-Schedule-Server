import mongoose from "mongoose";
import WorkDetails from "../models/workDetails.js";

export const getWorks = async ( req ,res) => {
    try{
        const workDetails = await WorkDetails.find(); 
        res.status(200).json(workDetails);
    }catch (error) {
        res.status(404).json({ message: error.message});
    }
};

export const createWorks = async (req,res) => {
    const work = req.body; // stores data given by client
    const newWork = new WorkDetails(work); // adds the data to existing table
    try{
        await newWork.save();// saves table
        res.status(200).json(newWork); // return the new table
    }
    catch(error) {
        res.status(404).json({message: error.message}); 

    }
};
 
export const updateWorks = async (req,res) => {
    const { id: id } = req.params;
    const work = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "There is no work with that id"});
    }
    const updatedWork = await WorkDetails.findByIdAndUpdate(id,{...work,id});
    res.json(updatedWork);
};

export const deleteWorks = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : "There is no work with that id"});
    }
     await WorkDetails.findByIdAndRemove(id);
     res.json({message: "work deleted successfully"});

};

