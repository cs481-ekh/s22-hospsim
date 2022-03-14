import React,{Component} from 'react'
import "./Scenario.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default class EventCalendar extends Component{

    render(){
        
        return(
            this.props.showCal ?
                <div>

                <FullCalendar

                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                headerToolbar={{
                    end: 'timeGridWeek,prev,next',
                }}
                initialView='timeGridWeek'
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