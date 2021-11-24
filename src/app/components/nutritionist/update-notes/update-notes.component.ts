import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.css']
})
export class UpdateNotesComponent implements OnInit {

  appointmentId: number = 0;
  appointment: Appointment = new Appointment();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private appointmentService : AppointmentService) { }

  ngOnInit(): void {
    this.appointmentId = this.route.snapshot.params['id'];
    this.appointmentService.getAppointmentById(this.appointmentId)
    .subscribe(datos=>{
      console.log(datos)
      this.appointment = datos;
    }, error=>console.log(error));
  }

  updateNotes(appointment: Appointment){
    this.appointmentService.updateAppointmentNotes(this.appointmentId, appointment, appointment.nutritionistNotes)
    .subscribe(datos=>{
      console.log(datos)
    }, error=>console.log(error));
    this.appointment = new Appointment();
    this.return(appointment);
  }

  return(appointment: Appointment){
    this.router.navigate(['view-notes', appointment.id])
  }

}
