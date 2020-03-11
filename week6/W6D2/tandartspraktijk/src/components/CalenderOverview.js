import React, { Component } from "react";
import { dentists } from "../data/employees";
import { patients } from "../data/patients";

export class CalenderOverview extends Component {
  constructor() {
    super();
    this.state = {
      dentists: dentists,
      patients: patients
    };
    const getRandomName = () => {
      const patient = patients[Math.floor(Math.random() * 50)];
      return `${patient.name} ${patient.surname}`;
    };

    // const getRandomTime = () => {
    //   let goodTime = false;
    //   let hour;
    //   while (goodTime === false) {
    //     hour = Math.floor(Math.random() * 24);
    //     if (hour > 7 && hour < 19) {
    //       goodTime = true;
    //     }
    //   }
    //   return `${hour}:00u`;
  }
  // const createDayOnCalendar = numAppointments => {
  //   const appointments = [];
  //   for (let i = 0; i < numAppointments; i++) {
  //     appointments.push(`
  //     <div class="appointment">
  //       <span class="time">${getRandomTime()}</span>
  //       <span class="patient">${getRandomName()}</span>
  //     </div>`);
  //   }
  //   return `<div class="day">${appointments.join("")}</div>`;
  // };

  // const createCalendarView = () => {
  //   const days = [];

  //   for (let i = 1; i < 28; i++) {
  //     if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
  //       continue;
  //     }
  //     days.push(createDayOnCalendar(5));
  //   }
  //   // document.querySelector(".calendarview .table").innerHTML = days.join("");
  // };
  // }
  render() {
    // console.log(this.state.dentists);
    // this.state.dentists.map(dentist => {
    //   console.log(dentist.name, dentist.surname);
    //   return dentist;
    // });

    return (
      <div>
        <div>
          <h5> calenderoverview </h5>
          {/* {this.state.dentists.map(dentist => {
            return dentist.name + " " + dentist.surname;
          })} */}
        </div>
        <div class="calendarview">
          <div class="header">
            <div>Maandag</div>
            <div>Dinsdag</div>
            <div>Woensdag</div>
            <div>Donderdag</div>
            <div>Vrijdag</div>
          </div>
          <div class="table">{this.getRandomName}</div>
        </div>
      </div>
    );
  }
}
export default CalenderOverview;

// const getRandomName = () => {
//   const person = names[Math.floor(Math.random() * 250)];
//   return `${person.name} ${person.surname}`;
// };

// const getRandomTime = () => {
//   let goodTime = false;
//   let hour;
//   while (goodTime === false) {
//     hour = Math.floor(Math.random() * 24);
//     if (hour > 7 && hour < 19) {
//       goodTime = true;
//     }
//   }
//   return `${hour}:00u`;
// };

// const createDayView = () => {
//   const appointments = [];

//   for (i = 0; i < 30; i++) {
//     appointments.push(`<li class="appointment">
//       <div class="time">${getRandomTime()}</div>
//       <div class="patient">Patiënt: ${getRandomName()}</div>
//       <div class="dentist">Tandarts: ${getRandomName()}</div>
//       <div class="assistant">Assistent: ${getRandomName()}</div>
//       </li>`);
//   }
//   document.querySelector(".dayview").innerHTML = appointments.join("");
// };

// const createDayOnCalendar = numAppointments => {
//   const appointments = [];
//   for (let i = 0; i < numAppointments; i++) {
//     appointments.push(`
//       <div class="appointment">
//         <span class="time">${getRandomTime()}</span>
//         <span class="patient">${getRandomName()}</span>
//       </div>`);
//   }
//   return `<div class="day">${appointments.join("")}</div>`;
// };

// const createCalendarView = () => {
//   const days = [];

//   for (let i = 1; i < 28; i++) {
//     if ([6, 7, 13, 14, 20, 21, 27, 28].includes(i)) {
//       continue;
//     }
//     days.push(createDayOnCalendar(5));
//   }
//   document.querySelector(".calendarview .table").innerHTML = days.join("");
// };

// const start = () => {
//   try {
//     createDayView();
//   } catch {}

//   try {
//     createCalendarView();
//   } catch {}
// };
