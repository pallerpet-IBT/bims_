import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor() { }

  sendEmail(email: string, subject: string, message: string): Promise<EmailJSResponseStatus> {
    const templateParams = {
      to_name: 'teszt1402@gmail.com',
      from_name: email,
      message: message
    };

    return emailjs.send('service_jfgatfv', 'template_ze9iv0a', templateParams, '1tStIbhiFy7Y4aKWO');
  }
}

// emailjs.send("service_jfgatfv","template_ze9iv0a",{
//   to_name: "IBT",
//   from_name: "PP",
//   message: "yxcvb",
//   });