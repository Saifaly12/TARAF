import { Iproudct } from '../../iproudct';
import { ProudctsService } from '../../proudcts-service';
import { Posts } from './../../posts';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  publicProudctList: Iproudct[] = [];
  private readonly proudctsService = inject(ProudctsService);
  ngOnInit(): void {
    this.proudctData();
  }
  proudctData(): void {
    this.proudctsService.getProudcts().subscribe({
      next: (res) => {
        this.publicProudctList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
