import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col items-center mt-24 ">
        <Image
          width="300"
          height="100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkgOhlTHPFvrSOLnM-BMQ7JQUyPd_6pvvW-GpnWJO1A&s"

        >
        
        </Image>
        <HomeSearch />
      </div>
    </>
  )
};

export default Home;