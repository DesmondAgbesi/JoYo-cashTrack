import React from "react";
import axios from "axios";
import Forms from "../components/Forms";
import Graph from "../components/Graph";

// export async function getServerSideProps() {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/transactions`)
//   const transactions = res.data.transactions

//   return {
//     props: {
//       transactions
//     }
//   }


function Overview() {
  return (
    <div className="mx-auto max-w-6xl text-center drop-shadow-md h-[calc(100vh_-_500px)]">
      <h1 className="text-4xl py-5 mb-10 font-bold text-gray-800 ">
        Expense Tracker Overview
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Chart on the left side of the screen */}
        <Graph />

        {/* //Input Forms on the right side of the screen */}
        <Forms />
      </div>
    </div>
  );
}

export default Overview;
