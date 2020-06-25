import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}

  create_Post(record) {
    return this.firestore.collection("post").add(record);
  }

  read_Post() {
    return this.firestore.collection("post").snapshotChanges();
  }

  update_Post(recordID, record) {
    this.firestore.doc("post/" + recordID).update(record);
  }

  delete_Post(recordID) {
    this.firestore.doc("post/" + recordID).delete();
  }
}
