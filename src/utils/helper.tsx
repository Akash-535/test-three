import {
  FacebookIcon,
  InstaIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YTIcon,
} from "./Icons";

interface NavbarList {
  title: string;
  link: string;
}

interface TopbarList {
  title: string;
  price: string;
}

interface ArticleCardList {
  title: string;
  image: string;
  date: string;
  description: string;
  authorImg: string;
  authorName: string;
  timeReamining: string;
}

interface FooterLink {
  title: string;
  link: string;
}

interface FooterList {
  title: string;
  description?: string;
  descriptionTwo?: string;
}
interface MediaIconList {
  icon: any;
  link: string;
}

interface MarketInsightsList {
  title: string;
  description: string;
}

interface ChangingGameList {
  title: string;
  description: string;
}

export const NAVBAR_LIST: NavbarList[] = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Learn to trade",
    link: "#",
  },
  {
    title: "Promotions",
    link: "#",
  },
  {
    title: "Arrowtrade",
    link: "#",
  },
  {
    title: "Blog",
    link: "#",
  },
];

export const TOP_BAR_LIST: TopbarList[] = [
  {
    title: "US30",
    price: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    price: "18948.45 / 18945.15",
  },
  {
    title: "USDJPY",
    price: "143.651 / 143.637",
  },
  {
    title: "US30",
    price: "41048.38 / 41044.58",
  },
  {
    title: "NAS100",
    price: "18948.45 / 18945.15",
  },
  {
    title: "USDJPY",
    price: "143.651 / 143.637",
  },
];

export const ARTICLES_CARD_LIST: ArticleCardList[] = [
  {
    image: "/assets/images/real-time-img.webp",
    date: "31 Jan 2025",
    timeReamining: "3 min read",
    title: "Real-Time Market Insights",
    description:
      "Stay ahead with AI-driven analytics, real-time news updates, and expert market research to make informed decisions.",
    authorImg: "/assets/images/darrell-img.webp",
    authorName: "Darrell Steward",
  },
  {
    image: "/assets/images/advance-trading-img.webp",
    date: "29 Jan 2025",
    timeReamining: "7 min read",
    title: "Advanced Trading Platform",
    description:
      "Experience lightning-fast execution, customizable charts, and an intuitive interface designed for traders of all levels.",
    authorImg: "/assets/images/jerome-img.webp",
    authorName: "Jerome Bell",
  },
  {
    image: "/assets/images/mastering-img.webp",
    date: "20 Dec 2024",
    timeReamining: "4 min read",
    title: "Mastering the Markets",
    description:
      "Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.",
    authorImg: "/assets/images/eleanor-img.webp",
    authorName: "Eleanor Pena",
  },
  {
    image: "/assets/images/risk-management-img.webp",
    date: "17 Nov 2024",
    timeReamining: "5 min read",
    title: "Risk Management in Trading",
    description:
      "Risk management is a critical component of successful trading. without effective risk management strategies, traders.",
    authorImg: "/assets/images/leslie-img.webp",
    authorName: "Leslie Alexander",
  },
  {
    image: "/assets/images/building-portfoliyo-img.webp",
    date: "22 Oct 2024",
    timeReamining: "2 min read",
    title: "Building a Diversified Portfolio",
    description:
      "Building a diversified portfolio is an essential strategy for managing risk while aiming for steady returns over time.",
    authorImg: "/assets/images/wade-img.webp",
    authorName: "Wade Warren",
  },
  {
    image: "/assets/images/psychology-trading-img.webp",
    date: "27 Sep 2024",
    timeReamining: "6 min read",
    title: "The Psychology of Trading",
    description:
      "Trading isn’t just about numbers, charts, and market analysis—it’s also a game of emotions and psychology.",
    authorImg: "/assets/images/kristin-waston.webp",
    authorName: "Kristin Watson",
  },
  {
    image: "/assets/images/developing-trading-img.webp",
    date: "02 Aug 2024",
    timeReamining: "8 min read",
    title: "Developing a Trading Strategy",
    description:
      "Identify trends (up, down, sideways) and develop strategies that capitalize on the direction of the market.",
    authorImg: "/assets/images/hawkins-img.webp",
    authorName: "Guy Hawkins",
  },
  {
    image: "/assets/images/security-img.webp",
    date: "12 July 2025",
    timeReamining: "9 min read",
    title: "Security & Reliability",
    description:
      "Your investments are safe with robust encryption, multi-layer authentication, and secure transaction processing.",
    authorImg: "/assets/images/jacob-img.webp",
    authorName: "Jacob Jones",
  },
  {
    image: "/assets/images/mobile-trading-img.webp",
    date: "21 June 2025",
    timeReamining: "7 min read",
    title: "Seamless Mobile Trading",
    description:
      "Access your portfolio and trade on the go with a powerful mobile app designed for performance and ease of use.",
    authorImg: "/assets/images/courtney-img.webp",
    authorName: "Courtney Henry",
  },
  {
    image: "/assets/images/mastering-img.webp",
    date: "20 Dec 2024",
    timeReamining: "4 min read",
    title: "Mastering the Markets",
    description:
      "Mastering the markets involves developing a comprehensive understanding of how financial markets work, creating.",
    authorImg: "/assets/images/eleanor-img.webp",
    authorName: "Eleanor Pena",
  },
  {
    image: "/assets/images/risk-management-img.webp",
    date: "17 Nov 2024",
    timeReamining: "5 min read",
    title: "Risk Management in Trading",
    description:
      "Risk management is a critical component of successful trading. without effective risk management strategies, traders.",
    authorImg: "/assets/images/leslie-img.webp",
    authorName: "Leslie Alexander",
  },
  {
    image: "/assets/images/building-portfoliyo-img.webp",
    date: "22 Oct 2024",
    timeReamining: "2 min read",
    title: "Building a Diversified Portfolio",
    description:
      "Building a diversified portfolio is an essential strategy for managing risk while aiming for steady returns over time.",
    authorImg: "/assets/images/wade-img.webp",
    authorName: "Wade Warren",
  },
];

