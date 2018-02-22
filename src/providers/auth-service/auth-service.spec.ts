import { TestBed, ComponentFixture, async, inject} from '@angular/core/testing';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController, App, Config, Platform } from 'ionic-angular';
import { AlertControllerMock } from 'ionic-mocks';
import { Http, HttpModule, Headers, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ElephantServiceProvider } from '../elephant-service/elephant-service';

let fixture: ComponentFixture<AuthServiceProvider>;
let alertCtrl: AlertController;
let http: Http;
let elephantServiceProvider: ElephantServiceProvider;
let alertControllerMock: AlertControllerMock;
let alertControllerCreateMock: any;
let instance: any = null;
let authService: AuthServiceProvider = null;


describe('Service: auth-service', () => {

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [

        ],

        providers: [
          AuthServiceProvider,
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (MockBackend, options) => {
              return new Http(MockBackend, options);
            },
            deps: [MockBackend, BaseRequestOptions]
          },
          ElephantServiceProvider,
          {
            provide: AlertController, useFactory: () => AlertControllerMock.instance()
          },
          App,
          Config,
          Platform
        ],
        imports: [
          HttpModule
        ]
      }).compileComponents(); 
    })
  );

  beforeEach(() => {

  });

      it('Should be valid if because username and password given', inject([AuthServiceProvider, MockBackend], (authService, mockBackend) => {
        let result = authService.controlIdentifiant('foo', 'bar');
        expect(result).toBeTruthy();
      }));
      it('Should be invalid if because username is not given', inject([AuthServiceProvider, MockBackend, AlertController], (authService, mockBackend, alertCtrl) => {
        let result = authService.controlIdentifiant('', 'bar');
        expect(result).toBeFalsy();
      }));
      it('Should be invalid if because password is not given', inject([AuthServiceProvider, MockBackend, AlertController], (authService, mockBackend, alertCtrl) => {
        let result = authService.controlIdentifiant('foo', '');
        expect(result).toBeFalsy();
      }));
});
