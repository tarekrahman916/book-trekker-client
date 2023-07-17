import HomeBooks from "./HomeBooks/HomeBooks";
import TopBanner from "./TopBanner/TopBanner";

export default function Home() {
  console.log(import.meta.env.NAME);
  return (
    <div>
      <TopBanner />
      <HomeBooks />
    </div>
  );
}
