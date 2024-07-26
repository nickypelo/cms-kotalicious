
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { OwnerComponent } from './pages/owner/owner.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CarouselComponent } from './components/carousel/carousel.component';

//3rd party
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    IngredientComponent,
    OwnerComponent,
    CheckoutComponent,
    NotFoundComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
