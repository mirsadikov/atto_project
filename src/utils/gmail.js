const nodemailer = require('nodemailer');

class Gmail {
  constructor() {
    this.clientId = process.env.GMAIL_CLIENT_ID;
    this.clientSecret = process.env.GMAIL_CLIENT_SECRET;
    this.refreshToken = process.env.GMAIL_REFRESH_TOKEN;
    this.user = process.env.GMAIL_USER;
  }

  async sendEmail({ to, subject, text, html }) {
    try {
      const transport = this.getTransport();
      const mailOptions = {
        from: `"Atto Pay" <${this.user}>`,
        to,
        subject,
        text,
        html,
      };
      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  getTransport() {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: this.user,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        refreshToken: this.refreshToken,
      },
    });
  }
}

const gmail = new Gmail();

module.exports = gmail;
