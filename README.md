# 🐝 Smart Beehive Monitoring System - Frontend (Next.js)

This is the frontend interface for the Smart Beehive Monitoring System developed using **Next.js**. It visualizes real-time and historical beehive data such as **temperature**, **humidity**, and **weight**, collected using IoT sensors. It also displays **ML-based swarming forecasts** and correlation analysis to assist beekeepers in proactive colony management.

---

## 📌 Features

- 📊 Real-time data visualization of key parameters
- 🧠 Swarming behavior insights powered by ML models
- 📈 Historical trends using interactive graphs
- 🌐 Responsive UI built using React + Tailwind CSS (or Bootstrap)
- 🐝 Support for multiple hive selection and monitoring

---

## 🔁 Project Flow (Frontend)

```mermaid
flowchart TD
    A[User Interface] --> B[Select Hive / View Dashboard]
    B --> C[Fetch real-time data from backend API]
    C --> D[Display Graphs: Temp, Humidity, Weight]
    D --> E[Display ML Swarming Forecast (optional)]



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
