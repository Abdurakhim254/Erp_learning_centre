import express from "express";
import { mainRouter } from "./routes/main.js";
import { createAlltables } from "../src/schema/index.js";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import DeviceDetector from "node-device-detector";

export const app = express();

const detector = new DeviceDetector();

const limitter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
                                  
app.use(helmet());
app.use(limitter);

app.get("/api/v1/setup", async (req, res) => {
  try {
    await createAlltables();
    res.status(200).send("Table yaratildi");
  } catch (error) {
    res.status(400).send("Table yaratishda xatolik");
  }
});

app.use("/api/v1", mainRouter);

// app.use((req, res) => {
//   const ip = req.ip;
//   const ips = req.ips;
//   const host = req.host;
//   const hostname = req.hostname;
//   const xhr = req.xhr;

//   const userAgent = req.headers["user-agent"];
//   const result = detector.detect(userAgent);

//   // console.log('result-parse',result)
//   console.log({ ...result, ip, ips, host, hostname, xhr });

//   res.send(result);
// });
