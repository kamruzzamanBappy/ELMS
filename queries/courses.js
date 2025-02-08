
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/module.model";
import { Testimonial } from "@/model/testimonial-model";
import { User } from "@/model/user-model";

import { replaceMongoIdInArray } from "@/lib/convertData";
export async function getCourseList() {

    const courses = await Course.find({}).select(["title","subtitle","thumbnail","modules","price","category","instructor"]).populate({
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
    }).lean()
    ;
    return replaceMongoIdInArray(courses);
    
}



//find kortachi course er somosto details. jekhane jehane category pabo, sekhane reference chk korbo
// sei reference ka ei particular model base   model:Category dat tuila aina eksatha refere  koira send koro

