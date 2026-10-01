process.env.NITRO_HOST = "0.0.0.0";
process.env.NITRO_PORT = process.env.PORT || "3000";

process.on("uncaughtExceptionMonitor", (error) => console.error("SYSTEM CRASH:", error));

console.log("Attempting to boot Nitro server...");

try {
  await import("./.output/server/index.mjs");
} catch (error) {
  console.error("Failed to import Nitro server bundle:", error);
  process.exit(1);
}