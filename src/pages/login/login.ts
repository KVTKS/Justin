import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { HomePage } from "../home/home";
import { ForgotPasswordPage } from "../forgot-password/forgot-password";
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  responseData: any;
  userData = { email: "", password: "", name: "" };
  Url = "http://localhost:1440/subjek";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authService: AuthserviceProvider
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data) {
      this.navCtrl.push(HomePage);
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  // login() {
  //   this.navCtrl.push(HomePage)
  // }
  login() {
    if (this.userData.email && this.userData.password) {
      console.log(this.userData);
      this.authService.postData(this.userData, "login").then(
        result => {
          this.responseData = result;
          console.log(this.responseData);
          if (this.responseData.code === 200) {
            localStorage.setItem("userData", JSON.stringify(this.responseData));
            this.navCtrl.push(HomePage);
          } else {
            let alert = this.alertCtrl.create({
              title: "Login failed!",
              subTitle: "Wrong credentials",
              buttons: ["OK"]
            });
            alert.present();
          }
        },
        err => {
          //Connection failed message
        }
      );
    } else {
      let alert = this.alertCtrl.create({
        title: "Login failed!",
        subTitle: "Wrong credentials",
        buttons: ["OK"]
      });
      alert.present();
    }
  }

  ForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
}
