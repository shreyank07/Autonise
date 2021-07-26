import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpHeaders } from '@angular/common/http';
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

<<<<<<< HEAD
  getdata() {
    return [{ name: 'ShreyankLadekar', email: 'Shreyank@autonise.com' }];
  }
  getdata2(category,group = 'women') {
=======
  getUser(token) {
    let myHeader = new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : token 
    })
    return this.http.get('http://127.0.0.1:8000/user/details',{headers : myHeader});
  }
  getdata2(category, group = 'women') {
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
    return this.http.get(`http://127.0.0.1:8000/${group}/data`, {
      params: { category: category },
    });
  }

<<<<<<< HEAD
  getProductDetails(category,group = 'women') {
=======
  getProductDetails(category, group = 'women') {
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
    return this.http.get(`http://127.0.0.1:8000/${group}/product`, {
      params: { category: category },
    });
  }

<<<<<<< HEAD
  getUserCart(name,group = 'women') {
=======
  getUserCart(name, group = 'women') {
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
    return this.http.get(`http://127.0.0.1:8000/user/cart`, {
      params: { name: name },
    });
  }
<<<<<<< HEAD
  postCart(name,category,id,group = 'women') {
    return this.http.post(`http://127.0.0.1:8000/user/cart`, {"group" : group,"category" : category , "id" : id, "qty" : 1}, {
      params: { name: name },
    });
  }

  getDetailedCart(name,group = 'women'){
    return this.http.get(`http://127.0.0.1:8000/user/cartDetails` , {params : {"group" : group , "name" : name}})
  }
  updateQty(name,index,qty,group = 'women'){
    return this.http.post(`http://127.0.0.1:8000/user/updateQty`,{"quantity" : qty},{params : {"name" : name, "index" : index}})
  }

  removeCart(name,index,group = 'women'){
    return this.http.get(`http://127.0.0.1:8000/user/removeItem`,{
      params : {"name" : name, "index" : index}
    })
  }
  
=======
  postCart(name, category, id, group = 'women') {
    return this.http.post(
      `http://127.0.0.1:8000/user/cart`,
      { group: group, category: category, id: id, qty: 1 },
      {
        params: { name: name },
      }
    );
  }

  getDetailedCart(name, group = 'women') {
    return this.http.get(`http://127.0.0.1:8000/user/cartDetails`, {
      params: { group: group, name: name },
    });
  }
  updateQty(name, index, qty, group = 'women') {
    return this.http.post(
      `http://127.0.0.1:8000/user/updateQty`,
      { quantity: qty },
      { params: { name: name, index: index } }
    );
  }

  removeCart(name, index, group = 'women') {
    return this.http.get(`http://127.0.0.1:8000/user/removeItem`, {
      params: { name: name, index: index },
    });
  }

  register(data) {
    return this.http.post('http://127.0.0.1:8000/user/register', data, {
      responseType: 'text',
    });
  }
  login(data) {
    return this.http.post('http://127.0.0.1:8000/user/login', data);
  }
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
}
