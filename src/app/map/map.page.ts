import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Icon, icon, latLng, MapOptions, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LeafletModule]
})
export class MapPage implements OnInit {

  options: MapOptions = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(45.19982523665587, 5.71207637287996),

  };

  marker = marker([45.19982523665587, 5.71207637287996],
    {
      title: 'M2I Grenoble',
      icon: icon({
        ...Icon.Default.prototype.options,
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    })

  constructor() { }

  ngOnInit() {
    
  }

}
