import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf, colorize } = format;
const now = new Date();
const stamp = now.toISOString().replace(/:/g, '-');

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

// Create logger instance
export const logger = createLogger({
  level: "info", // log levels: error, warn, info, http, verbose, debug, silly
  format: combine(
    colorize(),   // adds colors in console
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    logFormat
  ),
  transports: [
    
    new transports.Console(),
    new transports.File({ filename: `logs/${stamp}.log` }) // save logs to file
  ],
});