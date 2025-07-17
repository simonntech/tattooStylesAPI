import { FastifyInstance } from "fastify";
import { tattooStyles } from "../data/tattooStylesData";

const JSON = "application/json";
const OK = 200;

export async function stylesRoutes(server: FastifyInstance) {
    server.get("/estilos", async (req, res) => {
        res.type(JSON).code(OK);
        return { tattooStyles };
    })
}