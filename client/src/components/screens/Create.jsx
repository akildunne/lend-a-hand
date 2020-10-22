import React, { useState } from 'react'
import { postEvent } from "../../services/events";
import { Redirect } from "react-router-dom";

export default function Create() {
  const [isCreated, setCreated] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: "",
    reason: "",
    location: "",
    age_group: 0,
  })

  const handleChange = (e) => {
    const target = e.target;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newEvent)
    const created = await postEvent(newEvent);
    setCreated({ created });
  }
  
  if (isCreated) {
    return <Redirect to={`/events`} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Event</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={newEvent.name}
          autoFocus
          onChange={handleChange}
        />
      </label>
      <label>
        Reason:
        <input
          type="text"
          name='reason'
          value={newEvent.reason}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name='location'
          value={newEvent.location}
          onChange={handleChange}
        />
      </label>
      <label>
        Age Group:
        <input
          type="number"
          name='age_group'
          value={newEvent.age_group}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
}
