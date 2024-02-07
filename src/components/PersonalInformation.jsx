import { useState } from "react";
import { DataControlButton } from "./Buttons";
import { Card } from "./Card";

function PersonalInformation() {
  let infoObject = {
    name: "",
    email: "",
    phone: "",
  };

  let [personalInfo, setPersonalInfo] = useState(infoObject);
  let [pageState, setPageState] = useState(0);

  if (pageState == 0) {
    return (
      <Card>
        <h5>General information</h5>
        <p>Name:</p>
        <input
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              name: e.target.value,
            });
          }}
          placeholder="Enter your name"
          value={personalInfo.name}
        />
        <p>Email:</p>
        <input
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              email: e.target.value,
            });
          }}
          placeholder="Enter your email"
          value={personalInfo.email}
        />
        <p>Phone:</p>
        <input
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              phone: e.target.value,
            });
          }}
          placeholder="Enter your phone number"
          value={personalInfo.phone}
        />

        <DataControlButton setPageState={setPageState} />
      </Card>
    );
  } else {
    return (
      <Card>
        <h5>General information</h5>
        <p>Name: {personalInfo.name}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
        <DataControlButton setPageState={setPageState} />
      </Card>
    );
  }
}

export { PersonalInformation };
