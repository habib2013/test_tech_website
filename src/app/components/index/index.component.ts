import { Component } from '@angular/core';
// import {environment as ENV} from '../../../environments/environment';
// import {RestfulHttpService} from '../../services/httpService/service.service';

// import {CacheService} from '../../services/cacheService/cache.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  selectedImage: any;
  selectedImage1: any;
  public selectedValue: any;
  amountValue = 10;
  amountVal: any;
  btnVal = 'Convert';
  public loading = false;
  fromCurrencyVal = '';
  codeList: any;
  codeLists: any;
  fromCurrencyVal1 = '';
  userName: any;
  /*countries: {
    name: string;
    code: string;
    flag: string } [] = [];*/
  countries: any;
  array: any;

  char = 'reviews';
  toggle = true;
  navbarOpen = false;
  /*countryFlag1 = this.countryFlags[1];
  countryFlag2 = this.countryFlags[10];*/

  constructor() {
    this.selectedImage = 'gb';
    this.selectedImage1 = 'us';

    // this.array = this.countryService.countries;
    // console.log('array list', this.array);
    //  this.countries = this.restService.countries;
    // console.log('countries list', this.countries);
  }


  ngOnInit(): void {
    //   this.cacheService.clearSession();
    // this.cacheService.clearStorage();
  }

  showSelectedImage() {
    // console.log('codeList', this.codeList.code);
    // console.log('image1', e.target.value);
    this.selectedImage = this.codeList.flag;
    // this.selectedImage = e.target.value;
    /*let randomSelected;
    randomSelected = this.fromCurrencyVal;*/
    // console.log('currencyCode', this.selectedImage);
  }

  showSelectedImage1() {
    // console.log('codeLists code DESTCODE', this.codeLists.code);
    // console.log('codeLists name DESTCOUNTRY', this.codeLists.name);
    // this.cacheService.setSession(ENV.DESTCOUNTRY, this.codeLists.name);
    // this.cacheService.setSession(ENV.DESTCODE, this.codeLists.code);
    // this.selectedImage1 = this.codeLists.flag;
    // this.cacheService.setSession(ENV.DESTFLAG, this.codeLists.flag);
    // this.selectedImage1 = e.target.value;
    // console.log('currencyCode2', this.selectedImage1);
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
    this.toggle = !this.toggle;
  }


}
