import React,{Component} from 'react'
import "./Scenario.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export default class EventCalendar extends Component{

    render(){
        
        return(
            this.props.showCal ?
                <div>

                <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin , timeGridPlugin]}
                views = {{
                 agendaThreeDay: {
                      type: 'agenda',
                      duration: { days: 3 },
                      buttonText: '3 day'
                 }
                }}
                selectable
                initialView = 'agendaThreeDay'
                headerToolbar={{
                    center: 'dayGridMonth,agendaThreeDay,timeGridDay new',
                  }}
                events={[
                    //event code here
                    { title: 'added staff here', date: '2022-03-10' }
                ]}
                />
                </div>
            :
            null

        )

    }
    

}