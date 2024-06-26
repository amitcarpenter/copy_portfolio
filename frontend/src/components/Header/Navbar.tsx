import { useState } from "react";

// import logo from "@/assets/images/logo.svg";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";

import { AiOutlineClose } from "react-icons/ai";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Services",
    link: "#",
  },
  {
    label: "About us",
    link: "#",
  },
  {
    label: "Features",
    link: "#",
    children: [
      {
        label: "Todo list",
        link: "#",
        iconImage: "",
      },
      {
        label: "Calendar",
        link: "#",
        iconImage: "",
      },
      {
        label: "Reminders",
        link: "#",
        iconImage: "",
      },
      {
        label: "Planning",
        link: "#",
        iconImage: "",
      },
    ],
  },
  {
    label: "Compnay",
    link: "#",
    children: [
      {
        label: "History",
        link: "#",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },

  {
    label: "blog ",
    link: "#",
  },
  {
    label: "Contact us",
    link: "#",
  },
];

export default function Navbar() {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <div className=" container-fluid mx-auto  flex  w-full max-w-7xl justify-between px-4 py-3  ">
      {/* left side  */}
      <section className="flex items-center gap-10">
        {/* logo */}
        <img src="https://www.technogiq.com/images/WhiteLogo.png" alt="logo" />
      </section>

      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
      {/* right side data */}
      <section className="hidden md:flex   items-center gap-8 ">
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <a
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex uppercase  tracking-widest text-sm font-bold cursor-pointer items-center gap-2 text-gray-800 group-hover:text-black ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0  hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <a
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <img src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </section>
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <a
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <a
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <img src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </a>
          ))}
        </div>
      )}
    </a>
  );
}
