import CardSection from "./component/CardSection/CardSection";
import InfoSection from "./component/InfoSection/InfoSection";

export default function Home() {
  return (
    <div className="flex">
      <CardSection />
      <InfoSection />
    </div>
  );
}
