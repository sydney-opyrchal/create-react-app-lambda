
import "@fullcalendar/daygrid/main.css";  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  
import React, { Component } from 'react' 
import './Calendarr.css'

 
const events = [{ title: "Today", date: new Date() },{ title: "Softball", date: '2021-04-20'},{ title: "Soccer", date: '2021-04-27'},{ title: "Outdoor Workout", date: '2021-04-22'},{ title: "Hang with the bros", date: '2021-04-30'},{ title: "Softball", date: '2021-05-04'},{ title: "Outdoor Workout", date: '2021-05-06'},{ title: "Soccer", date: '2021-05-11'}];  
export class TheCalendar extends Component {  
    render() {  
        return (  
            <div className="container">  
                <div className="row title" style={{ marginTop: "20px" }} >  
                    <div class="col-sm-12 btn btn-info">  
                        Event Calendar  
               </div>  
                </div>  
                <FullCalendar  
                    defaultView="dayGridMonth"  
                    plugins={[dayGridPlugin]}  
                    events={events}  
                />  
            </div>  
        )  
    }  
}



export default TheCalendar  