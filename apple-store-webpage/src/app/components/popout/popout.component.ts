import { Component } from '@angular/core';
import { PopoutService } from '../../services/popout.service';

@Component({
  selector: 'app-popout',
  templateUrl: './popout.component.html',
  styleUrls: ['./popout.component.css']
})
export class PopoutComponent {
  constructor(private popoutService: PopoutService) {}

  close(): void {
    this.popoutService.hide();
  }
}