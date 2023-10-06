import Message from "../../models/general/message.model";
import { Request, Response } from "express";
import { getTranslate } from "../../services/swapi/swapi.service";

export async function getStarships(
  req: Request,
  res: Response
): Promise<Message> {
  try {
    const { id } = req.params;
    const dataTranslate: object = await getTranslate(id, "starships");
    return new Message(200, "Success", [dataTranslate]).send(res);
  } catch (error) {
    return new Message(500, "Error with server SWAPI", []).send(res);
  }
}
