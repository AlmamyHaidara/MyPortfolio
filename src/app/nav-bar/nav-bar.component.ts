import { Component,ElementRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
  }

  scrollToElement(): void {
    const element = this.elementRef.nativeElement.querySelector('#about');
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
