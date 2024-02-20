import { Component } from '@angular/core';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  specimen: any;
  aliquots: any[];

  responsiveOptions: any[] | undefined;

  constructor() {

    this.specimen = {
      title: "Traceability of each specimen and aliquot through their entire lifespan",
      description: `Seamless integration to various input data sources (e.g. spreadsheets, database platforms, or other data management systems) ensuring the ability to continuously evolving biobank needs.`,
      images: [{ name: 'specimen_list.png' }, { name: 'specimen_clinical_assessment.png' }, { name: 'specimen_clinical_diagnosis.png'}]
     };

    this.aliquots = [
      {
      title: "Traceability of each specimen and aliquot through their entire lifespan",
      description: `The modular nature of our solution allows for scalability and flexibility, making it possible to integrate new functionalities and technologies as they emerge.
              This ensures that our clients' systems remain at the cutting edge of digital health innovation, adaptable to evolving healthcare demands and technological advancements.`,
      image: 'specimen_list.png',
     },
     {
      description: 'Seamless integration to various input data sources (e.g. spreadsheets, database platforms, or other data management systems) ensuring the ability to continuously evolving biobank needs.',
      image: 'specimen_clinical_assessment.png',
      title: "Centralized storage management",
     },
     {
      description: 'Description for feature 3, description for feature 3, description for feature 3',
      image: 'specimen_clinical_diagnosis.png',
      title: "Structured data organized in various modules provide wide range of insights",
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
