import { Component } from "@angular/core";
import { DataService, Message } from "../services/data.service";

import * as firebase from "firebase";
import { environment, snapshotToArray } from "../../environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  item = [];
  ref = firebase.database().ref("os/");

  constructor(private data: DataService) {
    this.ref.on("value", (res) => {
      console.log(snapshotToArray(res));
    });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
}
