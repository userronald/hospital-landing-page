import {
  MenuLinkProps,
  MobileMenuLinkProps,
  HeroSliderProps,
  AboutusSectionProps,
} from "../types/type";

export const menuLinkData: MenuLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Service",
    href: "#",
  },
  {
    label: "Doctor",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

export const mobileHeaderNavLinks: MobileMenuLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Service",
    href: "#",
  },
  {
    label: "Doctor",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

export const heroSliderData: HeroSliderProps[] = [
  {
    heading: "Complete Health Care Solutions ",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    imageUrl: "/images/slider/slider-1.jpg",
    altText: "Cure Well",
    buttonText: "Learn More",
  },

  {
    heading: "Your Health is Our Top Priority",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    imageUrl: "/images/slider/slider-2.jpg",
    altText: "Cure Well",
    buttonText: "make Appointment",
  },

  {
    heading: "Best Doctors and Equipments in Town",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    imageUrl: "/images/slider/slider-3.jpg",
    altText: "Cure Well",
    buttonText: "Our Services",
  },
];

export const aboutUsSectionData: AboutusSectionProps[] = [
  {
    whtWeDoSubText: "What We Do",
    whtWeDoHeading: "What We Provide for Your Health",
    whtWeDoDescription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumyeirmod tempor invidunt ut labore et dolore magn.",
    aboutUsBgImage: "",
    aboutUsDNAImage: "",
    iconImage: [
      {
        src: "/images/aboutUs/icon-1.png",
        altText: "Cure Well",
      },
      {
        src: "/images/aboutUs/icon-2.png",
        altText: "Cure Well",
      },
      {
        src: "/images/aboutUs/icon-3.png",
        altText: "Cure Well",
      },
      {
        src: "/images/aboutUs/icon-4.png",
        altText: "Cure Well",
      },
    ],
    iconTexts: [
      {
        text: "Specialist Doctors",
      },
      {
        text: "Frequent Visits",
      },
      {
        text: "Cordial Administration",
      },
      {
        text: "Specialized Pharmacy",
      },
    ],
    aboutUsSubText: "About Us",
    aboutUsHeading: "Welcome to Our Clinic",
    aboutUsDescription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sqit consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.",
    aboutUsButton: "Learn More",
  },
];
