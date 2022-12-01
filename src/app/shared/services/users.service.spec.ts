import { TestBed } from "@angular/core/testing";
import { UserService } from "./users.service";
import { HttpClientModule } from '@angular/common/http';
import { of } from "rxjs";

describe('UserService', () => {
    let service: UserService; 
    let httpclientspy: { post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy, get: jasmine.Spy };
    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [UserService],
            imports: [HttpClientModule]
        });
        service = TestBed.inject(UserService);
        httpclientspy = jasmine.createSpyObj('HttpClient', ['post', 'put', 'delete', 'get']);
        service = new UserService(httpclientspy as any);
    });    
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('createUser', (done: DoneFn) => {
        const mockData = {
            "name": "morpheus",
            "job": "leader"
        }
        const mockResponse = {
            "name": "morpheus",
            "job": "leader",
            "id": "434",
            "createdAt": "2022-12-01T08:23:21.254Z"
        }
        httpclientspy.post.and.returnValue(of(mockResponse));
        const { name, job } = mockData;
        service.createUser({ name, job }).subscribe((res: any) => {
            expect(res).toEqual(mockResponse);
            done();
        });
    });

    it('updateUser', (done: DoneFn) => {
        const mockData = {
            "name": "morpheus",
            "job": "leader"
        }
        const mockResponse = {
            "name": "morpheus",
            "job": "zion resident",
            "updatedAt": "2022-12-01T08:27:39.734Z"
        }
        httpclientspy.put.and.returnValue(of(mockResponse));
        const { name, job } = mockData;
        service.updateUser(1, { name, job }).subscribe((res: any) => {
            expect(res).toEqual(mockResponse);
            done();
        });
    });

    it('deleteuser', (done: DoneFn) => {
        httpclientspy.delete.and.returnValue(of({}));
        service.deleteuser(1).subscribe((res: any) => {
            expect(res).toBeDefined();
            done();
        });
    });
});