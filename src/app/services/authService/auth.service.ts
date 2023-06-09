/**
 *
 * Created By Iruobe Akhigbe Ayomide <iruobeakhigbe@gmail.com> @ 8/9/2019
 *
 */
import {Injectable} from '@angular/core';
import {CacheService} from '../cacheService/cache.service';
import { environment as ENV } from '../../../environments/environment';
import {UserService} from '../api-handlers/userService/user.service';

@Injectable()
export class AuthService {
  constructor(private cacheService: CacheService, private userService: UserService) {
  }

  public getUserToken() {
    return this.cacheService.getSession(ENV.TOKEN);
  }
  public getUserDetails() {
    return this.cacheService.getSession(ENV.USERINFO);
  }

  public getRegisterDetails() {
    return this.cacheService.getSession(ENV.REGISTERDETAILS);
  }

  public getTransactionInfo() {
    return this.cacheService.getSession(ENV.TRANSACTROWINFO);
  }
  public getEmail() {
    return this.cacheService.getSession(ENV.REGISTEREMAIL);
  }
  public getAllUserDetails() {
    return this.cacheService.getStorage(ENV.USERCOUNT);
  }
  public getAuditCount() {
    return this.cacheService.getStorage(ENV.AUDITCOUNT);
  }
  public getBankCount() {
    return this.cacheService.getStorage(ENV.BANKCOUNT);
  }
  public getUserRole() {
    return this.cacheService.getSession(ENV.ROLE);
  }
  public checkLogin(): boolean {
    const token =  this.cacheService.getSession(ENV.TOKEN);
    // console.log('Login Token', token);
    const user =  this.cacheService.getSession(ENV.USERTOKEN);
    const recentDate =  this.cacheService.getStorage(ENV.DATE_NOW);
    const expireDate =  this.cacheService.getSession(ENV.TOKENEXPIRYCOUNT);
    // const role =  this.cacheService.getSession(ENV.ROLE);
    if (!token && token === '') {
      return false;
    } else {
      return true;
    }
  }

  /*public checkSession(): boolean {
    const accessToken =  this.cacheService.getSession(ENV.TOKEN);
    const userData =  this.cacheService.getSession(ENV.USERTOKEN);
    const recentTime =  this.cacheService.getStorage(ENV.DATE_NOW);
    const logOutTime =  this.cacheService.getSession(ENV.LOGOUTTIME);
    if (!accessToken || !userData) {
      return false;
    } else if (new Date(recentTime) == new Date(logOutTime)) {
      return false;
    } else {
      return true;
    }
  }*/

  public logOut() {
    this.signOut();
    this.cacheService.clearSession();
    this.cacheService.clearStorage();
    return true;
  }
  private signOut() {
    this.userService.logout().subscribe();
  }
}
