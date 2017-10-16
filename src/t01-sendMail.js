'use strict'
const nodemailer = require('nodemailer')

nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "g5k7hcg7lhgfudwr@ethereal.email", // generated ethereal user
            pass: "ydwzkTdU4aFfEhz46e" // generated ethereal password
        }
    })

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <nodemailer@byom.de>', // sender address
        to: 'nodemailer@byom.de', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

    })
})