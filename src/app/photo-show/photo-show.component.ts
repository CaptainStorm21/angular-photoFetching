import { Component, OnInit } from '@angular/core';
// step 1 dependency injection
import { PhotoFetchingService } from '../services/photo-fetching.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  constructor(
    // step 2 - dependency injection
    private  photoFetchingService: PhotoFetchingService
  ) {
    // step 3 - call getPhoto() method
    // Step 4  - open up a network tab -> then to network request -> response header
    // step 4 = in subscription we added, get access t the response and console log it
    // step 4.1 - console.log (urls.regular)
    this.photoFetchingService.getPhoto().subscribe(() => { });
  }

  ngOnInit(): void {
  }

}
