import React, { useEffect } from "react";
import DownloadSection from "./DownloadSection";

export default function MobileOverviewPage() {
  useEffect(() => {
    document.title = "Mobile Overview | Smart Fisher Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-(--sectionBgB)">
      <DownloadSection />
    </div>
  );
}
