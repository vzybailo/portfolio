import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import nodemailer from "nodemailer"

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post("/api/contact", async (req, res) => {
  const { firstName, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  })

  const mailOptions = {
    from: email,
    to: "vitalizybailo@gmail.com",
    subject: `New message from ${firstName}`,
    text: `Name: ${firstName}\n\nMessage: ${message}\n\nSender Email: ${email}`,
    replyTo: email
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).send("Email sent successfully")
  } catch (error) {
    res.status(500).send("Error sending email: " + error.message)
  }
})

app.listen(3000, () => console.log("Server running on port 3000"))
