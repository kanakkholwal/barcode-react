import JsBarcode from "jsbarcode";
import type React from "react";
import { useEffect, useMemo, useRef } from "react";

export interface Options {
  width?: number;
  height?: number;
  renderer?: "canvas" | "img" | "svg";
  format?:
    | "CODE39"
    | "CODE128"
    | "CODE128A"
    | "CODE128B"
    | "CODE128C"
    | "EAN13"
    | "EAN8"
    | "EAN5"
    | "EAN2"
    | "UPC"
    | "UPCE"
    | "ITF14"
    | "ITF"
    | "MSI"
    | "MSI10"
    | "MSI11"
    | "MSI1010"
    | "MSI1110"
    | "pharmacode"
    | "codabar"
    | "GenericBarcode";
  displayValue?: boolean;
  fontOptions?: string;
  font?: string;
  textAlign?: string;
  textPosition?: string;
  textMargin?: number;
  fontSize?: number;
  background?: string;
  lineColor?: string;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  id?: string;
  className?: string;
  ean128?: boolean;
}

export interface BarcodeProps extends Options {
  value: string;
}

const defaultOptions: Options = {
  width: 2,
  height: 100,
  format: "CODE128",
  displayValue: true,
  fontOptions: "",
  font: "monospace",
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  ean128: false,
};

function Barcode({
  value,
  className = "",
  renderer = "svg",
  id = "barcode-react",
  ...props
}: BarcodeProps) {
  const renderElementRef = useRef<SVGSVGElement | HTMLCanvasElement | HTMLImageElement | null>(null);

  // Memoize options to prevent re-creation on every render
  const barcodeOptions = useMemo(
    () => ({
      ...defaultOptions,
      ...props,
    }),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [props] // Only re-create when props change
  );
  useEffect(() => {
    if (!renderElementRef.current) return;

    try {
      JsBarcode(renderElementRef.current, value, barcodeOptions);
    } catch (error) {
      console.error("Error generating barcode:", error);
    }
  }, [value, barcodeOptions]);

  if (renderer === "svg") {
    return <svg ref={renderElementRef as React.RefObject<SVGSVGElement>} id={id} className={className} />
  }
  if (renderer === "canvas") {
    return <canvas ref={renderElementRef as React.RefObject<HTMLCanvasElement>} id={id} className={className} />
  }
  if (renderer === "img") {
    return <img ref={renderElementRef as React.RefObject<HTMLImageElement>} id={id} className={className} alt={`Barcode for ${value}`} />
  }

  return null;
}

export default Barcode;
