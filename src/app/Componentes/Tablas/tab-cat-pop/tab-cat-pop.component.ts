import { Component } from '@angular/core';

interface Person {
  key: string;
  name: string;
  int: string;
}

@Component({
  selector: 'app-tab-cat-pop',
  templateUrl: './tab-cat-pop.component.html',
  styleUrls: ['./tab-cat-pop.component.css']
})
export class TabCatPopComponent{

  listOfData: Person[] = [
    {
      key: '1',
      name: 'Romance',
      int: '60%',
    },
    {
      key: '2',
      name: 'Fantasia',
      int: '57%',
    },
    {
      key: '3',
      name: 'Drama',
      int: '42%',
    },
    {
      key: '4',
      name: 'Acción',
      int: '40%',
    },
    {
      key: '5',
      name: 'Aventuras',
      int: '29%',
    },
  ];


}
