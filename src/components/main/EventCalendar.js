import React,{Component} from 'react'
import "./Scenario.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class EventCalendar extends Component{

    render(){
        
        return(
            this.props.showCal ?
                <div>

                <FullCalendar

                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin ]}
                events={this.props.calEvents}
                />
                </div>
            :
            null

        )

    }

}