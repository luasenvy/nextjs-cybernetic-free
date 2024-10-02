import Hero from "@/components/Hero";
import { HeroSlider3, InfiniteImg1, InfiniteImg2 } from "@/components/Images";
import ServiceCards from "@/components/ServiceCards";

export const metadata = {
  title: "INFINITE",
  description: "INFINITE Description",
};

const hero1 = {
  image: HeroSlider3,
  content: {
    title: "INFINITE",
    paragraph:
      "Infinite is a platform that allows you to create a unlimited space for your community. It is a place where you can share your thoughts, ideas, and experiences with like-minded people.",
  },
};
const hero2 = {
  image: InfiniteImg1,
  width: 590,
  height: 300,
  alt: "Hero Image",
  title: "Lets make you Infinite!",
  paragraph:
    "Become a part of the Infinite community and start sharing your thoughts, ideas, and experiences with like-minded people.",
};
const hero3 = {
  switchPlaces: true,
  image: InfiniteImg2,
  width: 590,
  height: 300,
  alt: "Hero Image",
  title: "Infinite Community",
  paragraph:
    "with infinite dashboard you can easily manage your community, create posts, and interact with your followers.",
};

const services = [
  {
    title: "Cyber - development",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum .",
  },
  {
    title: "Cyber - Security",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum .",
  },
  {
    title: "Cyber - Marketing",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum .",
  },
  {
    title: "Cyber - Development",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum .",
  },
  {
    title: "Cyber - Security",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum .",
  },
  {
    title: "Cyber - Marketing",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum .",
  },
];

const App = () => {
  return (
    <>
      <Hero heroType="ParallaxImage" data={hero1} />
      <ServiceCards
        description="SERVICES"
        title="The Service We Provide For You"
        cards={services}
      />

      <Hero heroType="textImage" data={hero2} />
      <Hero heroType="textImage" data={hero3} />
    </>
  );
};

export default App;
