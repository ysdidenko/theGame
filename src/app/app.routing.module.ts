import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
  {
    path: "game",
    loadChildren: () => import("./game/game.module").then((m) => m.GameModule),
  },
  {
    path: "menu",
    component: MenuComponent,
  },
  {
    path: "**",
    redirectTo: "menu",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
