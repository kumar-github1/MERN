import React from "react";

const PersonalData = ({
  setusername,
  setphonenum,
  setaddress,
  setlandmark,
  handlesubmit,
}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-10 bg-amber-100 w-[500px]">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered mb-4 w-full"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered mb-4 w-full"
          onChange={(e) => setphonenum(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="input input-bordered mb-4 w-full"
          onChange={(e) => setaddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Landmark"
          className="input input-bordered mb-4 w-full"
          onChange={(e) => setlandmark(e.target.value)}
        />
        <button className="btn btn-primary w-full" onClick={handlesubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PersonalData;
