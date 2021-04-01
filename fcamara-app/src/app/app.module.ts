import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent} from './components/main/main.component';
import { AboutComponent} from './components/about/about.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule ({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    AboutComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
