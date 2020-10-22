import React, { useState, useEffect } from 'react'
import { getOneEvent, putEvent } from "../../services/events";
import { useParams, Redirect } from "react-router-dom";

export default function Edit(props) {
  // const [redirect, setRedirect] = useState(false);
  const [event, setEvent] = useState({
    name: "",
    reason: "",
    location: "",
    age_group: "",
  })

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const eventItem = await getOneEvent(id);
      // console.log(eventItem)
      setEvent(eventItem);
    };
    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const target = e.target;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { id } = props.match.params;
    const updated = await putEvent(id);
    setUpdated(updated);
  }
  
  if (isUpdated) {
    return <Redirect to={`/events`} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Event</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={event.name}
          autoFocus
          onChange={handleChange}
        />
      </label>
      <label>
        Reason:
        <input
          type="text"
          name='reason'
          value={event.reason}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name='location'
          value={event.location}
          onChange={handleChange}
        />
      </label>
      <label>
        Age Group:
        <input
          type="text"
          name='age_group'
          value={event.age_group}
          onChange={handleChange}
        />
      </label>
      <button>Save</button>
    </form>
  )
}
