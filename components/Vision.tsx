import VisionMarketing from "@/components/Vision/VisionMarketing";
import VisionCommunication from "@/components/Vision/VisionCommunication";
import VisionDesign from "@/components/Vision/VisionDesign";
import Diplomes from "@/components/Homepage/Diplomes";

export default function Vision() {
  return (
    <section className="vision-container">
      <section className="scroll-title-container">
        <div className="scroll-title">
          <p>Ma Vision</p>
          <p>Ma Vision</p>
          <p>Ma Vision</p>
          <p>Ma Vision</p>
          <p>Ma Vision</p>
          <p>Ma Vision</p>
        </div>
        <div className="scroll-title">
          <p>Ma Vision</p>
          <p>Ma Vision</p>
          <p>Ma Vision</p>
          <p>Ma Vision</p>
          <p>Ma Vision</p>
          <p>Ma Vision</p>
        </div>
      </section>
      <VisionMarketing />
      <VisionCommunication />
      <VisionDesign />
      <Diplomes />
    </section>
  );
}