export const FOOTER_LINKS_LIST: FooterLink[] = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About Us",
    link: "#about-us",
  },
  {
    title: "How It Works",
    link: "#how-it-works",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    title: "FAQs",
    link: "#faqs",
  },
  {
    title: "Contact Us",
    link: "#contact-us",
  },
];

export const FOOTER_LIST: FooterList[] = [
  {
    title: "Trade Responsibility Disclaimer",
    description:
      "Trading Forex and CFDs involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and it’s possible to lose more than your initial investment. Please ensure that you fully understand the risks involved, taking into account your financial objectives and risk appetite. Seek independent financial advice if necessary before starting trading. ArrowTrade does not offer financial advice.",
  },
  {
    title: "Disclaimer",
    description:
      "Information on this site is not directed at residents of any country or jurisdiction where distribution or use would be contrary to local law or regulation. Please check with your local regulations before proceeding.",
  },
  {
    title: "Regulatory Information",
    description:
      "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
  },
  {
    title: "Regulatory Information",
    description:
      "Arrowtradefx.com is a website operated by Arrow Trade S.A.R.L, which is registered in: – Lebanon, Beirut, Barbour, Zrek Street, Najmat almazraa building, Eighth floor- company number 1028098. (Arrow trade offices: 2nd floor Hazmieh, Baabda Real Estate, Property 4370 sections 20/021, Beirut, Lebanon).",
    descriptionTwo:
      "Arrow Trade S.A.R.L (Lebanon) is the sole entity authorized to operate the MetaTrader platform under our license. No other companies are involved in the operation or management of our MetaTrader license.",
  },
];

export const MEDIA_ICON_LIST: MediaIconList[] = [
  {
    icon: <FacebookIcon />,
    link: "https://facebook.com",
  },
  {
    icon: <InstaIcon />,
    link: "https://instagram.com",
  },
  {
    icon: <YTIcon />,
    link: "https://youtube.com",
  },
  {
    icon: <TikTokIcon />,
    link: "https://tiktok.com",
  },
  {
    icon: <XIcon />,
    link: "https://x.com",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://linkedin.com",
  },
];

export const MARKET_INSIGHTS_LIST: MarketInsightsList[] = [
  {
    title: "Real-Time Analytics",
    description:
      "AI can process and analyze data from various sources, such as financial statements, price movements, market sentiment, and even social media trends, providing instant feedback and analysis.",
  },
  {
    title: "News Updates",
    description:
      "AI tools can sift through the noise of constant news flows and pinpoint stories that are most relevant to your investments. Whether it’s economic reports, geopolitical events, or corporate announcements, AI can identify which developments are likely to move markets.",
  },
  {
    title: "Expert Market Research",
    description:
      "Advanced algorithms can synthesize historical data with current market trends to forecast potential outcomes, offering the insights of seasoned market experts at your fingertips.",
  },
];

export const CHANGING_GAME_LIST: ChangingGameList[] = [
  {
    title: "1. Faster Decision-Making",
    description:
      "In the world of trading and investing, speed is critical. AI systems can analyze millions of data points in seconds, giving you an edge in making quick decisions. For example, when news breaks about a company’s earnings report, AI systems can immediately assess the market’s reaction and provide insights on whether it's a buying or selling opportunity.",
  },
  {
    title: "2. Enhanced Accuracy and Predictive Power",
    description:
      "Human traders and investors are often prone to cognitive biases, such as overconfidence or emotional decision-making. AI removes these limitations by relying solely on data and algorithms. With machine learning, AI can improve over time, identifying patterns and trends that humans may overlook. This leads to more accurate predictions about market movements, asset prices, and investment risks.",
  },
  {
    title: "3. Customized Insights for Individual Strategies",
    description:
      "AI-driven analytics can tailor insights to your specific trading or investment strategy. Whether you’re a day trader looking for short-term opportunities or a long-term investor analyzing market fundamentals, AI can filter out irrelevant information and deliver insights that align with your goals. This level of personalization was previously unavailable in traditional market research.",
  },
];
