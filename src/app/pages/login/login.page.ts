import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username : string;
password : string;
  constructor(private http: HTTP) {
this.username="";
this.password="";

  }

  ngOnInit() {
  }
login(){
  this.http.get('https://wp.localserverweb.com/how-markets/how-api/auth/generate_auth_cookie/?username=john&password=PASSWORD-HERE&seconds=60', {}, {})
  .then(data => {
    console.log("working");
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });



}
}
