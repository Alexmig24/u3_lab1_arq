import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
export const Cita = sequelize.define('Cita', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pacienteId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    medicoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
    },
    descripcion: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'citas',
    timestamps: false
});