import { Bar } from "react-chartjs-2";
import '../css/DonationDashboard.css'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function DonationDashboard() {
    const donations = [
        { month: "Jan", amount: 12000 },
        { month: "Feb", amount: 15000 },
        { month: "Mar", amount: 18000 },
        { month: "Apr", amount: 22000 },
        { month: "May", amount: 20000 },
        { month: "Jun", amount: 26000 },
    ];

    const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);
    const totalDonors = 56;

    // Chart Data
    const chartData = {
        labels: donations.map((d) => d.month),
        datasets: [
            {
                label: "Monthly Donations (₹)",
                data: donations.map((d) => d.amount),
            },
        ],
    };

    return (
        <div className="dashboard">
            <header className="topbar">
                <h1>Donation Tracking Dashboard</h1>
                <p>Visual insight of contributions supporting a noble cause</p>
            </header>

            {/* Stats Section */}
            <section className="stats">
                <div className="stat-card">
                    <h3>Total Donations</h3>
                    <p className="value">₹ {totalDonations.toLocaleString()}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Donors</h3>
                    <p className="value">{totalDonors}</p>
                </div>
            </section>

            {/* Chart Section */}
            <section className="chart-section">
                <h2>Donation Trends</h2>
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                        scales: {
                            y: {
                                ticks: { color: "#eee" },
                                grid: { color: "#444" },
                            },
                            x: {
                                ticks: { color: "#eee" },
                                grid: { display: false },
                            },
                        },
                        plugins: {
                            legend: { labels: { color: "#eee" } },
                        },
                    }}
                />
            </section>

            {/* Table Section */}
            <section className="table-section">
                <h2>Monthly Breakdown</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Donation Amount (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((d, i) => (
                            <tr key={i}>
                                <td>{d.month}</td>
                                <td>₹ {d.amount.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Donation Dashboard | Assignment Project</p>
            </footer>
        </div>
    );
}

export default DonationDashboard;
