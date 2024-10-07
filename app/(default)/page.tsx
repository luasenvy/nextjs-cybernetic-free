import Hero from "@/components/Hero";
import { HeroSlider1, HeroSlider3 } from "@/components/Images";

export const metadata = {
  title: "HOME",
  description: "HOME Description",
};

const slides = [
  {
    subtitle: "Cybernetic",
    title: "Cybernetic",
    background: HeroSlider1.src,
    paragraph:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: {
      text: "Get pro version",
      link: "https://codexcode.store/themes/cybernetic-website-template",
    },
  },
  {
    subtitle: "Be Safe, Be Secure, Be Cybernetic",
    title: "infinite",
    background: HeroSlider3.src,
    paragraph: "",
    button: {
      text: "Take a look",
      link: "/infinite",
    },
  },
];

const App = () => {
  return <Hero heroType="fullPageSlider" data={slides} />;
};

export default App;
