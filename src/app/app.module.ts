import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlansComponent } from './plans/plans.component';
import { DestinationSelectComponent } from './destination-select/destination-select.component';
import { BenefitsTableComponent } from './benefits-table/benefits-table.component';
import { AddonsComponent } from './addons/addons.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'addons', component: AddonsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlansComponent,
    DestinationSelectComponent,
    BenefitsTableComponent,
    AddonsComponent,
    DetailsComponent,
    PaymentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
