import React from "react";

const demoOrder = {
  id: "20240827-16081337",
  name: "MR. Customer",
  email: "customer@example.com",
  shippingAddress: "Monipur, Kazipara., Mirpur 2, Dhaka - 1216, Bangladesh",
  date: "27-08-2024 16:08 PM",
  status: "Pending",
  totalAmount: "$5100",
  shippingMethod: "Flat shipping rate",
  paymentMethod: "Cash on Delivery",
};

const Orders = () => {
  return (
    <div className="w-full h-auto bg-white flex justify-center">
      <div className="w-3/4 flex flex-col space-y-6 py-8">
        <h1 className="text-2xl font-bold">Order Id: {demoOrder.id}</h1>

        {/* summary  */}
        <div className="w-full h-max border border-slate-300 p-4">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          {demoOrder && (
            <div className="my-7 px-4 flex gap-7 text-sm">
              {/* left  */}
              <div className="flex-1 space-y-4">
                <div className="flex gap-2">
                  <p className="w-1/3 font-semibold">Order Code::</p>
                  <p className="flex-1">{demoOrder.id}</p>
                </div>
                <div className="flex gap-2">
                  <p className="w-1/3 font-semibold">Customer:</p>
                  <p className="flex-1">{demoOrder.name}</p>
                </div>
                <div className="flex gap-2">
                  <p className="w-1/3 font-semibold">Email:</p>
                  <p className="flex-1">{demoOrder.email}</p>
                </div>
                <div className="flex gap-2">
                  <p className="w-1/3 font-semibold">Shipping Address:</p>
                  <p className="flex-1">{demoOrder.shippingAddress}</p>
                </div>
              </div>

              {/* right  */}
              <div className="flex-1 space-y-4">
                <div className="flex gap-2">
                  <p className="w-1/3 font-semibold">Order Date:</p>
                  <p className="flex-1">{demoOrder.date}</p>
                </div>
                <div className="flex gap-2">
                  <p className="w-1/3 font-semibold">Order Status:</p>
                  <p className="flex-1">{demoOrder.status}</p>
                </div>
                <div className="flex gap-2">
                  <p className="w-1/3 font-semibold">Total order amount:</p>
                  <p className="flex-1">{demoOrder.totalAmount}</p>
                </div>
                <div className="flex gap-2">
                  <p className="w-1/3 font-semibold">Shipping Method:</p>
                  <p className="flex-1">{demoOrder.shippingMethod}</p>
                </div>
                <div className="flex gap-2">
                  <p className="w-1/3 font-semibold">Payemnt Method:</p>
                  <p className="flex-1">{demoOrder.paymentMethod}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* details  */}
        <div className="w-full flex space-x-6">
          <div className="flex-1 h-[200px] border border-slate-300 p-4">
            <h2 className="text-lg font-semibold">Order Details</h2>
          </div>

          <div className="w-1/5 h-[200px] border border-slate-300 p-4">
            <h2 className="text-lg font-semibold">Order Amount</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
