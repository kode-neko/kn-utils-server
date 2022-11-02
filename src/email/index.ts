import { Request, Response, Router } from 'express';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { env } from 'process';
import console from '../utils/console.js';

function postMail(req: Request, res: Response) {
  const { name, mail, content } = req.body;

  const smtpTrans = nodemailer.createTransport({
    host: env.MAIL_SERVER,
    port: env.MAIL_PORT,
    auth: {
      user: env.MAIL_USER,
      pass: env.MAIL_PASS,
    },
  } as SMTPTransport.Options);

  const mailOpts = {
    from: mail,
    to: 'ladysun.freedom@gmail.com',
    subject: name,
    text: content,
  };

  smtpTrans.sendMail(mailOpts)
    .then((resMail) => {
      console.log('RESMAIL:', resMail);
      res.status(200).json({ msg: 'OK' });
    })
    .catch((err) => {
      console.log('ERR:', err);
      res.status(500).json({ msg: 'KO' });
    });
}

const email = Router();
email.post('/contact', postMail);

export default email;
