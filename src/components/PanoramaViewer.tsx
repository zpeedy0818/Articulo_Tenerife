"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface PanoramaViewerProps {
  imageUrl: string;
}

export function PanoramaViewer({ imageUrl }: PanoramaViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
    // Inside the sphere
    const cameraTarget = new THREE.Vector3(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Geometry (Sphere)
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    // Invert the geometry on the x-axis so that the faces point inward
    geometry.scale(-1, 1, 1);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      imageUrl,
      () => {
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error("Error loading panorama texture:", err);
        setLoading(false);
      }
    );

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Interaction variables
    let isUserInteracting = false;
    let onPointerDownMouseX = 0;
    let onPointerDownMouseY = 0;
    let lon = 0;
    let onPointerDownLon = 0;
    let lat = 0;
    let onPointerDownLat = 0;
    let phi = 0;
    let theta = 0;

    const onPointerDown = (event: PointerEvent) => {
      if (event.isPrimary === false) return;
      isUserInteracting = true;
      onPointerDownMouseX = event.clientX;
      onPointerDownMouseY = event.clientY;
      onPointerDownLon = lon;
      onPointerDownLat = lat;
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.isPrimary === false) return;
      if (isUserInteracting === true) {
        lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
        lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.isPrimary === false) return;
      isUserInteracting = false;
      container.style.cursor = "grab";
    };

    // Event listeners
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    container.style.cursor = "grab";

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Latitudes limit
      lat = Math.max(-85, Math.min(85, lat));
      phi = THREE.MathUtils.degToRad(90 - lat);
      theta = THREE.MathUtils.degToRad(lon);

      // Spherical coordinates conversion to vector
      cameraTarget.x = 500 * Math.sin(phi) * Math.sin(theta);
      cameraTarget.y = 500 * Math.cos(phi);
      cameraTarget.z = 500 * Math.sin(phi) * Math.cos(theta);

      camera.lookAt(cameraTarget);

      // Slowly rotate camera when user is not interacting (simulates idle panorama rotation)
      if (!isUserInteracting) {
        lon += 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [imageUrl]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 select-none">
      <div ref={mountRef} className="w-full h-full" />
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-paramo-dark)]/90 text-[var(--color-paramo-bone)] gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-[var(--color-paramo-yellow)] border-t-transparent animate-spin" />
          <p className="font-sans text-sm uppercase tracking-widest text-[var(--color-paramo-fog)]">Cargando entorno 3D...</p>
        </div>
      )}
      <div className="absolute top-4 left-4 glassmorphism px-4 py-2 rounded-full pointer-events-none">
        <p className="font-sans text-xs text-[var(--color-paramo-yellow)] uppercase tracking-wider font-semibold">
          ↔ Arrastra para mirar en 360°
        </p>
      </div>
    </div>
  );
}
