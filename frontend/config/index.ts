const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

if(!API_URL) throw new Error(`NEXT_PUBLIC_API_URL is not defined.`)

export const config = {
    API_URL
}