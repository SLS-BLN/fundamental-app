import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { ThemingService, ThemingModule } from '@fundamental-ngx/core/theming';
import { CheckboxModule } from '@fundamental-ngx/core/checkbox';
import { BreadcrumbModule } from '@fundamental-ngx/core/breadcrumb';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FundamentalNgxCoreModule,
    ThemingModule.withConfig({
      defaultTheme: 'sap_horizon',
      changeThemeOnQueryParamChange: false,
    }),
    CheckboxModule,
    BreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(themingService: ThemingService) {
    themingService.init();
  }
}
