import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UsersService } from './users/users.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,

  ],
  providers: [UsersService, CookieService],
  bootstrap: [LoginComponent], 
})
export class AppModule {}
