"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export default function CinematicStoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Web Application / MVP",
    budget: "₹75,000 – ₹2,00,000",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const laptopRef = useRef<HTMLDivElement>(null);

  // Track overall scroll progress for the progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Dynamically import GSAP and Three.js to prevent SSR hydration errors
    let active = true;
    let renderer: any, scene: any, camera: any;
    let monolith: any, glassPanels: any[] = [], wireframeMockup: any, particleField: any, endRing: any;
    let ambientLight: any, directionalLight: any, pointLight: any;
    let scrollTriggerInstances: any[] = [];

    const initImmersiveExperience = async () => {
      // ─── IMPORT THREE & GSAP CLIENT-SIDE ───
      const THREE = await import("three");
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (!active || !canvasRef.current) return;

      // ─── THREE.JS SCENE SETUP ───
      const width = window.innerWidth;
      const height = window.innerHeight;

      scene = new THREE.Scene();
      
      // Fog for atmospheric mystery
      scene.fog = new THREE.FogExp2(0x0a0705, 0.015);

      // Camera with natural perspective
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 10);

      // Renderer with alpha support, antialiasing and shadow mapping
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // ─── LUXURY LIGHTING SYSTEM ───
      ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
      scene.add(ambientLight);

      // Warm directional gold light representing sunrise/ambition
      directionalLight = new THREE.DirectionalLight(0xd4a843, 2.5);
      directionalLight.position.set(5, 5, 2);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      scene.add(directionalLight);

      // Subtle blue/purple fill light from opposite angle for dynamic contrast
      const fillLight = new THREE.DirectionalLight(0x7C3AED, 1.2);
      fillLight.position.set(-5, -3, 2);
      scene.add(fillLight);

      // Intense moving point light for interactive shine/reflections
      pointLight = new THREE.PointLight(0xffffff, 3, 20);
      pointLight.position.set(0, 0, 4);
      scene.add(pointLight);

      // ─── 3D CREATIONS ───
      
      // 1. Scene 1 - The Gold Monolith (Matte Luxury Gold Material)
      const monolithGeo = new THREE.BoxGeometry(2, 3.5, 0.8);
      
      // Luxury material configurations
      const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xc9a84c,
        roughness: 0.18,
        metalness: 0.9,
        flatShading: false,
      });

      monolith = new THREE.Mesh(monolithGeo, goldMaterial);
      monolith.castShadow = true;
      monolith.receiveShadow = true;
      scene.add(monolith);

      // 2. Scene 2 - Layered Glassmorphic Panels
      const panelCount = 3;
      const panelGeo = new THREE.BoxGeometry(2.4, 1.5, 0.05);
      
      // Frosted luxury glass material
      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.45,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.9, // high frosted glass quality
        ior: 1.5,
        thickness: 0.2,
      });

      const glassGroup = new THREE.Group();
      for (let i = 0; i < panelCount; i++) {
        const panel = new THREE.Mesh(panelGeo, glassMaterial);
        
        // Add metallic framing edges to panels
        const edges = new THREE.EdgesGeometry(panelGeo);
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0xc9a84c, linewidth: 2 })
        );
        panel.add(line);
        
        panel.position.set(0, 0, i * 0.4 - 0.4);
        glassPanels.push(panel);
        glassGroup.add(panel);
      }
      glassGroup.position.set(0, -15, 0); // Hide until section active
      scene.add(glassGroup);

      // 3. Scene 3 - Web Device Wireframe Mockup
      const mockupGroup = new THREE.Group();
      
      // Translucent device body
      const deviceGeo = new THREE.BoxGeometry(4, 2.5, 0.15);
      const deviceBody = new THREE.Mesh(
        deviceGeo,
        new THREE.MeshPhysicalMaterial({
          color: 0x1A1208,
          transparent: true,
          opacity: 0.8,
          roughness: 0.2,
          metalness: 0.8,
          transmission: 0.3,
        })
      );
      mockupGroup.add(deviceBody);

      // Gold frame lines
      const deviceFrameGeo = new THREE.EdgesGeometry(deviceGeo);
      const deviceFrame = new THREE.LineSegments(
        deviceFrameGeo,
        new THREE.LineBasicMaterial({ color: 0xc9a84c })
      );
      mockupGroup.add(deviceFrame);

      // Decorative internal grid
      const gridHelper = new THREE.GridHelper(3.8, 10, 0xc9a84c, 0x3D2E12);
      gridHelper.rotation.x = Math.PI / 2;
      gridHelper.position.z = 0.08;
      mockupGroup.add(gridHelper);

      mockupGroup.position.set(0, -30, 0);
      scene.add(mockupGroup);

      // 4. Scene 4 - Particle Field Constellation
      const particleCount = 280;
      const particlesGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        // Sphere placement
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 3.5 + Math.random() * 2; // radius

        positions[i] = r * Math.sin(phi) * Math.cos(theta);
        positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i + 2] = r * Math.cos(phi);

        // Gold tone colors
        colors[i] = 0.78 + Math.random() * 0.2; // R
        colors[i + 1] = 0.65 + Math.random() * 0.15; // G
        colors[i + 2] = 0.3 + Math.random() * 0.15; // B
      }

      particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particlesGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      // Create glowing particle sprite mapping
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });

      particleField = new THREE.Points(particlesGeo, particleMaterial);
      particleField.position.set(0, -45, 0);
      scene.add(particleField);

      // 5. Scene 5 - Intricate Golden Ring of Future
      const ringGeo = new THREE.TorusGeometry(2, 0.08, 16, 100);
      endRing = new THREE.Mesh(ringGeo, goldMaterial);
      endRing.position.set(0, -60, 0);
      scene.add(endRing);

      // Add a rotating inner ring
      const innerRingGeo = new THREE.TorusGeometry(1.7, 0.03, 8, 80);
      const innerRing = new THREE.Mesh(
        innerRingGeo,
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.05,
          metalness: 0.95,
        })
      );
      endRing.add(innerRing);

      // ─── GSAP SCROLL STORYTELLING SYSTEM ───

      // Master timeline / triggers
      const animateScene = () => {
        // Base rotation loops in background
        gsap.ticker.add(() => {
          if (monolith) {
            monolith.rotation.y += 0.005;
            monolith.rotation.x += 0.002;
          }
          if (glassGroup) {
            glassGroup.rotation.y -= 0.003;
          }
          if (mockupGroup) {
            mockupGroup.rotation.y += 0.002;
            mockupGroup.rotation.z = Math.sin(Date.now() * 0.001) * 0.05;
          }
          if (particleField) {
            particleField.rotation.y += 0.001;
            particleField.rotation.x += 0.0005;
          }
          if (endRing) {
            endRing.rotation.y += 0.008;
            endRing.rotation.x += 0.004;
            innerRing.rotation.x -= 0.015;
          }
          
          // Animate light dynamically
          pointLight.position.x = Math.sin(Date.now() * 0.0015) * 3;
          pointLight.position.y = Math.cos(Date.now() * 0.001) * 3;

          renderer.render(scene, camera);
        });

        // ── Scroll Trigger 1: Transition Monolith to Glass Panels ──
        scrollTriggerInstances.push(
          ScrollTrigger.create({
            trigger: "#scene-1",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            onUpdate: (self) => {
              const progress = self.progress;
              // Fade out monolith & push down
              monolith.position.y = -progress * 15;
              monolith.scale.set(1 - progress, 1 - progress, 1 - progress);
              monolith.material.opacity = 1 - progress;

              // Bring up glass panels & parallax separate
              glassGroup.position.y = -15 + progress * 15;
              glassPanels.forEach((panel, index) => {
                panel.position.z = (index * 0.4 - 0.4) + (progress * index * 0.8);
                panel.rotation.y = progress * 0.5 * (index === 0 ? -1 : 1);
              });
            }
          })
        );

        // ── Scroll Trigger 2: Transition Glass Panels to Web Mockup ──
        scrollTriggerInstances.push(
          ScrollTrigger.create({
            trigger: "#scene-2",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            onUpdate: (self) => {
              const progress = self.progress;
              // Fade out and drop glass panels
              glassGroup.position.y = -progress * 15;
              glassGroup.scale.set(1 - progress, 1 - progress, 1 - progress);

              // Pull up web mockup and orient towards user
              mockupGroup.position.y = -30 + progress * 30;
              mockupGroup.rotation.x = (Math.PI / 6) - (progress * Math.PI / 6);
              mockupGroup.scale.set(0.5 + progress * 0.5, 0.5 + progress * 0.5, 0.5 + progress * 0.5);
              
              // Shift camera perspective closer in Scene 3
              camera.position.z = 10 - progress * 3;
            }
          })
        );

        // ── Scroll Trigger 3: Transition Web Mockup to Particle Constellation ──
        scrollTriggerInstances.push(
          ScrollTrigger.create({
            trigger: "#scene-3",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            onUpdate: (self) => {
              const progress = self.progress;
               // Push mockup away
              mockupGroup.position.z = -progress * 25;
              mockupGroup.position.y = -progress * 10;
              mockupGroup.traverse((child: any) => {
                if (child.material) {
                  child.material.transparent = true;
                  child.material.opacity = 1 - progress;
                }
              });

              // Bring particle field forward like a warp speed flight
              particleField.position.y = -45 + progress * 45;
              particleField.position.z = -20 + progress * 20;
              particleField.rotation.y = progress * 2;
              
              // Light effects
              directionalLight.intensity = 2.5 - progress * 1.5;
            }
          })
        );

        // ── Scroll Trigger 4: Transition Particle Field to Golden Core ──
        scrollTriggerInstances.push(
          ScrollTrigger.create({
            trigger: "#scene-4",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            onUpdate: (self) => {
              const progress = self.progress;
              // Condense particles back down
              particleField.position.y = -progress * 20;
              particleField.scale.set(1 - progress * 0.8, 1 - progress * 0.8, 1 - progress * 0.8);

              // Position elegant gold ring in center background
              endRing.position.y = -60 + progress * 60;
              endRing.rotation.z = progress * Math.PI;
              
              // Restore camera depth
              camera.position.z = 7 + progress * 2;
              directionalLight.intensity = 1 + progress * 2;
            }
          })
        );
      };

      animateScene();
    };

    initImmersiveExperience();

    // Responsive adaptation
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      active = false;
      window.removeEventListener("resize", handleResize);
      scrollTriggerInstances.forEach(trigger => trigger.kill());
      
      // WebGL Context Cleanup
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  // Form submission handler with visual success toast
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("✓ Your inquiry has been received. Our lead engineer will contact you in 4 business hours.", {
        duration: 5000,
        position: "bottom-center",
        style: {
          background: "#1A1208",
          color: "#FDFCFA",
          border: "1px solid rgba(184,134,11,0.3)",
        }
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "Web Application / MVP",
        budget: "₹75,000 – ₹2,00,000",
        message: "",
      });
    }, 1800);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-[#0a0705] text-[#FAF7F2] select-none"
      style={{
        "--ivory": "#FAF7F2",
        "--gold": "#B8860B",
        "--gold-muted": "#C9A84C",
        "--ink": "#1A1208",
        "--serif": "'Cormorant Garamond', Georgia, serif",
      } as React.CSSProperties}
    >
      {/* ─── FIXED ATMOSPHERIC BACKGROUND CANVAS ─── */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* ─── SCROLL PROGRESS BAR ─── */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-[#FAF7F2]/5">
        <div
          className="h-full bg-gradient-to-r from-[#c9a84c] via-[#FAF7F2] to-[#c9a84c] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Grid line overlay mimicking technical drawing */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(184,134,11,0.18) 1px, transparent 1px),
            linear-gradient(0deg, rgba(184,134,11,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Luxury sound / glow ambient helper */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,134,11,0.05)_0%,transparent_70%)]" />

      {/* ─── LUXURIOUS PERSISTENT HEADER ─── */}
      <header className="fixed top-0 left-0 right-0 h-20 px-8 lg:px-16 flex items-center justify-between z-50 bg-gradient-to-b from-[#0a0705]/80 to-transparent backdrop-blur-xs">
        <Link href="/" className="font-serif text-2xl tracking-wider hover:opacity-80 transition-opacity">
          Web<span className="text-[#c9a84c]">Karo</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-sans text-[#FAF7F2]/60">
          <Link href="#chapter-1" className="hover:text-[#FAF7F2] transition-colors">I. Awakening</Link>
          <Link href="#chapter-2" className="hover:text-[#FAF7F2] transition-colors">II. Architecture</Link>
          <Link href="#chapter-3" className="hover:text-[#FAF7F2] transition-colors">III. Performance</Link>
          <Link href="#chapter-4" className="hover:text-[#FAF7F2] transition-colors">IV. Scale</Link>
        </div>

        <Link 
          href="#inquiry"
          className="px-6 py-2.5 bg-[#FAF7F2] text-[#1A1208] text-xs font-semibold uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#1A1208] transition-all duration-300 rounded-none shadow-premium"
        >
          Initiate Project
        </Link>
      </header>

      {/* ─── STORY CHAPTERS (SCROLL TRIGGERS) ─── */}

      {/* CHAPTER 1: THE MONOLITH (THE AWAKENING) */}
      <section 
        id="scene-1" 
        className="relative min-h-screen w-full flex items-center z-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 pt-20">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-[#c9a84c] text-sm tracking-widest">CHAPTER I</span>
              <div className="w-12 h-px bg-current opacity-30" />
              <span className="text-[10px] uppercase tracking-widest text-[#FAF7F2]/40">THE AWAKENING</span>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl font-light leading-tight">
              We design digital <br />
              <em className="text-[#c9a84c] not-italic font-normal">monoliths</em> of craft.
            </h1>
            
            <p className="text-base font-light text-[#FAF7F2]/70 leading-relaxed max-w-md">
              A high-end engineering collective from New Delhi, creating websites that feel premium, load in under 1 second, and leave an unforgettable mark on global audiences.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <Link 
                href="#scene-2"
                className="group flex items-center gap-3 text-xs uppercase tracking-widest text-[#FAF7F2]/60 hover:text-[#c9a84c] transition-colors"
              >
                Begin Narrative
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block" /> {/* reserved for visual presence */}
        </div>
      </section>

      {/* CHAPTER 2: THE FRAGMENTATION (THE ARCHITECTURE) */}
      <section 
        id="scene-2" 
        className="relative min-h-screen w-full flex items-center z-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="hidden lg:block" />
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-[#c9a84c] text-sm tracking-widest">CHAPTER II</span>
              <div className="w-12 h-px bg-current opacity-30" />
              <span className="text-[10px] uppercase tracking-widest text-[#FAF7F2]/40">COLLECTIVE STACK</span>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight">
              Modular clarity, <br />
              layered in <em className="text-[#c9a84c] not-italic font-normal">sophinement</em>.
            </h2>
            
            <p className="text-base font-light text-[#FAF7F2]/70 leading-relaxed max-w-md">
              We aren't a traditional stacked agency. We are a specialized team where design and code merge seamlessly from day one. In our world, beauty is structural.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#FAF7F2]/10">
              <div>
                <span className="block font-serif text-2xl text-[#c9a84c]">Design-First</span>
                <span className="text-[10px] text-[#FAF7F2]/40 uppercase tracking-widest">Sensory intuition</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#c9a84c]">Pure Code</span>
                <span className="text-[10px] text-[#FAF7F2]/40 uppercase tracking-widest">MERN & Next.js excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: THE SYNERGY (THE INTERACTIVE VIEWPORT) */}
      <section 
        id="scene-3" 
        className="relative min-h-screen w-full flex items-center z-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-[#c9a84c] text-sm tracking-widest">CHAPTER III</span>
              <div className="w-12 h-px bg-current opacity-30" />
              <span className="text-[10px] uppercase tracking-widest text-[#FAF7F2]/40">IMPECCABLE PERFORMANCE</span>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight">
              Absolute speed, <br />
              engineered to <em className="text-[#c9a84c] not-italic font-normal">convert</em>.
            </h2>
            
            <p className="text-base font-light text-[#FAF7F2]/70 leading-relaxed max-w-md">
              A luxury web experience must perform as cleanly as it looks. We optimize every millisecond to exceed high-end expectations.
            </p>

            {/* Performance Metric Showcase */}
            <div className="p-6 bg-[#1A1208]/60 border border-[#c9a84c]/20 backdrop-blur-md space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span>LIGHTHOUSE SPEED SCORING</span>
                <span className="text-[#c9a84c]">99%</span>
              </div>
              <div className="w-full bg-[#FAF7F2]/10 h-1">
                <div className="bg-[#c9a84c] h-full w-[99%]" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-[9px] uppercase tracking-widest text-[#FAF7F2]/50 text-center">
                <div>
                  <span className="block text-[#FAF7F2] font-semibold">0.4s</span>
                  FCP Target
                </div>
                <div>
                  <span className="block text-[#FAF7F2] font-semibold">0ms</span>
                  Blocking Time
                </div>
                <div>
                  <span className="block text-[#FAF7F2] font-semibold">0</span>
                  Layout Shift
                </div>
              </div>
            </div>
          </div>
          {/* Scroll-driven laptop image — Chapter III visual */}
          <div ref={laptopRef} className="hidden lg:flex items-center justify-center relative">
            {/* Glow behind laptop */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12)_0%,transparent_70%)]" />
            <div
              className="relative w-full max-w-lg transition-all duration-700"
              style={{
                transform: `perspective(1200px) rotateY(-8deg) rotateX(4deg)`,
                filter: `drop-shadow(0 0 40px rgba(201,168,76,0.25))`,
              }}
            >
              <Image
                src="/laptop-wireframe.png"
                alt="Gold wireframe laptop — WebKaro performance engineering"
                width={600}
                height={600}
                className="w-full h-auto object-contain select-none"
                priority
                draggable={false}
              />
              {/* Floating metric badges on the laptop */}
              <div className="absolute top-[20%] left-[10%] px-3 py-1.5 bg-[#1A1208]/80 border border-[#c9a84c]/40 backdrop-blur-md text-[9px] uppercase tracking-widest text-[#c9a84c] font-semibold">
                99 / Lighthouse
              </div>
              <div className="absolute top-[35%] right-[8%] px-3 py-1.5 bg-[#1A1208]/80 border border-[#c9a84c]/40 backdrop-blur-md text-[9px] uppercase tracking-widest text-[#c9a84c] font-semibold">
                0.4s / FCP
              </div>
              <div className="absolute bottom-[30%] left-[20%] px-3 py-1.5 bg-[#1A1208]/80 border border-[#c9a84c]/40 backdrop-blur-md text-[9px] uppercase tracking-widest text-[#FAF7F2]/60">
                Next.js · Edge CDN · MERN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 4: THE IMPACT (GLOBAL CONSTELLATION) */}
      <section 
        id="scene-4" 
        className="relative min-h-screen w-full flex items-center z-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="hidden lg:block" />
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-[#c9a84c] text-sm tracking-widest">CHAPTER IV</span>
              <div className="w-12 h-px bg-current opacity-30" />
              <span className="text-[10px] uppercase tracking-widest text-[#FAF7F2]/40">GLOBAL FOOTPRINT</span>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight">
              From Delhi to <br />
              the <em className="text-[#c9a84c] not-italic font-normal">world's stage</em>.
            </h2>
            
            <p className="text-base font-light text-[#FAF7F2]/70 leading-relaxed max-w-md">
              Over 40 brands across 8+ countries have redefined their growth path using our custom digital solutions. Secure, scalable, and premium.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#FAF7F2]/10 text-center">
              <div>
                <span className="block font-serif text-3xl text-[#c9a84c]">40+</span>
                <span className="text-[9px] uppercase tracking-wider text-[#FAF7F2]/50">Projects Delivered</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-[#c9a84c]">8+</span>
                <span className="text-[9px] uppercase tracking-wider text-[#FAF7F2]/50">Global Regions</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-[#c9a84c]">5.0</span>
                <span className="text-[9px] uppercase tracking-wider text-[#FAF7F2]/50">Star Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: THE PARTNERSHIP (INQUIRY PORTAL) */}
      <section 
        id="inquiry" 
        className="relative min-h-screen w-full flex items-center z-20 py-20"
      >
        <div className="max-w-4xl mx-auto px-6 w-full">
          <div className="bg-[#1A1208]/90 border border-[#c9a84c]/30 backdrop-blur-xl p-8 lg:p-12 space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <span className="font-serif text-[#c9a84c] text-sm tracking-widest">CHAPTER V</span>
                <div className="w-8 h-px bg-current opacity-30" />
                <span className="text-[10px] uppercase tracking-widest text-[#FAF7F2]/40">THE PARTNERSHIP</span>
              </div>
              
              <h2 className="font-serif text-3xl lg:text-4xl font-light">
                Initiate your <em className="text-[#c9a84c] not-italic font-normal">legacy product</em>.
              </h2>
              
              <p className="text-sm font-light text-[#FAF7F2]/60 max-w-lg mx-auto">
                No complex contracts or sales scripts. Simply tell us your vision, and we will craft a strategic engineering roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#FAF7F2]/40 font-semibold block">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Rahul Sharma"
                    className="w-full bg-[#FAF7F2]/5 border border-[#c9a84c]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#FAF7F2]/40 font-semibold block">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="rahul@company.com"
                    className="w-full bg-[#FAF7F2]/5 border border-[#c9a84c]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#FAF7F2]/40 font-semibold block">Contact Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#FAF7F2]/5 border border-[#c9a84c]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#FAF7F2]/40 font-semibold block">Project Context</label>
                  <select 
                    className="w-full bg-[#1A1208] border border-[#c9a84c]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors cursor-pointer text-[#FAF7F2]/80"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option>Web Application / MVP</option>
                    <option>Landing Page / Portfolio</option>
                    <option>E-Commerce Hub</option>
                    <option>SaaS Platform</option>
                    <option>Enterprise Integration</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-[#FAF7F2]/40 font-semibold block">Budget Matrix</label>
                <select 
                  className="w-full bg-[#1A1208] border border-[#c9a84c]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors cursor-pointer text-[#FAF7F2]/80"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option>Under ₹75,000</option>
                  <option>₹75,000 – ₹2,00,000</option>
                  <option>₹2,00,000 – ₹5,00,000</option>
                  <option>Above ₹5,00,000</option>
                  <option>Undecided</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest text-[#FAF7F2]/40 font-semibold block">Project Description</label>
                <textarea 
                  rows={4}
                  placeholder="What legacy system are you constructing? What is your target timeline?"
                  className="w-full bg-[#FAF7F2]/5 border border-[#c9a84c]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-[#c9a84c] text-[#1A1208] uppercase tracking-widest text-xs font-semibold hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "TRANSMITTING INQUIRY..." : "SEND PROJECT INQUIRY"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── BRUSHED COLD FOOTER ─── */}
      <footer className="relative bg-[#050302] border-t border-[#c9a84c]/10 py-12 z-20 text-[#FAF7F2]/40 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <span>© 2026 WebKaro. All rights reserved. Connaught Place, New Delhi, India.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
