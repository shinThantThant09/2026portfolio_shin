import chemtrailsImg from "../assets/chemtrails.jpg";
import pawthImg from "../assets/pawth.jpg";
import brandBookImg from "../assets/brandBook.jpg";
import furisPetImg from "../assets/furisPet.jpg";

const projects = [
  {
    id: "pawth",
    title: "Pawth",
    category: "Full-stack Web App",
    description:
      "A full-stack pet social media platform where pet owners can share, like, and save posts about their pets.",
    techStack: ["React", "Node.js", "MongoDB", "JWT", "Express"],
    image: pawthImg,
    color: "#feb9b7",
    github: "https://github.com/shinThantThant09",
    live: "https://youtu.be/mMx9AH1CtUE?si=kWlr-117fnwxKgmU",
    figma: "",
    download: "",
  },
  {
    id: "chemtrails",
    title: "Chemtrails",
    category: "Mobile App",
    description:
      "A React Native travel planning app with Firebase authentication, Google Places API, interactive maps, photo journal entries, and text-to-speech features.",
    techStack: ["React Native", "Firebase", "Google Places API", "Expo"],
    image: chemtrailsImg,
    color: "#edfdb6",
    github: "https://github.com/shinThantThant09",
    live: "https://youtu.be/TTxRGhsGydw?si=BBn5lRs08kib3g67",
    figma: "",
    download: "",
  },
  {
    id: "furis-pet",
    title: "Furis Pet Store",
    category: "Interaction Design Method",
    description:
      "A real-client group project with Furis Pet Store in New Westminister, spanning 2 months of research, storyboarding, user journey mapping, and poster design to deliver a final solution that improves their in-store customer experience.",
    techStack: [
      "Figma",
      "UX Research",
      "Storyboarding",
      "Journey Mapping",
      "Prototyping",
    ],
    image: furisPetImg,
    color: "#d4e8c2",
    github: "",
    live: "",
    figma:
      "https://www.figma.com/design/TaYoyXudLa2NjqY6lB7qjI/IAT333-Notes?node-id=2031-231&t=haSSWXvbEtQN7KjX-1",
    download: "",
  },
  {
    id: "BrowseAI-BrandBook",
    title: "BrandBook for BrowseAI",
    category: "Graphic Design",
    description:
      "A design guidebook created as part of IAT102, exploring visual design principles through typography, layout, and brand identity.",
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    image: brandBookImg,
    color: "#d4e8c2",
    github: "",
    live: "",
    figma: "",
    download: "/2026portfolio_shin/BrandBook_ShinThant.pdf",
  },
];

export default projects;
