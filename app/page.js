import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero";
import ProgramsSection from "@/components/ProgramSection";
import TrainingPrograms from "@/components/SpecialityHome";
import TrainingExcellence from "@/components/TrainingFeaturesHome";
import Image from "next/image";
import TrainingForGender from "@/components/GenderTraining";
import ReviewsSection from "@/Components/ReviewSection";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="">
    <HeroSection />
    <AboutSection />
    <ProgramsSection />
    <TrainingPrograms />
    <TrainingExcellence />
    {/* <TrainingForGender /> */}
    <ReviewsSection />
    </div>
  );
}
