import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEvents } from "../../services/events";

export default function EventDashboard() {
  // const [redirect, setRedirect] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents();
      setAllEvents(events);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h3>Events</h3>
      {allEvents.map((event) => (
        <div key={event.id}>
          <Link to={`/events/${event.id}`}>
            <p>{event.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
