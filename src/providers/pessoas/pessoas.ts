import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PessoasProvider {
  public pessoas: any;
  public apiUrl: string = "https://randomuser.me/api/?nat=br&results=10&seed=abc";

  constructor(public http: HttpClient) {
    console.log('Hello PessoasProvider Provider');
  }

  public load() {
    if (this.pessoas) {
      return Promise.resolve(this.pessoas);
    }
    return new Promise(resolve => {
      this.http.get<any>(this.apiUrl).subscribe(data => {
        this.pessoas = data.results;
        resolve(this.pessoas);
      }, err => {
        console.log(err);
      });
    });
  }

  public loadByEmail(email: string): any {
    for (let pessoa of this.pessoas) {
      if (pessoa.email == email) {
        return pessoa;
      }
    }
  }

}
