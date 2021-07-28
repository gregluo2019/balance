import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { OverlayModule } from "@angular/cdk/overlay";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [AppComponent],
  imports: [
    OverlayModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
  ],
  exports: [CdkTableModule, CdkTreeModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
