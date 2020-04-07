import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagram, faLinkedin, faGithubSquare  } from '@fortawesome/free-brands-svg-icons';
import { Contact } from './contact';
import { SendEmailService } from '../send-email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fb = faFacebookSquare;
  insta = faInstagram;
  linkedIn = faLinkedin;
  git = faGithubSquare;
  contactForm = new Contact('', '', '', '');
  constructor(private email: SendEmailService) { }

  ngOnInit(): void {
  }

  submit() {
    const data = this.contactForm;
    this.email.send(data).subscribe( res => console.log(res));
  }

}
