import { React, useEffect, useState } from "react";
import { CircleProgress } from "react-gradient-progress";
import "react-circular-progressbar/dist/styles.css";

import ResumePaste from "./ResumePaste";

export default function ProgressBar() {
  const newPrecentage = 91;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < newPrecentage) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  useEffect(() => {
    if (percentage >= newPrecentage && percentage < 100) {
      const interval = setInterval(() => {
        setPercentage((prevPercentage) => prevPercentage + 1);
      }, 100);
      return () => clearInterval(interval);
    } else if (percentage === 100) {
      setPercentage(100);
    }
  }, [percentage]);

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
          <div className="col-6 ms-5">
            <CircleProgress
              percentage={percentage}
              width={500}
              strokeWidth={30}
              primaryColor={["#33048b", "#73dfef"]}
              secondaryColor="#d6d6d6"
              fontSize={percentage < 100 ? 100 : 0}
              fontColor={"#73dfef"}
            />
            {percentage === 100 ? (
              <section className="winner_position">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/winner-trophy-cup-prize-award-best-first-achievement-29309.png"
                  alt="you're_a_winner"
                />
                <h2 className="kula_font">Good job! </h2>
                <h2 className="kula_font">Your resume is excellent!</h2>
              </section>
            ) : (
              ""
            )}
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
