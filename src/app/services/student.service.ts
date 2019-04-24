import { Injectable } from '@angular/core';
import { StudentModel } from '../models/StudentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studenten: any[];

  constructor() { }
}
