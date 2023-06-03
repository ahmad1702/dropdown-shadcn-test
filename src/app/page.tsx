import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="mx-5">
          <Button>Action</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-[#1e1e2d] dark:text-gray-500">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  )
}
