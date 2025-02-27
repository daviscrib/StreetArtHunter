const { app, request } = require("../config");

describe("Test de connexion utilisateur", () => {
  it("doit répondre avec un statut HTTP 200 pour une connexion réussie", async () => {
    const response = await request(app).post("/api/auths/login").send({
      pseudo: "kelly", // Remplacez par un nom d'utilisateur valide
      password: "userkelly123", // Remplacez par un mot de passe valide
    });
    expect(response.status).toBe(200);
  });

  it("doit répondre avec un statut HTTP 404 pour une connexion échouée", async () => {
    const response = await request(app).post("/api/auths/login").send({
      pseudo: "wronguser",
      password: "wrongpassword",
    });
    expect(response.status).toBe(422);
  });
});
