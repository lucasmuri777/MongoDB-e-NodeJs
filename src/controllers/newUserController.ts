import { Request, Response } from 'express';

import User  from '../models/User';

export const newUser = async(req: Request, res: Response)=>{
    let user = req.body;
    if(!user){
        res.redirect('/');
    }
    let intereses = user.interests.split(',');
    let userF = {
        name: {
            firstName: user.firstName,
            lastName: user.lastName
        },
        age: user.age,
        email: user.email,
        interests: intereses
    }
    try{
       let newUser = await User.create(userF);
    }catch(error){
        console.log(error)
    }
    
    res.redirect('/');
}