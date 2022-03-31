import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';




@NgModule({
  declarations: [
    FormComponent,
    InputComponent,
    OutputComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule
  ]
})
export class FormModule { }
