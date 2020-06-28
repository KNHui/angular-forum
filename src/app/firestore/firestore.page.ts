import { Component } from "@angular/core";
import { CrudService } from "../services/crud.service";
import { DataService, Post } from "../services/data.service";

@Component({
  selector: "app-firestore",
  templateUrl: "./firestore.page.html",
  styleUrls: ["./firestore.page.scss"],
})
export class FirestorePage /*implements OnInit*/ {
  posts: Post[];
  postSubject: string;
  postContent: string;
  postWriter: string;
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.readPost().subscribe((data) => {
      this.posts = data.map((e) => {
        return <Post>{
          id: e.payload.doc.id,
          //id: e.payload.doc.data()["id"],
          subject: e.payload.doc.data()["subject"],
          content: e.payload.doc.data()["content"],
          date: e.payload.doc.data()["date"],
          isRead: false,
          writer: e.payload.doc.data()["writer"],
          isEdit: false,
        };
      });
    });
  }

  CreateRecord() {
    let record = {};
    record["id"] = this.posts.length;
    record["subject"] = this.postSubject;
    record["content"] = this.postContent;
    record["writer"] = this.postWriter;
    record["date"] = new Date();
    this.crudService
      .createPost(record)
      .then((resp) => {
        this.postSubject = "";
        this.postContent = "";
        this.postWriter = "";
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  RemoveRecord(recordID) {
    this.crudService.deletePost(recordID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.editSubject = record.subject;
    record.editContent = record.content;
  }

  UpdateRecord(recordRow) {
    let record = {};
    //record["id"] = recordRow.id;
    record["subject"] = recordRow.editSubject;
    record["content"] = recordRow.editContent;
    record["writer"] = recordRow.writer;
    record["date"] = new Date();
    this.crudService.updatePost(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
