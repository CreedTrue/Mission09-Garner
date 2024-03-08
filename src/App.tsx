import React from "react";
import "./App.css";
import data from "./CollegeBasketballTeams.json";

// this is the interface for the team props
interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// #1 this function welcomes the user to the page
function PageName() {
  return (
    <div>
      <h1>We Proudly Present!</h1>
      <h2>The Marvelous Teams of March Madness!</h2>
    </div>
  );
}

// #2 this component creates a card for each team
class TeamCard extends React.Component<TeamProps> {
  render() {
    return (
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + "/marchmadness.jpg"}
          className="card-img-top"
          alt="March Madness logo"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.school}</h5>
          <p className="card-text">Mascot: {this.props.name}</p>
          <p className="card-text">
            Location: {this.props.city}, {this.props.state}
          </p>
        </div>
      </div>
    );
  }
}

// this function creates a list of all the teams
function TeamList() {
  return (
    <div>
      <div className="row">
        {data.teams.map((team) => (
          <div className="col-md-4">
            <TeamCard {...team} />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ margin: "0 auto", maxWidth: "1000px" }}>
      <PageName />
      <TeamList />
    </div>
  );
}

export default App;
