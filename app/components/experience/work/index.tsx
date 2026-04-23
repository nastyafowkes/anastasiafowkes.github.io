import { ScrollControls } from "@react-three/drei";
import { usePortalStore, useScrollStore } from "@stores";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Memory } from "../../models/Memory";
import Timeline from "./Timeline";

const Work = () => {
  const isActive = usePortalStore((state) => state.activePortalId === 'work');
  const { scrollProgress, setScrollProgress } = useScrollStore();
  const progressRef = useRef(0);
  const touchStartY = useRef(0);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    event.stopPropagation();
    progressRef.current = Math.min(Math.max(progressRef.current + event.deltaY / 2000, 0), 1);
    setScrollProgress(progressRef.current);
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const delta = touchStartY.current - event.touches[0].clientY;
    touchStartY.current = event.touches[0].clientY;
    progressRef.current = Math.min(Math.max(progressRef.current + delta / 2000, 0), 1);
    setScrollProgress(progressRef.current);
  };

  useEffect(() => {
    if (isActive) {
      progressRef.current = 0;
      setScrollProgress(0);
      window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
      window.addEventListener('touchstart', handleTouchStart, { capture: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: false, capture: true });
    } else {
      progressRef.current = 0;
      setScrollProgress(0);
      window.removeEventListener('wheel', handleWheel, { capture: true });
      window.removeEventListener('touchstart', handleTouchStart, { capture: true });
      window.removeEventListener('touchmove', handleTouchMove, { capture: true });
    }
    return () => {
      window.removeEventListener('wheel', handleWheel, { capture: true });
      window.removeEventListener('touchstart', handleTouchStart, { capture: true });
      window.removeEventListener('touchmove', handleTouchMove, { capture: true });
    };
  }, [isActive]);

  return (
    <group>
      <mesh receiveShadow>
        <planeGeometry args={[4, 4, 1]} />
        <shadowMaterial opacity={0.1} />
      </mesh>
      <ScrollControls style={{ zIndex: -1 }} pages={2} maxSpeed={0.4}>
        <Memory scale={new THREE.Vector3(5, 5, 5)} position={new THREE.Vector3(0, -6, 1)} />
        <Timeline progress={isActive ? scrollProgress : 0} />
      </ScrollControls>
    </group>
  );
};

export default Work;
