import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CloneComponent } from './clone.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ResultComponent,
    CloneComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ]
})
export class CloneModule { }
