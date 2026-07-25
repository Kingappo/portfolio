import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

NProgress.configure({
  color: "#eab308", // yellow color
  showSpinner: false,
});

export const useNProgress = () => {
  const start = () => NProgress.start();
  const done = () => NProgress.done();
  return { start, done };
};
