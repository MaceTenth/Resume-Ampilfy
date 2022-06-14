import { React, useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ResumePaste from "./ResumePaste";

export default function ProgressBar() {
  const newPrecentage = 66;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(newPrecentage);
    console.log("hi");
  }, []);

  const text = (
    <h4 className="text-left">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </h4>
  );
  return (
    <div className="page-container d-flex">
      <section className="col-6 ">
        <h1 className="kula_title my-5">Resume Score</h1>
        <div className="row d-flex justify-content-center align-content-center">
          <div className="col-8 ms-5">
            <CircularProgressbar
              className=""
              value={percentage}
              strokeWidth={13}
              text={`${percentage}%`}
              styles={buildStyles({
                pathTransitionDuration: 2,
                pathColor: "#73dfef",
                textColor: " #33048b",
                trailColor: "#d6d6d6",
              })}
            />
          </div>
        </div>

        <div className="row m-5 col-11 m-1">{text}</div>
      </section>

      <section className="col-6">
        <ResumePaste />
      </section>
    </div>
  );
}
