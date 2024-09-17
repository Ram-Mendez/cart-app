import {Component, Input,} from '@angular/core';
import {CartItem} from '../../models/cartItem';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() items: CartItem[] = [];
  @Input() total = 0;


}
