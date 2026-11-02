import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import WebsiteLayout from "../layouts/WebsiteLayout";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Loading component
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Website Routes */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}