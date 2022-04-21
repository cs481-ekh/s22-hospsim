import React,{Component} from 'react'
import "./Scenario.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

    

    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
      
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          headerToolbar: {
            center: 'addEventButton'
          },
          customButtons: {
            addEventButton: {
              text: 'add event...',
              click: function() {
                var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                var date = new Date(dateStr + 'T00:00:00'); // will be in local time
      
                if (!isNaN(date.valueOf())) { // valid?
                  calendar.addEvent({
                    title: 'dynamic event',
                    start: date,
                    allDay: true
                  });
                  alert('Great. Now, update your database...');
                } else {
                  alert('Invalid date.');
                }
              }
            }
          }
        });
      
        calendar.render();
      });
