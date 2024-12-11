import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "OS/RR Parser",
      src: "/features/OS_RR_Parser.jpg",
    },
    {
      title: "Auto UW",
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-RQfSIqLuTHs",
    },
    {
      title: "Invest Assist",
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-RQfSIqLuTHs",
    },
    {
      title: "OM Parser",
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-RQfSIqLuTHs",
    },
    {
      title: "Apparisal Parser",
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-RQfSIqLuTHs",
    },
    {
      title: "Accord Parser",
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-RQfSIqLuTHs",
    },
    {
      title: "Smart Extract",
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-RQfSIqLuTHs",
    },
    {
      title: "Commercial News",
      src: "https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-RQfSIqLuTHs",
    },
  ];

  return <FocusCards cards={cards} />;
}
