import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCauses } from "../../services/causes";

export default function Home(props) {
  // const [redirect, setRedirect] = useState(false);
  const [allCauses, setAllCauses] = useState([]);

  useEffect(() => {
    const fetchCauses = async () => {
      const causes = await getAllCauses();
      console.log(causes)
      setAllCauses(causes);
    };
    fetchCauses();
  }, []);

  return (
    <div>
      <div>
        <h3>Organizations to Support</h3>
        {allCauses.map((cause) => (
          <div key={cause.id}>
            <Link to={`/causes/${cause.id}`}>
              <img src={cause.image}></img>
              <p>{cause.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
