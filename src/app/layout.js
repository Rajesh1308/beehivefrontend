import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-warning min-vh-100 w-100">
          <nav className="bg-black text-warning p-3 d-flex align-items-center shadow-lg">
            <h1 className="fs-3 fw-bold text-warning ml-10">Your Hive</h1>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
