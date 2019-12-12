import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    HeaderComponent,
    SideBarComponent,
    LayoutComponent,
    FooterComponent
  ],
  providers: [
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent
  ]
})

export class LayoutModule {
}
