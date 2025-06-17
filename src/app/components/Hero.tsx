import {ReactNode} from "react";

export function Hero({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`hero min-h-screen w-full ${className}`}>
      <div className='hero-content'>
        {/* CAROUSEL DISPLAY */}
        <div>{children}</div>
      </div>
    </div>
  );
}
