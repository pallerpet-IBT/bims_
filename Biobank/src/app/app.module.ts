import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './home-page/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { FeaturesComponent } from './home-page/features/features.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './services/email.service';
import { MessagesModule } from 'primeng/messages';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    FeaturesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
