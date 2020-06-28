import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService, Post } from "../services/data.service";

@Component({
  selector: "app-view-post",
  templateUrl: "./view-post.page.html",
  styleUrls: ["./view-post.page.scss"],
})
export class ViewPostPage implements OnInit {
  public post: Post;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.post = this.data.getPostById(id);
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === "ios" ? "Inbox" : "";
  }
}
