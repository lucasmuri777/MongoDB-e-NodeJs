import { Request, Response } from 'express';

import User  from '../models/User';

export const deleteUser = async(req: Request, res: Response)=>{
    let id = req.params.id;
    if(!id){
        res.redirect('/');
    }
    try{
        await User.deleteOne({_id: id});
    }catch(err){
        console.log(err);
    }
    res.redirect('/');
}