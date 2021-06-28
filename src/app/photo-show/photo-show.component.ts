import { Component, OnInit } from '@angular/core';
// step 1 dependency injection
import { PhotoFetchingService } from '../services/photo-fetching.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {

  photoUrl: string;

  constructor(
    // step 2 - dependency injection
    private photoFetchingService: PhotoFetchingService
  ) {
    this.fetchPhoto();
    // step 3 - call getPhoto() method
    // Step 4  - open up a network tab -> then to network request -> response header
    // step 4 = in subscription we added, get access t the response and console log it
    // this.photoFetchingService.getPhoto().subscribe(response => {
      // console.log(response);
      // step 4.1 - console.log (urls.regular)
      // step 4.2 - add an interface interfaces/photos
      // console.log(response.urls.regular);

      // step 5 - add a new property to th eclass to store the URL of the fetched image
      // step 5.1 - store url from the response in that new property
    //   this.photoUrl = response.urls.regular;
    // });
  }

  // step 6 - generate a random image
  randomImage() {
    // this.photoFetchingService.getPhoto().subscribe(response => {
    //   this.photoUrl = response.urls.regular;
    // });
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoFetchingService.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
    });
}

  ngOnInit(): void {}
}
