import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}

  createPost(record) {
    return this.firestore.collection("post").add(record);
  }

  readPost() {
    return this.firestore.collection("post").snapshotChanges();
  }

  updatePost(recordID, record) {
    this.firestore.doc("post/" + recordID).update(record);
  }

  deletePost(recordID) {
    this.firestore.doc("post/" + recordID).delete();
  }
}
