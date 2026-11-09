import heroImg from "@/assets/hero.jpg.asset.json";
import aboutImg from "@/assets/about.jpg.asset.json";
import whyImg from "@/assets/why.jpg.asset.json";
import hiringImg from "@/assets/hiring.png.asset.json";
import logoImg from "@/assets/logo-transparent.png";
import scalabuImg from "@/assets/scalabu.jpg.asset.json";
import brandsImg from "@/assets/brands.png.asset.json";

// All copy below is taken verbatim from theokconsulting.com (verified pages only).
export const images = {
  hero: heroImg.url,
  about: aboutImg.url,
  why: whyImg.url,
  hiring: hiringImg.url,
  logo: logoImg,
  scalabu: scalabuImg.url,
  brands: brandsImg.url,
};

export const contact = {
  email: "contact@theokconsulting.com",
  careersEmail: "careers@theokconsulting.com",
  whatsapp: "https://wa.me/2347015641385",
  phoneDisplay: "07015641385",
  facebook: "https://www.facebook.com/Thokconsultantsng/",
  linkedin: "https://www.linkedin.com/in/olaide-kehinde-acipm-in-view-5b953812a/",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: "users" | "wallet" | "briefcase" | "graduation" | "globe";
  sections?: { heading?: string; paragraphs?: string[]; list?: string[]; listIntro?: string }[];
};

export const services: Service[] = [
  {
    slug: "talent-management",
    title: "Talent Management",
    icon: "users",
    summary:
      "THOK is the leading provider of talent acquisition solutions. As a proven specialist, we will source and identify hard-to-find candidates across all areas of your business.",
  },
  {
    slug: "hr-employee-services",
    title: "HR Employee Services",
    icon: "wallet",
    summary:
      "We help you address the changing needs of your workforce. thok consultants provide a full range of HR advice, benefits and payroll services to fit your business needs.",
    sections: [
      {
        heading: "Payroll Management",
        paragraphs: [
          "We help you address the changing needs of your workforce.",
          "THOK consultants provide a full range of HR advice, benefits and payroll services to fit your business needs. Customized Benefits & Payroll Packages We can tailor a solution to meet your company’s needs and budget.",
          "The foundation of our business has always been our commitment to customer service. Whether it is a problem with billing, a question about enrollment or a need for benefit information, our clients know that they can call us 24/7 and we will be there for them.",
          "Our experienced staff has the knowledge and expertise you need to make your benefits process as smooth as possible.",
        ],
      },
      {
        heading: "Lets Talk Benefits",
        paragraphs: [
          "Dedicated to the success of your business, we understand that your employees are your most valuable assets. Our HR experts will work with you to design a flexible HR solution that meets both your business objectives and budgetary requirements.",
        ],
        listIntro: "Think about the following:",
        list: [
          "Retirement savings plans",
          "Health benefits",
          "Family leave",
          "Flexible work options",
          "Professional and career development benefits",
          "Student loan repayment programs",
        ],
      },
    ],
  },
  {
    slug: "hr-outsourcing",
    title: "HR Outsourcing",
    icon: "briefcase",
    summary:
      "We can help you get it right first time. From setting up payroll or paying benefits to resolving disputes, we offer a full range of outsourced HR services designed to take away the pain and make life easier.",
    sections: [
      {
        heading: "Why choose our HR outsourcing services?",
        paragraphs: [
          "Working with us could be one of the smartest business decisions you make. Here are three reasons why.",
        ],
        list: [
          "1. Reassurance that you’re following the best practice. A lack of knowledge about HR best practice is one of the most common reasons companies’ internal HR departments get into trouble. If you don’t know what you should be doing, and when, it’s easy to make mistakes that have lasting consequences. We can help you get it right first time. From setting up payroll or paying benefits to resolving disputes, we offer a full range of outsourced HR services designed to take away the pain and make life easier.",
          "2. Cost savings Outsourcing your HR department could save your business money in a number of ways. By removing the need for a full-time Head of HR, and avoiding expensive recruitment costs, you’ll quickly see a return on investment through our cost-effective outsourced HR service.",
          "3. Access to our expertise and experience. We use this knowledge to help our clients implement best practice across their businesses for maximum benefit and minimum risk.",
        ],
      },
      {
        heading: "Company Restructuring",
        paragraphs: [
          "Thok has created a solid ground for HR outsourcing by using a web based platform which is highly interactive and intuitive.",
          "This allows employers and employees to communicate quickly and easily. Also, it is easy to use and helps you save time in the hiring process.",
        ],
      },
      {
        heading: "How does Thok help me?",
        paragraphs: [
          "Thok will help you be more productive by making sure that you are always connected with your candidates and employees no matter where you are.",
          "It will also ensure that all your information is secure at all times through its SSL encryption feature. And, of course, it’s free!",
        ],
      },
    ],
  },
  {
    slug: "learning-and-development",
    title: "Learning and Development",
    icon: "graduation",
    summary:
      "Training is a practical measure to improve the capacity of staff and skill levels. We offers a large variety of trainings for individuals and groups on a full range of topics from business writing to presentation skills.",
  },
  {
    slug: "communication-services",
    title: "Communication Services",
    icon: "globe",
    summary:
      "Bringing your business to the world. We work with clients of all sizes, to offer communication services like creating affordable websites, focused on clean and effective design, outstanding content and great usability, to help transform their online presence.",
  },
];

export const consultationServices = [
  "Talent Management",
  "HR Employee Services",
  "HR Outsourcing",
  "Training",
  "Website Development",
];
