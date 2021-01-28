import { Component, OnInit } from '@angular/core';
import { Select, Selector, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { initializeStore } from './store/actions/store.action';
import { storeSelect } from './store/selects/store.select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angel-mat-ngxs';

@Select(storeSelect.getStore$)
numberStore!:Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new initializeStore('key', 0));
  }
}
