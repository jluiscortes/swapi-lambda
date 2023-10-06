import supertest from "supertest";
import app from "../src/server/server";

describe("API", () => {
  it("should get starship by id", async () => {
    const response: Response = await supertest(app).get("/api/starships/3");
    expect(response.status).toBe(200);
  });
  it("should get starship by id not exits", async () => {
    const response: Response = await supertest(app).get("/api/starships/1");
    expect(response.status).toBe(200);
  });
});
