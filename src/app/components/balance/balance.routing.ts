import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BalanceViewComponent } from "./balance-view/balance-view.component";

const robotRoutes: Routes = [
  { path: "", component: BalanceViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(robotRoutes)],
  exports: [RouterModule],
})
export class BalanceRoutingModule { }
