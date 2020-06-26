import { Component /*TODO , OnInit*/ } from "@angular/core";
import { CrudService } from "../crud.service";

@Component({
  selector: "app-firestore",
  templateUrl: "./firestore.page.html",
  styleUrls: ["./firestore.page.scss"],
})
export class FirestorePage /*implements OnInit*/ {
  posts: any;
  postSubject: string;
  postContent: string;
  postDate: string;
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    console.log("firestore.page.ts - ngOnInit() 1");
    this.crudService.readPost().subscribe((data) => {
      this.posts = data.map((e) => {
        return {
          id: e.payload.doc.id,
          subject: e.payload.doc.data()["subject"],
          content: e.payload.doc.data()["content"],
          date: e.payload.doc.data()["date"],
          isEdit: false,
        };
      });
      console.log("firestore.page.ts - ngOnInit() 2 - this.posts" + this.posts);
    });
  }

  CreateRecord() {
    let record = {};
    record["subject"] = this.postSubject;
    record["content"] = this.postContent;
    record["date"] = this.postDate;
    this.crudService
      .createPost(record)
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
    this.crudService.deletePost(recordID);
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
    this.crudService.updatePost(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
