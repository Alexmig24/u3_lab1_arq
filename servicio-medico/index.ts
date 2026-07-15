import Fastify from "fastify";
import dotenv from "dotenv";
import { sequelize } from "./src/config/database";
import { medicoRouter } from "./src/router/medico.router";
dotenv.config();
const app = Fastify({
    logger: true
});
app.register(medicoRouter, {
    prefix: "/api"
});
const iniciar = async () => {
    try {
        await sequelize.authenticate();
        app.log.info(
            "Conexión a la Base de Datos Exitosa"
        );
        await sequelize.sync();
        app.log.info(
            "Tablas creadas correctamente"
        );
        const puerto =
            Number(process.env.PORT) || 3002;
        await app.listen({
            port: puerto,
            host: "0.0.0.0"
        });
        app.log.info(
            `Servidor ejecutándose en el puerto ${puerto}`
        );
    } catch (error) {
        app.log.error(error, "Error al iniciar el servidor");
    }
};

iniciar();
