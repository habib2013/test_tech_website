/**
 *
 * Created By Iruobe Akhigbe Ayomide <ayo.iruobe@upperlink.ng> @ 30/05/2018
 *
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestfulHttpService {

  countries = [
    { name: 'United States', code: 'USD', flag: 'us'  },
    { name: 'Australia', code: 'AUD', flag: 'au' },
    { name: 'Bangladesh', code: 'BD', flag: 'bd'  },
    { name: 'Benin', code: 'BJ', flag: 'bj'  },
    { name: 'Brazil', code: 'BRL', flag: 'br'  },
    { name: 'Cameroon', code: 'CM', flag: 'cm'  },
    { name: 'China', code: 'CNY', flag: 'cn'  },
    { name: 'Egypt', code: 'EGP', flag: 'eg'  },
    { name: 'France', code: 'EUR', flag: 'fr'  },
    { name: 'Ghana', code: 'GHS', flag: 'gh'  },
    { name: 'India', code: 'INR', flag: 'in'  },
    { name: 'Japan', code: 'JPY', flag: 'jp'  },
    { name: 'Kenya', code: 'KE', flag: 'ke'  },
    { name: 'Nigeria', code: 'NGN', flag: 'ng'  },
    { name: 'Pakistan', code: 'PK', flag: 'pk'  },
    { name: 'Senegal', code: 'SN', flag: 'sn'  },
    { name: 'Sierra Leone', code: 'SL', flag: 'sl'  },
    { name: 'Singapore', code: 'SG', flag: 'sg'  },
    { name: 'Sri Lanka', code: 'LK', flag: 'lk'  },
    { name: 'Tanzania, United Republic of', code: 'TZ', flag: 'tz'  },
    { name: 'Thailand', code: 'TH', flag: 'th'  },
    { name: 'Turkey', code: 'TR', flag: 'tr'  },
    { name: 'Uganda', code: 'UG', flag: 'ug'  },
    { name: 'United Kingdom', code: 'GBP', flag: 'gb'  },
    { name: 'Vietnam', code: 'VN', flag: 'vn'  },
    { name: 'Zambia', code: 'ZM', flag: 'zm'  }
  ];

  token: string;
  options: any;
  headersSet: any = {};

  constructor(private http: HttpClient) {
    this.token  = env.TOKEN;
  }

  createAuthorizationHeader() {
    if (sessionStorage.getItem(this.token)) {
      const token: string = JSON.parse(sessionStorage.getItem(this.token)   );
      this.headersSet = new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `${token}`
      });
    } else {
      this.headersSet = new HttpHeaders({
        'Content-Type':  'application/json'
      });
    }
  }

  public get(endpoint: string, data:any, parameters?: HttpParams): Observable<any> {
    // console.info('HEADER::', this.headersSet);
    this.createAuthorizationHeader();
    if (parameters) {
      this.options = { params: parameters, headers: this.headersSet };
    } else {
      this.options = { headers: this.headersSet };
    }
    return this.http.get(endpoint, this.options);
  }


  public post(endpoint: string, data: any): Observable<any> {
    this.createAuthorizationHeader();
    return this.http.post(endpoint, data, {  headers: this.headersSet });
  }


  public delete(endpoint: string , data: any): Observable<any> {
    this.createAuthorizationHeader();
    const params = new HttpParams(data);
    return this.http.delete(endpoint, {headers: this.headersSet, params});

  }


  public put(endpoint: string, data: any): Observable<any> {
    this.createAuthorizationHeader();
    return this.http.put(endpoint, data, {  headers: this.headersSet });
  }

  public patch(endpoint: string, data: any): Observable<any> {
    this.createAuthorizationHeader();
    return this.http.patch(endpoint, data, {  headers: this.headersSet });
  }

}
