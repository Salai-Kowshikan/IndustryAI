import React from "react";
import {
    Chart as ChartJS,
    BarElement,
    RadialLinearScale,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement,
    LineElement
} from "chart.js";
import { Bar, Radar } from "react-chartjs-2";

ChartJS.register(
    BarElement,
    PointElement,
    LineElement,
    RadialLinearScale,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const ProjectDash = () => {
    // Sample data
    const factorsData = {
        labels: ["E1", "E2", "E3", "S1", "S2", "G1", "G2"],
        datasets: [
            {
                label: "Factor Scores",
                data: [85, 70, 90, 75, 60, 80, 95],
                backgroundColor: [
                    "#4caf50", // Green for E
                    "#4caf50",
                    "#4caf50",
                    "#2196f3", // Blue for S
                    "#2196f3",
                    "#ff9800", // Orange for G
                    "#ff9800",
                ],
                borderColor: "#ffffff",
                borderWidth: 1,
            },
        ],
    };

    const esgScoresData = {
        labels: ["Environmental", "Social", "Governance"],
        datasets: [
            {
                label: "ESG Scores",
                data: [82, 68, 88],
                backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
                borderColor: ["#4caf50", "#2196f3", "#ff9800"],
                borderWidth: 1,
            },
        ],
    };

    // Calculate overall score
    const overallScore = esgScoresData.datasets[0].data.reduce((a, b) => a + b, 0) / esgScoresData.datasets[0].data.length;

    // Determine area to be improved
    const minScoreIndex = esgScoresData.datasets[0].data.indexOf(Math.min(...esgScoresData.datasets[0].data));
    const areaToImprove = esgScoresData.labels[minScoreIndex];

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
            <div className="p-6 max-w-6xl mx-auto"> {/* Changed max-w-4xl to max-w-6xl */}
                <h1 className="text-2xl font-bold text-center mb-6">Project Dashboard</h1>
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold">Overall ESG Score: {overallScore.toFixed(2)}</h2>
                    <h3 className="text-lg">Area to Improve: {areaToImprove}</h3>
                </div>
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">Factor Scores</h2>
                    <Bar
                        data={factorsData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    labels: {
                                        color: "white", // Legend text color
                                    },
                                },
                            },
                            scales: {
                                x: {
                                    ticks: {
                                        color: "white", // X-axis tick color
                                    },
                                },
                                y: {
                                    ticks: {
                                        color: "white", // Y-axis tick color
                                    },
                                },
                            },
                        }}
                    />
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Overall ESG Scores</h2>
                    <Radar
                        data={esgScoresData}
                        options={{
                            responsive: true,
                            scales: {
                                r: {
                                    suggestedMin: 50,
                                    suggestedMax: 100,
                                    ticks: {
                                        color: "white", // Radar chart ticks color
                                    },
                                    grid: {
                                        color: "rgba(255, 255, 255, 0.2)", // Radar grid lines color
                                    },
                                },
                            },
                            elements: {
                                line: {
                                    borderColor: "white", // Radar line color
                                    borderWidth: 2,
                                },
                                point: {
                                    radius: 5,
                                    backgroundColor: "white", // Radar points color
                                    borderWidth: 2,
                                    borderColor: "black", // Radar point border color
                                },
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        color: "white", // Radar chart legend text color
                                    },
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectDash;
