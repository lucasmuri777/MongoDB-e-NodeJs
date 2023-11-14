import { Request, Response } from 'express';

import User  from '../models/User';

export const page = async(req: Request, res: Response)=>{
    let page = parseInt(req.params.id)

    let users = await User.find({}).sort({ _id: 1 })
    .limit(2).skip(2 * (page - 1));
    let numUsers = await User.countDocuments();
    let pagination = []

    if(!page){
        res.redirect('/');
    }
    for(let i = 0; i < numUsers / 2; i++){
        pagination.push(i+1)
    }
    if(users.length < 1){
        res.redirect('/');
    }
    res.render('pages/home', {
        users,
        pagination
    });
}