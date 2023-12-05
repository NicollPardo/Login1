import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post("https://ptesa-env-more.eastus.cloudapp.azure.com/k2o/dev/api/api/Token/Autenticar", user);
  }


  setToken(token: string): void {
    this.cookies.set("token", token);
  }

  getToken(): string {
    return this.cookies.get("token");
  }

  getUser(): Observable<any> {
    return this.http.get("https://ptesa-env-more.eastus.cloudapp.azure.com/k2o/dev/api/api/Token/Autenticar");
  }

  getUserLogged(): Observable<any> {
    const token = this.getToken();
    
    // Ajusta el endpoint según tu API
    return this.http.get(`https://ptesa-env-more.eastus.cloudapp.azure.com/k2o/dev/api/api/Token/Autenticar=${token}`);
  }
}
