import { Component, OnInit } from '@angular/core';
import { Shopping } from 'src/app/interface/shopping';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  cart: Shopping[]=[];

  constructor(private cs:CartService) { }

  ngOnInit(){
    this.cs.getToCart().subscribe(cart=>{
      this.cart = cart.map(shopping=>{
        return{
          id: shopping.payload.doc.id,
          name: shopping.payload.doc.data()['name'],
          price: shopping.payload.doc.data()['price'],
          amount: shopping.payload.doc.data()['amount']
        }
      })

    })
  }
  delete(index){
    this.cs.delete(this.cart[index].id)
  }
  save(index){
    this.cs.save(this.cart[index].id,this.cart[index].amount)
  }

}
