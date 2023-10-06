import { renameProperties } from "../translate.json";
const PoeplePropertyMap = {
  name: "nombre",
  height: "altura",
  mass: "masa",
  hair_color: "color_de_cabello",
  skin_color: "color_de_piel",
  eye_color: "color_de_ojos",
  birth_year: "anio_de_nacimiento",
  gender: "genero",
  homeworld: "mundo_natal",
  films: "peliculas",
  species: "especies",
  vehicles: "vehiculos",
  starships: "naves_espaciales",
  created: "creado",
  edited: "editado",
  url: "url",
};

export async function translatePeople(json: object): Promise<object> {
  return await renameProperties(json, PoeplePropertyMap);
}
