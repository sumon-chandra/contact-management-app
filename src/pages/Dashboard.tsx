import Chart from "../components/Chart";

const Dashboard = () => {
     return (
          <section className="w-full">
               <h3 className="mt-8 text-lg font-semibold text-center lg:text-2xl">The cases fluctuations and map</h3>
               <div>
                    <Chart />
               </div>
          </section>
     );
};

export default Dashboard;
