import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainBrainComponent } from './train-brain/train-brain/train-brain.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'train',
    pathMatch: 'full',
  },
  {
    path: 'train',
    component: TrainBrainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
