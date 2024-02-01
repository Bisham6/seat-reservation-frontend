import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatLayoutComponent } from './seat-layout/seat-layout.component';

const routes: Routes = [
  { path: 'seat-layout', component: SeatLayoutComponent },
  { path: '', redirectTo: '/seat-layout', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
