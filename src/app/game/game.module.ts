import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LevelComponent } from "./level/level.component";
import { SharedModule } from "../shared/shared.module";
import { LoaderComponent } from "./loader/loader.component";
import { IonicModule } from "@ionic/angular";

const routes: Routes = [
  {
    path: "",
    component: LevelComponent,
  },
];

@NgModule({
  declarations: [LevelComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    IonicModule,
  ],
})
export class GameModule {}
