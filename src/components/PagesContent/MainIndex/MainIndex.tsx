import Stats from "@/src/components/PagesContent/MainIndex/components/Stats/Stats";
import WorkDirections from "@/src/components/PagesContent/MainIndex/components/WorkDirections/WorkDirections";
import HeaderAchievements from "@/src/components/PagesContent/MainIndex/components/Headers/HeaderAchievements";
import HeaderWorkDirections from "@/src/components/PagesContent/MainIndex/components/Headers/HeaderWorkDirections";
import HeaderHowDoWeHelp from "@/src/components/PagesContent/MainIndex/components/Headers/HeaderHowDoWeHelp";

const MainIndex = () => {
   return (
      <>
         <section className={'container'}>
            <HeaderAchievements/>
            <Stats/>
         </section>
         <section className={'container'}>
            <HeaderWorkDirections/>
            <WorkDirections/>
         </section>
         <HeaderHowDoWeHelp/>
      </>
   );
};

export default MainIndex;
