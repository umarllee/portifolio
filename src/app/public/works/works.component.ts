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
    },
    {
      url: '../../../assets/projects/layout.png',
      color: 'darkorange',
      title: 'Figma layouts',
    },
    {
      url: '../../../assets/projects/illdy.png',
      color: '#9fcb42',
      title: 'Illdy prototype',
    },

  ];

  constructor(){

  }

  ngOnInit(){

  }

}
