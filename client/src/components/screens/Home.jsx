import React, { useEffect, useState } from "react";
import { Switch, Link } from "react-router-dom";
import { getAllCauses } from "../../services/causes";

export default function Home() {
  // const [redirect, setRedirect] = useState(false);
  const [allCauses, setAllCauses] = useState([]);

  useEffect(() => {
    const fetchCauses = async () => {
      const causes = await getAllCauses();
      setAllCauses(causes);
    };
    fetchCauses();
  }, []);

  return (
    <div>
      <Link to="/login">
        <div>Login</div>
      </Link>
      <div>
        <h3>Organizations to Support</h3>
        {allCauses.map((cause) => (
          <div key={cause.id}>
            <Link to={`/causes/${cause.id}`}>
              <p>{cause.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
