import { Component } from '@angular/core';
import {LicensePlate} from '../license-plate';
import {Observable} from 'rxjs/Observable';
import {CartService} from '../cart.service';

@Component({
  selector: 'ngs-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cartContents: Observable<LicensePlate[]>;

  constructor(private service: CartService) {
    this.cartContents = service.getCartContents();
  }

  removeFromCart(plate: LicensePlate) {
    this.service.removeFromCart(plate).subscribe(done => {
        this.cartContents = this.service.getCartContents();
        alert(`Plate '${plate.title}' removed from cart`);
      });
  }

}
