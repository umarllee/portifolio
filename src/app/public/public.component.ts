import { animate, state, style, transition, trigger } from '@angular/animations';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        width: '16%',
        transform: 'translate(0.5%,0)'

      })),
      state('out', style({
        width: '16%',
        transform: 'translate(-99%,0)'
      })),
      transition('in => out', animate('0.5s')),
      transition('out => in', animate('0.5s')),
    ]),
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)',

      })),
      transition('default => flipped', [
        animate('320ms', style({ transform: "translateY(0px) rotateY(180deg)" }))
      ]),
      transition('flipped => default', [
        animate('320ms', style({ transform: "translateY(0px)" }))
      ])
    ])
  ]
})
export class PublicComponent {

  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.subMenus && node.subMenus.length > 0,
      moduleName: node.value,
      url: node.link,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node,
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  menuState: string = 'out';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  notifications?: Notification[] = []
  isNavIn = true;
  stateName: string = 'default';
  sidebarActive = false;
  isSideNavOpen = false;

  isAccount: any = false;

  isUserMenu = false;
  title = 'Dashboard'
  id = -1;
  isNavMenusOpen = true;

  hasChild = (_: number, node: any) => node.expandable;


  moduleDatas = [];
  fullnameUser = ''

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {

    this.dataSource.data = [
      {
        icon: null,
        id  : 1,
        link  : "choose/clients",
        menuType :  0,
        orderBy :  1,
        parentId :  null,
        subMenuExistStatus :  false,
        value  :  "Müştərilər",
      }
    ]


  }

  sidenavClose() {
    if (this.menuState == 'in') {
      this.isNavIn = false;
      this.menuState = 'out';
    }
    else if (this.menuState == 'out') {
      this.isNavIn = true;
      this.menuState = 'in';
    }
  }

  exitModule() {
    localStorage.removeItem('moduleId')
    localStorage.removeItem('moduleName')
    this.title = localStorage.getItem('moduleName')!;
    this.isSideNavOpen = false;
    this.isNavMenusOpen = false;
    // console.log(this.modules);
    this.dataSource.data = ['']


    localStorage.setItem('isAccount', 'false');
    this.isAccount = localStorage.getItem('isAccount') == 'false' ? false : true;
    this.router.navigate(['modules']);

  }

  // cardClicked(id: number) {
  //   if (this.cards[id].stateName === "default") {
  //     this.cards[id].stateName = "flipped";
  //   }
  //   else {
  //     this.cards[id].stateName = "default";
  //   }
  // }

  navigateModul() {
    this.sidebarActive = true;
    this.router.navigate([])
  }

  moduleOpen(id: number) {
    this.isNavMenusOpen = true;
    this.isSideNavOpen = true;
  }

  openSideModule(moduleName: string) {
    let name = localStorage.getItem('moduleName')!
    name = moduleName;
    localStorage.setItem('moduleName', `${name}`)
    this.title = localStorage.getItem('moduleName')!;
    this.menuState = 'out';
    this.isSideNavOpen = true;
  }

}
