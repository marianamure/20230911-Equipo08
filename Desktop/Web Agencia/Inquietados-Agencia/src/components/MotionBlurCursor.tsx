import React, { useEffect, useRef } from "react";

const MotionBlurCursor: React.FC = () => {
  const cursorRef = useRef<SVGSVGElement>(null);
  const filterRef = useRef<SVGFEGaussianBlurElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !filterRef.current) return;

    const cursor = cursorRef.current;
    const filter = filterRef.current;

    let previousPointerX = 0;
    let previousPointerY = 0;
    let angle = 0;
    let previousAngle = 0;
    let moving = false;

    const cursorSize = 25;
    const degrees = 57.296;

    // Aplicar estilos al cursor
    Object.assign(cursor.style, {
      boxSizing: "border-box",
      position: "fixed",
      top: `${cursorSize / -2}px`,
      left: `${cursorSize / -2}px`,
      zIndex: "2147483647",
      width: `${cursorSize}px`,
      height: `${cursorSize}px`,
      borderRadius: "50%",
      overflow: "visible",
      transition: "200ms, transform 10ms",
      userSelect: "none",
      pointerEvents: "none",
    });

    // Mostrar el cursor
    cursor.removeAttribute("hidden");

    const move = (event: MouseEvent) => {
      const pointerX = event.pageX + document.body.getBoundingClientRect().x;
      const pointerY = event.pageY + document.body.getBoundingClientRect().y;
      const distanceX = Math.min(
        Math.max(previousPointerX - pointerX, -20),
        20
      );
      const distanceY = Math.min(
        Math.max(previousPointerY - pointerY, -20),
        20
      );

      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      rotate({ distanceX, distanceY });
      if (!moving) moving = true;
      previousPointerX = pointerX;
      previousPointerY = pointerY;
    };

    const rotate = (position: { distanceX: number; distanceY: number }) => {
      let unsortedAngle =
        Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) *
        degrees;

      if (isNaN(unsortedAngle)) {
        angle = previousAngle;
      } else {
        if (unsortedAngle <= 45) {
          if (position.distanceX * position.distanceY >= 0) {
            angle = +unsortedAngle;
          } else {
            angle = -unsortedAngle;
          }
          filter.setAttribute(
            "stdDeviation",
            `${Math.abs(position.distanceX / 2)}, 0`
          );
        } else {
          if (position.distanceX * position.distanceY <= 0) {
            angle = 180 - unsortedAngle;
          } else {
            angle = unsortedAngle;
          }
          filter.setAttribute(
            "stdDeviation",
            `${Math.abs(position.distanceY / 2)}, 0`
          );
        }
      }
      cursor.style.transform += ` rotate(${angle}deg)`;
      previousAngle = angle;
    };

    const stop = () => {
      setTimeout(() => {
        filter.setAttribute("stdDeviation", "0, 0");
        moving = false;
      }, 50);
    };

    // Agregar el evento de movimiento del mouse
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      document.addEventListener("mousemove", move);
    } else {
      cursor.remove();
    }

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <svg ref={cursorRef} className="curzr" hidden>
      <filter id="motionblur" x="-100%" y="-100%" width="400%" height="400%">
        <feGaussianBlur
          ref={filterRef}
          className="curzr-motion-blur"
          stdDeviation="0, 0"
        />
      </filter>
      <circle
        cx="50%"
        cy="50%"
        r="10"
        fill="#120D27"
        filter="url(#motionblur)"
      />
    </svg>
  );
};

export default MotionBlurCursor;
