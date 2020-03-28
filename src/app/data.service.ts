import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(
    public db: AngularFireDatabase,
  ) {
  }

  async createRow(data): Promise<any> {
    return new Promise((resolve) => {
      const ref = this.db.list('users/');
      ref.push(data)
        .once('value')
        .then((org) => {
          this.updateCount()
            .then((res) => {
              console.log('count', res);
            });
          resolve(org.key);
        });
    });
  }

  async updateCount(): Promise<any> {
    let count = await this.getCount();
    count = +count;
    if (count === null || count === undefined) {
      count = 0;
    } else {
      count += 1;
    }
    await this.db.database.ref('stat/count').set(count);
    return count;
  }

  getCount(): Promise<any> {
    return new Promise((resolve) => {
      this.db.database.ref('stat/count')
        .once('value')
        .then((res) => {
          resolve(res.val());
        });
    });
  }
}
