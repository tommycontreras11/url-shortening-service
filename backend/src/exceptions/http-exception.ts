import { StatusCode } from "../helpers/status-code.js";

export class HttpException extends Error {
    statusCode: StatusCode

    constructor(message: string, statusCode: StatusCode) {
        super(message)
        
        this.message = message
        this.statusCode = statusCode
    }
}