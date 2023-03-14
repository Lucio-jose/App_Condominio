import React from "react";
import { useState } from "react/cjs/react.development";

import { Container } from "../../Pages/admin/components/Confirm/styles";

function Error({ error, setError }) {
  const [flex, setFlex] = useState("flex");
  return (
    <Container flex={flex}>
      <div>
        <h3> Error </h3>

        <span> {error} </span>
        <form>
          <p>
            <button
              className="okay"
              onClick={(e) => {
                e.preventDefault();
                setError("");
                setFlex("none");
              }}
            >
              Okay
            </button>
          </p>
        </form>
      </div>
    </Container>
  );
}

export default Error;
