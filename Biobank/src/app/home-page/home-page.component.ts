import { Component, ElementRef} from '@angular/core';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
 
  constructor(private elementRef: ElementRef) {}

  setAnchor(anchor: string) {
    const element = this.elementRef.nativeElement.querySelector('#' + anchor);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  // document.addEventListener(() => {
  //   var hash = window.location.hash;
  //   if (hash !== '') {
  //       var target = document.querySelector(hash);
  //       if (target) {
  //           var headerOffset = document?.querySelector('header')?.offsetHeight; // Állítsd be az oldal fejlécének magasságát
  //           var targetOffset = target.offsetTop - (window.innerHeight / 2 - target.offsetHeight / 2) - headerOffset;
  //           window.scrollTo({
  //               top: targetOffset,
  //               behavior: 'smooth'
  //           });
  //       }
  //   }
  // });
}
