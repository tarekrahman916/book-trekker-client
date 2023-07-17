/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { setLoading } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>;{dispatch(setLoading(false))}
      </>
    );
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}
