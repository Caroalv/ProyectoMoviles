import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-place-update',
  templateUrl: './place-update.page.html',
  styleUrls: ['./place-update.page.scss'],
})
export class PlaceUpdatePage implements OnInit {

  placeId: string = '';
  place: Place | undefined;
  newTitle: string = '';
  newImageURL: string = '';
  newComments?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const placeId = paramMap.get('placeId');
      if (placeId) {
        this.placeId = placeId;
        const place = this.placesService.getPlace(this.placeId);
        if (place) {
          this.place = place;
          this.newTitle = this.place.title;
          this.newImageURL = this.place.imageURL;
          this.newComments = this.place.comments.join(', ');
        }
        else {
          console.error('No se encontró el lugar con el ID proporcionado');
        }
      } else {
        console.error('No se proporcionó ningún ID de lugar en la URL');
      }
    });
  }
  

  updatePlace() {
    const commentsArray = this.newComments?.split(',').map(comment => comment.trim());
    this.placesService.updatePlace(this.placeId, this.newTitle, this.newImageURL, commentsArray || []);
    this.router.navigate(['/places', this.placeId]);
  }
}
