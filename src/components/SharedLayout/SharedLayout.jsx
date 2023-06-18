import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <NavLink className={css.link} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
