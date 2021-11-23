import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {

  appointment_id: number = 0;
  appointment: Appointment = new Appointment();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointment_id = this.route.snapshot.params['id'];
    this.appointmentService.getAppointmentById(this.appointment_id)
      .subscribe(datos=>{
        console.log(datos)
        this.appointment = datos;
      }, error=>console.log(error));
  }

  updateNotes(appointment: Appointment){
    this.router.navigate(['update-notes', appointment.id])
  }

  return(appointment: Appointment){
    this.router.navigate(['appointments-history-nutritionist', appointment.nutritionist.id])
  }
}
