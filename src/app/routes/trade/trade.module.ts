import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';
import { TradeListComponent } from './list/list.component';
import { TradeEditComponent } from './edit/edit.component';

const COMPONENTS = [
  TradeListComponent];
const COMPONENTS_NOROUNT = [
  TradeEditComponent];

@NgModule({
  imports: [
    SharedModule,
    TradeRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class TradeModule { }
