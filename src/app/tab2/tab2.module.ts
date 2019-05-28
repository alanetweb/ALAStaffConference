import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1Z4A6LhSNaBAa8oX7C9ni9OsRheKfmUk'
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    })
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
