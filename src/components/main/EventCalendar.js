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
              
                //selectable
                initialView = 'dayGridMonth'
                headerToolbar={{
                    end: 'dayGridMonth,twoWeekView,timeGridDay,prev,next',
                  }}
                views = {{
                    twoWeekView: {
                         type: 'timeGridDay',
                         duration: { days: 14 },
                         buttonText: '2 Weeks'
                    }
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