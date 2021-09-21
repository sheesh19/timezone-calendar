import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
// import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

export const initFullCalendar = () => {
    const calendarEl = document.querySelector('.js-calendar');
    let draggableEl = document.querySelector('.js-draggable');

    if (calendarEl) {
        let calendar = new Calendar(calendarEl, {
          timeZone: 'UTC',
          plugins: [ timeGridPlugin, interactionPlugin ],
          droppable: true,
          validRange: {
            start: calendarEl.dataset.eventStart,
            end: calendarEl.dataset.eventEnd
          },
          initialView: 'timeGridWeek',
          selectable: true,

          events: JSON.parse(calendarEl.dataset.timeslots)

        });


        calendar.render();
        new Draggable(draggableEl);
    }
}

