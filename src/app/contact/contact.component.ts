import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fb = faFacebookSquare;
  insta = faInstagram;
  linkedIn = faLinkedin;
  constructor() { }

  ngOnInit(): void {
  }

}
