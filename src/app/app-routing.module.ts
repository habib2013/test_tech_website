import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServiceOneComponent } from './components/service-one/service-one.component';
import { ServiceTwoComponent } from './components/service-two/service-two.component';
import { ServiceThreeComponent } from './components/service-three/service-three.component';
import { ServiceFourComponent } from './components/service-four/service-four.component';
import { ServiceFiveComponent } from './components/service-five/service-five.component';
import { ServiceSixComponent } from './components/service-six/service-six.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'cloud-computing', component: ServiceOneComponent },
  { path: 'network-security', component: ServiceTwoComponent },
  { path: 'it-consultancy', component: ServiceThreeComponent },
  { path: 'website-maintenance', component: ServiceFourComponent },
  { path: 'digital-marketing', component: ServiceFiveComponent },
  { path: 'hosting-domain', component: ServiceSixComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
