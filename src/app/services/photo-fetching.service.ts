import { Injectable } from '@angular/core';

//step 2 import httpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchingService {


  constructor(
    // Step 2 - dependency injection to get access to the HttpClient in our services
    // we are using *private* in order to not allow anyone to access this from outside of the class
    private http: HttpClient
  ) {
    // Step 2  continued - take a look at the type definition of the HttpClient to figure out how to include a header on the request
  }

  getPhoto() {
    return this.http.get('https://api.unsplash.com/photos/random', {
      //we step 2 part 4 - we are going to use headers
      headers: {
        Authorization: 'Client-ID eLYc0iW_RXJwVLa0BNNI4zlX4QK8lWxuTS-jaNHYBwY'
      }
    });
  }
}

//step 2 - part 3 - add a method to the service that will make and return a request
