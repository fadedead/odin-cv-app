import { useState } from "react";
import { DataControlButton } from "./Buttons";
import { Card } from "./Card";

function ExperienceInformation() {
  let infoObject = {
    company: "",
    position: "",
    reponsibilities: "",
    dateFrom: "",
    dateTo: "",
    isWorking: false,
  };

  let [experienceInfo, setExperienceInfo] = useState(infoObject);
  let [pageState, setPageState] = useState(0);

  if (pageState == 0) {
    return (
      <Card>
        <h5>Work experience</h5>
        <p>Name of company:</p>
        <input
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              company: e.target.value,
            });
          }}
          placeholder="Enter name of the recent company"
          value={experienceInfo.company}
        />

        <p>Role:</p>
        <input
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              position: e.target.value,
            });
          }}
          placeholder="Enter name of the role"
          value={experienceInfo.position}
        />

        <p>Responsibilities:</p>
        <textarea
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              reponsibilities: e.target.value,
            });
          }}
          placeholder="Enter responsibilities of current position"
          value={experienceInfo.reponsibilities}
        />

        <p>Start date:</p>
        <input
          type="date"
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              dateFrom: e.target.value,
            });
          }}
          placeholder="Starting date of the experience"
          value={experienceInfo.dateFrom}
        />

        <p>End date:</p>
        <input
          type="date"
          onChange={(e) => {
            setExperienceInfo({
              ...experienceInfo,
              dateTo: e.target.value,
            });
          }}
          placeholder="Starting end of the experience"
          value={experienceInfo.dateTo}
        />

        <br />

        <input
          style={{ width: "1rem" }}
          type="checkbox"
          id="isWorking"
          value="active"
          checked={experienceInfo.isWorking}
          onChange={() => {
            setExperienceInfo({
              ...experienceInfo,
              isWorking: !experienceInfo.isWorking,
            });
          }}
        />
        <label htmlFor="isWorking">Still working here</label>
        <DataControlButton setPageState={setPageState} />
      </Card>
    );
  } else {
    return (
      <Card>
        <h5>Experience information</h5>
        <p>Company: {experienceInfo.company}</p>
        <p>Role: {experienceInfo.position}</p>
        <p>Responsibilities: {experienceInfo.reponsibilities}</p>
        <p>Start date: {experienceInfo.dateFrom}</p>
        <p>End date: {experienceInfo.dateTo}</p>
        <p>Still working: {experienceInfo.isWorking ? "Yes" : "No"} </p>
        <DataControlButton setPageState={setPageState} />
      </Card>
    );
  }
}

export { ExperienceInformation };
