import React from "react";

const projects = [
    { id: 1, name: "Solar Farm Expansion", esgScore: 92 },
    { id: 2, name: "Community Water Project", esgScore: 88 },
    { id: 3, name: "Urban Green Spaces", esgScore: 95 },
    { id: 4, name: "Recycling Initiative", esgScore: 80 },
];

const sortedProjects = projects.sort((a, b) => b.esgScore - a.esgScore);

export default function ListView() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
            <div className="p-4 w-full max-w-4xl mx-auto bg-black text-white">
                <h1 className="text-2xl font-bold text-center mb-4">Projects List</h1>
                <div className="rounded-lg shadow border border-gray-700 w-full">
                    <table className="table-auto w-full text-left">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="px-4 py-2">Project Name</th>
                                <th className="px-4 py-2">ESG Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedProjects.map((project) => (
                                <tr key={project.id} className="border-t border-gray-700">
                                    <td className="px-4 py-2">{project.name}</td>
                                    <td className="px-4 py-2 font-medium text-green-400">
                                        {project.esgScore}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
