import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Category } from "src/app/shared/models";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent {
  categories: Category[] = [
    {
      name: "Movies",
      opened: true,
      icon: "videocam",
    },
    {
      name: "Auto",
      opened: true,
      icon: "car-sport",
    },
    {
      name: "Nature",
      opened: true,
      icon: "leaf",
    },
    {
      name: "Physics",
      opened: true,
      icon: "school",
    },
    {
      name: "General",
      opened: true,
      icon: "information-circle",
    },
    {
      name: "Math",
      opened: false,
      icon: "calculator",
    },
    {
      name: "Geography",
      opened: false,
      icon: "globe",
    },
    {
      name: "Sports",
      opened: false,
      icon: "football",
    },
  ];

  @Output() selectCategory = new EventEmitter<Category>();
}
