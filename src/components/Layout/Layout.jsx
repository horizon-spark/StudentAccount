import { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Icon, Drawer, Avatar, Text } from '@gravity-ui/uikit';
import { Bars, ArrowRightFromSquare, House } from '@gravity-ui/icons';
import NavigationGrid from '../NavigationGrid/NavigationGrid';
import { cabinetSections } from '@/config/navigation.js';
import { useAuthStore, useUserStore } from '@/store';
import './Layout.css';

export default function Layout() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const drawerContentRef = useRef(null);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  const user = useUserStore((s) => s.data);
  const userStatus = useUserStore((s) => s.status);
  const fetchUser = useUserStore((s) => s.fetch);

  useEffect(() => {
    if (userStatus === 'idle') fetchUser();
  }, [userStatus, fetchUser]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event) => {
      const node = drawerContentRef.current;
      if (node && !node.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMenuOpen]);

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-header-left">
          {user && (
            <div className="layout-header-user-info">
              <Avatar
                imgUrl={user.photoUrl}
                size="s"
                fallbackText={`${user.lastName?.[0] ?? ''}${user.firstName?.[0] ?? ''}`}
              />
              <div className="layout-header-user-text">
                <Text variant="body-2">
                  {user.lastName} {user.firstName}
                </Text>
                <Text variant="caption-2" color="secondary">
                  {user.group}
                </Text>
              </div>
            </div>
          )}
        </div>

        <div className="layout-header-right">
          <Button view="flat" onClick={handleHome} title="Главная">
            <Icon data={House} size={16} />
            <span className="layout-header-btn-text">Главная</span>
          </Button>

          <Button view="flat" onClick={handleLogout} title="Выйти">
            <Icon data={ArrowRightFromSquare} size={16} />
          </Button>

          <button className="layout-burger" onClick={openMenu} aria-label="Открыть навигацию">
            <Icon data={Bars} size={20} />
          </button>
        </div>
      </header>

      <div className="layout-body">
        <main className="layout-content">
          <Outlet />
        </main>

        <aside className="layout-nav layout-nav--desktop">
          <NavigationGrid sections={cabinetSections} />
        </aside>
      </div>

      <Drawer open={isMenuOpen} onClose={closeMenu} placement="right" className="layout-drawer">
        <div className="layout-drawer-inner" ref={drawerContentRef}>
          <NavigationGrid sections={cabinetSections} />
        </div>
      </Drawer>
    </div>
  );
}
