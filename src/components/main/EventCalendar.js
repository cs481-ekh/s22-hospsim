import React,{Component} from 'react'
import "./Scenario.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default class EventCalendar extends Component{

    render(){
        console.log("rendered cal")
        
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
                         type: 'timeGridWeek',
                         duration: { week: 2 },
                         buttonText: '2 weeks'
                    }
                   }}
                events={this.props.eventsArry}
                />
                </div>
            :
            null

        )

    }
    

}