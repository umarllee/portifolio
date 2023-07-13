import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)',
        
      })), 
      transition('default => flipped', [
        animate('320ms', style({transform: "translateY(0px) rotateY(180deg)" }))
      ]),
      transition('flipped => default', [
        animate('320ms', style({transform: "translateY(0px)" }))
      ])
    ]) 
  ]
})
export class SkillsComponent {
  constructor() { }
  cards: any[] = [];
  perc = 80;
  skills: any[] = [];
  skillLibs: any[] = [];

  ngOnInit(): void {
    this.skills.forEach((item, key) => {
      this.skills[key].stateName = 'default';
    });

    this.skills = [
      {
        name: "HTML",
        url: "../../../assets/skills/html.png",
        color: "#f16524",
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
        url: "../../../assets/skills/css.png",
        color: "#214ce5",
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
        name: "Bootstrap",
        url: "../../../assets/skills/bootstrap.png",
        color: "#860afb",
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
        name: "JavaScript ",
        url: "../../../assets/skills/jss.png",
        percent: '85%',
        color: '#d6ba32',
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
        name: "TypeScript",
        url: "../../../assets/skills/ts.png",
        color: '#017acb',
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
        url: "../../../assets/skills/angular.svg",
        percent: '70%',
        color: '#df2e31',
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
        url: "../../../assets/skills/gitHub.png",
        percent: '90%',
        color: '#000',
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

  cardClicked(id: number) {
    if (this.skills[id].stateName === "default") {
      this.skills[id].stateName = "flipped"; 
    }
    
    else {
      this.skills[id].stateName = "default";
    }
  }

}
