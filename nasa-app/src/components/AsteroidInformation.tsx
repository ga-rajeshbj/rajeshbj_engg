import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Location } from "./Types";
function AsteroidInformation() {
  const location: Location = useLocation();

  const { nasa_jpl_url, is_potentially_hazardous_asteroid, name } =
    location.state;

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="text-success">Asteroid Details</h1>
      <Card className="mt-3" style={{ width: "45rem" }}>
        <Card.Body>
          <Card.Title className="text-primary">Name: {name}</Card.Title>
          <Card.Text className="text-secondary">
            nasa_jpl_url : {nasa_jpl_url}
          </Card.Text>
          <Card.Text data-testid="data-id" className="text-secondary">
            is_potentially_hazardous_asteroid:{" "}
            {is_potentially_hazardous_asteroid ? "Yes" : "No"}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AsteroidInformation;
