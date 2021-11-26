import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pant-libros',
  templateUrl: './pant-libros.component.html',
  styleUrls: ['./pant-libros.component.css']
})
export class PantLibrosComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  panels = [
    {
      active: true,
      name: 'Mas categorias',
      disabled: false
    }];
}

