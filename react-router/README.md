# React router

Les routes peuvent prendre un grand nombre de propriétés :
```js
interface RouteObject {
  path?: string;
  index?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  element?: React.ReactNode | null;
  errorElement?: React.ReactNode | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
}
```

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    loader: async () => {
      const response = await fetch('/api/data');
      return response.json();
    },
  },
  {
    path: '/login',
    element: <Login />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const email = formData.get('email');
      const password = formData.get('password');

      // Envoyer les données à l'API
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      return response.json();
    },
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

```
