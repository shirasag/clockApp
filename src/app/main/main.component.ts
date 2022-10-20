import { Component, OnInit } from '@angular/core';
import zones from '../Data/zones.json';
import { Zone } from '../Data/zones';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  zones:Zone[] = zones;
  radioModel = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
