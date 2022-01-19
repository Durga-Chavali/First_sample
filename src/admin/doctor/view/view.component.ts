import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/admin/services/doctor.service';

@Component({
  selector: 'doctor-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {

  model : any = {
    acID : ''
  }

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  onAddDocSubmit(){
    let _doctor = this.model.acID
    console.log(_doctor);
    this.doctorService.addDoctorRole(_doctor)
  }

}
