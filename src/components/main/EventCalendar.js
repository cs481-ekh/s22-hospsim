
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

    //Duplicate task
    
  //   function event(){
  //     document.addEventListener('DOMContentLoaded', function() {
  //         var calendarEl = document.getElementById('calendar');
      
  //         var calendar = new FullCalendar.Calendar(calendarEl, {
  //           initialView: 'dayGridMonth',
  //           initialDate: '2022-03-07',
  //           headerToolbar: {
  //             left: 'prev,next today',
  //             center: 'title',
  //             right: 'dayGridMonth,timeGridWeek,timeGridDay'
  //           },
  //           events: [
  //             {
  //               title: 'All Day Event',
  //               start: '2022-03-01'
  //             },
  //             {
  //               title: 'Long Event',
  //               start: '2022-03-07',
  //               end: '2022-03-10'
  //             },
  //             {
  //               groupId: '999',
  //               title: 'Repeating Event',
  //               start: '2022-03-09T16:00:00'
  //             },
  //             {
  //               groupId: '999',
  //               title: 'Repeating Event',
  //               start: '2022-03-16T16:00:00'
  //             },
  //             {
  //               title: 'Conference',
  //               start: '2022-03-11',
  //               end: '2022-03-13'
  //             },
  //             {
  //               title: 'Meeting',
  //               start: '2022-03-12T10:30:00',
  //               end: '2022-03-12T12:30:00'
  //             },
  //             {
  //               title: 'Lunch',
  //               start: '2022-03-12T12:00:00'
  //             },
  //             {
  //               title: 'Meeting',
  //               start: '2022-03-12T14:30:00'
  //             },
  //             {
  //               title: 'Birthday Party',
  //               start: '2022-03-13T07:00:00'
  //             },
  //             {
  //               title: 'Click for Google',
  //               url: 'http://google.com/',
  //               start: '2022-03-28'
  //             }
  //           ]
  //         });
      
  //         calendar.render();
  //      });


  // }
    

}