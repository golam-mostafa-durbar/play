import OTP from "./components/otp/OTP";

import Form from "./components/form/Form";
import Table from "./components/table/Table";
import Orders from "./components/orders/Orders";

import JSPlayer from "./components/JSPlayer";
import VideoPlayer from "./components/VideoPlayer";
import BitmovinPlayerStream from "./components/BitmovinPlayer";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-slate-200 flex flex-col items-center py-8">
      <h1 className="mb-12 text-2xl font-semibold">Order Information</h1>
      <div className="w-full">
        {/* <BitmovinPlayerStream /> */}
        {/* <VideoPlayer /> */}
        {/* <JSPlayer /> */}
        {/* <OTP /> */}
        {/* <Form /> */}
        {/* <Table /> */}
        <Orders />
      </div>
    </div>
  );
};

export default App;
