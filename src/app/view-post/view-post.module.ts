import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewPostPage } from './view-post.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-post-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule
  ],
  declarations: [ViewPostPage]
})
export class ViewMessagePageModule {}
