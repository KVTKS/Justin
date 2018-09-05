import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the SubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject',
  templateUrl: 'subject.html',
})
export class SubjectPage {

  Url = 'http://localhost:1440/subjek';
  subjects:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get(this.Url).map(res => res.json()).subscribe(data => {
      this.subjects = data;
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectPage');
  }

}
