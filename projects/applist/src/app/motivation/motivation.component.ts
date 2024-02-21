import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.displayNews();
  }

  API_URL = 'https://type.fit/api/';

  news?: Observable<any[]>;

  // menampilkan semua berita
  displayNews() {
    this.news = this.http.get<any[]>(this.API_URL + '/quotes');
  }

}
