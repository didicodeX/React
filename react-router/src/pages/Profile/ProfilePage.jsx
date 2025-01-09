import { NavLink, Outlet, useParams, useSearchParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();

  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>
          <NavLink
            end
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="data"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Data
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
