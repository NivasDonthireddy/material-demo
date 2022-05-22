import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'material-demo';
  notifications = 2;
  @ViewChild('toggleGroup') toggleSelection!: MatButtonToggleGroup;

  ngAfterViewInit(): void {
    this.toggleSelection.valueChange.subscribe(console.log);
  }





}
