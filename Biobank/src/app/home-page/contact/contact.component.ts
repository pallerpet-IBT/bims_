import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
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
    userEmail: ''
  };

  messages: Message[] | undefined;

  //emailForm: any = {};

  constructor(){}
  
  
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_jfgatfv', 'template_ze9iv0a', e.target as HTMLFormElement, {
        publicKey: '1tStIbhiFy7Y4aKWO',
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
      this.messages = []; // Az üzenetek törlése
    }, 3000); // 3 másodperc (3000 milliszekundum) után
  }
}