import { Component } from "@angular/core";
import { DataService, Post } from "../services/data.service";

import * as firebase from "firebase";
import { environment, snapshotToArray } from "../../environments/environment";
import { PostComponent } from "../post/post.component";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  posts: Post[];
  postSubject: string;
  postContent: string;
  ref = firebase.database().ref("os/");
  tmp: Post;

  constructor(private dataService: DataService) {
    this.ref.on("value", (res) => {
      console.log(snapshotToArray(res));
    });
  }

  ngOnInit() {
    this.dataService.readPosts().subscribe((record) => {
      this.posts = record.map((e) => {
        return <Post>{
          id: e.payload.doc.data()["id"],
          subject: e.payload.doc.data()["subject"],
          content: e.payload.doc.data()["content"],
          date: e.payload.doc.data()["date"],
          isRead: false,
          writer: e.payload.doc.data()["writer"],
        };
      });
      this.dataService.posts = this.posts;
    });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  goToWrite() {
    location.href = "http://localhost:8100/firestore";
  }
}
