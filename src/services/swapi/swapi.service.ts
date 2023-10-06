import axios from "axios";
import { translateStarships } from "../../utils/json/starships/starships.translate";
import { translatePeople } from "../../utils/json/people/people.translate";
export async function getTranslate(
  id: string,
  typeSource: string
): Promise<object> {
  try {
    if (!id) {
      throw new Error("Error in server contact with admin");
    }
    const apiURL: string = `https://swapi.dev/api/${typeSource}/${id}`;
    const response = await axios.get(apiURL);
    const data: object = response.data;
    let dataTranslate: any = {};
    switch (typeSource) {
      case "starships":
        dataTranslate = await translateStarships(data);
        break;
      case "people":
        dataTranslate = await translatePeople(data);
        break;
      default:
        break;
    }
    return dataTranslate;
  } catch (error) {
    return new Error("Error with server SWAPI");
  }
}
