const express = require("express");
const path = require("path");
const app = express();
const sendEmail = require("./utils/sendEmail");
// use
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "/")));
// set
app.set("view engine", "ejs");
// get
app.get("/", (req, res) => {
  res.render("index.hatml");
});
app.get("/sent", (req, res) => {
  res.render("sent");
});
app.post("/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;
  const from = "torcoromaarias@gmail.com";
  const to = "luisleonardovegaarias38@gmail.com";
  const subject = "new contact requiere";

  const output = `
<p>tiene una nueva soletud de contacto</p>
<h3>contact details</h3>

<ul>
<li>Name: ${name}</li>
<li>Email: ${email}</li>
<li>Surname: ${phone}</li>
<li>Email: ${message}</li>

</ul>


`;
  sendEmail(to, from, subject, output);
  res.redirect("/sent");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("este servicio funciona"));
