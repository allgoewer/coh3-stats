import { IconButton } from "../icon-button/icon-button";

export interface XboxProps {
  label?: React.ReactNode;
  size?: number;
  mode?: "icon-button" | "svg";
}

export const XboxIcon: React.FC<XboxProps> = ({ label, size = 22, mode = "icon-button" }) => {
  const XboxSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1331.67 1333.33"
      width={size}
      height={size}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M665.83 534.66s1.66 0 0 0c200.91 152.76 541.3 528.02 438.35 634.29-117.89 102.95-270.65 164.39-438.35 164.39-167.7 0-322.13-61.44-438.35-164.39-104.61-106.27 237.44-481.53 436.69-632.63 0-1.66 1.66-1.66 1.66-1.66zm347.03-436.7C911.57 36.52 800.32-.01 665.83-.01c-134.5 0-245.74 36.53-347.03 97.97-1.66 0-1.66 1.66-1.66 3.32s1.66 1.66 3.32 1.66c129.51-28.23 325.44 83.02 343.71 94.65h3.32c18.26-11.62 214.2-122.87 343.71-94.65 1.66 0 3.32 0 3.32-1.66s0-3.32-1.66-3.32zm-813.61 92.98c-1.66 0-1.66 1.66-3.32 1.66C74.72 313.81 0 481.52 0 665.82c0 151.1 51.48 292.24 136.16 403.49 0 1.66 1.66 1.66 3.32 1.66s1.66-1.66 0-3.32C88 909.91 348.69 529.67 483.19 370.26l1.66-1.66c0-1.66 0-1.66-1.66-1.66-204.23-202.57-272.31-180.99-283.93-176.01zm649.23 174.35l-1.66 1.66s0 1.66 1.66 1.66C982.98 528.01 1242 908.26 1192.19 1066v3.32c1.66 0 3.32 0 3.32-1.66 84.68-111.25 136.16-252.39 136.16-403.49 0-184.31-74.72-352.01-197.59-473.22-1.66-1.66-1.66-1.66-3.32-1.66-9.96-3.32-78.04-24.91-282.27 176.01z"
        fill="#107b10"
        fillRule="nonzero"
      />
    </svg>
  );

  if (mode === "svg") {
    return XboxSvg;
  }

  return <IconButton label={label || "Xbox Live"}>{XboxSvg}</IconButton>;
};
