"use client";
import { Container } from "@chakra-ui/react";
import { GiCommercialAirplane, GiStreetLight, GiTv } from "react-icons/gi";
import { MdMovie } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";
import { MdNewspaper } from "react-icons/md";
import { BsFillCarFrontFill, BsTagsFill } from "react-icons/bs";
import { IoMdRadio } from "react-icons/io";
import Fade from "react-reveal/Fade";

import ExploreCard from "./cards/ExploreCard";
const ExploreSection = () => {
  return (
    <Container maxW={"7xl"}>
      <h3 className="text-center text-3xl font-semibold mb-10">
        <span className="text-primary">Explore Ad Boards by genre</span>
        
      </h3>
      <Fade left  delay={300} duration={1700}>
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
         
          <ExploreCard icon={ <MdNewspaper size={30}  />} text="Newspaper" className="cursor-pointer"/>
          <ExploreCard icon={ <IoMdRadio size={30} />} text="Radio" />
          <ExploreCard icon={<GiTv size={30}  />} text="TV" />
          <ExploreCard icon={ <HiDesktopComputer size={30} />} text="Digital" />
          <ExploreCard icon={<GiStreetLight size={30}  />} text="Outdoor" />
          {/* <ExploreCard
            icon={<BsFillCarFrontFill size={30}  />}
            text="Non Traditional"
          /> */}
          <ExploreCard icon={<BsFillCarFrontFill size={30} />} text="Mobile and bus" />
          <ExploreCard icon={ <MdMovie size={30}  />} text="Cinema" />
          <ExploreCard
            icon={<GiCommercialAirplane size={30}  />}
            text="Airplane Adverts"
          />
          {/* <ExploreCard icon={<MdPersonSearch size={30}  />} text="Tv" /> */}
          
        </div>
      </Fade>
    </Container>
  );
};

export default ExploreSection;
