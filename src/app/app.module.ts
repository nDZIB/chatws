import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IconComponent } from './components/icon/icon.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ChipComponent } from './components/chip/chip.component';
import { Card1Component } from './components/card1/card1.component';
import { MessageComponent } from './components/message/message.component';
import { HintComponent } from './components/hint/hint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IconComponent,
    SideBarComponent,
    HeaderComponent,
    MainComponent,
    ChipComponent,
    Card1Component,
    MessageComponent,
    HintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
