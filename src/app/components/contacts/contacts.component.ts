import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from '../../contact';

// // Import Mock List of Contacts from local file
// import { CONTACTS } from '../../temp-contact-list';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: any;
  currentContact = null;
  currentIndex = -1;
  firstName = '';
  lastName = '';

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.retrieveContacts();
  }

  retrieveContacts(): void {
    this.contactsService.getAll().subscribe(
      (data) => {
        this.contacts = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveContacts();
    this.currentContact = null;
    this.currentIndex = -1;
  }

  // contacts = CONTACTS;
  selectedContact: Contact;

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
