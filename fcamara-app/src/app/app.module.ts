import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent} from './components/main/main.component';
import { AboutComponent} from './components/about/about.component';

@NgModule ({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    AboutComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
