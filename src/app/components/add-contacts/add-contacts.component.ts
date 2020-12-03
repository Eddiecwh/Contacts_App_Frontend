import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css'],
})
export class AddContactsComponent implements OnInit {
  contact = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  };
  submitted = false;

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {}

  saveContact(): void {
    const data = {
      firstName: this.contact.firstName,
      lastName: this.contact.lastName,
      mobile: this.contact.mobile,
      email: this.contact.email,
    };

    this.contactsService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newContact(): void {
    this.submitted = false;
    this.contact = {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
    };
  }
}
