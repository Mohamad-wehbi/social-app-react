import { Card,CardBody } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
   
  const chartConfig = {
    type: "pie",
    width: 215,
    height: 215,
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: false,
      },
    },
  };
   
  const PieChart = () => {
    return (
      <Card className="bg-transparent shadow-none">
        <CardBody className="grid place-items-center p-0 my-[-10px]">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  }


  export default PieChart;