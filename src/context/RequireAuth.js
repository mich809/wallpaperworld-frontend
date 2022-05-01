import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
	const location = useLocation();

	return localStorage.getItem("token") !== null ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default RequireAuth;
