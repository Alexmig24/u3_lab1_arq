import type {FastifyInstance} from 'fastify';
import {obtenerCitas,obtenerCitaPorId,crearCitas,actualizarCita,eliminarCita
} from '../controllers/cita.controller';
export async function citaRouter(app: FastifyInstance) {
     app.get("/citas",obtenerCitas);
    app.get("/citas/:id", async(req, reply)=>{
        try{    
            const {id} = req.params as any;
            return await obtenerCitaPorId(id);
            reply.code(201).send({mensaje:"Registro Exitoso"})
        }catch(error){
            console.log(error);
            reply.code(404).send({error:"No se encontró citas"})
        }
    });
    app.post("/citas", async(req, reply)=>{
        try{    
            const cita = req.body;
            return await crearCitas(cita);
            
        }catch(error){
            console.log(error);
            reply.code(404).send({error:"No seha podido guardar cita"})
        }
    });

    app.put("/citas/:id", async(req, reply)=>{
        try{    
            const {id} = req.params as any;
            const cita = req.body;
            await actualizarCita(id, cita);
            reply.code(201).send({mensaje:"Registro Exitoso"})
        }catch(error){
            console.log(error);
            reply.code(404).send({error:"No se encontró citas"})
        }
    });

    app.delete("/citas/:id", async(req, reply)=>{
        try{    
            const {id} = req.params as any;
            return await eliminarCita(id);     
        }catch(error){
            console.log(error);
            reply.code(404).send({error:"No se encontró citas"})
        }
    });
}