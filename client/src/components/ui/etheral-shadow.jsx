import { useEffect, useId, useRef } from "react";

function mapRange(value, fromLow, fromHigh, toLow, toHigh) {
  if (fromLow === fromHigh) {
    return toLow;
  }

  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

export function Component({
  sizing = "fill",
  color = "rgba(212, 175, 55, 0.9)",
  animation = { scale: 100, speed: 90 },
  noise = { opacity: 1, scale: 1.2 },
  style,
  className,
}) {
  const id = useId().replace(/:/g, "");
  const filterId = `shadowoverlay-${id}`;
  const feColorMatrixRef = useRef(null);
  const frameRef = useRef(null);

  const animationEnabled = animation && animation.scale > 0;
  const displacementScale = animation
    ? mapRange(animation.scale, 1, 100, 20, 100)
    : 0;
  const animationDuration = animation
    ? mapRange(animation.speed, 1, 100, 1000, 50)
    : 1;

  useEffect(() => {
    if (!animationEnabled || !feColorMatrixRef.current) {
      return undefined;
    }

    let startTime = null;

    const updateHue = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = (elapsed % (animationDuration * 40)) / (animationDuration * 40);
      const value = progress * 360;

      if (feColorMatrixRef.current) {
        feColorMatrixRef.current.setAttribute("values", String(value));
      }

      frameRef.current = window.requestAnimationFrame(updateHue);
    };

    frameRef.current = window.requestAnimationFrame(updateHue);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [animationDuration, animationEnabled]);

  return (
    <div
      className={className}
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -displacementScale,
          filter: animationEnabled ? `url(#${filterId}) blur(4px)` : "none",
        }}
      >
        {animationEnabled && (
          <svg style={{ position: "absolute" }}>
            <defs>
              <filter id={filterId}>
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  baseFrequency={`${mapRange(
                    animation.scale,
                    0,
                    100,
                    0.001,
                    0.0005
                  )},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`}
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix
                  ref={feColorMatrixRef}
                  in="undulation"
                  type="hueRotate"
                  values="180"
                />
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  scale={displacementScale}
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        )}

        <div
          style={{
            backgroundColor: color,
            maskImage:
              "url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')",
            maskSize: sizing === "stretch" ? "100% 100%" : "cover",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {noise && noise.opacity > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
            backgroundSize: noise.scale * 200,
            backgroundRepeat: "repeat",
            opacity: noise.opacity / 2,
          }}
        />
      )}
    </div>
  );
}
