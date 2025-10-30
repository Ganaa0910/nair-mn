import logo from "/logo.jpg?url";

export interface MenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}

export interface SocialItem {
  label: string;
  link: string;
}

export interface ArtService {
  title: string;
  image: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  {
    label: "Багц хөтөлбөр",
    ariaLabel: "Go to package programs",
    link: "#package-programs",
  },
  {
    label: "Үйлчилгээ",
    ariaLabel: "View art performances",
    link: "#art-performances",
  },
  { label: "Контент", ariaLabel: "View content", link: "#content" },
  { label: "Холбоо барих", ariaLabel: "Read articles", link: "#footer" },
];

export const socialItems: SocialItem[] = [
  { label: "Facebook", link: "https://www.facebook.com/NAIR.entertainment" },
  {
    label: "Instagram",
    link: "https://www.instagram.com/nair.entertainment/",
  },
  { label: "YouTube", link: "https://www.youtube.com/@Nair.entertainment" },
];

export const artServices: ArtService[] = [
  {
    title: "Бэр гуйх ёслол",
    image: "/ber-guih.jpg",
    description: "Уламжлалт бэр гуйх ёслолын тоглолт",
  },
  {
    title: "Шинэ гэрийн найр",
    image: "/shine-geriin-nair.jpg",
    description: "Шинэ гэр барисны баяр ёслолын найр",
  },
  {
    title: "Одонгийн цайллага найр",
    image: "/odongiin-nair.jpg",
    description: "Одонгийн цайллагын тусгай найр",
  },
  {
    title: "Цагаан сар",
    image: "/tsagaan-sar.jpg",
    description: "Цагаан сарын баярын тоглолт",
  },
  {
    title: "Төслийн нээлт, Байгууллагын арга хэмжээ",
    image: "/tusliin-neelt.jpg",
    description: "Албан ёсны арга хэмжээний тоглолт",
  },
  {
    title: "Хүндэтгэлийн хүлээн авалт, Жуулчны тоглолт",
    image: "/huleen-avalt.jpg",
    description: "Зочид, жуулчдын хүлээн авалтын тоглолт",
  },
  {
    title: "Сэвлэг үргээх ёслол",
    image: "/sevleg-urgeeh.jpg",
    description: "Сэвлэг үргээх ёслолын найр",
  },
  {
    title: "Хурим",
    image: "/hurim.jpg",
    description: "Хуримын ёслолын тоглолт",
  },
];

export const youtubeVideoData: string[] = [
  "mCXgzPP1sh8",
  "Ze4FNHIv8pQ",
  "lHT7gVDDVHE",
  "iz7wXlVQjj8",
  "z25wCzCjoC0",
  "dKySWwfq1Ig",
  "jefLAGVStcY",
  "yOpSK8uIt0M",
  "cdAiTMhF3OE",
  "CluFAVM7AWI",
  "L96c3qf57rA",
  "wYYroSSVYBY",
  "Ujt_-t3M0E8",
  "hzwyuI94mGE",
  "uhHKChAZI6Y",
  "Ob8u4zxf7HA",
  "rdQ-F1tcBK4",
  "49aZsVS7A5s",
  "oAer8J5CYZA",
  "6fkt27_Io40",
  "dy9Zf_0LGZU",
  "-GsHnI5gwzU",
  "1BFmL8SiCTE",
];

export const youtubeThumbnails = youtubeVideoData.map((videoId) => ({
  src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  alt: "Nair Entertainment Performance",
  videoId: videoId,
}));

export { logo };