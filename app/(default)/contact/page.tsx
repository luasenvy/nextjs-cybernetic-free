import ContactModule from "@/components/Contact";
import Hero from "@/components/Hero";
import { HeroSlider1 } from "@/components/Images";

export const metadata = {
  title: "CONTACT",
  description: "CONTACT Description",
};

const hero = {
  image: HeroSlider1,
  content: {
    title: "Contact",
    paragraph: "Get stuck or need help? Contact us and we will help you out!",
  },
};

const App = () => {
  return (
    <>
      <Hero heroType="ParallaxImage" data={hero} />
      <ContactModule />
    </>
  );
};

export default App;
