"use client";
import Achievements from "@/src/app/components/MobileAchievements";
import Services from "@/src/app/components/Services";
import Header from "@/src/app/components/MobileHeader";
import Section1 from "@/src/app/components/Section1";
import Courses from "@/src/app/components/courses";
import AboutUs from "@/src/app/components/AboutUs";
import Testimonials from "@/src/app/components/Testimonials";
import Footer from "@/src/app/components/MobileFooter";
import MobileHeader from "@/src/app/mobile/MobileHeader";
import MobileHome from "@/src/app/components/MobileHome";
import MobileServices from "@/src/app/components/mobileServices";
import MobileAchievements from "@/src/app/components/MobileAchievements";
import MobileCourses from "@/src/app/components/MobileCourses";
import MobileAboutUs from "@/src/app/components/AboutUs";
import Testimonals from "@/src/app/components/Testimonials";
import MobileFooter from "@/src/app/components/MobileFooter";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      {isMobile ? <MobileHome /> : <Section1 />}
      {isMobile ? <MobileServices /> : <Services />}
      {isMobile ? <MobileAchievements /> : <Achievements />}
      {isMobile ? <MobileCourses /> : <Courses />}
      {isMobile ? <MobileAboutUs /> : <AboutUs />}
      {isMobile ? <Testimonials /> : <Testimonials />}
      {isMobile ? <MobileFooter /> : <Footer />}
    </>
  );
}
