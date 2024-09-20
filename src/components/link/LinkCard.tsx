import { Button } from "../ui/button";

const LinkCard = ({ websiteName, websiteUrl }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="cursor-pointer flex items-center bg-gradient-to-b from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-lg border-2 shadow-sm hover:shadow-md pr-2">
      <a
        className="p-2 flex gap-4 items-center grow"
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        // onClick={() => openInNewTab("https://www.example.com")}
      >
        <img src={`${websiteUrl}/favicon.ico`} className="size-8" alt="M" />
        <div className="grow">
          <h2 className="text-lg font-semibold">{websiteName}</h2>
          <p className="text-sm text-gray-500">{websiteUrl}</p>
        </div>
      </a>
      <Button
        onClick={() => alert("buttonclicked")}
        variant="outline"
        size="icon"
        className=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      </Button>
    </div>
  );
};

export default LinkCard;
