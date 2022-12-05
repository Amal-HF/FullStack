import { User } from '@prisma/client';
import  * as argon2 from 'argon2';
import {Request, Response} from 'express'
import { prisma } from '../config/db';
import * as jwt from 'jsonwebtoken'

export const loginHandler = async(req:Request, res:Response) => {
    try{
        const {email, password} = req.body as User;
        const user = await prisma.user.findUnique({
            where: {email}
        })
        
        if (!user){
            return res.status(400).json({
                message: 'Wrong username or password'
            })
        }

        const isValid = argon2.verify(user.password, password);
        if(!isValid){
            return res.status(400).json({
                message: 'Wrong username or password'
            })
        }

        const token = jwt.sign({id: user.id},process.env.JWT_SECRET as string);
        return res.status(200).json({
            message: 'Welcom back' + user.username , token
        })
    }catch(error){
        return res.status(400).json({
            message: error
        })

    }
}

export const registerHandler = async(req:Request, res:Response) => {
    try{
        const newUser = req.body as User;
        const hashedPass = await argon2.hash(newUser.password);
        newUser.password = hashedPass;
    
        await prisma.user.create({
            data: newUser
        })
    
        return res.status(201).json({
            message: 'new user added'
        })
    }catch(error){
        return res.status(400).json({
            message: 'Server Error: ' + error
        })
    }
    
}