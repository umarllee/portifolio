import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'; 
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {MatTreeModule} from '@angular/material/tree';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    HomeComponent,
    WorksComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule, 
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatAutocompleteModule,
    AppRoutingModule,
    MatRippleModule,
    MatTooltipModule,
    MatChipsModule,
    DragDropModule,
    MatRadioModule,
    RouterModule,
    HttpClientModule,
    MatTreeModule,
  ]
})
export class PublicModule { }
