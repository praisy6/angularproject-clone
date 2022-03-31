import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloneComponent } from './clone/clone.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:' ',component: MainComponent},
  {path:' ',component: FormComponent},
  {path:' ',component: CloneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
