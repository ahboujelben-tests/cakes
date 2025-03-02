import { Handler } from "express";
import { createLogger, format, transports } from "winston";

export const logger = (): Handler => {
  const customFormat = format.printf(({ level, message, timestamp, stack }) => {
    return `[${timestamp}] ${level}: ${message} ${stack ?? ""}`;
  });

  const loggerInstance = createLogger({
    level: "info",
    format: format.combine(format.timestamp(), customFormat),
    transports: [new transports.Console()],
  });

  return (req, res, next) => {
    res.on("finish", () => {
      if (req.originalUrl === "/") {
        return;
      }
      loggerInstance.info(
        [
          "request",
          `method: ${req.method} ${req.originalUrl}`,
          `status: ${res.statusCode}`,
        ].join(" -- "),
      );
    });
    next();
  };
};
