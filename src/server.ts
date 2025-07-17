import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { stylesRoutes } from "./controllers/styles-controller";

const server = fastify();

server.register(fastifyCors, {
    origin: "*",
    methods: ["GET"],
});

// é necessário registrar a rota do CONTROLLER
server.register(stylesRoutes);

server.listen({ port: 8000}, () => {
    console.log("API funcionando...")
});