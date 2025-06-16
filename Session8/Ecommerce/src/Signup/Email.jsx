import React from "react";

const Email = ({ email, setemail, setpage }) => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="border-amber-200 p-10 h-[300px] w-[500px] flex flex-col justify-center items-center bg-amber-100">
        <input
          type="text"
          placeholder="Email"
          className="input input-secondary mb-4 p-2 w-full"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <button className="btn btn-primary mt-4" onClick={setpage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Email;
