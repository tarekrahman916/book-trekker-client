/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layout/MainLayout";
import { auth } from "./lib/firebase";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { useAppDispatch } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <MainLayout />
    </>
  );
}

export default App;
