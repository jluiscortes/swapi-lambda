import { renameProperties } from "../translate.json";
const StarshipspropertyMap = {
  name: "nombre",
  model: "modelo",
  manufacturer: "fabricante",
  cost_in_credits: "costo_en_creditos",
  length: "longitud",
  max_atmosphering_speed: "velocidad_maxima",
  crew: "tripulacion",
  passengers: "pasajeros",
  cargo_capacity: "capacidad_de_carga",
  consumables: "consumibles",
  hyperdrive_rating: "calificacion_hiperimpulsor",
  MGLT: "MGLT",
  starship_class: "clase_de_nave_espacial",
  pilots: "pilotos",
  films: "peliculas",
  created: "creado",
  edited: "editado",
  url: "url",
};

export async function translateStarships(json: object): Promise<any> {
  return await renameProperties(json, StarshipspropertyMap);
}
