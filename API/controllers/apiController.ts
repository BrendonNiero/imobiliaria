import { Request, Response } from "express";

export const ping = (req: Request, res: Response) => {
    res.json({ pong : true });
};

export const imoveis = (req: Request, res: Response) => {
    res.json({ lista: "Lista de imóveis" });
};