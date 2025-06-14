import {
  MenuLinkProps,
  MobileMenuLinkProps,
  HeroSliderProps,
  AboutusSectionProps,
  ServiceSectionProps,
  TestimonialSectionProps,
  FaqSectionProps,
  TeamSectionProps,
  NewsLetterSectionProps,
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
    altText: "Hustle",
    buttonText: "Learn More",
  },

  {
    heading: "Your Health is Our Top Priority",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    imageUrl: "/images/slider/slider-2.jpg",
    altText: "Loyalty",
    buttonText: "make Appointment",
  },

  {
    heading: "Best Doctors and Equipments in Town",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    imageUrl: "/images/slider/slider-3.jpg",
    altText: "Respect",
    buttonText: "Our Services",
  },
];

export const aboutUsSectionData: AboutusSectionProps[] = [
  {
    whtWeDoSubText: "What We Do",
    whtWeDoHeading: "What We Provide for Your Health",
    whtWeDoDescription:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumyeirmod tempor invidunt ut labore et dolore magn.",
    aboutUsBgImage: "/images/aboutUs/graph.png",
    aboutUsDNAImage: "/images/aboutUs/dna.png",
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
    aboutUsDoctorImage: "/images/aboutUs/pixelated-doctors.png",
  },
];



export const serviceSectionData: ServiceSectionProps[] = [
  {
    subHeading: "Services",
    mainHeading: "Our Healthcare Services",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumyeirmod tempor invidunt ut labore et dolore magn.",
    iconImage: [
      {
        src: "/images/service/heart-rate.png",
        altText: "Cardiology",
      },
      {
        src: "/images/service/neurology.png",
        altText: "Neurology",
      },
      {
        src: "/images/service/stomach.png",
        altText: "Gastroenterology",
      },
      {
        src: "/images/service/bones.png",
        altText: "Orthopedics",
      },
      {
        src: "/images/service/uterus.png",
        altText: "Gynecology",
      },
      {
        src: "/images/service/dental-surgery.png",
        altText: "Dental Surgery",
      },
    ],
    iconText: [
      {
        text: "Cardiology",
      },
      {
        text: "Neurology",
      },
      {
        text: "Gastroenterology",
      },
      {
        text: "Orthopedics",
      },
      {
        text: "Gynecology",
      },
      {
        text: "Dental Surgery",
      },
    ],

    iconDescription: [
      {
        text: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
      },
      {
        text: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
      },
      {
        text: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
      },
      {
        text: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
      },
      {
        text: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
      },
      {
        text: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
      },
    ],

    iconButton:"Read More"
  },
];

  export const TestimonialSectionData: TestimonialSectionProps[] = [
    {
      subHeading: "Testimonials",
      mainHeading: "What Our Patients Says",
      testimonials: [
        {
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy.",
        },
        {
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy.",
        },
        {
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy.",
        },
      ],
      testimonialReviewer:[
        {
         text:"Fara"
      },
      {
        text:"Jeff"
      },
      {
        text:"Rafiq"
      }
    ],

    reviewerDesignation:[
      {
        text:"Digital Marketer"
      },
      {
        text:"Human Resource"
      },
      {
        text:"Web Developer"
      }
    ]
    },
  ];

  export const FaqSectionData: FaqSectionProps[] = [
    {
      subHeading: "Frequently Asked Questions",
      mainHeading: "Get Every Single Answers There if you want",
      faqQuestions: [
        {
          text: "What is an Academic medical center",
        },
        {
          text: "What is an Academic medical center",
        },
        {
          text: "What is an Academic medical center",
        },
        {
          text: "What is an Academic medical center",
        },
      ],
      faqAnswers: [
        {
          text: "Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt. sadipscing elitr, sed dinonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor.",
        },
        {
          text: "Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt. sadipscing elitr, sed dinonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor.",
        },
        {
          text: "Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt. sadipscing elitr, sed dinonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor.",
        },
        {
          text: "Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt. sadipscing elitr, sed dinonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor.",
        },
      ],
    },
  ];


  export const TeamSectionData: TeamSectionProps[] = [
    {
      subHeading: "Team",
      mainHeading: "Meet Our Doctors",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumyeirmod tempor invidunt ut labore et dolore magn.",
      teamMembersName: [
        {
          text: "Dr. Ubayd",
        },
        {
          text: "Dr. Muhammad Rafique",
        },
        {
          text: "Sigmund Freud",
        },
        {
          text: "Laiba Roshan",
        },
        {
          text: "Nawal Marwan",
        },
        {
          text: "Joe Black",
        },
        {
          text: "Sammy Jankis",
        },
        {
          text: "Hazel Grace",
        },
      ],
      teamMembersDesignation: [
        {
          text: "Orthopedics",
        },
        {
          text: "Gastroenterology",
        },
        {
          text: "Neurology",
        },
        {
          text: "Gastroenterology",
        },
        {
          text: "Orthopedics",
        },
        {
          text: "Neurology",
        },
        {
          text: "cardiology",
        },
        {
          text: "Gynecology",
        },
      ],
    },
  ];

  export const NewsletterSectionData :NewsLetterSectionProps[]=[
    {
      mainHeading:"Subscribe Our Newsletter",
      description:"Lorem ipsum dolor sit amet, consetetur sadiping elitr, sed dinonumyeirmod tempor invidunt ut labore."
    }
  
  ]