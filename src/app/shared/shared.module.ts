import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [],
  imports: [
    AboutPageComponent,
    CommonModule,
    ContactPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
