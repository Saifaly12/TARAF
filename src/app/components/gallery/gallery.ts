import { About } from './../about/about';
import { ProudctsService } from './../../proudcts-service';
import { Component, inject, OnInit } from '@angular/core';
import { Iproudct } from '../../iproudct';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {
  publicProudctList: Iproudct[] = [];
  private readonly proudctsService = inject(ProudctsService);
  ngOnInit(): void {
    this.galleryData();
  }
  galleryData(): void {
    this.proudctsService.getProudcts().subscribe({
      next: (response) => {
        this.publicProudctList = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
