import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() messageEvent: EventEmitter<any> = new EventEmitter<string>();
  items: MenuItem[];

  anchor: string = '';

  constructor(){
    this.items = [
      { label: 'BIMS', icon: '', url: 'bims'},
      { label: 'ADVANTAGES', icon: '', url: 'advantages'},
      { label: 'FEATURES', icon: '', url: 'features'},
      { label: 'DEMO VIDEO', icon: '', url: 'demovideo'},
      { label: 'OUR TEAM', icon: '', url: 'ourteam'},
      { label: 'CONTACT', icon: '', url: 'contact'}
  ];
  }

  ngOnInit() {}

  clickMenu(item: MenuItem) {
    //console.log('item:', item );
    this.messageEvent.emit(item.url);
  }
}