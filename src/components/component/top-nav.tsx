
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { ModeToggle } from "../mode-toggle"

export function TopNav() {
  return (
    <nav className="flex flex-col w-full border-b border-gray-200 dark:border-gray-800">
      <div className="hidden md:flex items-center justify-between px-6 py-2">
        <a className="flex items-center gap-2 text-xl font-semibold" href="#">
          <PackageIcon className="h-6 w-6" />
          <span>Financial Dashboard</span>
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <a className="group flex items-center gap-1.5 transition-colors hover:underline" href="#">
            About
          </a>
          <a className="group flex items-center gap-1.5 transition-colors hover:underline" href="#">
            Features
          </a>
          <a className="group flex items-center gap-1.5 transition-colors hover:underline" href="#">
            Pricing
          </a>
          <a className="group flex items-center gap-1.5 transition-colors hover:underline" href="#">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-6">
          <Button size="icon" variant="outline">
            <SearchIcon className="w-4 h-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button size="icon" variant="outline">
            <BellIcon className="w-4 h-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <ModeToggle />
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between px-6 py-2">
        <a className="flex items-center gap-2 text-xl font-semibold" href="#">
          <PackageIcon className="h-6 w-6" />
          <span>Financial Dashboard</span>
        </a>
        <Sheet>
          <div className="flex items-center">
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <MenuIcon className="w-8 h-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <ModeToggle />
          </div>
          <SheetContent className="p-2" side="top">
            <div className="grid gap-4 text-center">
              <a className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="#">
                About
              </a>
              <a className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="#">
                Features
              </a>
              <a className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="#">
                Pricing
              </a>
              <a className="group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50" href="#">
                Contact
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
