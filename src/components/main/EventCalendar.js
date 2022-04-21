import React,{Component} from 'react'
import "./Scenario.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
export default class EventCalendar extends Component{

    
    onTrigger = (event) => {
        const events = this.props.eventsArry;
        // console.log(event)
        // console.log(events)
        let list = []
        for (let index = 0; index < events.length; index++) {
            if(event.event.id !== events[index].id){
                list.push(events[index])
            }
            
        }
        this.props.parentCallback(list);
    }
    
    render(){
        
        
        return(
            this.props.showCal ?
                <div>

                <FullCalendar

                plugins={[ dayGridPlugin, interactionPlugin , timeGridPlugin]}

                eventClick= {this.onTrigger}
              
                //selectable
                initialView = 'twoWeekView'
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