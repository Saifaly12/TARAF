import { Component, inject, OnInit } from '@angular/core';
import { Iproudct } from '../../iproudct';
import { ProudctsService } from '../../proudcts-service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  publicProudctList: Iproudct[] = [];
  private readonly proudctsService = inject(ProudctsService);
  ngOnInit(): void {
    this.aboutData();
  }
  aboutData(): void {
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
