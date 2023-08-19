
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "gmail",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'vikassaini3005@gmail.com',
    pass: 'test'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Vikas 👻" <vikassaini3005@gmail.com>', // sender address
    to: "sainivikas358@gmail.com", // list of receivers
    subject: "Test mail - Nodemailer", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello Vikas</b><br/><p>This is test mail using Nodemailer</p><br/><br/><br/><p>Thanks</p>", // html body
  });

  console.log("Message sent: %s", info.messageId);

}

main().catch(console.error);