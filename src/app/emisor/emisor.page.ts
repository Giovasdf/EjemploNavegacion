import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.page.html',
  styleUrls: ['./emisor.page.scss'],
})
export class EmisorPage implements OnInit {

  constructor(private router:Router) { }

  goToReceptor(){
    let navigationExtras:NavigationExtras = {
      queryParams:{
          mensaje: 'Emisor!!!'
      }
    }
    this.router.navigate(['/receptor'],navigationExtras)
  }

  goToReceptorSinVariable(){
    this.router.navigate(['/receptor'])
  }

  ngOnInit() {
  }

}
