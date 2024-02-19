import { Component, OnInit} from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { Message } from 'primeng/api';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  company ='';

  messages: Message[] | undefined;

  //emailForm: any = {};
  emailForm = {
    "userName": '',
    "company": '',
    "message": '',
    "userEmail": '',
  };
  
  
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