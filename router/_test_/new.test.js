const request = require("supertest");
const app = require("../../router/app");

it("validacion input", async () => {

  return request(app)
    
    .post("/api/mail")
    .send({
      to: "torcoromaarias@gmail.com",
      subject: "subjeto",
      text: "algunas tesxto",
      html: "<strong>hola mundo</strong>",
    })
    .expect(201);
});
