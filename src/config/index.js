import dotenv from "dotenv";

dotenv.config({
  quiet: true,
});

const required = (name) => {
  const value = process.env[name];

  if (!value) throw new Error(`The env variable ${name} is required`);

  return value;
};

export default {
    PORT: Number(required("PORT")),

    //DB Config
    DB_HOST: required("DB_HOST"),
    DB_PORT: Number(required("DB_PORT")),
    DB_NAME: required("DB_NAME"),
    DB_USER: required("DB_USER"),
    DB_PASSWORD: required("DB_PASSWORD")
}
