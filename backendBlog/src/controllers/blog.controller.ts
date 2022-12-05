import { Blog, User } from '@prisma/client';
import  * as argon2 from 'argon2';
import {Request, Response} from 'express'
import { prisma } from '../config/db';
import * as jwt from 'jsonwebtoken'
import { IUser } from '../middlewares/auth';
import { deleteBlogSchemaType } from '../zod_schema/blog.schema';

export const getAllBlogsHandler = async(req:Request, res:Response) => {
    const user = res.locals.user as IUser
    const blogs = await prisma.blog.findMany({
        where: {userid: user.id}
    })
    return res.status(200).json(blogs)
}


export const addBlogHandler = async(req:Request, res:Response) => {
    try{
        const {title , message} = req.body as Blog
        const user = res.locals.user as IUser

        await prisma.blog.create({
            data: {
                title,
                message,
                userid: user.id
            }
        })
        return res.status(200).json({
            message: 'Blog added'
        })
    }catch(error){
        return res.status(400).json({
            message: 'issue with your input'
        })
    }
}


export const deleteBlogHandler = async(req:Request, res:Response) => {
    const user = res.locals.user as IUser
    const {id} = req.params as deleteBlogSchemaType

    const deletedBlogs = await prisma.blog.deleteMany({
        where: {
            id: id,
            userid: user.id
        }
    })

    if(deletedBlogs.count == 0){
        return res.status(400).json({
            message: 'invalod blog id'
        })
    }

    return res.status(200).json({
        message:  'blog deleted'
    })

}