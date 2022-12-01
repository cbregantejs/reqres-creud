import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@shared/states/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  active: boolean;
  subscription: Subscription;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.subscription = this.loadingService.getLoader().subscribe((state) => {
      this.active = state;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
