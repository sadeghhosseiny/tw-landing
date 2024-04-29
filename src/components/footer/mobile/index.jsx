import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import BankNotesIcon from "@heroicons/react/24/outline/BanknotesIcon";
import SearchIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import FilmIcon from "@heroicons/react/24/outline/FilmIcon";
import Text from "../../text"

const MobileFooter = () => {
  return (
    <footer className="flex items-center fixed bottom-0 bg-black py-3 px-10 justify-between w-full">
      <div className="flex flex-col items-center flex-grow">
        <HomeIcon className="size-8 text-gray-50" />
        <Text>خانه</Text>
      </div>
      <div className="flex flex-col items-center flex-grow">
        <BankNotesIcon className="size-8 text-gray-50" />
        <Text>پخش زنده</Text>
      </div>
      <div className="flex flex-col items-center flex-grow">
        <SearchIcon className="size-8 text-gray-50" />
        <Text>جستجو</Text>
      </div>
      <div className="flex flex-col items-center flex-grow">
        <FilmIcon className="size-8 text-gray-50" />
        <Text>آرشیو محتوایی</Text>
      </div>
    </footer>
  )
}

export default MobileFooter