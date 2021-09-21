import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable

export const initFullCalendar = () => {
    const calendarEl = document.querySelector('.js-calendar');

    if (calendarEl) {
        let calendar = new Calendar(calendarEl, {
          timeZone: 'UTC',
          plugins: [ timeGridPlugin ],
          validRange: {
            start: calendarEl.dataset.eventStart,
            end: calendarEl.dataset.eventEnd
          },
          initialView: 'timeGridWeek',
          selectable: true,

          events: JSON.parse(calendarEl.dataset.timeslots),

          eventClick: function(info) {
            alert('Event: ' + info.event.title);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('View: ' + info.view.type);

            // change the border color just for fun
            info.el.style.borderColor = 'red';
          }
        });

        calendar.render();
    }
}

