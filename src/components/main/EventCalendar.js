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
                // events={[
                // {title: "RNxDay12", start: "2022-03-18T00:00:00", textColor: "black", backgroundColor: this.props.bc[0]},
                // {title: "RNxNight12", start: "2022-03-18T01:00:00", textColor: "black", backgroundColor: this.props.bc[1]},
                // {title: "RNxday8", start: "2022-03-18T02:00:00", textColor: "black", backgroundColor: this.props.bc[2]},
                // {title: "RNxeven8", start: "2022-03-18T03:00:00", textColor: "black", backgroundColor: this.props.bc[3]},
                // {title: "RNxnight8", start: "2022-03-18T04:00:00", textColor: "black", backgroundColor: this.props.bc[4]},

                // {title: "LVNxDay12", start: "2022-03-19T00:00:00", textColor: "black", backgroundColor: this.props.bc[0]},
                // {title: "LVNxNight12", start: "2022-03-19T01:00:00", textColor: "black", backgroundColor: this.props.bc[1]},
                // {title: "LVNxxday8", start: "2022-03-19T02:00:00", textColor: "black", backgroundColor: this.props.bc[2]},
                // {title: "LVNxeven8", start: "2022-03-19T03:00:00", textColor: "black", backgroundColor: this.props.bc[3]},
                // {title: "LVNxnight8", start: "2022-03-19T04:00:00", textColor: "black", backgroundColor: this.props.bc[4]},

                // {title: "unxDay12", start: "2022-03-20T00:00:00", textColor: "black", backgroundColor: this.props.bc[0]},
                // {title: "unxNight12", start: "2022-03-20T01:00:00", textColor: "black", backgroundColor: this.props.bc[1]},
                // {title: "unxday8", start: "2022-03-20T02:00:00", textColor: "black", backgroundColor: this.props.bc[2]},
                // {title: "unxeven8", start: "2022-03-20T03:00:00", textColor: "black", backgroundColor: this.props.bc[3]},
                // {title: "unxnight8", start: "2022-03-20T04:00:00", textColor: "black", backgroundColor: this.props.bc[4]},

                // ]}
                events={this.props.eventsArry}

                />
                </div>
            :
            null

        )

    }
    

}