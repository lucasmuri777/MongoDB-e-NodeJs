import { Request, Response } from 'express';

import User  from '../models/User';

export const edit = async(req: Request, res: Response)=>{
    var user = null
    try{
        user = await User.findById(req.params.id);
    }catch(err){
        console.log(err);
    }

    if(!user || user == null){
        res.redirect('/');
    }

    let editing = true;

    let users = await User.find({}).sort({ _id: 1 }).limit(2);
    let numUsers = await User.countDocuments();
    let pagination = []
    for(let i = 0; i < numUsers / 2; i++){
        pagination.push(i+1)
    }
    
    res.render('pages/home', {
        users,
        pagination,
        editing,
        user
    });
}
export const editUser = async(req: Request, res: Response)=>{
    let user = req.body;
    let intereses = user.interests.split(',');
    if(!user){
        res.redirect('/');
    }
    try{
        await User.updateOne(
            {_id: user.id},
            {
                name:{
                    firstName: user.firstName,
                    lastName: user.lastName
                },
                age: user.age,
                email: user.email,
                interests: intereses
            }
        )
    }catch(error){
        console.log(error);
    }
    res.redirect('/');

}