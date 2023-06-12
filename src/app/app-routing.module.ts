import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  
  {
    runGuardsAndResolvers: 'always', 
    path: '', 
    component: PublicComponent,     
    children: [ 
      { path: 'home', component: HomeComponent },
      // { path: 'account', component: AccountComponent},        
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
