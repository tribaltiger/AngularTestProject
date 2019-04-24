import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isLoremIpsum: boolean = true;

  frameworks: string[] = ['Angular', 'React', 'Vue'];
  klasses: string[] = ['groen', 'vet'];
  score: number = 100;

  constructor() { }

  ngOnInit() {
  }

  changeLoremIpsum(event: Event) {
    if (this.isLoremIpsum == false) {
      this.isLoremIpsum = true;
    }
    else {
      this.isLoremIpsum = false;
    }
  }
}
