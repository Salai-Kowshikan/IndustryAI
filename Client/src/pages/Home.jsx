import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">ESG360</h1>
                <p className="text-lg mb-8">Measuring Impact, Driving Change.</p>
                <Button onClick={() => navigate("/list")} className="mb-4">
                  Sample List View
                </Button>
                <br />
                <Button onClick={() => navigate("/detail")}>
                    Sample Project Dashboard
                </Button>
            </div>
        </div>
    );
}
