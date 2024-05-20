import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';


import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { ErrorComponent } from './error/error.component';

const appRoutes :Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'posts',component:PostComponent},
  {path:'**',component:ErrorComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostComponent,
    ErrorComponent
  ],
  imports: [
    ButtonModule,
    MessagesModule,
    FloatLabelModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    RouterModule.forRoot(appRoutes),
    MenubarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
