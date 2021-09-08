import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { Good } from 'src/app/interface/good';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
  goods: Good[] = []
  goodObservable : Subscription
  add: number = -1

  constructor(private gs: GoodsService, private cs:CartService, private as: AuthService, private router:Router) {

   }

  ngOnInit(): void {
    this.goodObservable=this.gs.getAllGoods().subscribe(data => {
      this.goods=data.map(element => {
        return{
          id: element.payload.doc.id,
          name: element.payload.doc.data()['name'],
          price: element.payload.doc.data()['price'],
          photoUrl: element.payload.doc.data()['photoUrl']
        }
      })
    })
  }

  ngOnDestroy() {
    this.goodObservable.unsubscribe
  }
  addToCart(index:number){
    if(this.as.userId) this.router.navigate(['/login']);
    else this.add = +index    

  }
  buy(amount){
    let selectedGood = this.goods[this.add]
    let data={
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }
    this.cs.addToCart(data).then(()=> this.add = -1)
  }

}
