import { Injectable } from '@angular/core';
import { RestfulHttpService } from '../httpService/service.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs';
import 'rxjs/add/operator/map';
// import 'rxjs/observable/throw';
// import 'rxjs/add/operator/retryWhen';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/take';
import { environment as env } from '../../../environments/environment';
// import {BootstrapNotifyService} from '../../services/bootstrap-notify/bootstrap-notify.service';
// import {retryWhen} from "rxjs-compat/operator/retryWhen";
import { retryWhen, delay, mergeMap, take, catchError, map } from 'rxjs/operators';
import {Router} from '@angular/router';/*
import {BootstrapNotifyService} from '../bootstrap-notify/bootstrap-notify.service';
import {UtilService} from '../utilService/util.service';*/

// /${env.API_VERSION}

@Injectable({
  providedIn: 'root',
})
export class ApiService extends RestfulHttpService {
  constructor(http: HttpClient, private router: Router) {
    super(http);
  }

  // intercept and format all possible http error.
  private errorHandler(error: any) {
    try {
      console.log('sample error', error);
      if ((error.status === 'FAIL') && (error.message.includes('Invalid Credentials.'))) {
        console.log('logout');
        sessionStorage.clear();
        localStorage.clear();
         console.log(error.error.description, error.error.code);
        this.router.navigateByUrl('/login');
        // this.utilService.initPassword();
        // return;
        console.log('error');
      // this.bootstrapNotifyService.error(error.status + '<br>' + 'Invalid Credentials.' || 'Failed');
       return throwError(error || { description: 'Invalid Credentials or token expired' });
      }
      return throwError(error || { description: 'Invalid token or token expired' });
    } catch (error) {
      console.log(error);
      return throwError(error || { description: 'Invalid token or token expired' });
    }
  }
  // in case of Login: this will art as an interceptor to store the token return and possible login user data
  private decode(res: any, auth?: string | null) {
    const data = res;
    if (res) {
      // console.log('API_res', res, auth);
      if (auth && auth.match('login')) {
        sessionStorage.setItem(env.TOKEN, JSON.stringify(data.result.sessionToken));
        // console.log('MyToken', data.result.sessionToken);
        // const dateAtTheMoment = Date.now() + 2000; // 2 seconds
        const dateAtTheMoment = (new Date()).getTimezoneOffset() * 60000;
        const newLogOutTime = (new Date()).getTimezoneOffset() * 75000;
        // sessionStorage.setItem(env.DATE_NOW, JSON.stringify(Date.now()));
      }
      return res;
    } else {
      return res;
    }
  }
  // handles all delete api request
  public deleteRequest(api: string, path: string, data?: any): Observable<any> {
    let ENDPOINT = `${env.API_URL}/${api}`;
    if (path) {
      ENDPOINT = `${env.API_URL}/${api}/${path}`;
    }
    return super
      .delete(ENDPOINT, data)
      .pipe(
        retryWhen((errors) => {
          return errors.pipe(
            mergeMap((err) => this.errorHandler(err)),
            delay(1000),
            take(2)
          );
        })
      )
      .pipe(
        catchError(this.errorHandler),
        map((res) => {
          return res;
        })
      );
  }
  // handles all update api request
  public putRequest(api: string, path: string, data: any): Observable<any> {
    let ENDPOINT = `${env.API_URL}/${api}`;
    if (path) {
      ENDPOINT = `${env.API_URL}/${api}/${path}`;
    }
    return super
      .put(ENDPOINT, data)
      .pipe(
        retryWhen((errors) => {
          return errors.pipe(
            mergeMap((err) => this.errorHandler(err)),
            delay(1000),
            take(2)
          );
        })
      )
      .pipe(
        catchError(this.errorHandler),
        map((res) => {
          return res;
        })
      );
  }
  // handles all patching api request
  public patchRequest(api: string, path: string | null, data: any): Observable<any> {
    let ENDPOINT = `${env.API_URL}/${api}`;
    if (path) {
      ENDPOINT = `${env.API_URL}/${api}/${path}`;
    }
    return super
      .patch(ENDPOINT, data)
      .pipe(
        retryWhen((errors) => {
          return errors.pipe(
            mergeMap((err) => this.errorHandler(err)),
            delay(1000),
            take(2)
          );
        })
      )
      .pipe(
        catchError(this.errorHandler),
        map((res) => {
          return res;
        })
      );
  }
  // handles all get / list api request
  public getRequest(api: string, path?: string | null, params?: HttpParams): Observable<any> {
    let ENDPOINT = `${env.API_URL}/${api}`;

    if (path) {
      ENDPOINT = `${env.API_URL}/${api}/${path}`;
    }
    return super.get(ENDPOINT, params).pipe(retryWhen((errors) => {
          // console.log('getRequest1', errors);
          return errors.pipe(mergeMap((err) => this.errorHandler(err)),
            delay(1000),
            take(2)
          );
        })
      ).pipe(catchError(this.errorHandler), map((res) => {
          // console.log('getRequest2', res);
          return res;
        })
      );
  }

  public getCurrencyRequest(api: string, path?: string | null, params?: HttpParams): Observable<any> {
    let ENDPOINT = `${env.baseUrl}/${api}`;

    if (path) {
      ENDPOINT = `${env.baseUrl}/${api}/${path}`;
    }
    return super.get(ENDPOINT, params).pipe(retryWhen((errors) => {
        // console.log('getRequest1', errors);
        return errors.pipe(mergeMap((err) => this.errorHandler(err)),
          delay(1000),
          take(2)
        );
      })
    ).pipe(catchError(this.errorHandler), map((res) => {
        // console.log('getRequest2', res);
        return res;
      })
    );
  }


  // handles all post api request
  /*public postRequest(api: string, path: null | string, data: any): Observable<any> {
    let ENDPOINT = `${env.API_URL}/${api}`;
    if (path) {
      ENDPOINT = `${env.API_URL}/${api}/${path}`;
    }
    return super
      .post(ENDPOINT, data)
      .pipe(
        retryWhen((errors) => {
          return errors.pipe(
            mergeMap((err) => this.errorHandler(err)),
            delay(1000),
            take(2)
          );
        })
      )
      .pipe(
        catchError(this.errorHandler),
        map((res) => this.decode(res, path))
      );
  }*/

  public postRequest(api: string, path: null | string, data: any): Observable<any> {
    let ENDPOINT = `${env.API_URL}/${api}`;

    if (path && path !== 'login') {
      ENDPOINT = env.API_URL + '/' + api + '/' + path;
    } else {
      ENDPOINT = env.API_URL + '/' + api;
    }

    return super
      .post(ENDPOINT, data)
      .pipe(
        retryWhen((errors) => {
          return errors.pipe(
            mergeMap((err) => this.errorHandler(err)),
            delay(1000),
            take(2)
          );
        })
      )
      .pipe(
        catchError(this.errorHandler),
        map((res) => this.decode(res, path))
      );
  }


  public postNameEnquiryRequest(api: string, path: null | string, data: any): Observable<any> {
    let ENDPOINT = `${env.baseUrl}/${api}`;

    if (path && path !== 'login') {
      ENDPOINT = env.baseUrl + '/' + api + '/' + path;
    } else {
      ENDPOINT = env.baseUrl + '/' + api;
    }

    return super
      .post(ENDPOINT, data)
      .pipe(
        retryWhen((errors) => {
          return errors.pipe(
            mergeMap((err) => this.errorHandler(err)),
            delay(1000),
            take(2)
          );
        })
      )
      .pipe(
        catchError(this.errorHandler),
        map((res) => this.decode(res, path))
      );
  }
}
