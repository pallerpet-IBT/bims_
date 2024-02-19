import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { Message } from 'primeng/api';

export interface EmailForm {
  userName: string;
  company: string;
  message: string;
  userEmail: string;
}

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  emailForm: EmailForm = {
    userName: '',
    company: '',
    message: '',
    userEmail: '',
  };

  messages: Message[] | undefined;

  public sendEmail(e: Event) {
    e.preventDefault();
    console.log('sendEmail', e);

    emailjs
      //.sendForm('service_jfgatfv', 'template_ze9iv0a', e.target as HTMLFormElement, {
      //publicKey: '1tStIbhiFy7Y4aKWO',
      .sendForm('service_uiedg7x', 'template_o1jsn3m', e.target as HTMLFormElement, {
        publicKey: '8MIUeQwrJghC6u4Xl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.showMessage();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

  showMessage(){
    this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
    setTimeout(() => {
      this.messages = [];
    }, 3000); 
  }
}