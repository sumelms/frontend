import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import React, { ComponentProps, FC } from 'react';
import {
  HiChat,
  HiCog,
  HiFolderOpen,
  HiHome,
  HiQuestionMarkCircle,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

interface MenuListProps {
  items: MenuListItemProps[];
}

interface MenuListItemProps {
  label: string;
  route: string;
  icon: FC<ComponentProps<'svg'>>;
}

const Sidebar: React.FC = () => {
  const mainMenuItems: MenuListItemProps[] = [
    { label: 'Dashboard', route: '/', icon: HiHome },
    { label: 'Courses', route: '/', icon: HiFolderOpen },
    { label: 'Progress', route: '/', icon: HiChat },
  ];

  const settingsMenuItems = [
    { label: 'Help', route: '/', icon: HiQuestionMarkCircle },
    { label: 'Settings', route: '/', icon: HiCog },
  ];

  return (
    <div className="h-screen" data-testid="sidebar-element">
      <FlowbiteSidebar collapsed={true} aria-label="Sidebar navigation">
        <FlowbiteSidebar.Items>
          <FlowbiteSidebar.ItemGroup>
            {mainMenuItems.map(({ label, route, icon }: MenuListItemProps) => (
              <FlowbiteSidebar.Item key={route} href="#" icon={icon}>
                {label}
              </FlowbiteSidebar.Item>
            ))}
          </FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.ItemGroup>
            {settingsMenuItems.map(
              ({ label, route, icon }: MenuListItemProps) => (
                <FlowbiteSidebar.Item key={route} href="#" icon={icon}>
                  {label}
                </FlowbiteSidebar.Item>
              ),
            )}
          </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.Items>
      </FlowbiteSidebar>
    </div>
  );
};

export default Sidebar;
