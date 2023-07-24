import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  projects: any[] = [
    {
      url: '../../../assets/projects/table.webp',
      color: 'cornflowerblue',
      title: 'Multifunctional table',
      link: 'tables'
    },
    {
      url: '../../../assets/projects/illdy.png',
      color: 'darkorange',
      title: 'Cards ui',
      link: ''
    },
    {
      url: '../../../assets/projects/illdy.png',
      color: '#9fcb42',
      title: 'Illdy prototype',
      link: ''
    },
    {
      url: '../../../assets/projects/layout.png',
      color: '#8d8ae6',
      title: 'Figma layouts',
      link: 'works/landings'
    },
    
   

  ];

  constructor(){

  }

  ngOnInit(){

  }

}
