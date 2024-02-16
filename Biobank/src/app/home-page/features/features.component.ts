import { Component } from '@angular/core';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  products: any[];

  responsiveOptions: any[] | undefined;

  constructor() {

    this.products = [
      {
      name: 'Bamboo Watch',
      image: 'bamboo-watch.jpg',
      price: 65,
     },
     {
      name: 'Blue T-shirt',
      image: 'blue-t-shirt.jpg',
      price: 65,
     },
     {
      name: 'Gaming set',
      image: 'gaming-set.jpg',
      price: 65,
     }
    ];

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

}
