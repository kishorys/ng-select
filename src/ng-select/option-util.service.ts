import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionUtilService {

  constructor() { }

  getUniqColumns(options): string[] {
    const res: string[] = options.reduce(function (acc: string[], curr: any) {
      const k = curr.id.split(':')[0];
      if (acc.indexOf(k) === -1) {
        acc.push(k);
      }
      return acc;
    }, []);
    return res;
  }
}
