import { Component, Input, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { Category } from "../shared/models";

@Component({
  selector: "app-revolver",
  templateUrl: "./revolver.component.html",
  styleUrls: ["./revolver.component.scss"],
  animations: [
    trigger("rotation", [
      state("0", style({ transform: "rotate(0)" })),
      state("1", style({ transform: "rotate(-60deg)" })),
      state("2", style({ transform: "rotate(-120deg)" })),
      state("3", style({ transform: "rotate(-180deg)" })),
      state("4", style({ transform: "rotate(-240deg)" })),
      state("5", style({ transform: "rotate(-300deg)" })),
      state("6", style({ transform: "rotate(-360deg)" })),
      transition("* => *", animate("1000ms ease-out")),
    ]),
  ],
})
export class RevolverComponent implements OnInit {
  angle = 0;
  bullets: Category[] = [];
  @Input() autoAnimate: boolean;

  ngOnInit() {
    if (this.autoAnimate) {
      this.animate();
    }
  }

  animate() {
    setInterval(() => this.addOneBullet(), 1500);
  }

  addOneBullet(category?: Category) {
    if (this.bullets.length < 6) {
      this.bullets.push(category);
    } else {
      this.bullets = [];
    }
    this.angle = this.bullets.length;
  }
}
