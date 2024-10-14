import Stats from "@/src/components/PagesContent/MainIndex/components/Stats/Stats";
import WorkDirections from "@/src/components/PagesContent/MainIndex/components/WorkDirections/WorkDirections";
import HeaderAchievements from "@/src/components/PagesContent/MainIndex/components/Headers/HeaderAchievements";
import HeaderWorkDirections from "@/src/components/PagesContent/MainIndex/components/Headers/HeaderWorkDirections";
import HeaderHowDoWeHelp from "@/src/components/PagesContent/MainIndex/components/Headers/HeaderHowDoWeHelp";

const MainIndex = () => {
  return (
    <>
      <HeaderAchievements />
      <Stats/>

      <HeaderWorkDirections />
      <WorkDirections />

      <HeaderHowDoWeHelp />
    </>
  );
};

export default MainIndex;
