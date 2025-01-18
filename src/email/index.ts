import { Request, Response, Router } from 'express';
import nodemailer from 'nodemailer';

function postMail(req: Request, res: Response): void {

  const {
    MAIL_PASS,
    MAIL_USER,
    MAIL_TO
  } = process.env;
  
  const { name, mail, content } = req.body;

  const transporter = nodemailer.createTransport({
    auth: {
      pass: MAIL_PASS,
      user: MAIL_USER
    },
    service: 'gmail'
  });

  const mailOptions = {
    from: mail,
    subject: `Contact Kodeneko | ${name}`,
    text: content,
    to: [MAIL_TO, MAIL_USER]
  };

  transporter.sendMail(
    mailOptions,
    (error) => {
      const [code, msg, log] = error ?
        [500, 'There was an error', error] :
        [200, 'This is fine', 'The mail was sent :)'];
      console.log(log)
      return res.status(code).send(msg);
    }
  );
}

const email: Router = Router();
email.post(
  '/',
  postMail
);

export default email;
