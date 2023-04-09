import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path:string = ''

  ngOnInit(): void {
    this.path = '../../assets/pdf/Cv_almamy_ali_haidara.pdf'
  }
}
