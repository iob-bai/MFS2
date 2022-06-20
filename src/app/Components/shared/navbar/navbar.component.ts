import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() 
  toggelStat = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }
  
  //color: ThemePalette ='primary'
  color !:string
  checked =true

  chgeClr() {
 
  }
  toggleChanges($event: MatSlideToggleChange) :void{
    this.toggelStat.emit($event.checked.toString());
    console.log("Toggle Event: " + $event.checked)
    this.checked =$event.checked    
  }

  // chgeClr(color:string) :string{
  //   if (color == 'warn')
  //    color = 'primary'
  //   if (color == 'primary')
  //    color = 'warn'
  //    return color
  // } 
}
