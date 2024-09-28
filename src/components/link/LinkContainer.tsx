// import { Button } from "../ui/button";
import LinkCard from "./LinkCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

const LinkContainer = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/links.json")
      .then((response) => response.json())
      .then((data) => setLinks(data))
      .catch((error) => console.error("Error fetching links:", error));
  }, []);

  const demoLinks = [
    {
      id: 1,
      name: "Google",
      url: "https://www.google.com",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
    },
  ];

  return (
    <div>
      {/* <h1 className="font-bold text-3xl text-center my-8">My Links</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-full font-bold text-xl">Create Link</Button>
            {/* <Button variant="outline" className="h-full ">
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
            </Button> */}
          </DialogTrigger>

          {links.map((link, index) => (
            <LinkCard key={index} name={link.name} url={link.url} />
          ))}
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Link</DialogTitle>
              <DialogDescription>
                Create your link here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Website" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="link" className="text-right">
                  Link
                </Label>
                <Input id="link" value="https://www." className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Link</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default LinkContainer;
