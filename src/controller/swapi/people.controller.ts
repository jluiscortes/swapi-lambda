import { Request, Response } from "express";
import Message from "../../models/general/message.model";
import { getTranslate } from "../../services/swapi/swapi.service";

export async function getPeople(req: Request, res: Response): Promise<Message> {
  try {
    const { id } = req.body;
    const dataTranslate: any = await getTranslate(id, "people");
    return new Message(200, "Success", [dataTranslate]).send(res);
  } catch (error) {
    return new Message(500, "Error with server SWAPI", []).send(res);
  }
}
