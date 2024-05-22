"use client";
import { useQRCode } from "next-qrcode";

export default function QRCode({ link }: { link: string }) {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={link}
      options={{
        errorCorrectionLevel: "M",
        margin: 3,
        scale: 4,
        width: 300,
      }}
    />
  );
}
