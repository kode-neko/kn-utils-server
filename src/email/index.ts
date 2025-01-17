import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { Request, Response, Router } from 'express';
import nodemailer, { Transporter } from 'nodemailer';
import { env } from 'process';
import Mail from 'nodemailer/lib/mailer/index';

function postMail(req: Request, res: Response): void {
  const { name, mail, content } = req.body;

  const optionsSMTP: SMTPTransport.Options = {
    host: env.MAIL_SERVER,
    port: Number(env.MAIL_PORT),
    auth: {
      user: env.MAIL_USER,
      pass: env.MAIL_PASS,
    },
  };
  const smtpTrans: Transporter = nodemailer.createTransport(optionsSMTP);

  const mailOpts: Mail.Options = {
    from: mail,
    to: env.MAIL_REDIRECT,
    subject: name,
    text: content,
  };

  smtpTrans.sendMail(mailOpts)
    .then(() => {
      console.log('✉️  Email recieved!!!');
      res.status(200).json({ msg: 'OK' });
    })
    .catch((err: Error) => {
      console.error('🔥  Error:', err);
      res.status(500).json({ msg: 'KO' });
    });
}

const email: Router = Router();
email.post('/', postMail);

export default email;
