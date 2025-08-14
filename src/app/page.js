import Link from "next/link";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-white dark:bg-slate-700/50 backdrop-blur-sm">
            <Link href="/dashboard">Go to Dashboard</Link>
        </div>
    );
}
