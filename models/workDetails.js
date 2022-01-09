import mongoose from "mongoose";

const workSchema = mongoose.Schema({
    workTitle : String,
    workDescription : String,
    deadLine : String,
})

const SRWorks = mongoose.model("SRWorks",workSchema)
export default SRWorks