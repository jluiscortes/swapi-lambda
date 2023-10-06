import { Router } from "express";
import { getStarships } from "../../../controller/swapi/starships.controller";
import { getPeople } from "../../../controller/swapi/people.controller";

const router = Router();

router.get("/starships/:id", getStarships);
router.post("/people", getPeople);
export default router;
