import { Component } from '@angular/core';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  specimen: any;
  aliquot: any;
  report: any;
  userFunctions: any;

  responsiveOptions: any[] | undefined;

  constructor() {

    this.specimen = {
      title: "Traceability of each specimen and aliquot through their entire lifespan",
      description: `Seamless integration to various input data sources (e.g. spreadsheets, database platforms, or other data management systems) 
                    ensuring the ability to continuously evolving biobank needs.`,
      images: [{ name: 'specimen_list.png' }, { name: 'specimen_clinical_assessment.png' }, { name: 'specimen_clinical_diagnosis.png'}]
    };

    this.aliquot = {
      title: "Centralized storage management",
      description: `Centralized storage facility, sample-and aliquot management across multiple locations 
                    (in a multi-centric settings single country, or cross-countries) all in one user-friendly platform `,
      images: [{ name: 'aliquot_storage_map.png' }, { name: 'aliquot_assignment.png' }, { name: 'aliquot_events.png'}]
    };

    this.report = {
      title: "Structured data organized in various modules provide wide range of insights",
      description: `The integrated dashboards offer a comprehensive view of various biobanking aspects, based on specific user roles. 
                    Deep dive analysis of anonymised clinical data provides a solid basis for processing big clinical data for medical research or clinical studies.`,
      images: [{ name: 'admin_report_aliquot.png' }, { name: 'mgmt_report.png' }]
    };

    this.userFunctions = {
      title: "Interoperability with high level of security ",
      description: `The robust structure of the system provides a high degree of availability and security for all users. 
                    The system operates under stern user management policy and authorization control. 
                    Full and retaining activity-logging ensures a high level of protection,
                    ultimately enhancing the effectiveness and integrity of biobank operations in the modern scientific landscape. 
                    Fast FHIR-HL7/OMOP-CDM conversions foster interoperability with external databases following standardised data models.`,
      images: [{ name: 'usr_mgn.png' }, { name: 'pers_data.png' }, { name: 'sys_arch.png' }]
    };

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
