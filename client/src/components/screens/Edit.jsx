import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Edit(props) {
  const [formData, setFormData] = useState({
    name: "",
    reason: "",
    location: "",
    age_group: "",
  })
  const { handleEdit, events } = props;
  const { id } = useParams();

  // Edit is almost identical to create but we prefill the formData
  useEffect(() => {
    const prefillFormData = () => {
      // We already have the food info that we need in our list of foods
      // we can use ".find" to select the single food from the list by its id
      const { name } = events.find(event => event.id === Number(id));
      setFormData({ name });
    }
    // in react, child component will finish loading before the parents
    // as a result, this component will render before the have our foods list
    // we conditionally run "prefillFormData" based on if there are foods in our list
    if (events.length) {
      prefillFormData()
    }
    // additionally we put "foods" in our array to watch for changes
    // when "foods" updates, we will rerun our "useEffect" function
  }, [events, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleEdit(id, formData);
    }}>
      <h3>Edit Event</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Reason:
        <input
          type="text"
          name='reason'
          value={formData.reason}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name='location'
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <label>
        Age Group:
        <input
          type="text"
          name='age group'
          value={formData.age_group}
          onChange={handleChange}
        />
      </label>
      <button>Save</button>
    </form>
  )
}