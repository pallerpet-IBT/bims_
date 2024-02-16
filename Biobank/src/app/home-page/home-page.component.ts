import { Component, ElementRef, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
 
  constructor(private elementRef: ElementRef) {}

  setAnchor(anchor: string) {
    //console.log('anchor:', anchor );
    //console.log('elementRef:', this.elementRef );
    const element = this.elementRef.nativeElement.querySelector('#' + anchor);
    //console.log('element:', element );

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
