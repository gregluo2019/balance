import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BalanceModule } from "./components/balance/balance.module";
import { NotFoundComponent } from "./shared/not-found/not-found.component";


const appRoutes: Routes = [
  { path: '', loadChildren: () => BalanceModule, },
  { path: 'balance', loadChildren: () => BalanceModule, },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
