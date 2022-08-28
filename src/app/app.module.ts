import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { HomeComponent } from './home/home.component';
import { Exception404Component } from './exception/exception404/exception404.component';
import { Exception400Component } from './exception/exception400/exception400.component';
import { Exception403Component } from './exception/exception403/exception403.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    LineChartComponent,
    HomeComponent,
    Exception404Component,
    Exception400Component,
    Exception403Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
