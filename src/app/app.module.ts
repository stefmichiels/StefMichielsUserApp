import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
