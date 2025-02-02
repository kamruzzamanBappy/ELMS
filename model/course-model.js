import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({

});


export const Course = mongoose.models.Course ?? mongoose.model("Course",courseSchema);