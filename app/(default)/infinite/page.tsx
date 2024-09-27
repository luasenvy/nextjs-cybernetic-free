import Hero from "@/components/Hero";
import { HeroSlider3, InfiniteImg1, InfiniteImg2 } from "@/components/Images";
import ServiceCards from "@/components/ServiceCards";

export const metadata = {
  title: "INFINITE",
  description: "INFINITE Description",
};

const App = () => {
  return (
    <>
      <Hero
        heroType="ParallaxImage"
        data={{
          image: HeroSlider3,
          content: {
            title: "INFINITE",
            paragraph:
              "Infinite is a platform that allows you to create a unlimited space for your community. It is a place where you can share your thoughts, ideas, and experiences with like-minded people.",
          },
        }}
      />
      <ServiceCards
        description="SERVICES"
        title="The Service We Provide For You"
        cards={[
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
        ]}
      />

      <Hero
        heroType="textImage"
        data={{
          image: InfiniteImg1,
          width: 590,
          height: 300,
          alt: "Hero Image",
          title: "Lets make you Infinite!",
          paragraph:
            "Become a part of the Infinite community and start sharing your thoughts, ideas, and experiences with like-minded people.",
        }}
      />
      <Hero
        heroType="textImage"
        data={{
          switchPlaces: true,
          image: InfiniteImg2,
          width: 590,
          height: 300,
          alt: "Hero Image",
          title: "Infinite Community",
          paragraph:
            "with infinite dashboard you can easily manage your community, create posts, and interact with your followers.",
        }}
      />
    </>
  );
};

export default App;
