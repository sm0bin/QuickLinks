import { Button } from "../ui/button";
import LinkCard from "./LinkCard";

const LinkContainer = () => {
  const demoLinks = [
    {
      websiteName: "Google",
      websiteUrl: "https://www.google.com",
    },
    {
      websiteName: "Facebook",
      websiteUrl: "https://www.facebook.com",
    },
    {
      websiteName: "Twitter",
      websiteUrl: "https://www.twitter.com",
    },
    {
      websiteName: "Instagram",
      websiteUrl: "https://www.instagram.com",
    },
    {
      websiteName: "LinkedIn",
      websiteUrl: "https://www.linkedin.com",
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-3xl text-center my-8">My Links</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 mx-2">
        <Button className="h-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="size-6"
          >
            <path
              //   strokeLinecap="round"
              //   strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
        {demoLinks.map((link, index) => (
          <LinkCard
            key={index}
            websiteName={link.websiteName}
            websiteUrl={link.websiteUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkContainer;
