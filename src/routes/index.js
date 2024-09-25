import { BrowserRouter, Route, Routes } from "react-router-dom";
import route from "./route";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {route.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
