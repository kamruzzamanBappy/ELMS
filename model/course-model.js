import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
title:{
    required:true,
    type: String,
},

description: {
    required:true,
    type:String,
},

thumbnail:{
    required:true,
    type:String,
},
modules: [
     {type:Schema.ObjectId, ref:"Module"}
],
price:{
    required:true,
    type:Number,
},
active:{
    required:true,
    type:Boolean,
},

category:{
    type:Schema.ObjectId, ref:"Category"
},

//make category in reference. ********it refer Category collection. ******
// Category must be matched from category-model.js => 
//bcz mongoose make it plural by default  
    
// export const Category = mongoose.models.Category ?? mongoose.model("Category",categorySchema)

instructor:{
    type:Schema.ObjectId, ref:"User"
    // User => user-model.js
},

quizzes: {
    required: false,
    type: Schema.ObjectId,
},

testimonials: [{
   type:Schema.ObjectId, ref:"Testimonial"
}],

});


export const Course = mongoose.models.Course ?? mongoose.model("Course",courseSchema);