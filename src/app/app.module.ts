import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'list', component: ListPageComponent},
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListPageComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
