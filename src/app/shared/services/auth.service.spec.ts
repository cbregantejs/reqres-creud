import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { of } from "rxjs";

describe('AuthService', () => {
    let service: AuthService; 
    let router: Router;
    let location: Location;
    let httpclientspy: { post: jasmine.Spy };

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [AuthService],
            imports: [HttpClientModule,RouterTestingModule]
        });
        service = TestBed.inject(AuthService);
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        router.initialNavigation();
        spyOn(window.localStorage, 'getItem').and.callFake(function() {
			return 'sadwd3d33d3d3';
		});
        spyOn(window.localStorage, 'setItem').and.callFake(function() {
			return 'sadwd3d33d3d3';
		});
        httpclientspy = jasmine.createSpyObj('HttpClient', ['post']);
        service = new AuthService(httpclientspy as any, router);
    });    
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getTokenStorage', () => {
        service.getTokenStorage();
        expect( window.localStorage.getItem ).toHaveBeenCalled();
    });

    it('setTokenStorage', () => {
        service.setTokenStorage('xwsdfdfdsf');
        expect( window.localStorage.setItem ).toHaveBeenCalled();
    });

    it('setEmailStorage', () => {
        service.setEmailStorage('test@gmail.com');
        expect( window.localStorage.setItem ).toHaveBeenCalled();
    });

    it('logout', () => {
        service.logout();
        const location: Location = TestBed.inject(Location);
        router.navigate([""]).then(() => {
            expect(location.path()).toBe("/");
        });
    });
     
    it('isLogged', () => {
        const isLogged = service.isLogged();
        expect(isLogged).toBeTrue();
    });

    it('login', (done: DoneFn) => {
        const mockCredentials = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
        const mockResponse = {
            "token": "QpwL5tke4Pnpja7X4"
        }
        httpclientspy.post.and.returnValue(of(mockResponse));
        const { email, password } = mockCredentials;
        service.login({ email, password }).subscribe((response) => {
            expect(response).toEqual(mockResponse);
            done();
        });
    });
});