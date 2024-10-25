import {Request, Response} from "express";

const index = (req: Request, res: Response) => {
    res.send('Get All Products');
}

const store = (req: Request, res: Response) => {
    res.send(req.body);
}

const show = (req: Request, res: Response) => {
    res.send('Get Product');
}

const update = (req: Request, res: Response) => {
    res.send('Update Product');
}

const destroy = (req: Request, res: Response) => {
    res.send('Delete Product');
}

export const products = {
    index,
    store,
    show,
    update,
    destroy
}