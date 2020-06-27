import { Injectable } from "@angular/core";

export interface Message {
  subject: string;
  writer: string;
  content: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  public messages: Message[] = [
    {
      subject: "Matt Chorsey",
      writer: "New event: Trip to Vegas",
      content: "wow",
      date: "9:32 AM",
      id: 0,
      read: false,
    },
    {
      subject: "Lauren Ruthford",
      writer: "Long time no chat",
      content: "wow",
      date: "6:12 AM",
      id: 1,
      read: false,
    },
    {
      subject: "Jordan Firth",
      writer: "Report Results",
      content: "wow",
      date: "4:55 AM",
      id: 2,
      read: false,
    },
    {
      subject: "Bill Thomas",
      writer: "The situation",
      content: "wow",
      date: "Yesterday",
      id: 3,
      read: false,
    },
    {
      subject: "Joanne Pollan",
      writer: "Updated invitation: Swim lessons",
      content: "wow",
      date: "Yesterday",
      id: 4,
      read: false,
    },
    {
      subject: "Andrea Cornerston",
      writer: "Last minute ask",
      content: "wow",
      date: "Yesterday",
      id: 5,
      read: false,
    },
    {
      subject: "Moe Chamont",
      writer: "Family Calendar - Version 1",
      content: "wow",
      date: "Last Week",
      id: 6,
      read: false,
    },
    {
      subject: "Kelly Richardson",
      writer: "Placeholder Headhots",
      content: "wow",
      date: "Last Week",
      id: 7,
      read: false,
    },
  ];

  constructor() {}

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
