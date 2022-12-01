import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormUserComponent } from './form-user.component';
import { By } from '@angular/platform-browser';

describe('FormUserComponent', () => {
  let component: FormUserComponent;
  let fixture: ComponentFixture<FormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserComponent ],
      imports: [
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        MatSnackBarModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario invalido', () => {
    const fixture = TestBed.createComponent(FormUserComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const job = app.formUser.controls['job'];
    job.setValue('leader');
    expect(app.formUser.invalid).toBeTrue();
  });

  it('formulario valido', () => {
    const fixture = TestBed.createComponent(FormUserComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const job = app.formUser.controls['job'];
    job.setValue('leader');
    const name = app.formUser.controls['name'];
    name.setValue('Jhon');
    expect(app.formUser.invalid).toBeFalse();
  });

  it('submit form', () => {
    const fixture = TestBed.createComponent(FormUserComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const job = app.formUser.controls['job'];
    job.setValue('leader');
    const name = app.formUser.controls['name'];
    name.setValue('Jhon');

    const btnElement = fixture.debugElement.query(By.css('.btn-submit'));
    btnElement.nativeElement.click();
    console.log(btnElement.nativeElement)
    // expect(app.formUser.invalid).toBeFalse();
  });




});
