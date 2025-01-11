import { AppBar } from "@/components/Appbar";
import User from "@/components/User";

export default function Dashboard() {
    return <div className="bg-black h-screen w-screen">
        <AppBar />
        <User />
    </div>
}