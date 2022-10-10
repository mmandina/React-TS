/// <reference types="@types/google.maps" />

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(Id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(Id)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
