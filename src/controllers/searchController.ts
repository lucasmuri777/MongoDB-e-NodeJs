import { Request, Response } from 'express';

import User  from '../models/User';

export const search = async(req: Request, res: Response)=>{
    let search = req.query.search;
    let searchUser = await User.find({
        "name.firstName": {$regex: search, $options: 'i'}
    }).limit(5)

    if(!search){
        res.redirect('/');
    }
    res.render('pages/home', {
        users: searchUser,
        search
    });
}