import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TabComponent, TabsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
