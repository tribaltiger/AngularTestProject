import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  binding: string = "interpolation";
  htmlTekst: string = "zelfgekozen tekst";

  constructor(
    private logger: LoggerService) {
  }

  ngOnInit() {
  }

  onClick(event: Event) {
    alert("button is clicked")
    console.log('Click!', event)
  }
}
