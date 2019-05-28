import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
// We MUST import both the firebase AND firestore modules like so
import * as firebase from 'firebase';
import 'firebase/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dbCollection : string
  private db = firebase.firestore()
  incidentReport : FormGroup;
  loginForm : FormGroup;
  private event = 'ALA Annual Conference 2019'
  public responderElements = 
  [
     { val: 'ALA Staff', isChecked: false, responseTeam: 'responder_ALA_Staff' },
     { val: 'Facility Personnel', isChecked: false, responseTeam: 'responder_Facility'  },
     { val: 'Police / EMT', isChecked: false, responseTeam: 'responder_Police_EMT' },
     { val: 'OTHER', isChecked: false, responseTeam: 'responder_OTHER' }
  ];

  constructor( public _FB: FormBuilder, public alertC: AlertController, ) {

this.incidentReport = this._FB.group({
  incidentDate: ['', Validators.required],
  incidentTime: ['', Validators.required],
  location: ['', Validators.required],
  descIncident: ['', Validators.required],
  descInjury: [''],
  responder_ALA_Staff: [''],
  responder_Facility: [''],
  responder_Police_EMT: [''],
  responder_OTHER: [''],
  onsiteMedical: [''],
  goToDoc: [''],
  photoInfo: [''],
  incidentReportedDate: [''],
  reporterName: ['']
});

  }

   logForm() {
    console.log('data: ' + JSON.stringify(this.incidentReport.value))
    this.createDoc(this.incidentReport.value)
    this.thanksAlert()
    this.incidentReport.reset()

  }
 
  createDoc(doc): Promise<any> {

    return new Promise((resolve, reject) => {
      this.db.collection(this.event).add(doc)
        .then((obj: any) => {
          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });

    //return this.db.post(doc);
  }

  async thanksAlert() {
        const alertAndroidMessage = await this.alertC.create({
          header      : 'Thank you',
          buttons    : [{
            text      : 'Got it!',
            role      : 'cancel'
         }
         ]
       });
       await alertAndroidMessage.present();
    
      }

}