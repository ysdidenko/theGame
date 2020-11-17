import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Component, OnInit, ViewChild } from "@angular/core";
import { RevolverComponent } from "src/app/revolver/revolver.component";
import { Category } from "src/app/shared/models";

@Component({
  selector: "app-level",
  templateUrl: "./level.component.html",
  styleUrls: ["./level.component.scss"],
  animations: [
    trigger("loaderState", [
      transition(":enter", [
        style({ opacity: 0, bottom: "-50vh" }),
        animate("400ms", style({ bottom: "0", opacity: 1 })),
      ]),
      transition(":leave", [
        animate("400ms", style({ bottom: "-50vh", opacity: 0 })),
      ]),
    ]),
    trigger("revolverState", [
      state("false", style({ "padding-top": "17vh" })),
      transition("* => *", animate("400ms ease-out")),
    ]),
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("400ms", style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LevelComponent implements OnInit {
  isLoaderOpened = false;
  isShootVisible: boolean;
  @ViewChild(RevolverComponent) drum: RevolverComponent;

  constructor() {}

  ngOnInit() {
    this.isLoaderOpened = true;
  }

  selectCategory(category: Category) {
    this.drum.addOneBullet(category);
    if (this.drum.bullets.length === 6) {
      this.isLoaderOpened = false;
      this.isShootVisible = true;
    }
  }

  shoot() {}
}
