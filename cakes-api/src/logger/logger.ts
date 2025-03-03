import { Handler } from "express";
import { createLogger, format, transports } from "winston";

const customFormat = format.printf(({ level, message, timestamp, stack }) => {
  return `[${timestamp}] ${level}: ${message} ${stack ?? ""}`;
});

export const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), customFormat),
  transports: [new transports.Console()],
});

export const loggerMiddleware: Handler = (req, res, next) => {
  res.on("finish", () => {
    if (req.originalUrl === "/") {
      return;
    }
    logger.info(
      [
        "request",
        `method: ${req.method} ${req.originalUrl}`,
        `status: ${res.statusCode}`,
      ].join(" -- "),
    );
  });
  next();
};
