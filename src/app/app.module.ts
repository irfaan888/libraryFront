import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OwnerComponent,
    LibrarianComponent,
    UserComponent,
    EditComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"owner",component:OwnerComponent},
    {path:"librarian",component:LibrarianComponent},
    {path:"user",component:UserComponent},
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
