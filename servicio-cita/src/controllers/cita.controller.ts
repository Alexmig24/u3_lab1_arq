import { Cita } from "../model/cita.model";
export const obtenerCitas = async () => {
  return Cita.findAll();
};
export const obtenerCitaPorId = async (id: number) => {
  const cita = await Cita.findByPk(id);

  if (!cita) {
    throw new Error("Cita no encontrada");
  }
  return cita;
};
export const crearCitas = async (data: any) => {
  const resPaciente = await fetch(
    `http://servicio-paciente:3001/api/pacientes/${data.pacienteId}`
  );

  if (!resPaciente.ok) {
    throw new Error("Paciente no encontrado");
  }

  const resMedico = await fetch(
    `http://servicio-medico:3002/api/medicos/${data.medicoId}`
  );

  if (!resMedico.ok) {
    throw new Error("Médico no encontrado");
  }

  return await Cita.create(data);
};

export const actualizarCita = async (id: number, data: any) => {
  const cita = await Cita.findByPk(id);

  if (!cita) {
    throw new Error("Cita no encontrada");
  }

  const resPaciente = await fetch(
    `http://servicio-paciente:3001/api/pacientes/${data.pacienteId}`
  );

  if (!resPaciente.ok) {
    throw new Error("Paciente no encontrado");
  }

  const resMedico = await fetch(
    `http://servicio-medico:3002/api/medicos/${data.medicoId}`
  );

  if (!resMedico.ok) {
    throw new Error("Médico no encontrado");
  }

  return await cita.update(data);
};

export const eliminarCita = async (id: number) => {
  const cita = await Cita.findByPk(id);

  if (!cita) {
    throw new Error("Cita no encontrada");
  }

  await cita.destroy();

  return { message: "Cita eliminada correctamente" };
};