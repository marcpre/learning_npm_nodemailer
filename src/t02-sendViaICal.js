const nodemailer = require('nodemailer')
const ical = require('ical-generator')

// Create new Calendar and set optional fields 
const cal = ical({
    domain: 'google.net',
    prodId: { company: 'superman-industries.com', product: 'ical-generator' },
    name: 'Test Calendar',
    timezone: 'Europe/Berlin'
})

const event = cal.createEvent({
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    timestamp: new Date(),
    summary: 'My Event',
    organizer: 'Test@test.at <mail@example.com>'
})


let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "g5k7hcg7lhgfudwr@ethereal.email", // generated ethereal user
        pass: "ydwzkTdU4aFfEhz46e" // generated ethereal password
    }
})

let mailObj = {
    from: "Sender email Id",
    to: "Receiver email Id",
    subject: "Your Subject",
    text: event.toString(),
}

transporter.sendMail(mailObj, function(err, info) {
    console.log(err, info)
})
