const express = require('express');
const SibApiV3Sdk = require('sib-api-v3-sdk');
const app = express();


app.post('/send', (req, res) => {
  console.log('radi li radi li')
  let defaultClient = SibApiV3Sdk.ApiClient.instance;
  let apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = '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';

  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = "My mail";
  sendSmtpEmail.htmlContent = "<html><body><h1>hehehehe</h1></body></html>";
  sendSmtpEmail.sender = {
    "name": "John Doe",
    "email": "markodumnic8@gmail.com"
  };
  sendSmtpEmail.to = [{
    "email": "example1@markodumnic8.com",
    "name": "Jane Doe"
  }];
  sendSmtpEmail.cc = [{
    "email": "example2@markodumnic8.com",
    "name": "Janice Doe"
  }];
  sendSmtpEmail.bcc = [{
    "email": "John Doe",
    "name": "markodumnic8@example.com"
  }];
  sendSmtpEmail.replyTo = {
    "email": "markodumnic8@domain.com",
    "name": "John Doe"
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function (error) {
    console.error(error);
  });

});

module.exports = app;
