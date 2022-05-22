import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'material-demo';
  showSpinner:boolean= false;
  @ViewChild('toggleGroup') toggleSelection!: MatButtonToggleGroup;

  ngAfterViewInit(): void {
    this.toggleSelection.valueChange.subscribe(console.log);
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(()=> {
      this.showSpinner = false;
    },5000)
  }




}
