import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneCause } from "../../services/causes";

export default function EventDashboard() {
  // const [redirect, setRedirect] = useState(false);
  const [causeById, setCauseById] = useState([]);
  let { id } = useParams();


  useEffect(() => {
    const fetchCauseEvents = async () => {
      const causeEvents = await getOneCause(id);
      setCauseById(causeEvents);
    };
    fetchCauseEvents();
    console.log(id)
  }, [id]);

  return (
    <div>
      <h3>Events</h3>
      {causeById.length !== 0 && causeById.events.map((event) => (
        <div key={event.id}>
          <Link to={`/events/${event.id}`}>
            <p>{event.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
