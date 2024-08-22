import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonTextarea, IonButton } from '@ionic/angular/standalone';
import { Post } from '../entity';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
  standalone: true,
  imports: [IonButton, IonTextarea, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddPostPage implements OnInit {

  post:Post = {
    message:'',
    author:'',
    latitude:0,
    longitude:0
  };

  constructor(private postService:PostService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(geo => {
      this.post.latitude = geo.coords.latitude;
      this.post.longitude = geo.coords.longitude;
    });
  }

  add() {
    this.postService.persist(this.post).subscribe(data => alert('Successfuly created post with id '+data.id));
    
  }
}
