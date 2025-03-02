"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Graph({ dataList, title }) {
  // Create labels (assuming indexes as X-axis)
  const labels = dataList.map((_, index) => `Point ${index + 1}`);

  // Define Chart Data
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data Points",
        data: dataList,
        borderColor: "rgba(255, 193, 7, 1)", // Bootstrap warning color (yellow)
        backgroundColor: "rgba(255, 193, 7, 0.2)", // Light yellow fill
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "black",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Index",
        },
      },
      y: {
        title: {
          display: true,
          text: title,
        },
      },
    },
  };

  return (
    <div className="container mt-4 mb-3">
        <h4 className="text-center mb-3">{title}</h4>
        <div className="bg-light p-3 rounded shadow" style={{ height: "300px", width: "100%" }}>
            <Line data={data} options={{ ...options, responsive: true, maintainAspectRatio: false }} />
        </div>
    </div>
  );
}
