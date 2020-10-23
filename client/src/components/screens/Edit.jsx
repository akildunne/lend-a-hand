import React, { useState, useEffect } from "react";
import { getOneEvent, putEvent } from "../../services/events";
import { useParams, useHistory, Redirect } from "react-router-dom";
import BackButton from "../shared/BackButton";
import styled from "styled-components";

const BackDiv = styled.div`
  display: flex;
  padding-left: 36px;
  margin-top: 20px;
`;

export default function Edit(props) {
  const [redirect, setRedirect] = useState(false);
  const [isUpdated, setUpdated] = useState(false);
  const [event, setEvent] = useState({
    name: "",
    reason: "",
    location: "",
    age_group: "",
  });

  const history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    const fetchEvent = async (id) => {
      const eventItem = await getOneEvent(id);
      setEvent(eventItem);
    };
    fetchEvent(id);
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

  const handleSubmit = async (id, formData) => {
    const updated = await putEvent(id, formData);
    setUpdated(updated);
    history.push(`/events/${event.id}`)
  };

  const goBack = (e) => {
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to={`/events/${event.id}`} />;
  }

  if (isUpdated) {
    return <Redirect to={`/events`} />;
  }

  return (
    <div>
      <BackDiv>
        <BackButton onClick={(e) => goBack()}></BackButton>
      </BackDiv>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(id, event)
      }}>
        <h3>Edit Event</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={event.name}
            autoFocus
            onChange={handleChange}
          />
        </label>
        <label>
          Reason:
          <input
            type="text"
            name="reason"
            value={event.reason}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={event.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Age Group:
          <input
            type="text"
            name="age_group"
            value={event.age_group}
            onChange={handleChange}
          />
        </label>
        <button>Save</button>
      </form>
    </div>
  );
}
