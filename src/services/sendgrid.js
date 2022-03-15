const sgMail = require("@sendgrid/mail");
const { json } = require("body-parser");
const config = require("../config");
sgMail.setApiKey(config.SENDGRID_API_KEY);

module.exports = sgMail;
