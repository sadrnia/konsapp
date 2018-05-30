import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemCreatePage } from './item-create';
import { CvexperienceComponent } from "../../components/cvexperience/cvexperience";

@NgModule({
  declarations: [
    ItemCreatePage,
    CvexperienceComponent
  ],
  imports: [
    IonicPageModule.forChild(ItemCreatePage),
    TranslateModule.forChild(),
  ],
  exports: [
    ItemCreatePage,
  ]
})
export class ItemCreatePageModule {

}
