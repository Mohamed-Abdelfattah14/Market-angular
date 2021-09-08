import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore, private st: AngularFireStorage) { }

  getAllGoods(){
    return this.fs.collection("goods").snapshotChanges()
  }
  addNewGood(name:string,price:number,image:File){
    let ref= this.st.ref('goods/'+ image.name)
    ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(photoUrl=>{
        this.fs.collection('goods').add({
          name,
          price,
          photoUrl
        })
      })
    })
  }
}
