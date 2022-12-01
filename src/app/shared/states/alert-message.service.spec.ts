import { TestBed } from "@angular/core/testing";
import { AlertMessageService } from "./alert-message.service";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


describe('AlertMessageService', () => {
    let service: AlertMessageService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [AlertMessageService],
            imports: [MatSnackBarModule,BrowserAnimationsModule]
        });
        service = TestBed.inject(AlertMessageService);
    });    
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('open', () => {
        service.open('test', 'success');
        const snackingDiv = document.querySelector('snack-bar-container');    
        expect(snackingDiv).toBeTruthy();
    });
});