import { createTransport } from "nodemailer";

const transporter = createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "shashankphatkurepro@gmail.com",
      pass: "msdw hxkc zyns heej",
    },
  });

  const mailOptions = {
    from: "your_email@gmail.com",
    to: "theayeshatkhan@gmail.com",
    subject: "Order successfully delivered!",
    text: "Your order has been successfully delivered! Thank you for shopping with us.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
