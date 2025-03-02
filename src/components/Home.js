import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter()
    function handleClick() {
        router.push("/dashboard")
    }
    return (
      <div className="bg-warning min-vh-100 w-full">
  
        {/* Hero Section */}
        <header className="text-center text-dark py-5">
          <h1 className="display-4 fw-bold">Smart BeeHive Monitoring</h1>
          <p className="fs-5">Using IoT & AI to detect swarming and protect your bees.</p>
          <button onClick={handleClick} className="btn btn-dark btn-lg mt-3">Get Started</button>
        </header>
  
        {/* Features Section */}
        <section className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="bg-light p-4 h-40 rounded shadow">
                <h3 className="text-black">🐝 IoT Sensors</h3>
                <p>Monitor temperature, humidity, and bee activity in real-time.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light p-4 h-37 rounded shadow">
                <h3 className="text-black">🤖 AI Predictions</h3>
                <p>Detect swarming and predict hive behavior using Artificial Intelligence.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light p-4 h-40 rounded shadow">
                <h3 className="text-black">📢 Instant Alerts</h3>
                <p>Receive notifications when your hive needs attention.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <footer className="text-center w-full py-5 bg-black text-warning">
            <h2 className="fw-bold">Join the Future of Beekeeping with AI & IoT! 🐝</h2>
            <p className="fs-5">
                Monitor your hive, detect swarming early, and ensure a healthier bee colony.
            </p>
            <button onClick={handleClick} className="btn btn-warning btn-lg mt-3">Get Started</button>

            {/* Social Links */}
            <div className="mt-4">
                <a href="#" className="text-warning mx-3 fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-warning mx-3 fs-4"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-warning mx-3 fs-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-warning mx-3 fs-4"><i className="bi bi-linkedin"></i></a>
            </div>

            <p className="mt-4 small">© 2025 Your Hive. All rights reserved.</p>
        </footer>

      </div>
    );
  }
  