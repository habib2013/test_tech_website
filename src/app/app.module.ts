import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { ThreeWaysComponent } from './components/three-ways/three-ways.component';
import { SetUpComponent } from './components/set-up/set-up.component';
import { TrustPilotComponent } from './components/trust-pilot/trust-pilot.component';
import { AuthAppNavComponent } from './components/auth-app-nav/auth-app-nav.component';
import { RegisterComponent } from './components/register/register.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServiceOneComponent } from './components/service-one/service-one.component';
import { ServiceTwoComponent } from './components/service-two/service-two.component';
import { ServiceThreeComponent } from './components/service-three/service-three.component';
import { ServiceFourComponent } from './components/service-four/service-four.component';
import { ServiceFiveComponent } from './components/service-five/service-five.component';
import { ServiceSixComponent } from './components/service-six/service-six.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    IndexComponent,
    ThreeWaysComponent,
    SetUpComponent,
    TrustPilotComponent,
    AuthAppNavComponent,
    RegisterComponent,
    HowItWorksComponent,
    ContactUsComponent,
    ServiceOneComponent,
    ServiceTwoComponent,
    ServiceThreeComponent,
    ServiceFourComponent,
    ServiceFiveComponent,
    ServiceSixComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
