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
    const factorsData = {
        labels: [
            "Carbon Emission",
            "Percent of Renewable Energy",
            "Water Usage",
            "Land Usage",
            "Air Emission",
            "No. of Non-Compliance Incidents",
            "Life Cycle GHG Emissions",
            "Employment Generation",
            "Income Equality Ratio",
            "Community Investment Rate",
            "Health & Safety Incident Rate",
            "Access Improvement Index",
            "Gender Pay Gap",
            "Board Diversity Ratio",
            "ESG Disclosure Rate",
            "Policy Violation Rate",
            "Stakeholder Engagement Frequency",
            "Risk Mitigation Index"
        ],
        datasets: [
            {
                label: "ESG Factors",
                data: [80, 60, 75, 50, 70, 90, 85, 65, 72, 68, 55, 78, 60, 70, 85, 50, 65, 75],
                backgroundColor: "#4caf50",
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

    const overallScore = esgScoresData.datasets[0].data.reduce((a, b) => a + b, 0) / esgScoresData.datasets[0].data.length;

    const minScoreIndex = esgScoresData.datasets[0].data.indexOf(Math.min(...esgScoresData.datasets[0].data));
    const areaToImprove = esgScoresData.labels[minScoreIndex];

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
            <div className="p-6 max-w-8xl mx-auto">
                <h1 className="text-2xl font-bold text-center mb-6">Project Dashboard</h1>
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold">Overall ESG Score: {overallScore.toFixed(2)}</h2>
                    <h3 className="text-lg">Area to Improve: {areaToImprove}</h3>
                </div>
                <div className="flex flex-row justify-center items-center space-x-8 mb-8">
                
                    <div className="w-[600px] h-[400px]">
                        <h2 className="text-lg font-semibold mb-4 text-center">Factor Scores</h2>
                        <Bar
                            data={factorsData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        labels: {
                                            color: "white",
                                        },
                                    },
                                },
                                scales: {
                                    x: {
                                        ticks: {
                                            color: "white",
                                        },
                                    },
                                    y: {
                                        ticks: {
                                            color: "white",
                                        },
                                        min: 0,
                                        max: 100,
                                    },
                                },
                            }}
                        />
                    </div>
                
                    <div className="w-[600px] h-[400px]">
                        <h2 className="text-lg font-semibold mb-4 text-center">Overall ESG Scores</h2>
                        <Radar
                            data={esgScoresData}
                            options={{
                                responsive: true,
                                scales: {
                                    r: {
                                        suggestedMin: 50,
                                        suggestedMax: 100,
                                        ticks: {
                                            color: "white",
                                        },
                                        grid: {
                                            color: "rgba(255, 255, 255, 0.2)",
                                        },
                                        angleLines: {
                                            color: "rgba(255, 255, 255, 0.2)",
                                        },
                                    },
                                },
                                elements: {
                                    line: {
                                        borderColor: "white",
                                        borderWidth: 2,
                                    },
                                    point: {
                                        radius: 5,
                                        backgroundColor: "white",
                                        borderWidth: 2,
                                        borderColor: "black",
                                    },
                                },
                                plugins: {
                                    legend: {
                                        labels: {
                                            color: "white",
                                        },
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDash;
