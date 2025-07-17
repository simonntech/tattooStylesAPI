import { FastifyInstance } from "fastify";
import { tattooStyles } from "../data/tattooStylesData";

const JSON = "application/json";
const OK = 200;
const NOT_FOUND = 404;

export async function stylesRoutes(server: FastifyInstance) {
    server.get("/estilos", async (req, res) => {
        res.type(JSON).code(OK);
        return { tattooStyles };
    })
}

interface styleParams {
    styleName: string
}

export async function styleRoutesName(server: FastifyInstance) {
    server.get<{ Params: styleParams }>("/estilos/:styleName", async (req, res) => {
        const name = req.params.styleName;
        const style = tattooStyles.find(style => style.styleName === name);
        if (!style) {
            res.type(JSON).code(NOT_FOUND);
            return { message: "Estilo não encontrado" };
        } else {
            res.type(JSON).code(OK);
            return { style };
        }
    })
}