import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  deferredPrompt;
  data: any;
  message: string;

  constructor(
    public alertC: AlertController,
    public platform: Platform ) { }

    ionViewWillEnter() {

      let userAgent = navigator.userAgent;

      if (!this.platform.url().startsWith('http')) {
        var runningAsApp = true;
      }

      if(!runningAsApp) {
        console.log('not running')
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('inside event listener observable')
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later on the button event.
        this.deferredPrompt = e
        //alert('userAgent ' + userAgent); 
        if (userAgent.match(/Android/i) || userAgent.match(/Mozilla/i)) {
          runningAsApp = true
          this.checkInstall()
        } 
      });
    }


//    if(!runningAsApp) {
//      console.log('not running 2')
    
//          if(userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) {

            /* this.alertApple() */

            /* var message = "To install the App, tap 'Share' in the bottom panel of your browser and then 'Add to Home Screen'";
            const alertAppleMessage = await this.alertC.create({
//            let alertApple : any = this.alertC.create({
              header     : 'Install Pickled Soul?',
              message    : message,
              buttons    : [{
                text     : 'Dismiss',
                role     : 'cancel'
             }
             ]
           });
           await alertAppleMessage.present(); */
//          }
//        }
    
        
           
          // button click event to show the promt
    /*       window.addEventListener('appinstalled', (event) => {
          }); */
    
          // PREVENT BROWSER FROM ASKING TO INSTALL FROM APP
         /*  if (window.matchMedia('(display-mode: standalone)').matches) {
    
            console.log('display mode is standalone')
          } 
          else {
            console.log('display generic message')
          }
    
        } */
    

    /*   window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
        alert('already installed')
        // Update UI notify the user they can add to home screen
        //btnAdd.style.display = 'block';
        this.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            alert('User accepted the prompt');
          } else {
            alert('User dismissed the prompt');
          }
          this.deferredPrompt = null;
          
        });
      }); */

      if (!window.matchMedia('(display-mode: standalone)').matches) {

        console.log('NOT STANDALONE')

      /*   if(userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) {
          this.alertApple();
        }
        if (userAgent.match(/Android/i) || userAgent.match(/Mozilla/i)) {
          this.alertAndroid()
        }  */

      } 

    }

    add_to_home(){
      // debugger

      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            //alert('User accepted the prompt');
          } else {
            //alert('User dismissed the prompt');
          }
          this.deferredPrompt = null;
          
        });
    };

    async checkInstall() {
      //    console.log('this.printOption on way in after print: ' + this.printOption);
      /* Click button 'Add app to Home screen' or simply click the browser menu and then 'Add to Home Screen' */
      this.message = "";
      const alertAndroidMessage = await this.alertC.create({
            header     : 'Install ALA Staff App?',
            message    : this.message,
            buttons    : [{
             text      : 'Yes',
             handler   : () =>
             {
              setTimeout(() => {
                this.add_to_home();
              }, 1000);
             }
           },
           {
            text: 'No',
            role: 'cancel',
            handler: () => {
              //this.refreshPage();
            }
          }
          ]
         });
         await alertAndroidMessage.present();
      
        }

    async alertApple() {
      this.message = "To install the App, tap 'Share' in the bottom panel of your browser and then 'Add to Home Screen'";
  
          const alertAppleMessage = await this.alertC.create({
            header      : 'Install ALA Staff App',
            message     : this.message,
            buttons    : [{
              text      : 'Dismiss',
              role      : 'cancel'
           }
           ]
         });
         await alertAppleMessage.present();
        }

    /* async alertAndroid() {
      //    console.log('this.printOption on way in after print: ' + this.printOption);
      var message = "If no button at bottom of screen with 'Add app to Home screen', simply click the browser menu and then 'Add to Home Screen'";
          const alertAndroidMessage = await this.alertC.create({
            header      : 'Install ALA Staff App',
            message     : message,
            buttons    : [{
              text      : 'Dismiss',
              role      : 'cancel'
           }
           ]
         });
         await alertAndroidMessage.present();
      
        } */
}
