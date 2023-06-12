"use client";
import { useEffect } from "react";

export default function AOSAnimation({ children }) {
  // AOS animation
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return <div> {children} </div>;
}
