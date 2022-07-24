import ProgressBar from "./ProgressBar";
import ResumePaste from "./ResumePaste";

const Result = (props) => {
  return (
    <div className="container">
      <ProgressBar />
      <ResumePaste result={props.result} />
    </div>
  );
};
export default Result;
