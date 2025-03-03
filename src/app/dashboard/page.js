"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Graph from "@/components/Graph";

export default function Dashboard() {
  const userid = 77667;
  const [selectedOption, setSelectedOption] = useState(1);
  const [selectedRange, setSelectedRange] = useState(10);
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(60);
  const [load, setLoad] = useState(12);
  const [sound, setSound] = useState(50);
  const [status, setStatus] = useState("Healthy");
  const sampleData = [10, 20, 15, 30, 25, 40, 35];
  const [temperatureValues, setTemperatureValues] = useState([]);
  const [humidityValues, setHumidityValues] = useState([]);
  const [loadValues, setLoadValues] = useState([]);
  const [soundValues, setSoundValues] = useState([]);

  const fetchData = async () => {
    try {
      const payload = {
        "userid": userid,
        "hivenumber": selectedOption,
        "number_of_records": selectedRange
      }
      console.log(payload)
      const response = await axios.post("https://beehivebackend-6504.onrender.com/get_sensor_data", payload);
      const result = response.data;
      setHumidityValues(result.humidity);
      setTemperatureValues(result.temperature);
      setLoadValues(result.load);
      setSoundValues(result.sound);
      setHumidity(result.humidity[(result.humidity).length-1]);
      setTemperature(result.temperature[(result.temperature).length-1]);
      setLoad(result.load[(result.load).length - 1]);
      setSound(result.sound[(result.sound).length-1]);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(()=>{
    fetchData();
  }, [selectedOption, selectedRange])

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {/* Dropdown Section */}
      <div className="p-4 text-center">
        <h2 className="mb-3">Choose Hive</h2>
        <select
          className="form-select form-select-lg"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled>Select an option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Parameters Section */}
      <div className="container bg-white p-4 shadow rounded">
        <h3 className="text-center mb-4">Hive Status</h3>
        <div className="row g-4">
          {/* Temperature */}
          <div className="col-md-6">
            <div className="p-3 border rounded text-center">
              <h5>Temperature</h5>
              <p className="fs-4">{temperature}°C</p>
            </div>
          </div>

          {/* Humidity */}
          <div className="col-md-6">
            <div className="p-3 border rounded text-center">
              <h5>Humidity</h5>
              <p className="fs-4">{humidity}%</p>
            </div>
          </div>

          {/* Load */}
          <div className="col-md-6">
            <div className="p-3 border rounded text-center">
              <h5>Air Quality</h5>
              <p className="fs-4">{load}</p>
            </div>
          </div>

          {/* Status */}
          <div className="col-md-6">
            <div className="p-3 border rounded text-center">
              <h5>Status</h5>
              <p className={status === "Healthy" ? "fs-4 text-success fw-bold" : "fs-4 text-danger fw-bold"}>{status}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h5 className="mb-0">Choose Range</h5>
        <select
            className="form-select w-auto"
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
        >
            <option value="" disabled>Select an option</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
        </select>
        </div>
        <div className="constainer w-full">
            <Graph dataList={humidityValues} title={"Humidity (%)"} />
        </div>
        <div className="constainer w-full">
            <Graph dataList={temperatureValues} title={"Temperature (°C)"} />
        </div>
        <div className="constainer w-full">
            <Graph dataList={loadValues} title={"Air Quality"} />
        </div>
        <div className="constainer w-full">
            <Graph dataList={soundValues} title={"Sound"} />
        </div>
    </div>
  );
}
