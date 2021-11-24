import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { Nutritionist } from 'src/app/model/nutritionist';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-appointment-history-nutritionist',
  templateUrl: './appointment-history-nutritionist.component.html',
  styleUrls: ['./appointment-history-nutritionist.component.css']
})
export class AppointmentHistoryNutritionistComponent implements OnInit {

  nutritionist_id: number = 0;
  appointments: Appointment[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.nutritionist_id = this.route.snapshot.params['id'];
    this.loadDataAppointments();
  }

  loadDataAppointments(){
    this.appointmentService.getAppointmentByNutritionist(this.nutritionist_id)
    .subscribe(appointments=>this.appointments=appointments);
  }

  viewDiet(appointment: Appointment){
    this.router.navigate(['list-diet-nutritionist', appointment.id])
  }

  viewNotes(appointment: Appointment){
    this.router.navigate(['view-notes', appointment.id])
  }

  return(nutritionist_id: number){
    this.router.navigate(['menu-nutritionist', nutritionist_id])
  }
  
}
