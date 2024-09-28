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

// Define a type for the link structure
interface Link {
  id: number;
  name: string;
  url: string;
}

const LinkContainer: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]); // Use the Link type for state

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/links.json")
      .then((response) => response.json())
      .then((data: Link[]) => setLinks(data)) // Type the fetched data
      .catch((error) => console.error("Error fetching links:", error));
  }, []);

  return (
    <div>
      {/* <h1 className="font-bold text-3xl text-center my-8">My Links</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-full font-bold text-xl">Create Link</Button>
          </DialogTrigger>

          {links.map((link) => (
            <LinkCard key={link.id} name={link.name} url={link.url} /> // Use link.id as the key
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
