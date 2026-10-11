import { Hono } from "hono";

const app = new Hono();

app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    service: "powercare-services",
    timestamp: new Date().toISOString(),
  });
});

export default app;
