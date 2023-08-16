import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { SingleBlogsComponent } from './single-blogs/single-blogs.component';
import { SingleRoomComponent } from './single-room/single-room.component';
import { RoomComponent } from './room/room.component';
import { BlogBarcelonaComponent } from './blog-barcelona/blog-barcelona.component';
import { BlogExperienceComponent } from './blog-experience/blog-experience.component';
import { BlogLuxuryComponent } from './blog-luxury/blog-luxury.component';
import { BlogMakeYourMarkComponent } from './blog-make-your-mark/blog-make-your-mark.component';
import { BlogSustainableComponent } from './blog-sustainable/blog-sustainable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    BlogsComponent,
    ContactComponent,
    SingleBlogsComponent,
    SingleRoomComponent,
    RoomComponent,
    BlogBarcelonaComponent,
    BlogExperienceComponent,
    BlogLuxuryComponent,
    BlogMakeYourMarkComponent,
    BlogSustainableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
