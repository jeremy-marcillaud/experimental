import "../../../styles/global.css";
import GlassPane from "@/GlassPane";
import { Sidebar } from "react-feather";

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center">
          <Sidebar />
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
