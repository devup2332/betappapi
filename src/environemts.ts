import dotenv from "dotenv";

dotenv.config();

export const environments = {
  PORT: process.env.PORT || 8000,
  JWT: {
    SECRET: process.env.JWT_SECRET || "123123123",
  },
  DB: {
    HOST: process.env.MYSQL_HOST || "localhost",
    USER: process.env.MYSQL_USER || "admin",
    PASSWORD: process.env.MYSQL_PASSWORD || "123123123",
    ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD || "123123123",
    DATABASE: process.env.MYSQL_DATABASE || "betapp",
  },
};
