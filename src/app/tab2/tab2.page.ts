import { Component } from '@angular/core'
import { AgmCoreModule } from '@agm/core'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  latitude = 32.9546827
  longitude = -97.0666535
  zoom=16
  mapType = 'roadmap'
  ishidden1 = false
  ishidden2 = true
  ishidden3 = true

  showMap(mapNumber) {

    switch (mapNumber) {
      case 1:
        {
          this.ishidden1 = false
          this.ishidden2 = true
          this.ishidden3 = true
          break
        }
      case 2:
        {
          this.ishidden1 = true
          this.ishidden2 = false
          this.ishidden3 = true
          break
        }
      case 3:
        {
          this.ishidden1 = true
          this.ishidden2 = true
          this.ishidden3 = false
        }
    }

  }

}
