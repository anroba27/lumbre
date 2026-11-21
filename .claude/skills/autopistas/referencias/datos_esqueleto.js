// Esqueleto de privado/datos.js (contrato de datos v2, 20-nov-2026).
// Solo se usa si privado/datos.js no existe. Normalmente lo crea /lumbre.
// Cada skill cambia solo su sección; las cantidades van en euros, como números sin símbolo.
window.LUMBRE = {
  version: 2,
  actualizado: "2026-11-21T09:45:00",
  participante: { nombre: "" },
  abiertos: [],
  pasos: {
    lumbre: {hecho: false, fecha: null}, domingo: {hecho: false, fecha: null}, heridas: {hecho: false, fecha: null},
    cuanto_necesito: {hecho: false, fecha: null}, autopistas: {hecho: false, fecha: null}, a_quien_ayudo: {hecho: false, fecha: null},
    cliente: {hecho: false, fecha: null}, oferta: {hecho: false, fecha: null}, web: {hecho: false, fecha: null},
    publicar: {hecho: false, fecha: null}, contactos: {hecho: false, fecha: null}, partida: {hecho: false, fecha: null}
  },

  domingo: { nota: null, martes_igual: "", martes_quiero: "", obstaculo: "" },

  heridas: { hecho: false, lo_que_elijo: null },

  numeros: {
    entradas: [], patrimonio: [], salidas: [], recortes: [],
    neto_anual: null,
    horas: { contrato_mes: null, desplazamiento_mes: null, extra_mes: null, fuera_horario_mes: null },
    no_nomina: { noches_mes: null, domingos_tocados_mes: null },
    sobresueldo_mes: null
  },

  autopistas: {
    fortalezas: [], intereses: [], activos: [],
    lista: [], finalistas: [], proyeccion: {},
    elegida: null, explorar: false
  }
};
