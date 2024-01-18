import {Request, Response} from "express";
import ShortUniqueId from 'short-unique-id';
import dotenv from "dotenv";

dotenv.config();

type context = {
    title: string,
    url:string,
    shortUrl: string,
    hidden:string
}

export async function index(req:Request, res:Response): Promise<void>{

    const data:context ={
        title: 'Short URL', 
        url:'', 
        shortUrl: '',
        hidden: 'hidden'
    };

    res.render('index', data);
};


export function redirectUrl(req:Request, res:Response):void{
    const token:string = req.params.token;
    

    // res.send('token : ' + token);
    res.redirect('https://www.youtube.com/');
};

export function generateToken(req:Request, res:Response): void{
    const url:string = req.body?.url;

    // perlu cek ke database apakah url sudah adaa atau belum
    // jika ada lansung tampilkan yang sudah ada di database
    
    const uid = new ShortUniqueId({ length: 6 });
    
    try {
        const token:string = uid.rnd();
        const data:context ={
            title: 'Short URL', 
            url: url, 
            shortUrl: process.env.BASEURL + '/' + token,
            hidden:''
        };
        res.render('index', data);
        
    } catch (error) {
        console.error(error);
        
    }
}