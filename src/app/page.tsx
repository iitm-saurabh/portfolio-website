import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import GateDashboard from "@/components/GateDashboard";
import { getHomeData, getAboutData, getProjectsData, getGateData } from "@/lib/data";

export default async function Home() {
  const homeData = await getHomeData();
  const aboutData = await getAboutData();
  const projectsData = await getProjectsData();
  const gateData = await getGateData();

  return (
    <main>
      <HeroSection {...homeData} />
      <AboutSection {...aboutData} />
      <ProjectsSection projects={projectsData} />
      <GateDashboard {...gateData} />
    </main>
  );
}
