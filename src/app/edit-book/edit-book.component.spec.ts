import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookComponent } from './edit-book.component';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { EmployeeService } from '../services/employee.service';
// import { Employee } from '../common/employee';
// import { AttributeService } from '../services/attribute.service';
// import { Attribute } from '../common/attribute';
// import { Router } from '@angular/router';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { dateBeforeToday } from '../shared/custom-validators';

// @Component({
//   selector: 'app-employee-detail',
//   templateUrl: './employee-detail.component.html',
//   styleUrls: ['./employee-detail.component.css']
// })
// export class EmployeeDetailComponent implements OnInit {

//   employeeFormGroup: FormGroup;

//   submitted: boolean = false;

//   employee: Employee;
//   employees: Employee[];
//   attributes: Attribute[];

//   constructor(
//     private employeeService: EmployeeService,
//     private attributeService: AttributeService,
//     private formBuilder: FormBuilder,
//     private activatedRoute: ActivatedRoute,
//     private router: Router) {
//   }

//   getEmployeeDetail() {
//     let id = this.activatedRoute.snapshot.paramMap.get('id');
//     if (id === 'add') {
//       this.employee = new Employee();
      
//       this.buildEmployeeForm();
//     }
//     else {
//       this.employeeService.getEmployeeDetail(id)
//         .subscribe(emp => {
//           this.employee = emp;
//           this.buildEmployeeForm();
//         });
//     }
//   }
//   listEmployees() {
//     this.employeeService.getEmployeeList().subscribe(
//       data => {
//         this.employees = data;
//       }
//     )
//   }
//   listAttributes() {
//     this.attributeService.getAttributeList().subscribe(
//       data => {
//         this.attributes = data;
//       }
//     )
//   }
//   deleteEmployeeClicked() {
//     if (this.employee.id != '') {
//       this.employeeService.deleteEmployee(this.employee.id).subscribe(success => this.router.navigate(['employee']));
//     }
//   }

//   supervisorChanged(selectedId: string) {
//     this.employee.supervisor = selectedId;
//   }

//   ngOnInit(): void {
//     this.listAttributes();
//     this.listEmployees();
//     this.getEmployeeDetail();
//   }

//   //add validation for NOT NULL columns
//   //also a custom validator for date of birth
//   buildEmployeeForm() {
//     this.employeeFormGroup = this.formBuilder.group({
//       employee: this.formBuilder.group({
//         id: [this.employee.id],
//         name: new FormControl(this.employee.name, [ Validators.required, Validators.minLength(2)]),
//         dateOfHire: [this.employee.dateOfHire, Validators.required],
//         supervisor: [this.employee.supervisor],
//         attributeList: [this.employee.attributeList],
//         employeeDetail: this.formBuilder.group({
//           dateOfBirth: new FormControl(this.employee.emloyeeDetail.dateOfBirth, [ dateBeforeToday]),
//           hasCar: [this.employee.emloyeeDetail.hasCar],
//           address: [this.employee.emloyeeDetail.address],
//         })
//       })
//     })
//   }

//   get name() { return this.employeeFormGroup.get('employee').get('name'); }
//   get dateOfHire() { return this.employeeFormGroup.get('employee').get('dateOfHire'); }
//   get dateOfBirth() { return this.employeeFormGroup.get('employee').get('employeeDetail').get('dateOfBirth'); }

//   onSubmit() {
//     this.submitted = true;

//     if (this.employeeFormGroup.invalid) {
//       return;
//     }

//     if (this.employeeFormGroup.get('employee').value.id != '') {
//       this.employeeService.updateEmployee(this.employeeFormGroup.get('employee').value)
//         .subscribe(emp => {
//           if (emp) {
//             this.router.navigate(['employee'])
//           }
//           else { alert("Name and Date of hire are required") }
//         });
//     }
//     else {
//       this.employeeService.addEmployee(this.employeeFormGroup.get('employee').value)
//         .subscribe(emp => {
//           if (emp) {
//             this.router.navigate(['employee'])
//           }
//           else { alert("Name and Date of hire are required") }
//         });
//     }

//   }

// }
