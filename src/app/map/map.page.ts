import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonModal, IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Icon, icon, latLng, MapOptions, Marker, marker, tileLayer } from 'leaflet';
import { PostService } from '../post.service';
import { Post } from '../entity';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButton, IonButtons, IonModal, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LeafletModule]
})
export class MapPage implements OnInit {
  posts:Post[] = [];
  selected?:Post;
  options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(45.19982523665587, 5.71207637287996),

  };

  markers:Marker[] = []

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.fetchAll().subscribe(data =>{
      this.posts = data;
      for(const item of data) {
        const mark = marker([item.latitude, item.longitude],
          {
            title: item.author,
            icon: icon({
              ...Icon.Default.prototype.options,
              iconUrl: 'assets/marker-icon.png',
              iconRetinaUrl: 'assets/marker-icon-2x.png',
              shadowUrl: 'assets/marker-shadow.png',
            }),
            
          });
        mark.on('click', () => {
          this.selected = item
          console.log(this.selected);
        });
        this.markers.push(mark);
      }
    })
  }

}
