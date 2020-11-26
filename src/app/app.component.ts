import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/pages/home',
      icon: 'Home'
    },
    {
      title: 'Notifications',
      url: '/pages/notifications',
      icon: 'notifications'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'Messages',
      url: '/pages/messages',
      icon: 'mail'
    },
    {
      title: 'Watching',
      url: '/pages/watching',
      icon: 'eye'
    },
    {
      title: 'Saved',
      url: '/pages/saved',
      icon: 'save'
    },
    {
      title: 'Buy Again',
      url: '/pages/buyagain',
      icon: 'arrow-redo'
    },
    {
      title: 'Purchases',
      url: '/pages/purchases',
      icon: 'bag-handle'
    },
    {
      title: 'Bids & Offers',
      url: '/pages/offers',
      icon: 'magnet'
    },
    {
      title: 'Selling',
      url: '/pages/selling',
      icon: 'pricetags'
    },
    {
      title: 'Categories',
      url: '/pages/offers',
      icon: 'list'
    },
    {
      title: 'Deals',
      url: '/pages/deals',
      icon: 'hourglass'
    },
    {
      title: 'Settings',
      url: '/pages/settings',
      icon: 'settings'
    },
    {
      title: 'Help',
      url: '/pages/help',
      icon: 'aperture'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
       this.splashScreen.hide();
      
    });
  }
  

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
