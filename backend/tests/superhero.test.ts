import request from "supertest";
import { app } from "../src/index";
import { heroesSortedByHumility, newHero } from "../src/models/superheroModel";

beforeEach(() => {
  // Before each test, add a superhero
  // Cause use the in-memory storage, the data is not persistent
  newHero({ name: "Batman", superpower: "Detective skills", humilityScore: 8 });
});

describe("Superhero API - GET /api/superheroes", () => {
  it("return a list of superheroes with valid structure", async () => {
    const response = await request(app).get("/api/superheroes");

    // Validate response status
    expect(response.status).toBe(200);

    // Ensure response contains a valid array
    expect(response.body).toHaveProperty("heroes");
    expect(Array.isArray(response.body.heroes)).toBe(true);
    expect(response.body.heroes.length).toBeGreaterThan(0);


    // Verify the structure of the first hero
    const firstHero = response.body.heroes[0];
    expect(firstHero).toMatchObject({
      name: expect.any(String),
      superpower: expect.any(String),
      humilityScore: expect.any(Number),
    });
  });
});
