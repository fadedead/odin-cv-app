import { useState } from "react";
import { DataControlButton } from "./Buttons";
import { Card } from "./Card";

function EducationalInformation() {
  let infoObject = {
    school: "",
    title: "",
    date: "",
  };

  let [educationalInfo, setEducationalInfo] = useState(infoObject);
  let [pageState, setPageState] = useState(0);

  if (pageState == 0) {
    return (
      <Card>
        <h5>Education</h5>
        <p>Name of institution:</p>
        <input
          onChange={(e) => {
            setEducationalInfo({
              ...educationalInfo,
              school: e.target.value,
            });
          }}
          placeholder="Enter name of the institute"
          value={educationalInfo.school}
        />
        <p>Degree:</p>
        <input
          onChange={(e) => {
            setEducationalInfo({
              ...educationalInfo,
              title: e.target.value,
            });
          }}
          placeholder="Enter name of your degree"
          value={educationalInfo.title}
        />
        <p>Date:</p>
        <input
          type="date"
          onChange={(e) => {
            setEducationalInfo({
              ...educationalInfo,
              date: e.target.value,
            });
          }}
          placeholder="Enter date of graduation"
          value={educationalInfo.date}
        />

        <DataControlButton setPageState={setPageState} />
      </Card>
    );
  } else {
    return (
      <Card>
        <h5>Educational information</h5>
        <p>Institution: {educationalInfo.school}</p>
        <p>Degree: {educationalInfo.title}</p>
        <p>Graduation: {educationalInfo.date}</p>
        <DataControlButton setPageState={setPageState} />
      </Card>
    );
  }
}

export { EducationalInformation };
