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
  FootermenuProps,
  CallToActionProps,
} from "../types/type";

export const menuLinkData: MenuLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Service",
    href: "#service",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const mobileHeaderNavLinks: MobileMenuLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Service",
    href: "#service",
  },
  {
    label: "Contact",
    href: "#contact",
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
    buttonText: "Make Appointment",
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

//Service section

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

    iconButton:"Read More",
    bgImage:"/images/service/shape-3.png"

  },
];

// testimonial
  export const TestimonialSectionData: TestimonialSectionProps[] = [
    {
      bgImage: "/images/testimonial/shape-4.png",
      testimonialImages: [
        {
          src: "/images/testimonial/tetimonial-1.webp",
          altText: "Rafa",
        },
        {
          src: "/images/testimonial/testimonial-2.webp",
          altText: "Shalini",
        },
        {
          src: "/images/testimonial/testimonial-3.webp",
          altText: "Jeffi",
        },
        {
          src: "/images/testimonial/testimonial-4.webp",
          altText: "Hazel",
        },
        {
          src: "/images/testimonial/testimonial-5.webp",
          altText: "Thulasi",
        },
      ],
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
        {
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy.",
        },
        {
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy.",
        },
      ],
      testimonialReviewer: [
        {
          text: "Farah Jeff",
        },
        {
          text: "Sheryl Daphne",
        },
        {
          text: "Muhammad Rafiq",
        },
        {
          text: "Maharaj Dheshingu",
        },
        {
          text: "Thiribhuvaneshwaari",
        },
      ],

      reviewerDesignation: [
        {
          text: "Digital Marketer",
        },
        {
          text: "Human Resource",
        },
        {
          text: "Web Developer",
        },
      ],
    },
  ];

  // Faq

  export const FaqSectionData: FaqSectionProps[] = [
    {
      faqImage: "/images/faq/faqImage.webp",
      subHeading: "Frequently Asked Questions",
      mainHeading: "Get Every Single Answers There if you want",
      faqItems: [
        {
          question: "What is an Academic medical center",
          answer:
            "Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
        },
        {
          question: "What is an Academic medical center",
          answer:
            "Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
        },
        {
          question: "What is an Academic medical center",
          answer:
            "Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
        },
        {
          question: "What is an Academic medical center",
          answer:
            "Lorem ipsum dolor sit amet, consetet Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinonumy eirmod tempor invidunt.",
        },
      ],
    },
  ];

// Team
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

  // newsLetter
  export const NewsletterSectionData :NewsLetterSectionProps[]=[
    {
      mainHeading:"Subscribe Our Newsletter",
      description:"Lorem ipsum dolor sit amet, consetetur sadiping elitr, sed dinonumyeirmod tempor invidunt ut labore."
    }
  
  ]

  // Call to action

  export const CallToActionData: CallToActionProps[] = [
    {
      subHeading: "Appoinment",
      mainHeading: "Get Appoinment Now",
      description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumyeirmod tempor invidunt ut labore et dolore magn."
    },
  ];

  // Footer

  export const FooterSectionData: FootermenuProps[] = [
    {
  bgImage:""
    },
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Service",
      href: "#service",
    },
    {
      label: "Contact",
      href: "#contact",
    },

    {
      appointmentLabel: "Cardiology",
      appointmentHref: "#",
    },
    {
      appointmentLabel: "Neurology",
      appointmentHref: "#",
    },
    {
      appointmentLabel: "Gastroenterology",
      appointmentHref: "#",
    },
    {
      appointmentLabel: "Routine Checkup",
      appointmentHref: "#",
    },
    {
      appointmentLabel: "Orthopedics",
      appointmentHref: "#",
    },
    {
  quicklinkTitle:"Quick Links",
  mapTitle:"Medical Location"
    },
    {
     copyrighttext:"Designed and Developed by Sahaya Ronaldo S"
    },
    {
      footerDescription:
        "Lorem ipsum dolor serit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore dolore magna aliquyam erat diam voluptua.",

      map: {
        latitude: 8.1334292,
        longitude: 77.3208427,
        zoom: 12,
        embedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.781275657301!2d77.3208427!3d8.1334292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fbb41c427e9d%3A0x9b0bb1eba78b9aa6!2sKalladivillai%20Sivanthaman%20St%2C%20Nagar%2C%20Muttom%2C%20Vellimalai%2C%20Tamil%20Nadu%20629202!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
      },
    },
  ];