import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register API routes
const server = registerRoutes(app);

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  throw err;
});

// CONDITIONAL SETUP:
// Only use the Vite middleware if we are NOT in production (Vercel is production)
if (process.env.NODE_ENV !== "production") {
  await setupVite(app, server);
}

// PORT LISTENER:
// Only listen on a port if we are running locally. 
// On Vercel, we export the app instead.
if (process.env.NODE_ENV !== "production") {
  const PORT = 5000;
  server.listen(PORT, "0.0.0.0", () => {
    log(`serving on port ${PORT}`);
  });
}

// CRITICAL FOR VERCEL:
export default app;
