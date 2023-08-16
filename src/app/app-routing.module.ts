import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

import {AboutUsComponent} from './about-us/about-us.component';
import {ServicesComponent} from './services/services.component';
import {BlogsComponent} from './blogs/blogs.component';
import {ContactComponent} from './contact/contact.component';
import { BlogSustainableComponent } from './blog-sustainable/blog-sustainable.component';
import { BlogExperienceComponent } from './blog-experience/blog-experience.component';
import { BlogBarcelonaComponent } from './blog-barcelona/blog-barcelona.component';
import { BlogMakeYourMarkComponent } from './blog-make-your-mark/blog-make-your-mark.component';
import { BlogLuxuryComponent } from './blog-luxury/blog-luxury.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  { path: '',   redirectTo: '/Homes', pathMatch: 'full' },
  { path: 'Homes',
  children:[{path:'',component: HomeComponent },
  {path: 'Contact-us', component: ContactComponent }
]},
  { path: 'About-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'Blogs', 
  children:[
    {path:'',component: BlogsComponent},
    {path:'Sustainable', component:BlogSustainableComponent},
    {path:'Experience', component:BlogExperienceComponent},
    {path:'Barcelona', component:BlogBarcelonaComponent},
    {path:'Make-your-mark', component:BlogMakeYourMarkComponent},
    {path:'Luxury', component:BlogLuxuryComponent},
    {path: 'Homes', component: HomeComponent }

  ] },
  { path: 'Contact-us', component: ContactComponent },
  {path:'Footer',
children:[
  {path:'',component:FooterComponent},
  { path: 'About-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'Contact-us', component: ContactComponent },
  {path:'Blogs', component:BlogsComponent}
]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
