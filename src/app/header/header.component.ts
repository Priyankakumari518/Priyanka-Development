import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//   @Output() public sidenavToggle = new EventEmitter();
//   @Output() sidenavClose = new EventEmitter();
// public onToggleSidenav = ()=>{
// this.sidenavToggle.emit();
// }
// public onSidenavClose = () => {
//   this.sidenavClose.emit();
// }
constructor(){
  window.addEventListener('scroll', function(){
    var mattoolbar:any = document.querySelector("mat-toolbar");
    mattoolbar.classList.toggle("sticky", window.scrollY > 0);
  }
  )
}
}
