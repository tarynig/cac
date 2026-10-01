process.env.NITRO_HOST = "0.0.0.0";
process.env.NITRO_PORT = process.env.PORT || "3000";

await import("./.output/server/index.mjs");