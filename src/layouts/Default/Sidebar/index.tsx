import { Sidebar as FlowbiteSidebar, type CustomFlowbiteTheme } from 'flowbite-react';
import React, { type ComponentProps, type FC } from 'react';
import { HiChat, HiCog, HiFolderOpen, HiHome, HiQuestionMarkCircle } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

interface MenuListItemProps {
  label: string;
  route: string;
  icon: FC<ComponentProps<'svg'>>;
  active?: boolean;
}

// @TODO Report the bug to flowbite-react
// the customization isn't pass to the child components
const SidebarTheme: CustomFlowbiteTheme['sidebar'] = {};

const Sidebar: React.FC = () => {
  const mainMenuItems: MenuListItemProps[] = [
    { label: 'Dashboard', route: '/', icon: HiHome, active: true },
    { label: 'Courses', route: '/courses', icon: HiFolderOpen },
    { label: 'Progress', route: '/analytics/my-progress', icon: HiChat },
  ];

  const settingsMenuItems = [
    { label: 'Help', route: '/support', icon: HiQuestionMarkCircle },
    { label: 'Settings', route: '/account/settings', icon: HiCog },
  ];

  return (
    <FlowbiteSidebar
      theme={SidebarTheme}
      collapsed={true}
      data-testid="sidebar-element"
      aria-label="Sidebar navigation"
    >
      <FlowbiteSidebar.Items className="flex flex-col justify-between h-full -margin-[60px]">
        <FlowbiteSidebar.ItemGroup>
          {mainMenuItems.map(({ label, route, icon, active = false }: MenuListItemProps) => (
            <FlowbiteSidebar.Item key={route} href={route} icon={icon} active={active}>
              {label}
            </FlowbiteSidebar.Item>
          ))}
        </FlowbiteSidebar.ItemGroup>
        <FlowbiteSidebar.ItemGroup>
          {settingsMenuItems.map(({ label, route, icon, active = false }: MenuListItemProps, key) => (
            <FlowbiteSidebar.Item as={NavLink} key={key} href={route} icon={icon} active={active}>
              {label}
            </FlowbiteSidebar.Item>
          ))}
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};

export default Sidebar;
