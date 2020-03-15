const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let templates = {
    signUp: "d-be52e96372a94a26be77d08ac1822d56",
    serviceRequestProfessional: "d-880c157c28e84f16b5f801d279d4238b"
};

const sendEmail = async (data) => {   

    const msg = {      
        to: data.receiver,
        from: data.sender,
        templateId: templates[data.templateName],
        dynamic_template_data: {
            name: data.name,
            customer_name: data.customer_name,
            category: data.category,
            service_type: data.service_type,
            details: data.details,
            priority: data.priority,
            customer_phone: data.customer_phone,
            customer_email: data.customer_email
        }
    };    
    
    //send the email
    try {
        return sgMail.send(msg);
    } catch (error) {
        throw new Error(error.message)
    }    
}

exports.sendEmail = sendEmail;