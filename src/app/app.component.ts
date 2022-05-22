import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'material-demo';
  options: string[] = ['Angular','React','Vue'];
  objectOptions= [{name: 'Angular'},{name: 'React'},{name: 'Vue'}];
  myControl = new FormControl();
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe
    (startWith(''),
    map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayFn(subject:any){
    return subject ? subject.name : undefined; 
  }

}
