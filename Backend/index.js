const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); 
const app = express();
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, subject, message="" } = req.body;
console.log(req.body)
var sender = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sabarim6369@gmail.com",
      pass: "qkzo leos hcbn wwmh",
    },
  });
  var composeMail = {
    from: email,
    to: "sabarim6369@gmail.com",
    subject: `New Message from ${name}: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 10px; border-radius: 5px; border-left: 4px solid #007bff;">
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
    `
  };
  
  
 sender.sendMail(composeMail, (error, info) => {
  if (error) {
    
    return res.status(500).json({ success: false, message: 'Something went wrong.' });
  }
  res.status(200).json({ success: true, message: 'Message sent successfully!' });
});

});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
