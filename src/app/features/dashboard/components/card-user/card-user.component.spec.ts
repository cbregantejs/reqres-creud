import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CardUserComponent } from './card-user.component';

describe('CardUserComponent', () => {
  let component: CardUserComponent;
  let fixture: ComponentFixture<CardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserComponent ],
      imports: [MatDialogModule,HttpClientModule,MatSnackBarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectUser', () => {
    fixture.detectChanges();
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.selectUser()).toHaveBeenCalledOnceWith
  });

});
