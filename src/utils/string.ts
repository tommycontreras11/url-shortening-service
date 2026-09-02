import crypto from "crypto"

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateShortCode = (length = 8) => {
  const bytes = crypto.randomBytes(length);

  return Array.from(bytes, byte => characters[byte % characters.length])
    .join("");
}