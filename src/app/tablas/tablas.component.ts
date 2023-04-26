import { Component } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent {

  nombre: string="Wlady"
  edad: number = 30
  // para usar json se unsa any
  data: any = {'nombre': "wlady"}



}
