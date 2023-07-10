import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

import {AboutUsComponent} from './about-us/about-us.component';
import {ServicesComponent} from './services/services.component';
import {BlogsComponent} from './blogs/blogs.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Homes', pathMatch: 'full' },
  { path: 'Homes', component: HomeComponent },
  { path: 'About-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Contact-us', component: ContactComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
