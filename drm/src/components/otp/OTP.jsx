import React from "react";
import OTPForm from "./OTPForm";

const OTP = () => {
  const handleOTPSubmit = (otp) => {
    console.log("Submitted OTP: ", otp);
  };

  return (
    <div className="flex items-center justify-center h-max">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Verify OTP</h2>
        <OTPForm onSubmit={handleOTPSubmit} />
      </div>
    </div>
  );
};

export default OTP;
