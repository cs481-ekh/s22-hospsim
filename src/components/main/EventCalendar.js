import React,{Component} from 'react'
import '../EventCalendar.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class EventCalendar extends Component{

    render(){
        return(
            <FullCalendar

            defaultView="dayGridMonth"
            plugins={[ dayGridPlugin ]}
            events={[
                //event code here
                { title: 'added staff here', date: '2022-03-10' }
            ]}
            />
        )

    }

}