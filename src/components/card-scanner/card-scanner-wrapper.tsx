"use client";

import dynamic from "next/dynamic";

export const CardScannerWrapper = dynamic(
  () => import("./card-scanner").then((mod) => mod.CardScanner),
  { ssr: false }
);
