import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneEvent } from "../../services/events";

export default function EventCard() {
  // const [redirect, setRedirect] = useState(false);
  const [event, setEvent] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const eventItem = await getOneEvent(id);
      console.log(eventItem);
      setEvent(eventItem);
    };
    fetchEvent();
  }, [id]);

  return (
    <div>
      <div>
        <h3>{event.name}</h3>
        <p key={event.id}>{event.reason}</p>
        <p>{event.location}</p>
        <p>{event.age_group}+</p>
      </div>
      <Link to={`/events/edit/:id`}>
        <div>Edit</div>
      </Link>
    </div>
  );
}
