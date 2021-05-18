import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name :string = '';
  date :string = '';
  amount :string = '';
  height :string = '';
  car = {
    type: "Car",
    model:'SUV',
    name: 'Toyota'
  }
  miles : string = '';
  onChangeInupt(value: string){
   this.name = value;
  }
  onChangeDate(value: string){
    this.date = value;
   }
   onChangeAmount(value: string){
    this.amount = value;
   }
   onChangeHeight(value: string){
    this.height = value;
   }
   onChangeMiles(value : string){
     this.miles = value;
   }
}
