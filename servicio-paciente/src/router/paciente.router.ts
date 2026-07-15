import type { FastifyInstance } from "fastify";
import {obtenerPacientes,obtenerPacientesId,
crearPaciente,actualizarPaciente,eliminarPaciente
} from "../controllers/paciente.controller";

export const pacienteRouter = (app: FastifyInstance) => {
    app.get("/pacientes", obtenerPacientes);

    app.get("/pacientes/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await obtenerPacientesId(id);
        } catch (error) {
            reply.code(404).send({
                error: "No se encontró el paciente con ese ID"
            });
        }
    });

    app.post("/pacientes", async (req) => {
        return await crearPaciente(req.body);
    });

    app.put("/pacientes/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await actualizarPaciente(id, req.body);
        } catch (error) {
            reply.code(400).send({
                error: "No se pudo actualizar paciente"
            });
        }
    });

    app.delete("/pacientes/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await eliminarPaciente(id);
        } catch (error) {
            reply.code(404).send({
                error: "No se pudo eliminar paciente"
            });
        }
    });
};
