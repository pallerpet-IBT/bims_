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
      name: 'Description for feature 1, description for feature 1, description for feature 1',
      image: 'bamboo-watch.jpg',
      price: 65,
     },
     {
      name: 'Description for feature 2, description for feature 2, description for feature 2',
      image: 'blue-t-shirt.jpg',
      price: 65,
     },
     {
      name: 'Description for feature 3, description for feature 3, description for feature 3',
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
