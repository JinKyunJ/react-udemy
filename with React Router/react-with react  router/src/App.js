import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

// http:(프로토콜)//example.com(도메인)/도메인 뒤에 있는 부분이 경로(path)
// { path: '/' 도메인 뒤에 아무것도 없을때, element: <Example />(라우터가 활성화 되면 로딩되어야 하는 컴포넌트 정보) }

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
