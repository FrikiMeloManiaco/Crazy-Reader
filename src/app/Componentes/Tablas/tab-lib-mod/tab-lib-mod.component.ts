import { Component, OnInit } from '@angular/core';


interface Autor{
  key:string;
  book:string;
  autor:string;
}

@Component({
  selector: 'app-tab-lib-mod',
  templateUrl: './tab-lib-mod.component.html',
  styleUrls: ['./tab-lib-mod.component.css']
})
export class TabLibModComponent{
  listOfData:Autor[] = [
    {
      key: '1',
      book: 'Libro 1',
      autor: 'Rosa Denise',
    },
    {
      key: '2',
      book: 'Libro 2',
      autor: 'Ivan Garcia',
    },
    {
      key: '3',
      book: 'Libro 3',
      autor: 'Valentina Avila',
    },
    {
      key: '4',
      book: 'Libro 4',
      autor: 'Axel Hernandez',
    },
    {
      key: '5',
      book: 'Libro 5',
      autor: 'Sarah Garcia',
    },
  ];
}
