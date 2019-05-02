import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ICar{
  id: number;
  year: number;
  make: string;
  model: string;
  hasDetails: 0;
}

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  private host: string = 'https://vehicle-data.azurewebsites.net';
  years: number[];
  makes: string[];
  yearChosen: number = 0;
  makeChosen: string = '';
  filterMakes: string[];
  models: ICar[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getYearsMakes();
    this.getCars();
  }

  async getYearsMakes(){
    this.years = await this.http.get<number[]>(`${this.host}\\api\\years`).toPromise();
    this.makes = await this.http.get<string[]>(`${this.host}\\api\\makes`).toPromise();
  }

  async getCars(){
    if(this.makeChosen !== ''){
      this.models = await this.http.get<ICar[]>(`${this.host}\\api\\models?make=${this.makeChosen}`).toPromise();
    }
    if(this.yearChosen !== 0 && this.makeChosen === ''){
      this.models = await this.http.get<ICar[]>(`${this.host}\\api\\models?year=${this.yearChosen}`).toPromise();
    }
    if(this.yearChosen !== 0 && this.makeChosen !== ''){
      this.models = await this.http.get<ICar[]>(`${this.host}\\api\\models?make=${this.makeChosen}&year=${this.yearChosen}`).toPromise();
    }
    if(this.makeChosen === '' && this.yearChosen === 0){
      this.models = await this.http.get<ICar[]>(`${this.host}\\api\\models`).toPromise();
    }
  }

}
