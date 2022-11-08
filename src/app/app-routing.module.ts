import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { ExerciceComponent } from './exercice/exercice.component';
const routes: Routes = [
{path:"", component :HomeComponent},
{path:"home", component :HomeComponent},
{path:"demo",component:DemoComponent,loadChildren:()=>import("./demo/demo.module").then((m)=>m.DemoModule)},
{path:"exercice",component:ExerciceComponent,loadChildren:()=>import("./exercice/exercice.module").then((m)=>m.ExerciceModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
