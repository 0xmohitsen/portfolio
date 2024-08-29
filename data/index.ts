export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Cryptocurrency Exchange DApp",
    description: "Learning Web3 Technologies",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "RotoAI Website",
    des: "RotoAI is a DPIIT-registered startup in the AI-ML space that is committed to using cutting-edge AI technologies to revolutionise industrial maintenance..",
    img: "/rotoai.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/postgres.svg",
      "/prisma.svg",
    ],
    link: "https://rotoai.in/",
  },
  {
    id: 2,
    title: "Free Product Company Website",
    des: "FreeProductCompany revolutionizes traditional advertising by leveraging eco-friendly, daily-use products such as paper bags as powerful marketing tools. ",
    img: "/fpc.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/postgres.svg",
      "/prisma.svg",
    ],
    link: "https://www.freeproductcompany.org/",
  },
  {
    id: 3,
    title: "Wanderlust - Ultimate Travel Blog 🧳✈️",
    des: "WanderLust is a MERN travel blog website 🚀.",
    img: "/wanderlust.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://wanderlust-beta.vercel.app/",
  },
  {
    id: 4,
    title: "PokeDex Pokemon Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/pokedex.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://pokedex-pokemon-001.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Mohit was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mohit's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mohit is the ideal partner.",
    name: "Gyan Setu",
    title: "Founder & CEO at RotoAI",
    url: "/gyan.jpeg",
  },
  {
    quote:
      "His technical decisions are really good. He actively participates in communication and provides ideas in company benefits. It is really great to have him.",
    name: "Avi Dwivedi",
    title: "Founder & CEO at FPC",
    url: "avi.jpeg",
  },
  {
    quote:
      "He really worked hard in the company. He never gives up and always eager to learn new things. He always follows the best practices and tutorials.",
    name: "Tushar Trivedi",
    title: "Founder of BharatTech",
    url: "tushar.jpeg",
  },
  {
    quote:
      "Nice work by him. All his contributions really good. He brought his ideas to improve the UI/UX and took the work seriously. Glad to have such an amazing developer in the team.",
    name: "Krishna Acharya",
    title: "Owner and Maintainer of Wanderlust",
    url: "krishna.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern at FPC",
    desc: "Enhanced existing WordPress site and built new company website using Next.js. Implemented Cloudflare for CDN and DNS, set up Zoho email. Deployed email marketing on AWS with SES integration. Integrated Notion CMS and Calendly. Optimized performance, SEO, and accessibility. Managed hosting on GoDaddy and deployment on Vercel.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer Intern at RotoAI",
    desc: "Developed and designed a comprehensive web platform using Next.js, TypeScript, and Tailwind CSS. Implemented full-stack solutions including database management with Prisma ORM and Postgres, containerization with Docker, and deployment on VPS. Created branding materials, optimized for SEO, and set up company email infrastructure using Zoho CRM..",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Development Contributor",
    desc: "Developed a comprehensive authentication system for the Wanderlust project, including sign-up and sign-in UI. Implemented responsive design principles, focusing on the footer and overall user interface. Created backend middlewares to optimize data processing and integrated them seamlessly with the frontend. Enhanced user experience through SVG icons, conditional rendering, form validations, and error handling.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Engineer at BharatTech",
    desc: "Developed a full-stack Human Resource Management System (HRMS) using MERN stack. Improved system efficiency by migrating state management from Context API to Redux. Implemented real-time chat functionality with Socket.io. Created APIs, built responsive front-end interfaces, and optimized loading speeds. Developed key modules including event management, performance management, and employee termination. Enhanced overall UI and responsiveness of user and employee dashboards.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/0xmohitsen",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/0xmohitsen",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://linkedin.com/in/0xmohitsen",
  },
];
