const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendSms = async (data, type) => {

    if (type === 1) {
        console.log(data);
        // to: data.phone
        client.messages
            .create({
                body: `Thank you ${data.name} for signing up to Mr. Service!`,
                from: process.env.TWILIO_TRIAL_NUMBER,
                to: process.env.SMS_RECEIVER_NUMBER
            })
            .then((message) => console.log(message.status))
            .catch((err) => console.log(err));
    } else if (type === 2) {
        console.log(data);
        //to: data.phone
        client.messages
            .create({
                body: `${data.customerName} is requesting a ${data.category}.\n\nService type: ${data.serviceType}\nPriority: ${data.priority}\n\nYou can contact our customer right away via:\n\nPhone: ${data.customerPhone}\nEmail: ${data.customerEmail}\n\nMr. Service Team`,
                from: process.env.TWILIO_TRIAL_NUMBER,
                to: process.env.SMS_RECEIVER_NUMBER
            })
            .then((message) => console.log(message.status))
            .catch((err) => console.log(err));
    }
}

exports.sendSms = sendSms;