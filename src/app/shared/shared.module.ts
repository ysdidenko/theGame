import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { RevolverComponent } from "../revolver/revolver.component";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [RevolverComponent],
  exports: [RevolverComponent],
})
export class SharedModule {}
