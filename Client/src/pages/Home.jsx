import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black text-green-500">
            <div className="text-center animate-fade-in">
                <h1 className="text-5xl font-extrabold mb-6">ESG360</h1>
                <p className="text-xl mb-8">Measuring Impact, Driving Change.</p>
                <p className="text-xl mb-8">This is the sample website created to visualize the gist of frontend</p>
                <Button 
                    onClick={() => navigate("/list")} 
                    className="mb-4 px-6 py-3 bg-green-500 text-black rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
                >
                    Sample List View
                </Button>
                <br />
                <Button 
                    onClick={() => navigate("/detail")} 
                    className="px-6 py-3 bg-green-500 text-black rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
                >
                    Sample Project Dashboard
                </Button>
            </div>
        </div>
    );
}