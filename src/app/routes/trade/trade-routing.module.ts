import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeListComponent } from './list/list.component';
import { TradeEditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'list', component: TradeListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
