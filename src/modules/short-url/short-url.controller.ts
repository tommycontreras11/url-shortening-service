import { Request, Response } from "express";
import { shortUrlService } from "./short-url.service.js";
import { StatusCode } from "../../helpers/status-code.js";

export const getShortUrlByShortCodeController = async (req: Request, res: Response) => {
    try {
        const { shortCode } = req.params as { shortCode: string }

        const data = await shortUrlService.getByShortCode(shortCode)
        return res.status(StatusCode.OK).json({ data })
    } catch (error: any) {
        return res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({ error: { message: error.message ?? "Internal Server Error" } })
    }
}

export const getShortUrlStatsByShortCodeController = async (req: Request, res: Response) => {
    try {
        const { shortCode } = req.params as { shortCode: string }

        const data = await shortUrlService.getStatsByShortCode(shortCode)
        return res.status(StatusCode.OK).json({ data })
    } catch (error: any) {
        return res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({ error: { message: error.message ?? "Internal Server Error" } })
    }
}


export const createShortUrlController = async (req: Request, res: Response) => {
    try {
        const data = await shortUrlService.create(req.body)
        return res.status(StatusCode.CREATED).json({ data })
    } catch (error: any) {
        return res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({ error: { message: error.message ?? "Internal Server Error" } })
    }
}

export const updateShortUrlController = async (req: Request, res: Response) => {
    try {
        const { shortCode } = req.params as { shortCode: string }

        const data = await shortUrlService.update(shortCode, req.body)
        return res.status(StatusCode.OK).json({ data })
    } catch (error: any) {
        return res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({ error: { message: error.message ?? "Internal Server Error" } })
    }
}

export const deleteShortUrlController = async (req: Request, res: Response) => {
    try {
        const { shortCode } = req.params as { shortCode: string }

        await shortUrlService.delete(shortCode)
        return res.status(StatusCode.NO_CONTENT).json()
    } catch (error: any) {
        return res.status(error.status ?? StatusCode.INTERNAL_SERVER_ERROR).json({ error: { message: error.message ?? "Internal Server Error" } })
    }
}
