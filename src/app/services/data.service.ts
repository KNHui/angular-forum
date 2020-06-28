import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

export interface Post {
  subject: string;
  writer: string;
  content: string;
  date: string;
  id: string;
  isRead: boolean;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  public posts: Post[];

  constructor(private firestore: AngularFirestore) {}

  createPost(record) {
    return this.firestore.collection<Post>("post").add(record);
  }

  //public readPost(): Message[] {
  public readPosts() {
    return this.firestore.collection<Post>("post").snapshotChanges();
  }

  public getPostById(id: number): Post {
    console.log(this.posts[id]);
    return this.posts[id];
  }

  updatePost(recordID, record) {
    this.firestore.doc("post/" + recordID).update(record);
  }

  deletePost(recordID) {
    this.firestore.doc("post/" + recordID).delete();
  }
}
