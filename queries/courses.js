
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/module.model";
import { Testimonial } from "@/model/testimonial-model";
import { User } from "@/model/user-model";








export async function getCourses() {

    const courses = await Course.find({}).populate({
        path:"category",
        model: Category,
        strictPopulate: false
    }).populate({
        path:"instructor",
        strictPopulate: false,
        model:User
    }).populate({
        path:"testimonials",
        strictPopulate: false,
        model:Testimonial
    }).populate({
        path:"modules",
        strictPopulate: false,
        model:Module
    })
    
    
    
    
    ;
    return courses;
    
}



//find kortachi course er somosto details. jekhane jehane category pabo, sekhane reference chk korbo
// sei reference ka ei particular model base   model:Category dat tuila aina eksatha refere  koira send koro

