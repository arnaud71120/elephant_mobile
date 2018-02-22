import { TestBed, ComponentFixture, async, inject} from '@angular/core/testing';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Keyboard,DomController, AlertController, IonicModule,  App, Config, Platform, NavController, ToastController, Events } from 'ionic-angular';
import { StorageMock } from 'ionic-mocks';
import { Storage } from '@ionic/storage';
import { LoginPage } from './login';
import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ElephantServiceProvider } from '../../providers/elephant-service/elephant-service';
//import { MyApp } from '../../app/app.component';

let fixture: ComponentFixture<LoginPage>;
let instance: any = null;
let authService: AuthServiceProvider = null;
let storageMock: StorageMock;

describe('Service: auth-service', () => {

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          LoginPage,
        //  MyApp
        ],

        providers: [
          AuthServiceProvider,
          Config,
          {
            provide: Http, deps: [MockBackend]
          },
          App,
          {
            provide: Storage, useFactory: () => StorageMock.instance()
          },
          Platform,
          DomController,
          AlertController,
          Keyboard,
          NavController,
          ElephantServiceProvider,
          ToastController,
          Events
        ],
        imports: [
          IonicModule
        ]
      }).compileComponents().then(() => {
        fixture = TestBed.createComponent(LoginPage);
        instance = fixture.componentInstance;
      });
    })
  );
  afterEach(()=> {
    fixture.destroy();
  });
  beforeEach(() => {

  });

      it('Should be valid if because username and password given', inject([LoginPage], (login) => {
      }));
});
