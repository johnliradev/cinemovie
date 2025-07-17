import { app } from "@/lib/fastify";

app.listen({ port: 3333, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
