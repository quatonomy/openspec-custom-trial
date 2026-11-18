import {  NavLink, Outlet } from 'react-router-dom';
import './layout.css';

export function Layout() {
    return (
        <div className="app-layout">
            <aside className="sidebar">
                <h2 className="sidebar-title">My Application</h2>

                <nav className="sidebar-nav">
                    <NavLink to="/" end>
                        Home
                    </NavLink>

                    <NavLink to="/users">
                        Users
                    </NavLink>

                    <NavLink to="/user">
                        User
                    </NavLink>

                </nav>
            </aside>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}
