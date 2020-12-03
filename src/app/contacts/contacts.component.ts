import { Component, OnInit } from '@angular/core';
import { Http2ServerResponse } from 'http2';
import { Contact } from '../contact';

// Import Mock List of Contacts from local file
import { CONTACTS } from '../temp-contact-list';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  contacts = CONTACTS;
  selectedContact: Contact;

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
