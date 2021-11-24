import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-pending-appointments',
  templateUrl: './pending-appointments.component.html',
  styleUrls: ['./pending-appointments.component.css']
})
export class PendingAppointmentsComponent implements OnInit {

  nutritionist_id: number = 0;
  appointments: Appointment[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.nutritionist_id = this.route.snapshot.params['id']
    this.loadDataAppointments();
  }

  loadDataAppointments(){
    this.appointmentService.getAppointmentByNutritionist(this.nutritionist_id)
    .subscribe(appointments=>this.appointments=appointments);
  }
  
  return(){
    this.router.navigate(['menu-nutritionist', this.nutritionist_id]);
  }
  
}
