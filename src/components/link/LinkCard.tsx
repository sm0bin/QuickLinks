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

type TLinkCardProps = {
  name: string;
  url: string;
};

const LinkCard = ({ name, url }: TLinkCardProps) => {
  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  const truncateUrl = (url: string) => {
    const urlObj = new URL(url);
    return urlObj.hostname;
  };

  return (
    <Dialog>
      <div className="cursor-pointer flex items-center bg-gradient-to-b from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 rounded-lg border-2 shadow-sm hover:shadow-md pr-2">
        <a
          className="p-2 flex gap-4 items-center grow"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          // onClick={() => openInNewTab("https://www.example.com")}
        >
          <img src={`${url}/favicon.ico`} className="size-6" alt="" />
          <div className="grow">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{truncateUrl(url)}</p>
          </div>
        </a>
        <DialogTrigger asChild>
          {/* <Button variant="outline">Edit Profile</Button> */}
          <Button variant="outline" size="icon" className="">
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
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit link</DialogTitle>
          <DialogDescription>
            Make changes to your link here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link" className="text-right">
              Link
            </Label>
            <Input id="link" value={url} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LinkCard;
