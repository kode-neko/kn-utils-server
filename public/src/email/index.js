import { Router } from 'express';
import nodemailer from 'nodemailer';
import { env } from 'process';
import console from '../utils/console.js';
function postMail(req, res) {
    const { name, mail, content } = req.body;
    const smtpTrans = nodemailer.createTransport({
        host: env.MAIL_SERVER,
        port: env.MAIL_PORT,
        auth: {
            user: env.MAIL_USER,
            pass: env.MAIL_PASS,
        },
    });
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
email.post('/', postMail);
export default email;
//# sourceMappingURL=index.js.map