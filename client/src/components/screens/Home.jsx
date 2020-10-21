import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <h1>LEND A HAND <i class="fas fa-heart"></i> <i class="fas fa-hands"></i> </h1>
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
