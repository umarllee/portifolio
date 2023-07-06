import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  constructor() { }

  perc = 80;
  skills: any[] = [];
  skillLibs: any[] = [];

  ngOnInit(): void {

    this.skills = [
      {
        name: "HTML",
        percent: '90%',
        point: [
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: false },
        ],
        countActive: 9,
      },
      {
        name: "CSS",
        percent: '90%',
        point: [
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: false },
        ],
        countActive: 9,
      },
      {
        name: "JavaScript - TypeScript",
        percent: '80%',
        point: [
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: false },
          { isActive: false },
        ],
        countActive: 8,
      },
      {
        name: "Angular",
        percent: '70%',
        point: [
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: false },
          { isActive: false },
          { isActive: false },
        ],
        countActive: 7,
      },
      {
        name: "Git and Github",
        percent: '90%',
        point: [
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: true },
          { isActive: false },
        ],
        countActive: 9,
      },
    ]
  }

  // setMyStyles(){
  //   let styles = {
  //     'stroke-dashoffset': `calc(440 - (440 * ${deg}) / 100)`,
  //   };
  //   return styles;
  // }

}
