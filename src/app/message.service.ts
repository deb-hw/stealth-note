import { Injectable } from "@angular/core";
import { StealthMessage } from "./stealth-message";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  private url: string = "https://stealth-api-jv.herokuapp.com/message";
  // this line above needs to always be the first line under "export class".
  // this
  messages: StealthMessage[] = []; //list of msgs .. "messages" = (cont'd below)
  // = (the object) StealthMessage, w/data type of array "[]", and "= []" an empty array.
  addMessage(message: StealthMessage): void {
    //adds a msg to list
    // this.messages.push(message); commenting out for Line 10 instead.
    this.http.post<StealthMessage>(this.url, message).subscribe();
    //this line above works w/Line10, to send the msgs to another site.
  }
  getMessages(): Observable<StealthMessage[]> {
    // return this.messages;  Commented out for Line23 to run.
    return this.http.get<StealthMessage[]>(this.url);
  } //this function rtns a list of msgs

  constructor(private http: HttpClient) {}
}
