import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../../utils/menuItems';

function NavigationMenu() {
  return (
    <div className="navigation-menu">
      {menuItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <NavLink
            to={item.link}
            className="items"
            style={({ isActive }) =>
              isActive
                ? {
                    color: 'rgb(58, 170, 84)',
                    fontWeight: 'bold',
                    padding: '5px 10px',
                    borderRadius: '5px',
                  }
                : undefined
            }
          >
            {item.title}
          </NavLink>
          {/* Add separator only if not the last item */}
          {index < menuItems.length - 1 && <span> | </span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavigationMenu;
