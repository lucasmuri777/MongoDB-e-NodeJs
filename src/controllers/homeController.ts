import { Request, Response } from 'express';

import User  from '../models/User';

export const home = async(req: Request, res: Response)=>{

    let users = await User.find({}).sort({ _id: 1 }).limit(2);
    let numUsers = await User.countDocuments();
    let pagination = []
    for(let i = 0; i < numUsers / 2; i++){
        pagination.push(i+1)
    }
    

    res.render('pages/home', {
       users,
       pagination
    });
};

