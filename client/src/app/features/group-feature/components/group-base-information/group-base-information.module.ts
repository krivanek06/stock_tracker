import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { DefaultImgDirectiveModule, RelativeTimePipeModule } from '@shared';
import { GroupBaseInformationComponent } from './group-base-information.component';

@NgModule({
	declarations: [GroupBaseInformationComponent],
	imports: [CommonModule, IonicModule, DefaultImgDirectiveModule, RelativeTimePipeModule, MatTooltipModule, MatButtonModule, MatIconModule],
	exports: [GroupBaseInformationComponent],
})
export class GroupBaseInformationModule {}
