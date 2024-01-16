// import {Ball}

// export default function Loader() {
//   return (
//     <div className="loader-container">
//       <div className="loader"></div>
//       <p>Loading questions...</p>
//     </div>
//   );
// }

import { Audio } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="loader-container">
      <Audio
        height="100"
        width="100"
        color="#ced4da"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
      <p>Loading questions...</p>
    </div>
  );
}
