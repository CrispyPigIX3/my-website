import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import Task from "./components/Task";
import User from "./components/User";
import Egg from "./components/Egg";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Meat from "./pages/meat";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative task-background">
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex flex-col flex-1 items-center justify-start gap-2 py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="egg" element={<Egg />} />
              <Route path="Task" element={<Task />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
