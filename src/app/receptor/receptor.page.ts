import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
  styleUrls: ['./receptor.page.scss'],
})
export class ReceptorPage implements OnInit {
  mensaje: any;

  constructor(private route: ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params=>{
      console.log('params:',params)
      if(params && params.mensaje){
        this.mensaje = params.mensaje;
      }else{
        this.mensaje = "mensaje no recibido"
      }
    })

  }

  goToHome(){
    this.router.navigate(['/home'])
  }
  
  goToEmisor(){
    this.router.navigate(['/emisor'])
  }

  ngOnInit() {
  }

}
