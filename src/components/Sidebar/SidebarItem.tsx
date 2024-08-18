import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({
  onResourceSelect,
  item,
  level = 0,
  pageName,
  setPageName,
}: any) => {
  // Track which items are open
  const [openItems, setOpenItems] = useState<string[]>([]);
  const pathname = usePathname();

  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    setPageName(updatedPageName);

    // If the item is a resource (every resource requires description not to be empty), trigger the onResourceSelect callback
    if (item.description && onResourceSelect) {
      console.log(item);
      onResourceSelect(item);
    }
  };

  const toggleItem = (label: string) => {
    if (openItems.includes(label)) {
      setOpenItems(openItems.filter((item) => item !== label));
    } else {
      setOpenItems([...openItems, label]);
    }
  };

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);
  const isItemOpen = openItems.includes(item.label);

  return (
    <li>
      <Link
        href={item.route}
        onClick={() => {
          handleClick();
          if (item.children) toggleItem(item.label);
        }}
        // increase padding for nested items and background for the module (level 0)
        className={`px-${level * 4 + 4} ${isItemActive ? "bg-graydark dark:bg-meta-4" : ""} ${level === 0 ? "bg-primary dark:bg-meta-4" : ""} group relative
 flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
      >
        {item.icon}
        {item.label}
        {item.children && (
          <svg
            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
              isItemOpen ? "rotate-180" : ""
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
              fill=""
            />
          </svg>
        )}
      </Link>

      {item.children && isItemOpen && (
        <div className="translate transform overflow-hidden">
          <ul>
            {item.children.map((child: any) => (
              <SidebarItem
                key={child.label}
                item={child}
                // increase padding for nested items
                level={level + 1}
                pageName={pageName}
                setPageName={setPageName}
                onResourceSelect={onResourceSelect}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
