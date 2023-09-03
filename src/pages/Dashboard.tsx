import Chart from "../components/Chart";
import Map from "../components/Map";

const Dashboard = () => {
     return (
          <section className="w-full">
               <h3 className="mt-8 text-lg font-semibold text-center lg:text-2xl">The cases fluctuations and map</h3>
               <div className="mb-20">
                    <Chart />
                    <Map />
               </div>
          </section>
     );
};

export default Dashboard;
