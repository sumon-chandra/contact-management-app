import axios from "axios";
import { useQuery } from "react-query";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
     responsive: true,
     plugins: {
          legend: {
               position: "top" as const,
          },
          title: {
               display: true,
               text: "Cases Chart",
          },
     },
};

const Chart = () => {
     const { data = {} } = useQuery({
          queryKey: ["case-chart"],
          queryFn: async () => {
               const response = await axios("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
               return await response.data;
          },
     });

     //  Chart Data
     const chartData = {
          datasets: [
               {
                    label: "Cases",
                    data: data.cases,
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
               },
               {
                    label: "Deaths",
                    data: data.deaths,
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
               },
               {
                    label: "Recovered",
                    data: data.recovered,
                    borderColor: "rgb(53, 412, 235)",
                    backgroundColor: "rgba(53, 412, 235, 0.5)",
               },
          ],
     };

     return (
          <div className="w-[90%] mx-auto">
               <Line options={options} data={chartData} />;
          </div>
     );
};

export default Chart;
