import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  private host: string = 'https://vehicle-data.azurewebsites.net';
  years: number[];
  makes: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getYearsMakes();
  }

  async getYearsMakes(){
    this.years = await this.http.get<number[]>(`${this.host}\\api\\years`).toPromise();
    this.makes = await this.http.get<string[]>(`${this.host}\\api\\makes`).toPromise();
  }

}
