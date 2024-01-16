import {Request, Response} from "express";
import ShortUniqueId from 'short-unique-id';

export async function index(req:Request, res:Response){
    res.json('home');
};


export function redirectUrl(req:Request, res:Response){
    const token:string = req.params.token;
    

    // res.send('token : ' + token);
    res.redirect('https://www.youtube.com/');
};

export async function generateToken(req:Request, res:Response){
    const url:string = req.body?.url;

    const uid = new ShortUniqueId({ length: 6 });

    try {
        const token:string = uid.rnd();
        res.send(token);
        
    } catch (error) {
        console.error(error);
        
    }
}