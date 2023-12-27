// // pages/api/send-sms.js
// import axios from 'axios';
// import { NextResponse } from 'next/server';
// import twilio from 'twilio';
// const accountSid = 'ACbfcabfff86e04c002a843e4b9ddb9b2d';
// const authToken = '3e2e2927c2f869be08d8287a845b520f';
// const twilioPhoneNumber = '+19045727390';
// // pages/api/send-sms.js
// const client = new twilio(accountSid, authToken);
// export default async function POST(request) {
//     const{Message} = await request.json();
//     console.log(Message);
//     try {
//         client.messages
//         .create({
//             body: Message, // Your SMS message content
//             from: twilioPhoneNumber,
//             to: '+916307312237' // The recipient's phone number
//         })
//       return NextResponse.json({ success: true, message: `Message sent with SID: ${message.sid}` });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       return NextResponse.json({ success: false, message: 'Failed to send message', error: error.message });
//     }
 
// }

// twilio.js
import twilio from 'twilio';

const accountSid = 'ACbfcabfff86e04c002a843e4b9ddb9b2d';
const authToken = '3e2e2927c2f869be08d8287a845b520f';

const client = twilio(accountSid, authToken);

const sendSMS = async (request) => {
  try {
    // const{phone,messages} = await request.json();

    const message = await client.messages.create({
      body,
      from: '+19045727390', // Twilio phone number
      to:"9144462693",
    });

    console.log(`Message sent with SID: ${message.sid}`);
    return message;
  } catch (error) {
    console.error(`Error sending SMS: ${error.message}`);
    throw error;
  }
};

export default sendSMS;
