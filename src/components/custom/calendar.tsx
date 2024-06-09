"use client";
import { Card, CardContent } from "@/components/ui/card";
import { addNewCalendarEvent } from "@/firebase/requests/calendar/add-new-calendar-event";
import { getCalendarEvents } from "@/firebase/requests/calendar/get-calendar-events";
import { Event } from "@/interface/calendar-events";
import styled from "@emotion/styled";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useState } from "react";

export const StyleWrapper = styled.div`
  .fc .fc-scrollgrid-section-sticky > * {
    background: #fff0;
  }

  .fc-today-button {
    text-transform: capitalize;
  }

  .fc-h-event .fc-event-title {
    text-overflow: ellipsis;
  }
`;

export default function Calendar() {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchData = async () => {
    const itemsData = await getCalendarEvents();
    setEvents(itemsData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDateClick = async (arg: { dateStr: any }) => {
    const text = `Enter what event to save on date ${arg.dateStr}?`;
    const eventPrompt = prompt(text);
    if (eventPrompt) {
      const data = {
        title: eventPrompt,
        date: arg.dateStr,
        type: "important",
      };
      const { result, error } = await addNewCalendarEvent(
        "calendarEvents",
        data
      );

      if (error) {
        return console.log(error);
      } else {
        fetchData();
      }
    }
  };

  const handleEventClick = (info: { event: { title: string } }) => {
    alert("Event: " + info.event.title);
  };

  return (
    <div>
      <Card className="xl:col-span-2">
        <CardContent className="pt-6">
          <StyleWrapper>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              height={"auto"}
              dateClick={handleDateClick}
              eventClick={handleEventClick}
            />
          </StyleWrapper>
        </CardContent>
      </Card>
    </div>
  );
}
