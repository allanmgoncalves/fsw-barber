import { MenuIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Header() {
  return (
    <Card className="rounded-none border-0 border-b">
      <CardContent className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5">
        <Image
          src="/logo-fsw-barbershop.svg"
          width={120}
          height={18}
          alt="FSW Barber"
        />
        <Button size={"icon"} variant={"outline"}>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
