import React,{Component} from 'react'
import "./Scenario.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class EventCalendar extends Component{

    getStaff = () => {
        let staffList = [];
        staffList = this.props.staffs;
        var eventsArr = [];

        staffList.forEach(element => {
            if (element.day == "week") {
                eventsArr.push({title: element.shift, date: '2022-03-7'})
                eventsArr.push({title: element.shift, date: '2022-03-8'})
                eventsArr.push({title: element.shift, date: '2022-03-9'})
                eventsArr.push({title: element.shift, date: '2022-03-10'})
                eventsArr.push({title: element.shift, date: '2022-03-11'})
            }else{
                eventsArr.push({title: element.shift, date: '2022-03-12'})
                eventsArr.push({title: element.shift, date: '2022-03-13'})
            }
            
        });

        return eventsArr;
    }

    render(){
        
        return(
            this.props.showCal ?
                <div>

                <FullCalendar

                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin ]}
                events={this.getStaff}
                />
                </div>
            :
            null

        )

    }

}