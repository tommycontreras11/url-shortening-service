import { Request, Response } from "express";
import { shortUrlService } from "./short-url.service.js";

export const createShortUrlController = async (req: Request, res: Response) => {
    try {
        const data = await shortUrlService.create(req.body)
        return res.status(200).json({ data })
    } catch (error: any) {
        return res.status(error.status ?? 500).json({ error: { message: error ?? "Internal Server Error" } })
    }
}