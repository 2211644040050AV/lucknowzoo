import React, { useState } from "react";
import { menuItems } from "../../utils/menuItems"; // Importing the menu items array

function NavigationMenu() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="navigation-menu">
        {menuItems.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <a
                className={`items ${active === item.id ? "active" : ""}`}
                href={item.link}
                onClick={() => setActive(item.id)} // Set active item on click
              >
                {item.title}
              </a>
              {index < menuItems.length - 1 && " | "} {/* Add pipe between links */}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default NavigationMenu;
