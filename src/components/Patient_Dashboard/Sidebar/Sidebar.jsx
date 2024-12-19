import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import Tooltip from "../../../ui/Tooltip";
import { DashboardContext } from "../../../context/DashboardContext/DashboardContext";

const Sidebar = () => {
  const { collapsed, setCollapsed } = useContext(DashboardContext);

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };
  const { username } = useParams(); // Get username from the URL

  const sidebarData = [
    {
      id: 1,
      title: "Profile",
      imgSrc: "/icons/user.svg",
      href: `/user/${username}/profile`,
    },
    {
      id: 2,
      title: "Dashboard",
      imgSrc: "/icons/dashboard.svg",
      href: `/user/${username}/dashboard`,
    },
    {
      id: 3,
      title: "Notifications",
      imgSrc: "/icons/notification.svg",
      href: `/user/${username}/notifications`,
    },
    {
      id: 4,
      title: "Bookings",
      imgSrc: "/icons/bookings.svg",
      href: `/user/${username}/bookings`,
    },
    {
      id: 5,
      title: "Appointments",
      imgSrc: "/icons/appointments.svg",
      href: `/user/${username}/appointments`,
    },
    {
      id: 6,
      title: "Prescription",
      imgSrc: "/icons/prescription.svg",
      href: `/user/${username}/prescription`,
    },
    {
      id: 7,
      title: "Tests",
      imgSrc: "/icons/test.svg",
      href: `/user/${username}/tests`,
    },
    {
      id: 8,
      title: "Yoga",
      imgSrc: "/icons/yoga.svg",
      href: `/user/${username}/yoga`,
    },
    {
      id: 9,
      title: "Diets",
      imgSrc: "/icons/diet.svg",
      href: `/user/${username}/diets`,
    },
    {
      id: 10,
      title: "Bill / Receipts",
      imgSrc: "/icons/bill.svg",
      href: `/user/${username}/bills`,
    },
    {
      id: 11,
      title: "Uploads",
      imgSrc: "/icons/upload.svg",
      href: `/user/${username}/uploads`,
    },
    {
      id: 12,
      title: "Consents",
      imgSrc: "/icons/consent.svg",
      href: `/user/${username}/consents`,
    },
    {
      id: 13,
      title: "Offers",
      imgSrc: "/icons/offer.svg",
      href: `/user/${username}/offers`,
    },
  ];
  return (
    <aside
      className={`fixed shadow-xl flex h-[calc(92vh)] ${
        collapsed ? "w-[70px] items-center" : "w-[240px]"
      } flex-col border-r border-gray-300 bg-[#F8FAFC] transition-all ease-[0.22, 1, 0.36, 1] duration-500`}
    >
      {/* Header with Toggle Button */}
      <div className="flex items-center justify-between p-3 pb-0">
        {!collapsed && (
          <h2 className="text-lg font-bold text-gray-900">Menu</h2>
        )}
        <button
          onClick={toggleCollapse}
          className="rounded bg-gray-200 p-2 text-sm text-gray-800 hover:bg-gray-300"
          aria-label="Toggle Sidebar"
        >
          {collapsed ? (
            <img src="/icons/openside.svg" alt="open" className="h-5 w-5" />
          ) : (
            <img src="/icons/closeside.svg" alt="close" className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Sidebar Menu */}

      <div className="flex flex-1 flex-col gap-y-1 p-3 pb-0">
        {sidebarData.map((item) => (
          <NavLink
            key={item.id}
            to={item.href}
            className={`flex items-center gap-x-3 hover:rounded-md p-2 text-gray-900 hover:bg-gray-200 border-b ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <Tooltip text={item.title}>
              <img
                src={item.imgSrc}
                alt={`${item.title} icon`}
                className="h-6 w-6"
              />
            </Tooltip>
            {!collapsed && <span className="text-sm">{item.title}</span>}
          </NavLink>
        ))}
      </div>

      {/* Footer Section */}

      <div className="flex items-center justify-between p-3">
        {!collapsed && (
          <h2 className="text-md font-bold text-gray-900">
            © 2024 Company Name
          </h2>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
