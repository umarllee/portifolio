import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { SkillsComponent } from './public/skills/skills.component';
import { AboutComponent } from './public/about/about.component';
import { WorksComponent } from './public/works/works.component';
import { ContactComponent } from './public/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/about', pathMatch: 'full' },

  {
    runGuardsAndResolvers: 'always',
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home', 
        component: HomeComponent, 
        children: [
          { path: 'about', component: AboutComponent },
          { path: 'skills', component: SkillsComponent },
          { path: 'works', component: WorksComponent },
          { path: 'contact', component: ContactComponent },
        ]
      },

      // { path: 'account', component: AccountComponent},        
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
