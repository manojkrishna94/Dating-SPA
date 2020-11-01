import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
    values: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
this.getValues();
  };


    getValues(): any {
      this.http.get('https://localhost:44390/weatherforecast/NewGet').subscribe(result =>
      {this.values = result ; }, error => {console.log(error); } );
 
    }

 
}
