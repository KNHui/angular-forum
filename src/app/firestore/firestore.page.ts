import { Component, OnInit } from "@angular/core";
import { CrudService } from "../crud.service";

@Component({
  selector: "app-firestore",
  templateUrl: "./firestore.page.html",
  styleUrls: ["./firestore.page.scss"],
})
export class FirestorePage implements OnInit {
  posts: any;
  postSubject: string;
  postContent: string;
  postDate: string;
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.read_Post().subscribe((data) => {
      this.posts = data.map((e) => {
        return {
          id: e.payload.doc.id,
          subject: e.payload.doc.data()["subject"],
          content: e.payload.doc.data()["content"],
          date: e.payload.doc.data()["date"],
          isEdit: false,
        };
      });
      console.log(this.posts);
    });
  }

  CreateRecord() {
    let record = {};
    record["subject"] = this.postSubject;
    record["content"] = this.postContent;
    record["date"] = this.postDate;
    this.crudService
      .create_Post(record)
      .then((resp) => {
        this.postSubject = "";
        this.postContent = "";
        this.postDate = "";
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  RemoveRecord(recordID) {
    this.crudService.delete_Post(recordID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.editSubject = record.subject;
    record.editContent = record.content;
    record.editDate = record.date;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record["subject"] = recordRow.editSubject;
    record["content"] = recordRow.editContent;
    record["date"] = recordRow.editDate;
    this.crudService.update_Post(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
