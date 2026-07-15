import type { FastifyInstance } from "fastify";
import {obtenerMedicos,obtenerMedicosId,crearMedico,actualizarMedico,eliminarMedico
} from "../controllers/medico.controller";

export const medicoRouter = (app: FastifyInstance) => {
    app.get("/medicos", obtenerMedicos);

    app.get("/medicos/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await obtenerMedicosId(id);
        } catch (error) {
            reply.code(404).send({
                error: "No se encontró el médico con ese ID"
            });
        }
    });

    app.post("/medicos", async (req) => {
        return await crearMedico(req.body);
    });

    app.put("/medicos/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await actualizarMedico(id, req.body);
        } catch (error) {
            reply.code(400).send({
                error: "No se pudo actualizar médico"
            });
        }
    });

    app.delete("/medicos/:id", async (req, reply) => {
        try {
            const { id } = req.params as any;
            return await eliminarMedico(id);
        } catch (error) {
            reply.code(404).send({
                error: "No se pudo eliminar médico"
            });
        }
    });

};
