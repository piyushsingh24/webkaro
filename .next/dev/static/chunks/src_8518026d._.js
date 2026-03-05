(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Hero() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please enter a valid email address", {
                duration: 4000,
                position: 'top-right'
            });
            return;
        }
        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("✓ Thank you! We'll contact you within 24 hours", {
                duration: 5000,
                position: 'top-right',
                style: {
                    background: '#10B981',
                    color: '#fff'
                }
            });
            setEmail("");
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("❌ Something went wrong. Please try again", {
                duration: 4000,
                position: 'top-right'
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-background flex flex-col top-24 overflow-hidden transition-colors duration-500 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,var(--primary),transparent_70%)] opacity-10 dark:opacity-80"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-full mx-auto lg:flex lg:justify-center lg:items-center w-full z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-20 lg:max-w-[50%] flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 rounded-full w-fit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "h1 max-w-4xl uppercase leading-tight text-foreground font-outfit",
                                children: [
                                    "Your business ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "Deserves a "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 70,
                                        columnNumber: 27
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 70,
                                        columnNumber: 78
                                    }, this),
                                    "premium ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground dark:text-white underline decoration-primary/20 underline-offset-[12px] decoration-4",
                                        children: "Digital Presence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 71,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.1
                                },
                                className: "text-muted-foreground/80 dark:text-white/50 max-w-2xl text-base md:text-xl lg:text-2xl font-medium leading-relaxed",
                                children: "We build fast, scalable digital products that help businesses grow, automate smarter, and stay ahead of the competition."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-12 lg:gap-20 items-center justify-items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.8
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 0.6,
                                ease: "easeOut"
                            },
                            className: "relative flex justify-center items-center h-[320px] md:h-[420px] lg:h-[480px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-primary/20 blur-[60px] md:blur-[120px] rounded-full flex justify-center items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[150px] md:w-[300px] h-[75px] md:h-[150px] bg-purple-500/20 blur-[50px] md:blur-[100px] rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative top-24  z-20 group scale-50 sm:scale-75 md:scale-90 lg:scale-95 transition-transform",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-[420px] md:w-[520px] aspect-[16/10] bg-zinc-900 border-[8px] border-zinc-800 rounded-[2.5rem] shadow-2xl overflow-hidden mb-[1px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-[#0a0a0a] flex items-center justify-center overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a0b2e,transparent_70%)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            animate: {
                                                                y: [
                                                                    0,
                                                                    -10,
                                                                    0
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 4,
                                                                repeat: Infinity,
                                                                ease: "easeInOut"
                                                            },
                                                            className: "w-4/5 h-20 glass rounded-2xl border-white/10 flex items-center px-6 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                    className: "w-8 h-8 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-3xl font-black text-white italic tracking-tighter",
                                                                    children: "SEO"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ml-auto flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full bg-red-500/50"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full bg-amber-500/50"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                                                            lineNumber: 114,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full bg-emerald-500/50"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[460px] md:w-[560px] h-4 bg-zinc-800 rounded-b-3xl mx-auto shadow-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " flex top-32 left-0 absolute inset-0 pointer-events-none scale-60 md:scale-100 items-center justify-center z-30",
                                    children: [
                                        {
                                            label: "NEXT.JS",
                                            x: -240,
                                            y: -120,
                                            delay: 0,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-foreground dark:text-white transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.499-.054z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 183
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 129,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "REACT",
                                            x: 240,
                                            y: -100,
                                            delay: 0.5,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-sky-500 dark:text-sky-400 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09c.247 0 .462.06.663.177.843.49 1.164 2.453.796 5.033a23.461 23.461 0 0 1-.862-.10c-.16-.023-.323-.047-.489-.068-.16-.43-.337-.852-.528-1.26-.575-1.256-1.257-2.35-1.998-3.225.57-.524 1.115-.93 1.618-1.2.27-.148.53-.26.8-.357zm-9.74 0c.27.097.53.21.799.358.504.27 1.047.675 1.618 1.2-.741.874-1.423 1.968-1.998 3.224a21.4 21.4 0 0 0-.531 1.26c-.166.022-.329.046-.489.07a22.94 22.94 0 0 1-.86.1c-.37-2.576-.05-4.54.793-5.032.2-.117.415-.18.668-.18zM12 5.948c.496.542.99 1.151 1.474 1.82A22.434 22.434 0 0 1 12 7.68a22.434 22.434 0 0 1-1.474-.913c.484-.67.978-1.278 1.474-1.82zm-4.49 3.165c-.354.783-.673 1.618-.944 2.495a22.232 22.232 0 0 0-1.642-.585c.348-.978.752-1.842 1.19-2.57.464.22.93.44 1.396.66zm8.98 0 1.396-.661c.438.729.841 1.592 1.19 2.57a21.923 21.923 0 0 0-1.643.586c-.271-.877-.59-1.712-.944-2.495zM5.308 10.77c.589.183 1.196.4 1.815.649-.125.51-.237 1.032-.33 1.567-.096.537-.17 1.07-.222 1.594a23.033 23.033 0 0 1-1.848-.68c.091-.545.208-1.086.35-1.617.128-.479.273-.948.435-1.513zm13.383 0c.163.565.307 1.034.435 1.513.142.531.26 1.072.35 1.617a23.033 23.033 0 0 1-1.848.68 24.19 24.19 0 0 0-.222-1.594c-.092-.535-.204-1.058-.329-1.567a23.476 23.476 0 0 1 1.614-.649zM12 10.57c.626 0 1.24.032 1.833.092.17.365.33.74.482 1.123.155.39.295.783.42 1.175-.125.392-.265.786-.42 1.175-.152.383-.312.758-.482 1.123A20.936 20.936 0 0 1 12 15.35a20.936 20.936 0 0 1-1.833-.092 21.27 21.27 0 0 1-.482-1.123c-.155-.39-.295-.783-.42-1.175.125-.392.265-.785.42-1.175.152-.383.312-.758.482-1.123A20.936 20.936 0 0 1 12 10.57zm-4.94 2.39c.05.524.127 1.057.222 1.594.092.535.205 1.058.33 1.567-.62.249-1.226.466-1.815.649-.162-.565-.307-1.034-.435-1.513a16.1 16.1 0 0 1-.35-1.617c.594-.227 1.208-.43 1.848-.68zm9.88 0c.64.25 1.254.453 1.848.68-.09.545-.208 1.086-.35 1.617-.128.479-.273.948-.435 1.513a21.42 21.42 0 0 1-1.815-.649c.126-.51.238-1.032.33-1.567.096-.537.17-1.07.222-1.594zm-6.343 3.86c.484.67.978 1.277 1.474 1.819-.496.541-.99 1.15-1.474 1.82A23.08 23.08 0 0 1 9.143 16.82c.484-.667.978-1.272 1.474-1.82-.496.542-.99 1.15-1.474 1.819zm2.808 0a22.434 22.434 0 0 1 1.474 1.819c.484-.67.978-1.277 1.474-1.819a22.434 22.434 0 0 1-1.474-1.82c-.496.543-.99 1.151-1.474 1.82zm-7.354.3c.466.22.932.44 1.396.661-.438.729-.841 1.592-1.19 2.57a21.923 21.923 0 0 0-1.396-.661c.354-.783.673-1.618.944-2.495.082.263.164.524.246.784-.082-.26-.164-.52-.246-.78a21.33 21.33 0 0 1-.248-.784zm12.652-.784a21.33 21.33 0 0 1-.248.784c-.082.26-.164.52-.246.78.082-.26.164-.52.246-.78.271.877.59 1.712.944 2.495a22.06 22.06 0 0 0-1.396.661c-.354-.783-.673-1.618-.944-2.495a22.434 22.434 0 0 1 1.396-.66 22.434 22.434 0 0 1 .248.215zm-6.002 4.354c-.57.524-1.115.93-1.618 1.2-.27.148-.53.26-.8.357-.247 0-.462-.06-.663-.177-.843-.49-1.164-2.453-.796-5.033.282.03.571.062.862.1.16.023.323.047.489.068.16.43.337.852.528 1.26.575 1.256 1.257 2.35 1.998 3.225zm3.738 0c.741-.874 1.423-1.968 1.998-3.224.191-.408.368-.83.528-1.26.166-.022.329-.046.489-.07.291-.038.58-.07.862-.1.37 2.576.05 4.54-.793 5.032-.2.117-.415.18-.668.18-.27-.097-.53-.21-.799-.358-.504-.27-1.047-.675-1.618-1.2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 182
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 133,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "MONGODB",
                                            x: -180,
                                            y: 140,
                                            delay: 0.4,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-emerald-600 dark:text-emerald-500 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.54-3.331l.165-.09c.171.2 4.907 3.399 5.157-4.837.06-1.889-.178-3.244-.06-6.187z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 190
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 137,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "STRIPE",
                                            x: 200,
                                            y: 120,
                                            delay: 0.6,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-indigo-600 dark:text-indigo-400 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 188
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 141,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "PHP",
                                            x: 0,
                                            y: -180,
                                            delay: 0.8,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-purple-600 dark:text-purple-400 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.685 0 1.203.197 1.553.592.35.395.45.974.3 1.735a3.1 3.1 0 0 1-.635 1.603zm4.24 2.396-1.05-1.902-.633 1.901H9.93l1.233-6.326h1.373l-.526 2.707 2.374-2.707h1.697L13.59 11.96l1.478 3.575h-1.607zm7.39-2.396c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164h-1.179l-.327 1.681h-1.379l1.23-6.326h2.649c.685 0 1.203.197 1.553.592.35.395.45.974.3 1.735a3.1 3.1 0 0 1-.635 1.603zm-1.15-2.56h-.944l-.515 2.648h.838c.557 0 .97-.105 1.242-.314.273-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.174-.193-.523-.29-1.047-.29z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 188
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 145,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "LARAVEL",
                                            x: -260,
                                            y: 20,
                                            delay: 0.2,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-red-600 dark:text-red-500 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027.29.29 0 0 1-.066.004.282.282 0 0 1-.063-.01.33.33 0 0 1-.068-.03L.534 18.755a.376.376 0 0 1-.19-.326V3.603a.359.359 0 0 1 .014-.1.368.368 0 0 1 .028-.068.377.377 0 0 1 .04-.055l.01-.015a.371.371 0 0 1 .058-.039L4.97.498a.376.376 0 0 1 .376 0l4.479 2.587a.373.373 0 0 1 .059.04l.01.014a.373.373 0 0 1 .04.056c.012.022.02.046.027.069a.36.36 0 0 1 .013.099v9.683l3.756-2.166V5.43a.356.356 0 0 1 .013-.1.368.368 0 0 1 .028-.068.358.358 0 0 1 .04-.055l.01-.016a.379.379 0 0 1 .059-.038l4.479-2.587a.376.376 0 0 1 .376 0l4.479 2.587a.369.369 0 0 1 .059.038l.01.016c.016.017.03.036.04.055a.366.366 0 0 1 .028.068zm-.736 5.011V6.171l-1.57.906-2.187 1.261v4.27l3.757-2.168zm-4.132 7.12v-4.272l-2.154 1.225-6.15 3.505v4.31l8.304-4.768zM1.093 4.404v14.035l8.285 4.76v-4.307l-4.332-2.453-.002-.001-.002-.002a.376.376 0 0 1-.04-.055.369.369 0 0 1-.027-.068.359.359 0 0 1-.013-.1v-9.35L2.662 5.31l-1.57-.906zm4.132-3.257L1.47 3.311l3.755 2.168 3.756-2.168L5.225 1.147zm4.51 10.868 2.187-1.261 1.57-.906-3.757-2.168-3.756 2.168 3.756 2.167zm9.022-3.773-3.756 2.168v4.27l2.187-1.261 1.57-.906-.001-4.271zm-4.132-6.975-3.756 2.168 3.756 2.167 3.756-2.167-3.756-2.168zm-.376 5.065-2.187-1.261-1.57-.906v4.27l2.187 1.261 1.57.906V7.332z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 182
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 149,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "MYSQL",
                                            x: 260,
                                            y: 40,
                                            delay: 0.7,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-blue-600 dark:text-blue-500 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zm5.684 6.621c-.015 0-.027.014-.042.014-.027.006-.06.027-.1.04l-.11.013c-.188.013-.38.04-.556.134a3.2 3.2 0 0 0-.554.334c-.08.066-.12.154-.173.227h-.016c-.073-.12-.2-.2-.32-.254-.113-.066-.24-.12-.366-.153-.12-.027-.24-.04-.36-.04-.153 0-.308.027-.46.08-.148.054-.28.134-.4.228-.12.094-.207.198-.294.32l-.013.013-.014-.02a.98.98 0 0 0-.073-.107c-.067-.1-.16-.18-.254-.26-.094-.074-.194-.134-.307-.167-.108-.04-.228-.054-.334-.054-.134 0-.26.027-.374.067-.12.04-.22.107-.314.188-.1.08-.18.18-.24.287l-.014.013h-.013c-.033-.074-.08-.14-.126-.2a1.1 1.1 0 0 0-.254-.228c-.1-.074-.213-.127-.333-.16-.12-.04-.248-.054-.374-.054-.107 0-.22.014-.327.04l-.3.107c-.1.053-.187.12-.267.2-.074.074-.14.166-.187.26l-.013.014h-.014c0-.027.014-.04.014-.067.013-.074.027-.16.027-.24 0-.114-.027-.228-.08-.326-.054-.1-.134-.187-.234-.248-.1-.067-.22-.1-.354-.1-.133 0-.254.034-.367.1-.107.067-.2.16-.254.267-.06.114-.093.24-.093.374 0 .067.013.134.027.2a.62.62 0 0 0 .08.2c.04.054.08.1.127.14.04.027.094.04.134.054.04.02.1.027.154.027.054 0 .1-.007.153-.02.054-.014.1-.027.14-.054a.55.55 0 0 0 .14-.094c.053-.04.1-.08.133-.133l.007.014c-.007.04-.02.074-.027.12-.02.074-.033.16-.033.24 0 .1.027.207.074.308a.8.8 0 0 0 .2.267c.087.08.2.14.32.173.12.04.25.06.374.06.134 0 .267-.027.388-.074l.307-.2c.1-.087.18-.187.233-.3 0 .007 0 .013.014.02.04.074.094.14.153.2.06.06.127.12.207.174.074.053.16.093.254.12.094.03.194.04.294.04.114 0 .227-.013.334-.046.107-.034.213-.094.3-.174.087-.073.16-.16.207-.254l.02-.053c.027.074.08.147.147.213.073.067.16.127.254.174.093.048.194.074.3.08zm-3.92-.953c.047-.028.08-.06.113-.094.047-.054.08-.114.107-.18.02-.074.033-.154.033-.24 0-.094-.014-.188-.047-.274-.027-.094-.073-.18-.133-.254-.06-.074-.134-.127-.22-.167-.08-.04-.174-.054-.267-.054-.093 0-.18.02-.267.06-.08.047-.16.114-.22.194-.06.08-.1.174-.12.274a.9.9 0 0 0-.02.196c0 .087.014.174.047.254.034.087.08.16.14.22.06.066.134.113.22.147.08.033.174.047.267.047a.717.717 0 0 0 .37-.129zm-7.3-3.92C9.16 7.249 7.48 6.995 5.686 6.995c-1.8 0-3.48.261-4.87.788v.02c1.384.527 3.067.793 4.87.793 1.8-.007 3.487-.26 4.87-.788zm-4.87 2.48c-1.06 0-2.06-.094-2.974-.274l-.42-.094.02.434V12c0 2.654 1.087 4.387 3.374 5.256 2.18.836 4.027.836 6.215 0 2.287-.87 3.374-2.602 3.374-5.256V9.76l.02-.434-.42.094c-.914.18-1.914.274-2.974.274H9.999zM8.6 9.127c.787 0 1.527.12 2.14.354v.014l.007.013c.014 0 .014.013.02.02a6.19 6.19 0 0 1 .88.507v.007c.107.074.2.16.287.247.08.087.147.18.2.28l.013.046c.007.04.014.08.014.127 0 .167-.047.32-.14.46a1.27 1.27 0 0 1-.38.327 1.9 1.9 0 0 1-.547.2c-.2.04-.4.054-.607.054-.547 0-1.06-.094-1.46-.287a3.5 3.5 0 0 1-.787-.507 4.1 4.1 0 0 1-.567-.667c-.16-.24-.307-.48-.42-.72l-.067-.147h2.413z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 184
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 153,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "WORDPRESS",
                                            x: -100,
                                            y: -140,
                                            delay: 0.5,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-sky-700 dark:text-sky-500 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.109m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08-3.92-11.685c.648-.03 1.232-.104 1.232-.104.583-.075.514-.93-.065-.9 0 0-1.755.135-2.88.135-.2 0-.44-.005-.69-.015C4.947 3.09 8.274 1.5 12 1.5c2.627 0 5.019.989 6.787 2.609-.044-.003-.086-.009-.133-.009-1.064 0-1.82.925-1.82 1.918 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.843 3.479l-1.104 3.69-4.01-11.95zm-2.307 19.016c-.659.189-1.353.291-2.066.291C5.469 26.237 2 22.747 2 18.481c0-2.003.76-3.832 2.007-5.219l3.462 9.56zm7.918-15.437c.034.244.053.5.053.775 0 .763-.145 1.621-.58 2.694L17.106 19.8l-4.313-12.817c.96-.047 1.825-.228 1.825-.228.583-.074.514-.93-.067-.9 0 0-1.756.136-2.88.136-.202 0-.44-.006-.69-.016A16.14 16.14 0 0 1 12 6.75c4.064 0 7.736 1.55 10.5 4.083l-2.401 1.672zm-9.43 15.75L7.26 14.703l-1.845 5.047a16.23 16.23 0 0 0 4.854.254zM12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 182
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 157,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "POSTGRES",
                                            x: 100,
                                            y: -150,
                                            delay: 0.7,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-indigo-600 dark:text-indigo-500 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.459.258 10.366.44 9.366.768c-1.02.33-1.99.736-2.787 1.33C5.778 2.69 5 3.575 4.68 4.485c-.18.503-.258 1.01-.258 1.52 0 .56.07 1.16.34 1.5.273.338.563.544 1.01.544h2.438c-.1.29-.18.578-.18.89 0 .67.22 1.353.22 2.028 0 .693-.22 1.304-.604 1.912-.38.607-.97 1.085-1.54 1.543-1.102.896-2.362 1.727-3.235 3.025C2.08 18.65 1.73 20.38 1.73 22.47v.007c0 .716.147 1.427.507 2.046.36.62.9 1.1 1.558 1.43.658.33 1.373.5 2.09.5.717 0 1.434-.17 2.09-.5.558-.28 1.052-.71 1.41-1.246a10.39 10.39 0 0 0 1.68.136c1.33 0 2.69-.28 3.897-.844 1.207-.563 2.26-1.41 2.95-2.474.354-.542.585-1.148.585-1.78 0-.34-.06-.68-.196-.996 1.158-.21 2.23-.65 3.082-1.345.854-.695 1.433-1.634 1.617-2.764a5.283 5.283 0 0 0 .067-.824c0-.857-.185-1.726-.463-2.557a8.908 8.908 0 0 0-1.283-2.5c-.23-.307-.47-.57-.733-.81.006-.073.01-.146.01-.22a4.4 4.4 0 0 0-.344-1.694 4.46 4.46 0 0 0-.982-1.476 4.49 4.49 0 0 0-1.476-.983 4.447 4.447 0 0 0-1.69-.344zm0 1.5c.41 0 .808.073 1.183.211a2.995 2.995 0 0 1 1.843 2.813c0 .16-.013.32-.038.476a.75.75 0 0 0 .234.682c.247.22.47.47.673.747a7.405 7.405 0 0 1 1.072 2.09c.248.72.406 1.468.406 2.19 0 .22-.018.44-.05.654-.15.9-.58 1.63-1.256 2.19-.678.56-1.607.924-2.672 1.074a.75.75 0 0 0-.582 1.027c.104.226.158.473.158.732 0 .327-.098.68-.32 1.026-.52.795-1.344 1.46-2.343 1.94-1.015.476-2.188.726-3.354.726-.677 0-1.35-.1-1.997-.296a.75.75 0 0 0-.773.247c-.275.33-.615.582-1.003.77-.488.245-1.01.368-1.533.368-.522 0-1.044-.123-1.533-.368-.49-.245-.87-.63-1.11-1.108-.24-.478-.363-1.01-.363-1.586v-.007c0-1.884.314-3.33.947-4.36.632-1.03 1.65-1.745 2.73-2.625.587-.476 1.217-1.02 1.71-1.784.493-.764.754-1.66.754-2.63 0-.66-.19-1.302-.3-1.81a.75.75 0 0 0-.732-.596H5.782c-.06 0-.13-.013-.21-.11-.08-.096-.17-.28-.17-.558 0-.35.063-.694.188-1.034.25-.7.82-1.35 1.675-1.977C8.074 2.082 8.955 1.71 9.88 1.41a9.455 9.455 0 0 1 2.72-.652 9.42 9.42 0 0 1 1.34-.037c.22.01.443.03.667.063.534.083 1.058.234 1.522.416zm.42 3.965a.75.75 0 0 1 .75.75v1.6a.75.75 0 0 1-1.5 0v-1.6a.75.75 0 0 1 .75-.75zm-4.61 1.06a.75.75 0 0 1 .75.75v.6a.75.75 0 0 1-1.5 0v-.6a.75.75 0 0 1 .75-.75z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 188
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 161,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "VISA",
                                            x: -120,
                                            y: 160,
                                            delay: 0.4,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-blue-800 dark:text-blue-600 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9.112 8.262L5.97 15.685H3.92L2.374 9.646c-.094-.368-.175-.503-.461-.658C1.447 8.72.677 8.46 0 8.304l.05-.042h3.261c.415 0 .789.276.883.754l.806 4.284 1.992-5.038zm8.033 4.994c.008-1.979-2.736-2.088-2.717-2.972.006-.268.262-.554.822-.626.277-.036 1.042-.063 1.909.334l.34-1.588A5.2 5.2 0 0 0 16.13 8c-1.92 0-3.27 1.02-3.28 2.48-.013 1.08.963 1.68 1.698 2.04.756.367 1.01.602 1.006.93-.005.502-.603.724-1.16.733-.975.015-1.54-.263-1.99-.473l-.351 1.64c.453.208 1.287.39 2.152.398 2.034 0 3.366-1.005 3.373-2.562zm5.06 2.429H24l-1.565-7.423h-1.74c-.392 0-.723.228-.87.578l-3.065 7.125h2.033l.404-1.12h2.483zm-2.163-2.656l1.02-2.81.585 2.81zm-8.16-4.767l-1.6 7.423H8.33l1.6-7.423z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 184
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 165,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "NODE.JS",
                                            x: 140,
                                            y: 170,
                                            delay: 0.35,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-green-600 dark:text-green-500 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.24l-8.791-5.072a.274.274 0 0 0-.27 0L3.075 6.68c-.084.048-.139.142-.139.241v10.15c0 .097.055.189.137.236l2.409 1.391c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.86 1.86 0 0 1-.919-1.604V6.921c0-.658.351-1.273.919-1.604l8.795-5.082a1.924 1.924 0 0 1 1.843 0l8.794 5.082c.566.33.92.945.92 1.604v10.15c0 .658-.354 1.273-.92 1.604l-8.794 5.076a1.88 1.88 0 0 1-.919.248z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 186
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 169,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "AWS",
                                            x: -280,
                                            y: 70,
                                            delay: 0.55,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-amber-600 dark:text-amber-500 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.264-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.063-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .42-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.822-.416.31-.096.638-.136.983-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.063.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.224-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.366.703.366 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 186
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 173,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "TAILWIND",
                                            x: 280,
                                            y: -60,
                                            delay: 1.7,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-sky-500 dark:text-sky-400 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 182
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 177,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "REDIS",
                                            x: 0,
                                            y: 180,
                                            delay: 0.9,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-red-700 dark:text-red-600 transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M10.9 .819L7.753 2.43 4.754 .913 3.182 1.727l2.99 1.521L3.18 4.765 4.754 5.58l2.99-1.514 3.164 1.612 1.556-.808L9.508 3.35l2.952-1.523zm2.144 3.225l-2.146 1.084 3.002 1.522L10.9 7.764l1.574.808 3.158-1.601 3.165 1.601 1.573-.808-3-1.522 2.999-1.514-1.573-.808-3.165 1.514zM0 5.949v12.42l10.52 5.812V11.76zm13.336.66l-1.678.848v1.696l1.678-.841zm-1.678 3.393l1.678.841 1.666-.841-1.666-.848zm3.352 0v1.695l1.678.848v-1.695zm-5.03.848l-1.679.848v1.695l1.679-.848zm1.678.848l1.666.841v1.695l-1.666-.841zm-1.678 1.695l1.678.848v1.696l-1.678-.848zm5.03 0v1.696l1.678.848v-1.696zm-6.708.848l-1.679.848v1.695l1.679-.848zm3.356 0l1.666.848v1.695l-1.666-.848zm-1.678 1.696l1.678.847v1.696l-1.678-.847zm5.03 0v1.696l1.678.847v-1.696zm-6.708.847l-1.679.848v1.696l1.679-.848zm3.356 0l1.666.848v1.696l-1.666-.848zm4.03 1.09l-1.032.523-1.022-.523v1.055l1.022.522 1.032-.522zM11.834 24l10.52-5.812V5.769L11.834 11.58z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 182
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 181,
                                                columnNumber: 24
                                            }, this)
                                        },
                                        {
                                            label: "PRISMA",
                                            x: 250,
                                            y: 80,
                                            delay: 0.6,
                                            svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                className: "w-5 h-5 md:w-7 md:h-7 text-foreground dark:text-white transition-transform group-hover/icon:scale-110",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.206.63l-9.02 14.99a1.314 1.314 0 0 0 .069 1.472l4.801 6.508a1.31 1.31 0 0 0 1.041.522c.171 0 .342-.033.501-.1l12.486-5.765a1.318 1.318 0 0 0 .711-1.974zm-2.142.516l-10.96 5.062-4.206-5.7 7.927-13.18 7.239 13.818z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 183
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 185,
                                                columnNumber: 24
                                            }, this)
                                        }
                                    ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 0,
                                                y: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: item.x,
                                                y: [
                                                    item.y,
                                                    item.y - 15,
                                                    item.y
                                                ]
                                            },
                                            transition: {
                                                opacity: {
                                                    duration: 0.6,
                                                    delay: item.delay
                                                },
                                                x: {
                                                    duration: 0.6,
                                                    delay: item.delay
                                                },
                                                y: {
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: item.delay
                                                }
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute flex flex-col items-center gap-1.5 pointer-events-auto", idx >= 4 && "hidden md:flex"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 md:w-14 md:h-14 bg-background dark:bg-black/60 border border-border dark:border-white/5 rounded-2xl shadow-xl flex items-center justify-center p-2.5 md:p-3 hover:border-primary/50 hover:bg-white dark:hover:bg-black/80 transition-all cursor-pointer backdrop-blur-xl group/icon",
                                                    children: item.svg
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[6px] md:text-[8px] font-black tracking-widest text-foreground/70 dark:text-white/80 transition-colors uppercase",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Hero, "Pz9uA3A7wRZx1TdThW56fVKPLxQ=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServiceById",
    ()=>getServiceById,
    "services",
    ()=>services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
;
const services = [
    // --- Website Solutions ---
    {
        id: "static-website-design",
        title: "Static Website Design",
        shortDescription: "Blazing fast, secure, and SEO-friendly static websites for your business.",
        description: "Our static website design service focuses on speed, security, and exceptional user experience. We use modern static site generators and edge delivery networks to ensure your site loads instantly globally. These websites are nearly impossible to hack and require virtually zero maintenance, making them ideal for high-performance corporate portfolios, professional landing pages, and content-driven sites.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "1–2 weeks",
        features: [
            "Ultra-fast global loading speeds",
            "Highest security standards (No database to hack)",
            "SEO-ready semantic HTML structure",
            "Mobile-first responsive design",
            "Minimal maintenance and hosting costs",
            "Advanced caching & CDN integration"
        ],
        deliverables: [
            "Fully responsive static website",
            "Optimized images and assets",
            "Google Search Console & Analytics setup",
            "Sitemap and Robots.txt generation",
            "1 month of post-launch technical support",
            "Source code repository access"
        ],
        color: "from-blue-500/20 to-cyan-500/20",
        glow: "bg-blue-500/10"
    },
    {
        id: "dynamic-website-design",
        title: "Dynamic Website Design",
        shortDescription: "Interactive and database-driven websites with custom functionality.",
        description: "Dynamic websites empower you to take full control of your digital presence. We build interactive platforms with powerful content management systems (CMS) that allow you to update news, blogs, services, and media without any technical knowledge. Our solutions are built to scale, ensuring your website grows as your business grows.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "3–4 weeks",
        features: [
            "Custom Admin Dashboard for content management",
            "Secure User Authentication & Profile management",
            "Real-time data updates via WebSockets",
            "Scalable database architecture (SQL/NoSQL)",
            "Interactive forms and user engagement tools",
            "API integration for third-party services"
        ],
        deliverables: [
            "Dynamic web application with CMS",
            "Custom Administrative Control Panel",
            "User manual and training session",
            "Database schema documentation",
            "Integration with Email/SMS gateways",
            "3 months of database & system maintenance"
        ],
        color: "from-purple-500/20 to-pink-500/20",
        glow: "bg-purple-500/10"
    },
    {
        id: "ecommerce-website-design",
        title: "E-Commerce Website Design",
        shortDescription: "Scalable online stores built for high conversion and seamless shopping.",
        description: "Transform your business into a 24/7 sales machine. We engineer high-conversion E-commerce platforms that focus on the customer journey. From intuitive product discovery to seamless checkout and secure payment processing, every element is designed to maximize your ROI and minimize abandoned carts.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "4–6 weeks",
        features: [
            "Multi-Gateway Payment Integration (Razorpay, Stripe, etc.)",
            "Real-time Inventory & Catalog Management",
            "Customer Order Tracking & Notification system",
            "Discount Engine & Coupon management",
            "Product Reviews & Rating system",
            "Advanced Search & Recommendation filters"
        ],
        deliverables: [
            "Full-featured Online Storefront",
            "Merchant Dashboard for Order Management",
            "Seamless Payment & Shipping integration",
            "SEO-optimized product structures",
            "Marketing tools & Analytics integration",
            "Lifetime support for security patches"
        ],
        color: "from-orange-500/20 to-red-500/20",
        glow: "bg-orange-500/10"
    },
    {
        id: "corporate-website-design",
        title: "Corporate Website Design",
        shortDescription: "Professional digital presence tailored for established businesses.",
        description: "Build unmatched authority and trust with a premium corporate website. We specialize in creating sophisticated digital identities for established organizations. Our focus is on brand consistency, lead generation, and showcasing your company's values, team, and success stories with high-quality visual storytelling.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "3–5 weeks",
        features: [
            "Sophisticated Brand Integration & UI/UX",
            "Strategic Lead Magnets & Call-to-Actions",
            "Regulatory & Legal Compliance (GDPR/Accessibility)",
            "High Availability & Enterprise-grade infrastructure",
            "Multi-language (Internationalization) support",
            "Newsroom & Investor Relations sections"
        ],
        deliverables: [
            "Professional Corporate Platform",
            "Brand Identity & Style Guide documentation",
            "Lead generation & CRM integration",
            "Legal documents (Privacy Policy, Terms)",
            "Dedicated Project Manager",
            "Priority maintenance & Cloud monitoring"
        ],
        color: "from-indigo-500/20 to-blue-500/20",
        glow: "bg-indigo-500/10"
    },
    {
        id: "website-redesign",
        title: "Website Redesign",
        shortDescription: "Give your legacy website a modern, high-performance makeover.",
        description: "Don't let an outdated website drive your customers to competitors. Our redesign service breathes new life into your digital presence. We modernize your UI/UX, migrate your data to faster tech stacks, and optimize performance to meet modern web standards, ensuring your brand stays relevant and effective.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "2–4 weeks",
        features: [
            "Modern UI/UX Audit & Transformation",
            "Technical Debt Reduction & Refactoring",
            "100% Mobile & Core Web Vitals optimization",
            "Seamless Legacy Data & Traffic migration",
            "Brand refresh & color palette modernization",
            "Improved Conversion Rate Architecture"
        ],
        deliverables: [
            "Modernized, high-performance website",
            "Before/After performance comparison report",
            "301 Redirect strategy to preserve SEO",
            "Updated asset library (Icons, Graphics)",
            "New feature integration (Chatbots, etc.)",
            "2 months of monitoring for migration issues"
        ],
        color: "from-emerald-500/20 to-green-500/20",
        glow: "bg-emerald-500/10"
    },
    {
        id: "landing-page-development",
        title: "Landing Page Development",
        shortDescription: "High-converting, focused landing pages for your marketing campaigns.",
        description: "Maximize your ad spend with precision-engineered landing pages. We build laser-focused pages designed for a single goal: conversion. By combining psychological triggers, blazing fast speeds, and clear call-to-actions, we turn your marketing traffic into qualified leads or paying customers.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "1 week",
        features: [
            "Psychologically optimized Conversion Flows",
            "Structural A/B Testing ready architecture",
            "Sub-second Load Times for low bounce rates",
            "High-impact Visual Storytelling",
            "Dynamic Keyword Insertion (DKI) support",
            "Form integration with CRM/Email platforms"
        ],
        deliverables: [
            "Single-purpose, high-conversion Page",
            "Optimization for Google Ads/FB Ads quality score",
            "Form backend & Lead notification system",
            "Retargeting pixel & Tracking setup",
            "Speed optimization report",
            "Copywriting suggestions & improvements"
        ],
        color: "from-amber-500/20 to-yellow-500/20",
        glow: "bg-amber-500/10"
    },
    // --- Portal Solutions ---
    {
        id: "portal-development",
        title: "Portal Development",
        shortDescription: "Custom enterprise portals for seamless user interaction.",
        description: "We build secure, large-scale portals that act as the digital bridge between your organization and its stakeholders. Whether it's a customer support portal, a partner management system, or an internal operations dashboard, we ensure a seamless flow of information with enterprise-grade security.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "6–12 weeks",
        features: [
            "Granular RBAC (Role-Based Access Control)",
            "Real-time Data Visualizations & BI Dashboards",
            "Document Management & Collaboration tools",
            "Audit Logging & Activity tracking",
            "Whitelabeling & Branding customized for clients",
            "Secure File Sharing & Communication modules"
        ],
        deliverables: [
            "Scalable Enterprise Portal Software",
            "Dedicated Admin & User Interfaces",
            "API documentation for integrations",
            "Security Audit & Pentesting report",
            "Deployment on private/hybrid cloud",
            "6 months of premium technical support"
        ],
        color: "from-blue-600/20 to-blue-400/20",
        glow: "bg-blue-600/10"
    },
    {
        id: "news-portal",
        title: "News Portal Development",
        shortDescription: "High-traffic news and media platforms with easy CMS.",
        description: "Launch a competitive news agency with a robust, high-traffic media platform. We optimize for millions of impressions, providing an easy-to-use editorial workflow for your journalists and a lightning-fast experience for your readers, with built-in monetization and engagement features.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "4–8 weeks",
        features: [
            "Optimized Ad Management (DFP/AdSense/Custom)",
            "Live Breaking News Notifications (Browser/App)",
            "Multi-stage Editorial & Approval Workflows",
            "High-concurrency caching for viral traffic",
            "Social Media auto-posting & engagement tools",
            "Multimedia (Video/Podcast) integration"
        ],
        deliverables: [
            "Scalable News & Media Platform",
            "Journalist & Editor Dashboard",
            "Monetization & Ad tracking setup",
            "Newsletter & Push Notification system",
            "Google News & RSS feed integration",
            "Performance monitoring for peak traffic"
        ],
        color: "from-red-600/20 to-red-400/20",
        glow: "bg-red-600/10"
    },
    {
        id: "job-portal",
        title: "Job Portal Development",
        shortDescription: "Connect talent with opportunities through custom job boards.",
        description: "Create a powerful ecosystem for recruitment. Our job portals provide seamless experiences for both employers and job seekers, with advanced resume matching, automated application tracking, and secure communication tools to streamline the entire hiring process.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "6–10 weeks",
        features: [
            "Advanced Job Posting & Featured listings",
            "Resume Builder & Smart parsing technology",
            "Applicant Tracking System (ATS) with stages",
            "Employer Dashboard for recruitment management",
            "Skill-based Matching & Email alerts",
            "Secure Video Interview & Chat integration"
        ],
        deliverables: [
            "Full-stack Recruitment Platform",
            "Dedicated Portals for Job Seekers & Employers",
            "Integrated Email/SMS notification engine",
            "Premium billing & subscription system",
            "Data privacy & compliance (GDPR) setup",
            "Ongoing technical & database support"
        ],
        color: "from-emerald-600/20 to-emerald-400/20",
        glow: "bg-emerald-600/10"
    },
    // --- Web Development ---
    {
        id: "custom-web-development",
        title: "Custom Web Development",
        shortDescription: "Bespoke web applications tailored specifically to your business needs.",
        description: "When standard solutions fail, we invent. Our custom development service is for businesses that have unique vision or disruptive workflows. We build highly specialized, secure, and scalable applications from scratch, using the most appropriate technologies for your specific goals.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "8–16 weeks",
        features: [
            "Unique technical architecture from scratch",
            "Bespoke business logic implementation",
            "Custom Third-party Sync & Integrations",
            "Complex Data Processing & Automation",
            "Enterprise-grade Security & Scalability",
            "Micro-interactions & Custom UI elements"
        ],
        deliverables: [
            "Completely bespoke Web Application",
            "Full API & Architecture documentation",
            "Custom Automated Testing suite",
            "Deployment in highly available environment",
            "Dedicated development & support team",
            "IP Ownership & Source code handover"
        ],
        color: "from-zinc-500/20 to-zinc-400/20",
        glow: "bg-zinc-500/10"
    },
    {
        id: "laravel-development",
        title: "Laravel Web Development",
        shortDescription: "Elegant and powerful backend solutions using the PHP Laravel framework.",
        description: "Leverage the power of the 'PHP Framework for Web Artisans'. We build robust, secure, and highly maintainable backends using Laravel. Our solutions follow modern MVC patterns and best practices, ensuring your application is fast, stable, and ready for future expansion.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "4–8 weeks",
        features: [
            "Secure & Modular MVC Architecture",
            "Robust Authentication & Authorization system",
            "Database Migrations & Real-time Broadcasting",
            "Integrated Testing & Debugging tools",
            "High-performance caching with Redis/Memcached",
            "Elegant Eloquent ORM for data management"
        ],
        deliverables: [
            "Clean, maintainable Laravel Backend",
            "RESTful/GraphQL API for dynamic apps",
            "Automated unit & integration tests",
            "Server-side performance tuning",
            "Comprehensive Database schema",
            "Expert Laravel technical support"
        ],
        color: "from-red-500/20 to-orange-500/20",
        glow: "bg-red-500/10"
    },
    {
        id: "php-development",
        title: "PHP Web Development",
        shortDescription: "Reliable and cost-effective PHP solutions for websites and apps.",
        description: "Solid, time-tested PHP development for a wide range of applications. Whether you need legacy support, custom extensions, or a new build on a budget, we provide high-performance and reliable PHP engineering that powers over 70% of the web today.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "3–6 weeks",
        features: [
            "Solid core PHP & OOP-based development",
            "Highly cost-effective & server-agnostic",
            "Broad platform & server support",
            "Database-driven dynamic content",
            "Easy maintenance & legacy integration",
            "Robust security against common vulnerabilities"
        ],
        deliverables: [
            "Reliable PHP web application",
            "Database integration (MySQL/PostgreSQL)",
            "Secure contact & data processing forms",
            "Hosting & Server setup guidance",
            "Complete Source Code documentation",
            "Essential security hardening"
        ],
        color: "from-indigo-600/20 to-indigo-400/20",
        glow: "bg-indigo-600/10"
    },
    {
        id: "mern-development",
        title: "MERN Stack Development",
        shortDescription: "Modern, end-to-end JavaScript applications using Mongo, Express, React, Node.",
        description: "The gold standard for modern startups and interactive apps. We build cohesive, ultra-fast, and highly scalable applications using a unified JavaScript ecosystem. The MERN stack allows for rapid development, real-time features, and a seamless developer-to-production pipeline.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "8–12 weeks",
        features: [
            "Full JavaScript Stack (Consistency across layers)",
            "NoSQL Flexibility with MongoDB",
            "Blazing fast React-based frontend",
            "Scalable Node.js/Express backend services",
            "Real-time functionality with Socket.io",
            "Easy Cloud Deployment (Vercel/AWS/Render)"
        ],
        deliverables: [
            "Production-ready MERN Application",
            "Optimized NoSQL Database architecture",
            "State management implementation (Redux/Zustand)",
            "Continuous Integration/Deployment setup",
            "Full API documentation",
            "Performance & Load testing report"
        ],
        color: "from-green-500/20 to-cyan-500/20",
        glow: "bg-green-500/10"
    },
    {
        id: "fullstack-development",
        title: "Full Stack Development",
        shortDescription: "One-stop solution for front-to-back development and architecture.",
        description: "We handle everything from the first pixel to the last byte. Our full-stack service provides a unified development partner who understands how every layer of your application interacts. We ensure seamless communication between UI, APIs, databases, and infrastructure.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "10–20 weeks",
        features: [
            "End-to-End Technical Ownership",
            "Holistic Application & Cloud Architecture",
            "Unified & Modern Tech Stack selection",
            "Single Point of Communication & Accountability",
            "Seamless Design-to-Code translation",
            "Full Security & Performance optimization"
        ],
        deliverables: [
            "Complete, Turnkey Digital Product",
            "Architecture Blueprints & Diagrams",
            "Comprehensive QA & Bug-free guarantee",
            "DevOps & Infrastructure automation",
            "Admin & User documentation",
            "Post-launch evolutionary support"
        ],
        color: "from-sky-500/20 to-blue-500/20",
        glow: "bg-sky-500/10"
    },
    // --- Modern Stack ---
    {
        id: "nextjs-development",
        title: "Next.js Development",
        shortDescription: "SEO-perfect, ultra-fast web apps using the latest Next.js 15+ features.",
        description: "Experience the cutting-edge of web engineering. We leverage Next.js features like Server Components, Streaming, and PPR (Partial Prerendering) to deliver websites that are not just fast, but provide the absolute best SEO and user experience available today.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "4–8 weeks",
        features: [
            "Server-side Rendering & Static Generation",
            "Optimized Routing & Image handling",
            "Edge Computing & Serverless execution",
            "Exceptional Core Web Vitals (lighthouse 100s)",
            "Incremental Static Regeneration (ISR)",
            "Advanced SEO & Metadata API management"
        ],
        deliverables: [
            "Enterprise-grade Next.js Application",
            "Serverless Backend & API routes",
            "Highly optimized Frontend assets",
            "Vercel/AWS Amplify deployment setup",
            "Performance & SEO benchmark report",
            "Next-gen maintenance & support"
        ],
        color: "from-zinc-800/20 to-zinc-600/20",
        glow: "bg-zinc-800/10"
    },
    {
        id: "react-development",
        title: "React Development",
        shortDescription: "Dynamic, reusable, and blazing fast frontend components.",
        description: "We build highly interactive and specialized user interfaces using React. Our focus is on component modularity, state management efficiency, and smooth, meaningful animations that enhance user engagement and provide a premium app-like feel on the web.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "3–6 weeks",
        features: [
            "Modular, Reusable Component Architecture",
            "Highly Optimized Hooks & State Logic",
            "Fast Refresh & Dynamic User Experiences",
            "Advanced State Management (Context/Redux)",
            "Rich Animations & Interactivity",
            "Large-scale Application Performance tuning"
        ],
        deliverables: [
            "Interactive React UI/UX System",
            "Component Library & Style Guide",
            "State & Logic documentation",
            "Automated Frontend testing suite",
            "Modern Tooling & Build setup",
            "Expert React consultancy & support"
        ],
        color: "from-sky-400/20 to-blue-400/20",
        glow: "bg-sky-400/10"
    },
    {
        id: "api-development",
        title: "API Development",
        shortDescription: "Secure and performant REST & GraphQL APIs for your data.",
        description: "The backbone of your digital ecosystem. We build reliable, secure, and performant APIs that connect your frontends, mobile apps, and third-party systems seamlessly. We focus on security (JWT/OAuth2), clear documentation, and ultra-fast response times.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "3–6 weeks",
        features: [
            "RESTful & GraphQL API Architectures",
            "Comprehensive Swagger/OpenAPI Documentation",
            "Advanced Rate Limiting & Security Hardening",
            "Robust OAuth2 & JWT Authentication",
            "Highly scalable & stateless design",
            "Detailed Logging & Monitoring integration"
        ],
        deliverables: [
            "High-performance API Server",
            "Live Documentation & Playground (Postman)",
            "Security Audit & Integration keys",
            "Deployment in Clustered environment",
            "System integration & test reports",
            "Developer-centric technical support"
        ],
        color: "from-amber-600/20 to-orange-600/20",
        glow: "bg-amber-600/10"
    },
    // --- Cloud & DevOps ---
    {
        id: "cloud-migration",
        title: "Cloud Migration",
        shortDescription: "Move your legacy infrastructure to AWS, GCP, or Azure with zero downtime.",
        description: "Modernize your infrastructure for the future. We specialize in moving complex, on-premise, or shared-hosting systems to the cloud. We ensure 100% data integrity, zero downtime for your users, and a more cost-effective, scalable cloud environment.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "4–8 weeks",
        features: [
            "Zero-downtime Migration Strategy",
            "Expert AWS/GCP/Azure Infrastructure setup",
            "Advanced Data Validation & verification",
            "Cloud Cost Optimization & rightsizing",
            "Disaster Recovery & Backup planning",
            "Secure VPC & Network configuration"
        ],
        deliverables: [
            "Migrated Cloud Infrastructure",
            "Post-migration Performance Report",
            "Cloud Governance & Security Policy",
            "Staff training on Cloud Management",
            "Automated Backup & DR system",
            "3 months of Post-migration monitoring"
        ],
        color: "from-blue-600/20 to-indigo-600/20",
        glow: "bg-blue-600/10"
    },
    {
        id: "aws-deployment",
        title: "AWS Deployment",
        shortDescription: "Expert AWS infrastructure setup for scale and reliability.",
        description: "Harness the power of the world's leading cloud provider. We set up, manage, and optimize your AWS environment using best-in-class services like EC2, S3, RDS, and Lambda, ensuring your application can scale from zero to millions of users automatically.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "2–4 weeks",
        features: [
            "Elastic Load Balancing & Auto-scaling",
            "Highly available RDS/PostgreSQL databases",
            "Serverless (Lambda) performance tuning",
            "CloudWatch monitoring & alerting systems",
            "IAM-based security & permissions",
            "CloudFront CDN global edge delivery"
        ],
        deliverables: [
            "Ready-to-scale AWS Environment",
            "Infrastructure-as-Code (Terraform/CDK)",
            "Security & Cost Dashboard setup",
            "Deployment pipeline automation",
            "Incident Response documentation",
            "Monthly AWS optimization checkups"
        ],
        color: "from-orange-500/20 to-yellow-500/20",
        glow: "bg-orange-500/10"
    },
    {
        id: "performance",
        title: "Performance Optimization",
        shortDescription: "Make your existing app 2x-5x faster with expert tuning.",
        description: "Slow applications lose users and revenue. We perform deep forensic analysis of your code, database queries, and infrastructure to eliminate bottlenecks and reach sub-second load times, significantly improving your SEO and conversion rates.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "2 weeks",
        features: [
            "Significant Payload & Bundle reduction",
            "Deep Database Query & Index tuning",
            "Advanced Caching (Redis/Edge) strategies",
            "Perfect Lighthouse & Core Web Vitals audit",
            "Server-side execution time reduction",
            "Asset & Media compression pipelines"
        ],
        deliverables: [
            "Highly Optimized Web Application",
            "Comprehensive Performance Audit Report",
            "Infrastructure rightsizing recommendations",
            "Monitoring & Alerting tools setup",
            "Ongoing Performance monitoring",
            "Code-level optimization patches"
        ],
        color: "from-pink-500/20 to-rose-500/20",
        glow: "bg-pink-500/10"
    },
    {
        id: "matrimonial-portal",
        title: "Matrimonial Portal",
        shortDescription: "Secure and feature-rich matrimonial platforms for connecting people.",
        description: "Build a trusted and safe digital match-making environment. Our matrimonial portals focus on profile verification, sophisticated matching algorithms, and advanced privacy controls, providing a premium experience that builds lifelong connections.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "8–12 weeks",
        features: [
            "Rigorous Profile Verification & Moderation",
            "Advanced AI-driven Matchmaking Algorithms",
            "Secure One-to-One messaging/calling",
            "Granular Privacy & Visibility controls",
            "Premium Membership & Billing plans",
            "Multimedia Profile (Photo/Video) management"
        ],
        deliverables: [
            "Feature-rich Matrimonial Platform",
            "Admin Moderation & Approval Panel",
            "Member billing & subscription system",
            "Automated matching engine logic",
            "Data protection & Privacy setup",
            "Launch strategy & technical support"
        ],
        color: "from-rose-500/20 to-pink-500/20",
        glow: "bg-rose-500/10"
    },
    {
        id: "b2b-portal",
        title: "B2B Portal Development",
        shortDescription: "Bulk order management and business-to-business networking portals.",
        description: "Revolutionize your wholesale operations. Our B2B portals streamline complex business-to-business workflows, including tiered pricing, credit management, bulk order processing, and vendor-distributor communication in one unified, secure hub.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "8–14 weeks",
        features: [
            "Dynamic wholesale & Tier-based Pricing",
            "Integrated Vendor & Distributor management",
            "Comprehensive Tax Compliance & Invoicing",
            "High-volume Bulk Order & Fulfillment logic",
            "Credit Management & Ledger tracking",
            "External ERP & Inventory sync capabilities"
        ],
        deliverables: [
            "Enterprise B2B Commerce Platform",
            "Self-service Customer/Vendor Portals",
            "Integrated Invoicing & Payment system",
            "Supply chain tracking & dashboards",
            "Migration support for legacy data",
            "6 months of premium technical support"
        ],
        color: "from-slate-700/20 to-slate-500/20",
        glow: "bg-slate-700/10"
    },
    {
        id: "travel-portal",
        title: "Travel Portal",
        shortDescription: "Booking engines and travel management systems for agencies.",
        description: "Launch a worldwide travel brand. We build integrated travel booking engines with real-time connectivity to global distribution systems (GDS). From flights and hotels to custom tour packages, our portals handle complex booking logic with ease.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "6–12 weeks",
        features: [
            "Real-time GDS (Amadeus/Sabre) integration",
            "Advanced Flight/Hotel Booking Engines",
            "Custom Tour Package builders & itineraries",
            "Multi-Gateway Payment & Currency support",
            "Automated E-Ticket & Voucher generation",
            "B2B Agent & B2C customer interfaces"
        ],
        deliverables: [
            "Global Travel Booking Platform",
            "Agent & Inventory Management System",
            "API connectivity for third-party feeds",
            "Financial reporting & কমিশন management",
            "Mobile-responsive booking flow",
            "Post-launch API maintenance"
        ],
        color: "from-sky-600/20 to-cyan-600/20",
        glow: "bg-sky-600/10"
    },
    {
        id: "cms-development",
        title: "CMS Web Development",
        shortDescription: "User-friendly content management systems for complete control.",
        description: "Don't be held hostage by technical complexity. We build custom CMS solutions or implement Headless systems like Strapi/Sanity that give your team complete freedom to create, edit, and publish content across all your digital channels without writing code.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "3–6 weeks",
        features: [
            "Custom Field & Content type modeling",
            "Granular RBAC & Workflow management",
            "Powerful Media Library & CDN integration",
            "Headless & Multi-platform delivery",
            "Rich Text & Layout builders",
            "Revision History & content recovery"
        ],
        deliverables: [
            "Tailored Content Management System",
            "Editorial training & User guides",
            "Custom Content API for frontends",
            "Performance-tuned media management",
            "Integration with Marketing tools",
            "Ongoing CMS security updates"
        ],
        color: "from-teal-500/20 to-emerald-500/20",
        glow: "bg-teal-500/10"
    },
    {
        id: "crm-development",
        title: "CRM Development",
        shortDescription: "Manage your customer relationships with custom CRM software.",
        description: "Own your sales process and customer data. We build custom CRM systems that fit your unique sales pipeline perfectly. From lead tracking and automated follow-ups to visual analytics, we give your team the tools they need to close more deals.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "8–16 weeks",
        features: [
            "Dynamic Lead Tracking & Qualification",
            "Visual Sales Pipeline & Moveable stages",
            "Integrated Email & Communication history",
            "Advanced Visual Reporting & Analytics",
            "Automated Tasks & REMINDERS for sales",
            "Custom Third-party Tool integrations"
        ],
        deliverables: [
            "Bespoke Customer Relationship Management",
            "Sales & Management Dashboards",
            "Data Migration from legacy systems",
            "Integrated Communication Engine",
            "Onboarding & Team training",
            "Continuous system improvements"
        ],
        color: "from-indigo-700/20 to-indigo-500/20",
        glow: "bg-indigo-700/10"
    },
    {
        id: "nodejs-development",
        title: "Node.js Backend",
        shortDescription: "Fast, event-driven backend services for modern applications.",
        description: "Scale your application to handle massive concurrency. We build asynchronous, non-blocking Node.js backends that excel at real-time, data-intensive applications. Our focus is on clean architecture, performance tuning, and highly secure API layers.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "4–8 weeks",
        features: [
            "High-concurrency Event-driven design",
            "Real-time communication with WebSockets",
            "Advanced Performance & Memory tuning",
            "Scalable Redis Caching & Queue management",
            "Secure & Modular API architecture",
            "Microservice-ready structural design"
        ],
        deliverables: [
            "High-performance Node.js Backend",
            "Comprehensive API documentation",
            "Docker/Kubernetes ready build",
            "Security Audit & Scanning report",
            "Load balancer & Clustering setup",
            "Expert technical support & updates"
        ],
        color: "from-green-600/20 to-green-400/20",
        glow: "bg-green-600/10"
    },
    {
        id: "microservices",
        title: "Microservices Architecture",
        shortDescription: "Decoupled and scalable system architecture for large scale apps.",
        description: "Break free from the monolithic cage. We transition your applications to a microservices architecture, allowing your different business modules to scale, deploy, and evolve independently, improving maintainability and system resilience.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "12–24 weeks",
        features: [
            "Decoupled & Independent Service design",
            "Resilient Service Mesh (Istio/Linkerd)",
            "Containerization (Docker) & Orchestration",
            "API Gateway & Load Switching management",
            "Distributed Logging & Observability",
            "Inter-service Communication (gRPC/RabbitMQ)"
        ],
        deliverables: [
            "Decoupled Microservices Ecosystem",
            "Kubernetes Deployment & YAMLs",
            "Service Registry & Discovery system",
            "CI/CD Orchestration pipelines",
            "Architecture & Maintenance guide",
            "Dedicated SRE technical support"
        ],
        color: "from-violet-600/20 to-purple-600/20",
        glow: "bg-violet-600/10"
    },
    {
        id: "ci-cd",
        title: "CI/CD Setup",
        shortDescription: "Automated deployment pipelines for faster shipping.",
        description: "Ship code with total confidence. We automate your entire testing and deployment lifecycle using best-in-class CI/CD tools, ensuring every change is automatically verified and deployed to your users several times a day with zero human error.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "1–2 weeks",
        features: [
            "Automated GitHub Actions/GitLab CI",
            "Parallel Testing & Static analysis",
            "Staging & Preview Environments for review",
            "Zero-downtime Blue/Green deployments",
            "Automated Security & Vulnerability scans",
            "One-click or fully automated Rollsouts"
        ],
        deliverables: [
            "Automated Deployment Pipelines",
            "CI/CD workflow documentation",
            "Integrated Dashboard for build status",
            "Slack/Discord notification alerts",
            "Infrastructure-as-Code scripts",
            "Pipeline maintenance training"
        ],
        color: "from-orange-600/20 to-amber-600/20",
        glow: "bg-orange-600/10"
    },
    {
        id: "server-management",
        title: "Server Management",
        shortDescription: "Expert server administration and 24/7 infrastructure monitoring.",
        description: "Stop worrying about your servers. We provide professional server administration, 24/7 monitoring, security hardening, and regular patching for your Linux infrastructure, ensuring your applications remain online, secure, and performant around the clock.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        price: "5K to 10K",
        pricingHint: "5K to 10K",
        timeline: "Ongoing",
        features: [
            "24/7 Real-time Performance Monitoring",
            "Hardened Linux Security & Patching",
            "Automated Daily Backups & Recovery",
            "Intrusion Detection & Prevention (IDS/IPS)",
            "SSL/TLS Management & Monitoring",
            "Log rotation & system health cleanups"
        ],
        deliverables: [
            "Fully Managed Server Infrastructure",
            "Monthly Security & Health Reports",
            "Custom Monitoring Dashboards (Grafana)",
            "Emergency Response documentation",
            "Incident Alerting & Root Cause analysis",
            "Dedicated Technical Account Manager"
        ],
        color: "from-zinc-700/20 to-zinc-500/20",
        glow: "bg-zinc-700/10"
    }
];
const getServiceById = (id)=>services.find((s)=>s.id === id);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/get-started-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetStartedButton",
    ()=>GetStartedButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
function GetStartedButton({ label = "Explore Service", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative overflow-hidden w-full", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-8 transition-opacity duration-500 group-hover:opacity-0",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/get-started-button.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    size: 16,
                    strokeWidth: 2,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/get-started-button.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/get-started-button.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/get-started-button.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = GetStartedButton;
var _c;
__turbopack_context__.k.register(_c, "GetStartedButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/magnetize-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MagnetizeButton",
    ()=>MagnetizeButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MagnetizeButton({ className, particleCount = 12, attractRadius = 50, children, ...props }) {
    _s();
    const [isAttracting, setIsAttracting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const particlesControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MagnetizeButton.useEffect": ()=>{
            const newParticles = Array.from({
                length: particleCount
            }, {
                "MagnetizeButton.useEffect.newParticles": (_, i)=>({
                        id: i,
                        x: Math.random() * 360 - 180,
                        y: Math.random() * 360 - 180
                    })
            }["MagnetizeButton.useEffect.newParticles"]);
            setParticles(newParticles);
        }
    }["MagnetizeButton.useEffect"], [
        particleCount
    ]);
    const handleInteractionStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MagnetizeButton.useCallback[handleInteractionStart]": async ()=>{
            setIsAttracting(true);
            await particlesControl.start({
                x: 0,
                y: 0,
                transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 10
                }
            });
        }
    }["MagnetizeButton.useCallback[handleInteractionStart]"], [
        particlesControl
    ]);
    const handleInteractionEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MagnetizeButton.useCallback[handleInteractionEnd]": async ()=>{
            setIsAttracting(false);
            await particlesControl.start({
                "MagnetizeButton.useCallback[handleInteractionEnd]": (i)=>({
                        x: particles[i]?.x ?? 0,
                        y: particles[i]?.y ?? 0,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }
                    })
            }["MagnetizeButton.useCallback[handleInteractionEnd]"]);
        }
    }["MagnetizeButton.useCallback[handleInteractionEnd]"], [
        particlesControl,
        particles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-40 relative touch-none overflow-hidden", "bg-violet-600 dark:bg-violet-700", "hover:bg-violet-700 dark:hover:bg-violet-600", "text-white", "border border-violet-500 dark:border-violet-600", "transition-all duration-300", className),
        onMouseEnter: handleInteractionStart,
        onMouseLeave: handleInteractionEnd,
        onTouchStart: handleInteractionStart,
        onTouchEnd: handleInteractionEnd,
        ...props,
        children: [
            particles.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    custom: index,
                    initial: {
                        x: particles[index]?.x ?? 0,
                        y: particles[index]?.y ?? 0
                    },
                    animate: particlesControl,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute w-1.5 h-1.5 rounded-full pointer-events-none", "bg-violet-300 dark:bg-violet-200", "transition-opacity duration-300", isAttracting ? "opacity-100" : "opacity-40")
                }, index, false, {
                    fileName: "[project]/src/components/ui/magnetize-button.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative w-full flex items-center justify-center gap-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/magnetize-button.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/magnetize-button.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(MagnetizeButton, "wRgpD/hY3EuB7pYxkLGGGxGPGwI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = MagnetizeButton;
;
var _c;
__turbopack_context__.k.register(_c, "MagnetizeButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/ServicesOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$get$2d$started$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/get-started-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$magnetize$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/magnetize-button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ServicesOverview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding flex justify-center items-center top-10 bg-background transition-colors duration-500 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[900px] h-[450px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-full mx-auto relative z-10 flex flex-col items-center gap-12 md:gap-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center px-4 max-w-3xl mx-auto space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h2 uppercase leading-tight text-foreground",
                                children: [
                                    "Premium Digital ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                        lineNumber: 23,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground  text-base md:text-lg leading-relaxed",
                                children: "We craft scalable, high-performance digital products that drive measurable business growth."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-20",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: index * 0.05
                                },
                                viewport: {
                                    once: true,
                                    margin: "-50px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/services/${service.id}`,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex flex-col items-center text-center", "p-10 rounded-3xl", "bg-card border border-border", "hover:border-primary/40", "transition-all duration-500", "hover:-translate-y-3", "hover:shadow-[0_30px_80px_-20px_rgba(124,58,237,0.25)]", "focus:outline-none focus:ring-2 focus:ring-primary/40"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                                className: "w-7 h-7 text-primary transition-colors duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-foreground mb-4 leading-snug",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs",
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 mb-8 text-left w-full",
                                            children: service.features.slice(0, 3).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2 text-sm text-foreground/70",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 23
                                                        }, this),
                                                        f
                                                    ]
                                                }, f, true, {
                                                    fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-6 border-t border-border w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$get$2d$started$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetStartedButton"], {
                                                label: "Explore Service"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, service.id, false, {
                                fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center flex justify-center items-center ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services",
                            className: "inline-flex items-center gap-3 rounded-xl bg-primary text-white text-sm font-semibold hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-primary/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$magnetize$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MagnetizeButton"], {
                                particleCount: 14,
                                children: [
                                    "View All Services ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                        lineNumber: 99,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ServicesOverview.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ServicesOverview.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ServicesOverview;
var _c;
__turbopack_context__.k.register(_c, "ServicesOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "projectDetails",
    ()=>projectDetails,
    "projects",
    ()=>projects
]);
const projectDetails = {
    "ecommerce-platform": {
        id: "ecommerce-platform",
        title: "Forever Store",
        category: "Web Development",
        thumbnail: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Highly scalable E-commerce storefront with modern UI and seamless checkout experience.",
        slug: "ecommerce-platform",
        tags: [
            "Next.js",
            "Tailwind",
            "Stripe",
            "MongoDB"
        ],
        demoUrl: "https://forever-frontend-orcin.vercel.app/",
        outcomes: [
            "Lighthouse score 98",
            "Optimized mobile flow"
        ],
        problem: "The client needed a high-performance storefront that could handle complex product variations while maintaining sub-second load times.",
        strategy: "Implemented a Next.js 14 architecture with server-side rendering for SEO and client-side transitions for a snappy feel.",
        results: [
            "Sub-second page transitions",
            "98+ Lighthouse performance score",
            "Integrated secure payment gateway",
            "Real-time inventory management"
        ],
        metrics: [
            {
                label: "Performance",
                value: "98/100"
            },
            {
                label: "SEO",
                value: "100/100"
            }
        ],
        screenshots: []
    },
    "school-portal": {
        id: "school-portal",
        title: "Eco-School Portal",
        category: "EdTech",
        thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
        description: "Comprehensive school management system for tracking student progress and digital learning.",
        slug: "school-portal",
        tags: [
            "React",
            "Firebase",
            "Tailwind",
            "Node.js"
        ],
        demoUrl: "https://playful-bublanina-2048bd.netlify.app/",
        outcomes: [
            "Centralized management",
            "Automated grading"
        ],
        problem: "Educational institutions struggled with fragmented data and manual record-keeping for student attendance and performance.",
        strategy: "Developed a unified dashboard for teachers, students, and parents with real-time synchronization.",
        results: [
            "60% reduction in administrative paperwork",
            "Instant parent-teacher communication",
            "Automated attendance tracking",
            "Interactive digital assignments"
        ],
        metrics: [
            {
                label: "Efficiency",
                value: "+60%"
            },
            {
                label: "Users",
                value: "2k+"
            }
        ],
        screenshots: []
    },
    "tour-and-travels": {
        id: "tour-and-travels",
        title: "Adventure Travels",
        category: "Web Development",
        thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
        description: "Dynamic booking engine for custom tour packages and global travel itineraries.",
        slug: "tour-and-travels",
        tags: [
            "React",
            "Express",
            "PostgreSQL",
            "Cloudinary"
        ],
        demoUrl: "https://hotel-managment-ruddy.vercel.app/",
        outcomes: [
            "Real-time booking",
            "Package customizer"
        ],
        problem: "Travel agencies needed a way to offer complex, customizable tour packages with instant availability checks.",
        strategy: "Built a robust filtering and search engine with integrated payment for seamless vacation planning.",
        results: [
            "Streamlined booking process",
            "Integrated secure payment gateway",
            "Interactive travel itineraries",
            "Custom package builder for users"
        ],
        metrics: [
            {
                label: "Bookings",
                value: "+45%"
            },
            {
                label: "Support",
                value: "24/7"
            }
        ],
        screenshots: []
    },
    "hotel-management": {
        id: "hotel-management",
        title: "Grand View Hotels",
        category: "Web Development",
        thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
        description: "Premium hotel management system featuring room booking, guest services, and inventory tracking.",
        slug: "hotel-management",
        tags: [
            "Next.js",
            "Prisma",
            "MySQL",
            "AWS"
        ],
        demoUrl: "https://gregarious-sundae-8e8ae4.netlify.app/",
        outcomes: [
            "Automated check-ins",
            "Inventory alerts"
        ],
        problem: "Manual hotel operations led to overbooking errors and slow guest service response times.",
        strategy: "Engineered a centralized management hub with real-time room status updates and automated billing.",
        results: [
            "Eliminated overbooking issues",
            "Reduced check-in time by 70%",
            "Centralized staff management",
            "Automated financial reporting"
        ],
        metrics: [
            {
                label: "Check-in",
                value: "-70%"
            },
            {
                label: "Efficiency",
                value: "High"
            }
        ],
        screenshots: []
    },
    "interior-design": {
        id: "interior-design",
        title: "Modern Interiors",
        category: "Web Design",
        thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
        description: "Sophisticated portfolio for premium interior designers showcasing spatial artistry.",
        slug: "interior-design",
        tags: [
            "Framer Motion",
            "React",
            "Tailwind",
            "GSAP"
        ],
        demoUrl: "https://keen-smakager-907c76.netlify.app/",
        outcomes: [
            "Premium aesthetics",
            "High lead gen"
        ],
        problem: "The client needed a highly visual, premium destination to showcase high-end interior design projects.",
        strategy: "Focused on immersive visual storytelling with high-fidelity animations and parallax effects.",
        results: [
            "Award-winning design aesthetics",
            "Significant increase in client inquiries",
            "Smooth, cinematic transitions",
            "Mobile-optimized visual gallery"
        ],
        metrics: [
            {
                label: "Engagement",
                value: "+120%"
            },
            {
                label: "Leads",
                value: "+50%"
            }
        ],
        screenshots: []
    },
    "3d-portfolio": {
        id: "3d-portfolio",
        title: "3D Creative Portfolio",
        category: "Web Design",
        thumbnail: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1600&auto=format&fit=crop",
        description: "Immersive 3D portfolio featuring interactive experiences and high-fidelity project showcases.",
        slug: "3d-portfolio",
        tags: [
            "Three.js",
            "React Three Fiber",
            "GLSL",
            "GSAP"
        ],
        demoUrl: "https://www.piyushsingh.dpdns.org",
        outcomes: [
            "Interactive 3D",
            "Viral potential"
        ],
        problem: "Standard 2D portfolios failed to showcase the depth and interactivity of 3D creative work.",
        strategy: "Leveraged WebGL and Three.js to create a fully interactive 3D environment for project discovery.",
        results: [
            "Highly immersive user experience",
            "Exceptional social sharing and engagement",
            "Seamless 3D model integration",
            "Optimized rendering for mobile WebGL"
        ],
        metrics: [
            {
                label: "3D Reach",
                value: "10k+"
            },
            {
                label: "Retention",
                value: "3x Higher"
            }
        ],
        screenshots: []
    },
    "medisync-healthcare": {
        id: "medisync-healthcare",
        title: "MediSync",
        category: "Full Stack",
        thumbnail: "https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Streamlined healthcare accessibility and reduced medicine wastage by 40% through real-time inventory management.",
        slug: "medisync-healthcare",
        tags: [
            "React",
            "Express",
            "MongoDB",
            "Node.js"
        ],
        demoUrl: "#",
        outcomes: [
            "Saved patients 25% on costs",
            "Optimized for 10k+ concurrent users"
        ],
        problem: "Healthcare costs are rising, and near-expiry medicines are often wasted while patients struggle to afford them.",
        strategy: "Built a bridge between medical stores and patients to list discounted near-expiry medicines.",
        results: [
            "Significant reduction in medicine wastage",
            "Increased healthcare affordability",
            "Real-time inventory sync"
        ],
        metrics: [
            {
                label: "Wastage",
                value: "-40%"
            },
            {
                label: "Savings",
                value: "+25%"
            }
        ],
        screenshots: []
    },
    "camcon-mentorship": {
        id: "camcon-mentorship",
        title: "CAMCON",
        category: "EdTech",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
        description: "Built a scalable mentorship ecosystem connecting 1,000+ users with high-fidelity video collaboration tools.",
        slug: "camcon-mentorship",
        tags: [
            "MERN",
            "Socket.io",
            "WebRTC"
        ],
        demoUrl: "https://camcon-frontend.onrender.com/",
        outcomes: [
            "500+ successful sessions",
            "Seamless WebRTC integration"
        ],
        problem: "College juniors lack access to verified mentors among seniors for career and academic guidance.",
        strategy: "Built a role-based mentorship platform with secure video calling and chat functionality.",
        results: [
            "Verified mentor access",
            "Seamless video collaboration",
            "Automated matching system"
        ],
        metrics: [
            {
                label: "Users",
                value: "1k+"
            },
            {
                label: "Sessions",
                value: "500+"
            }
        ],
        screenshots: []
    },
    "sports-infra": {
        id: "sports-infra",
        title: "Smart Sport Infra",
        category: "Web Design",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        description: "Engineered a high-performance visual destination that boosted investor engagement and matched global infrastructure standards.",
        slug: "sports-infra",
        tags: [
            "React",
            "Tailwind",
            "Framer Motion"
        ],
        demoUrl: "https://smartsportinfra.com/",
        outcomes: [
            "Lighthouse score 95+",
            "Mobile-first performance"
        ],
        problem: "The client needed a digital presence that matched their global standards in sports infrastructure.",
        strategy: "Premium landing page design with smooth scroll and parallax animations.",
        results: [
            "Enhanced brand credibility",
            "Higher investor engagement",
            "Mobile-first performance"
        ],
        metrics: [
            {
                label: "Lighthouse",
                value: "95+"
            },
            {
                label: "Design",
                value: "Award-class"
            }
        ],
        screenshots: []
    }
};
const projects = Object.values(projectDetails);
const getProjectBySlug = (slug)=>projectDetails[slug];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/FeaturedProjects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function FeaturedProjects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-background overflow-hidden relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 md:mb-24 px-4 max-w-3xl mx-auto space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h2 uppercase leading-[1.25] text-foreground",
                            children: [
                                "Featured ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground dark:text-white",
                                    children: "Case"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                    lineNumber: 16,
                                    columnNumber: 22
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient",
                                    children: "Studies."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                    lineNumber: 16,
                                    columnNumber: 84
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-base md:text-xl leading-relaxed",
                            children: "Explore how we've helped startups and established companies build scalable digital solutions that drive results."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].slice(0, 4).map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative overflow-hidden rounded-[3rem] bg-card border border-border hover:border-primary/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-premium dark:hover:shadow-glow shine-effect shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-[16/10] overflow-hidden relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: project.thumbnail,
                                            alt: `${project.title} - ${project.category} solutions by Webkaro`,
                                            fill: true,
                                            className: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105",
                                            sizes: "(max-width: 768px) 100vw, 50vw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-6 right-6 md:top-8 md:right-8 flex flex-wrap justify-end gap-2 max-w-[200px]",
                                            children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-background/80 dark:bg-black/40 backdrop-blur-md border border-border dark:border-white/10 rounded-full text-[9px] uppercase tracking-widest text-foreground/80 dark:text-white/80 font-bold",
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 md:p-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4",
                                            children: project.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-black mb-4 uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors font-outfit leading-none",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm leading-relaxed mb-8 max-w-lg h-12 overflow-hidden line-clamp-2",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/projects/${project.slug}`,
                                                    className: "learn-more-link text-primary font-black text-[10px] tracking-widest uppercase hover:gap-3 transition-all",
                                                    children: [
                                                        "View Details ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: project.demoUrl || "#",
                                                    target: "_blank",
                                                    className: "flex items-center gap-2 text-foreground/40 dark:text-white/20 font-black text-[10px] uppercase tracking-widest hover:text-primary dark:hover:text-white transition-colors",
                                                    children: [
                                                        "Live Demo ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-16 md:mt-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/projects",
                        className: "inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white text-sm font-semibold hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-primary/20",
                        children: [
                            "View All Projects ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                                lineNumber: 88,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/FeaturedProjects.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = FeaturedProjects;
var _c;
__turbopack_context__.k.register(_c, "FeaturedProjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/ExpertCommunity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpertCommunity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
"use client";
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Collaborative Collective",
        description: "Our community of vetted developers and designers work together to bring diverse perspectives to every project."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "Vetted Expertise",
        description: "Every member of our collective undergoes a rigorous vetting process to ensure top-tier development standards."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "High Performance",
        description: "We don't just build websites; we engineer high-performance digital machines designed for speed and scale."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Global Standards",
        description: "Following modern architecture patterns and global best practices for scalable, maintainable products."
    }
];
function ExpertCommunity() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding relative overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16 md:mb-24 px-4 max-w-3xl mx-auto space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h2 uppercase leading-[1.25] text-foreground",
                                children: [
                                    "Powered By ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground dark:text-white",
                                        children: "Expert"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                        lineNumber: 39,
                                        columnNumber: 24
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "Collective."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                        lineNumber: 39,
                                        columnNumber: 88
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-base md:text-lg leading-relaxed",
                                children: "Webkaro is more than just a development agency. We are a community-driven collective of high-performance developers, designers, and strategists collaborating to deliver exceptional digital products."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10",
                                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                        className: "w-5 h-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-foreground dark:text-white font-black uppercase text-[10px] tracking-[0.2em] font-outfit",
                                                    children: feature.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-[13px] leading-relaxed max-w-[240px]",
                                                    children: feature.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mt-12 lg:mt-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4 md:gap-6 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 md:space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-card dark:transparent dark:glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl h-40 md:h-48 flex flex-col justify-end animate-float border border-border dark:border-white/5 shadow-premium dark:shadow-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl md:text-3xl font-black text-foreground dark:text-white",
                                                                children: "50+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground",
                                                                children: "Experts"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                                lineNumber: 70,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-card dark:transparent dark:glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl h-56 md:h-64 flex flex-col justify-end border border-border dark:border-white/5 shadow-premium dark:shadow-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl md:text-3xl font-black text-foreground dark:text-white",
                                                                children: "100%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                                lineNumber: 73,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground",
                                                                children: "Growth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 md:space-y-6 pt-6 md:pt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-card dark:transparent dark:glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl h-56 md:h-64 flex flex-col justify-end border border-border dark:border-white/5 shadow-premium dark:shadow-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl md:text-3xl font-black text-foreground dark:text-white",
                                                                children: "Global"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground",
                                                                children: "Reach"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-card dark:transparent dark:glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl h-40 md:h-48 flex flex-col justify-end animate-float border border-border dark:border-white/5 shadow-premium dark:shadow-xl",
                                                        style: {
                                                            animationDelay: "1s"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl md:text-3xl font-black text-foreground dark:text-white",
                                                                children: "24/7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground",
                                                                children: "Sync"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ExpertCommunity.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = ExpertCommunity;
var _c;
__turbopack_context__.k.register(_c, "ExpertCommunity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const GOOGLE_REVIEW_URL = "https://g.page/r/CVJRXt-C6ge8EAI/review";
const reviews = [
    {
        id: 1,
        author: "Arjun Mehta",
        role: "Founder, TechStack",
        rating: 5,
        text: "Honestly, working with Webkaro was smoother than I expected. They helped us turn our rough MVP into something we were actually proud to launch. Super responsive and easy to work with.",
        date: "2 months ago"
    },
    {
        id: 2,
        author: "Sarah",
        role: "Product Manager, Flow",
        rating: 4,
        text: "Great experience overall. The team really understood what we were trying to build and gave practical suggestions along the way. Communication was clear and timelines were respected.",
        date: "1 month ago"
    },
    {
        id: 3,
        author: "Rahul Singh",
        role: "CEO, Sporty",
        rating: 5,
        text: "Loved the final result! The UI looks clean and modern, and everything just works smoothly. You can tell they care about the details.",
        date: "3 weeks ago"
    },
    {
        id: 4,
        author: "Elena",
        role: "Founder",
        rating: 4,
        text: "Very professional team. The code quality was solid and easy for our internal developers to continue working on. Would definitely collaborate again.",
        date: "2 weeks ago"
    }
];
const templates = [
    {
        id: "startup",
        label: "Startup Founder Tone",
        text: "Working with Webkaro was a game-changer for our startup. They built our MVP with high performance and scalability in mind. Highly recommended for fast-moving founders!"
    },
    {
        id: "enterprise",
        label: "Enterprise Client Tone",
        text: "Webkaro delivered a complex system integration with professional precision. Their collective model ensures you get the right experts for every part of the stack."
    },
    {
        id: "technical",
        label: "Technical Collaboration Tone",
        text: "Impored by their clean architecture and use of modern technologies like Next.js 16 and GSAP. A truly engineering-first collective that delivers results."
    }
];
function Testimonials() {
    _s();
    const [activeTemplate, setActiveTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(templates[0]);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiReview, setAiReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            if (isPaused) return;
            const interval = setInterval({
                "Testimonials.useEffect.interval": ()=>{
                    setActiveIndex({
                        "Testimonials.useEffect.interval": (prev)=>(prev + 1) % reviews.length
                    }["Testimonials.useEffect.interval"]);
                }
            }["Testimonials.useEffect.interval"], 5000);
            return ({
                "Testimonials.useEffect": ()=>clearInterval(interval)
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], [
        isPaused,
        reviews.length
    ]);
    const generateWithAI = async ()=>{
        setIsGenerating(true);
        try {
            const response = await fetch("/api/generate-review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tone: activeTemplate.label,
                    details: "web development, UI/UX design, and digital growth"
                })
            });
            const data = await response.json();
            if (data.text) {
                setAiReview(data.text);
                setActiveTemplate({
                    id: "ai-generated",
                    label: "✨ AI Generated",
                    text: data.text
                });
            } else if (data.error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(data.error);
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to generate AI review");
        } finally{
            setIsGenerating(false);
        }
    };
    const copyToClipboard = (text)=>{
        if (!text) return;
        navigator.clipboard.writeText(text);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("✓ Review template copied to clipboard!", {
            duration: 3000,
            position: 'top-right',
            style: {
                background: '#10B981',
                color: '#fff'
            }
        });
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-background transition-colors duration-500 relative border-t border-border/40 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Testimonials.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16 md:mb-24 px-4 max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 rounded-full mb-6 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
                                        alt: "Google",
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-black uppercase tracking-[0.2em] text-foreground/40 dark:text-white/40",
                                        children: "Verified Google Reviews"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h2 mb-4 uppercase leading-[1.3] text-foreground",
                                children: [
                                    "Trusted By ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 141,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground dark:text-white",
                                        children: "Innovative"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "Teams."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 142,
                                        columnNumber: 81
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex",
                                        children: [
                                            ...Array(5)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-4 h-4 md:w-5 md:h-5 fill-yellow-500 text-yellow-500"
                                            }, i, false, {
                                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground dark:text-white font-black text-lg md:text-xl leading-none",
                                        children: "5.0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-wider",
                                        children: "40+ Reviews"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full overflow-hidden mb-12 md:mb-20",
                        onMouseEnter: ()=>setIsPaused(true),
                        onMouseLeave: ()=>setIsPaused(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex gap-6 w-max",
                            animate: {
                                x: isPaused ? 0 : [
                                    "0%",
                                    "-50%"
                                ]
                            },
                            transition: {
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop"
                            },
                            children: [
                                ...reviews,
                                ...reviews
                            ].map((review, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0 w-[300px] md:w-[450px] bg-card dark:bg-white/[0.02] p-6 md:p-10 rounded-[2.5rem] border border-border dark:border-white/5 hover:border-primary/50 hover:shadow-premium dark:hover:shadow-glow transition-all duration-500 group flex flex-col justify-between min-h-[250px] shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-foreground dark:text-white font-black text-sm md:text-base",
                                                            children: review.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-[8px] md:text-[9px] uppercase tracking-wider font-bold",
                                                            children: review.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-end gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-0.5",
                                                            children: [
                                                                ...Array(review.rating)
                                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    className: "w-3 h-3 fill-yellow-500 text-yellow-500"
                                                                }, i, false, {
                                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[7px] font-black text-foreground/20 dark:text-white/20 uppercase tracking-widest",
                                                            children: "Verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                    className: "w-8 h-8 text-primary/10 absolute -left-2 -top-4 -z-10 rotate-180"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-foreground/80 dark:text-white/80 text-sm md:text-base font-bold font-outfit leading-relaxed italic relative z-10",
                                                    children: review.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${review.id}-${idx}`, true, {
                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto px-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card dark:glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-border dark:border-primary/20 relative shadow-premium dark:shadow-glow-lg transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-primary rounded-full text-[10px] md:text-xs font-bold text-white uppercase tracking-widest shadow-xl shadow-primary/40 whitespace-nowrap",
                                    children: "Happy with our work?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/70 mb-8 text-base md:text-lg lg:text-xl",
                                    children: "Supporting us helps our collective grow. Copy a template below and leave us a review on Google!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: GOOGLE_REVIEW_URL,
                                            target: "_blank",
                                            className: "btn-cta-primary px-8 py-4 rounded-full font-black flex items-center justify-center gap-3 shadow-xl shadow-primary/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
                                                    alt: "",
                                                    className: "w-5 h-5 brightness-0 invert"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                "Write a Google Review"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowModal(true),
                                            className: "btn-cta-secondary px-8 py-4 rounded-full font-black flex items-center justify-center gap-3",
                                            children: [
                                                "Review Templates ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[200] flex items-center justify-center px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-background/90 backdrop-blur-xl",
                                onClick: ()=>setShowModal(false)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-card dark:glass p-8 md:p-12 rounded-[3rem] max-w-2xl w-full border border-border dark:border-primary/30 shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-foreground dark:text-white mb-8 font-outfit text-center",
                                        children: "Copy & Leave Review"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mb-8 justify-center",
                                        children: templates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveTemplate(t),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-full text-xs font-bold transition-all", activeTemplate.id === t.id ? "bg-primary text-white" : "bg-primary/5 dark:bg-white/5 text-muted-foreground hover:bg-primary/10 dark:hover:bg-white/10"),
                                                children: t.label
                                            }, t.id, false, {
                                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-background dark:bg-black/40 p-6 rounded-2xl border border-border dark:border-white/10 mb-8 min-h-[150px] max-h-[250px] overflow-y-auto flex flex-col justify-center",
                                        children: isGenerating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-primary animate-pulse uppercase tracking-[0.2em]",
                                                    children: "Crafting Review with AI..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                            lineNumber: 265,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm leading-relaxed italic",
                                            children: activeTemplate.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                            lineNumber: 270,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: [
                                            !isGenerating && activeTemplate.id !== "ai-generated" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: generateWithAI,
                                                className: "w-full py-3 bg-primary/10 border border-primary/20 text-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/20 transition-all hover:scale-[1.01]",
                                                children: "✨ Generate with Gemini AI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>copyToClipboard(activeTemplate.text),
                                                        disabled: isGenerating || !activeTemplate.text,
                                                        className: "flex-1 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed",
                                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 33
                                                                }, this),
                                                                " Copied!"
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 78
                                                                }, this),
                                                                " Copy Text"
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: GOOGLE_REVIEW_URL,
                                                        target: "_blank",
                                                        className: "flex-1 py-4 bg-foreground dark:bg-white text-background dark:text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform",
                                                        children: [
                                                            "Open Google Maps ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Testimonials.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Testimonials.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "dHylXURqJRCpDBt8z9/HztImKqE=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/TrustSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrustSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
"use client";
;
;
;
const clientLogos = [
    {
        name: "FinEdge Capital",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        color: "text-emerald-500"
    },
    {
        name: "NextGen SaaS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        color: "text-blue-500"
    },
    {
        name: "UrbanCart",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        color: "text-purple-500"
    },
    {
        name: "MedicoCare Network",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        color: "text-red-500"
    },
    {
        name: "EduBridge Academy",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        color: "text-indigo-500"
    },
    {
        name: "LaunchPad Labs",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        color: "text-amber-500"
    },
    {
        name: "RetailHive Pvt Ltd",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        color: "text-cyan-500"
    },
    {
        name: "AI & SaaS Products",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: "text-orange-500"
    }
];
function TrustSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-24 pb-28 px-6 md:px-16 bg-background transition-colors duration-500 relative border-t border-border/40 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/TrustSection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/TrustSection.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12 md:mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "h3 text-muted-foreground uppercase tracking-[0.2em] md:tracking-[0.3em]",
                            children: "Trusted by 40+ Growing Brands Worldwide"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/TrustSection.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/TrustSection.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-500",
                        children: clientLogos.map((client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.08
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                className: "flex items-center gap-2 md:gap-3 transition-all cursor-pointer group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(client.icon, {
                                        className: `w-6 h-6 md:w-8 md:h-8 ${client.color} transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(var(--primary),0.3)]`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/TrustSection.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg md:text-2xl font-black text-foreground group-hover:text-primary dark:text-white/80 dark:group-hover:text-white tracking-tighter transition-colors duration-300",
                                        children: client.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/TrustSection.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, client.name, true, {
                                fileName: "[project]/src/components/sections/TrustSection.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/TrustSection.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/TrustSection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/TrustSection.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = TrustSection;
var _c;
__turbopack_context__.k.register(_c, "TrustSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/faq.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faqs",
    ()=>faqs
]);
const faqs = [
    {
        id: "1",
        slug: "development-process",
        question: "What is your development process?",
        answer: "We follow a structured, transparent, and agile-driven development process that moves from idea validation to architecture planning, iterative development, and performance-tested deployment.",
        details: "Our process begins with an in-depth **Discovery Phase**, where we understand your business goals, target audience, revenue model, and technical constraints. We then move into **Strategy & System Architecture**, where we define database structure, API flows, scalability planning, and technology stack decisions. Development happens in **Agile Sprints**, typically 1–2 weeks long, with clear milestones and demo reviews. Every feature goes through **Code Review, QA Testing, Performance Optimization, and Security Checks** before deployment. Post-launch, we monitor real-world performance and refine where necessary. Our goal is not just to ship — but to ship something stable, scalable, and maintainable."
    },
    {
        id: "2",
        slug: "mvp-for-startups",
        question: "Do you build MVPs for startups?",
        answer: "Yes. Building fast, scalable, investor-ready MVPs is one of our core strengths. We help founders validate ideas quickly without compromising long-term scalability.",
        details: "We specialize in helping startups move from idea to launch efficiently. Instead of overbuilding, we focus on **Core Value Features** that directly validate your business hypothesis. Our MVPs are production-ready, meaning the architecture is built in a way that supports future scaling. We assist in **Feature Prioritization, UX Planning, API Design, Database Structuring, and Deployment Strategy**. Typical MVP timelines range from 6–10 weeks depending on scope. After launch, we help you analyze user feedback, track product metrics, and plan Version 2 intelligently."
    },
    {
        id: "3",
        slug: "technology-stack",
        question: "Which technologies do you use?",
        answer: "We use a modern, performance-focused tech stack including Next.js, TypeScript, Tailwind CSS, Node.js, and scalable cloud infrastructure like AWS and Vercel.",
        details: "For frontend development, we rely on **Next.js** for SEO and server-side rendering, **TypeScript** for maintainable and error-resistant code, **Tailwind CSS** for scalable UI systems, and animation tools like **GSAP or Framer Motion** for premium interactions. On the backend, we work with **Node.js**, **Express**, and databases such as **MongoDB or PostgreSQL** depending on relational needs. For infrastructure, we deploy on **Vercel, AWS, or dedicated cloud servers**, implementing CI/CD pipelines, environment management, and secure authentication systems. Our stack choices are always aligned with your product's long-term growth and performance needs."
    },
    {
        id: "4",
        slug: "maintenance-support",
        question: "How do you handle maintenance?",
        answer: "We provide structured maintenance and long-term support plans to ensure your application remains secure, fast, and up-to-date after launch.",
        details: "Product launch is only the beginning. Our maintenance services include **Security Updates, Dependency Upgrades, Performance Monitoring, Server Health Checks, and Bug Resolution**. We offer different support tiers depending on your scale and traffic requirements. We also provide **Feature Enhancement Cycles**, ensuring your product evolves based on user feedback and market changes. Our proactive monitoring system helps detect issues before they impact users."
    },
    {
        id: "5",
        slug: "project-cost",
        question: "How much does a custom project cost?",
        answer: "Project pricing depends on complexity, feature scope, integrations, and timeline. We provide detailed custom proposals after a discovery discussion.",
        details: "The cost of development depends on multiple factors including **Number of Features, Third-Party Integrations, UI Complexity, Backend Architecture, Scalability Requirements, and Deployment Environment**. For clearly defined projects, we prefer a **Fixed-Fee Model** with milestone-based payments. For evolving or research-driven builds, we recommend a **Time & Materials Model** for flexibility. Our projects typically start from $5k and scale upward depending on scope. We ensure transparent breakdowns so you understand exactly where your investment goes."
    },
    {
        id: "6",
        slug: "building-timeline",
        question: "How long does it take to build a website?",
        answer: "Timelines vary based on complexity. Marketing websites typically take 3–5 weeks, while SaaS or custom platforms can range from 2–6 months.",
        details: "A **Standard Corporate Website** with design, content integration, and CMS setup generally takes 3–5 weeks. **E-commerce Platforms** with payment gateways, dashboards, and order systems may take 8–12 weeks. Complex **SaaS Platforms** with custom backend logic, authentication systems, real-time features, and dashboards can take 3–6 months. We provide a structured roadmap with milestone checkpoints so expectations are clear from day one."
    },
    {
        id: "7",
        slug: "seo-marketing",
        question: "Do you provide SEO and marketing services?",
        answer: "Yes. Every website we build follows technical SEO best practices, and we also offer advanced SEO and performance marketing services.",
        details: "Our websites are built with **Semantic HTML, Meta Optimization, Sitemap Generation, Schema Markup, and Fast Core Web Vitals Performance** by default. Beyond technical SEO, we offer **Keyword Research, On-Page Optimization, Content Strategy, and Link-Building Plans**. We also help set up **Google Ads, Meta Ads, Conversion Tracking, and Analytics Dashboards** to monitor ROI and campaign performance effectively."
    },
    {
        id: "8",
        slug: "mobile-responsive",
        question: "Is my website mobile-friendly?",
        answer: "Yes. We design every project using a Mobile-First approach to ensure flawless responsiveness across all screen sizes.",
        details: "We prioritize mobile performance because over 60% of traffic today comes from mobile devices. Our Mobile-First strategy ensures layouts, typography, and interactions are optimized for small screens before scaling up. We test across multiple screen resolutions and devices to ensure consistent performance. We also optimize touch interactions, loading speed, and accessibility for improved user experience."
    },
    {
        id: "9",
        slug: "content-updates",
        question: "Can I update the content myself?",
        answer: "Yes. We integrate intuitive CMS systems that allow you to manage content, blogs, images, and pages without any technical knowledge.",
        details: "We use modern **Headless CMS solutions** like Sanity, Contentful, or custom-built dashboards depending on your needs. You will be able to update blog posts, modify landing page content, upload media, and manage metadata without writing code. We also provide training documentation or video walkthroughs to ensure you feel confident managing your platform independently."
    },
    {
        id: "10",
        slug: "nda-policy",
        question: "Do you sign NDAs?",
        answer: "Absolutely. We respect intellectual property and are happy to sign NDAs before discussing confidential project details.",
        details: "We understand that many ideas involve sensitive business logic, proprietary data, or investor-backed innovations. We have standard NDA agreements ready, or we can review and sign your legal documentation. Data security, privacy, and confidentiality are core values in our workflow. Your idea remains protected throughout the entire collaboration process."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/FAQPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/faq.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FAQPreview() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "section-padding bg-background transition-colors duration-500 relative border-t border-border/40 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[900px] h-[450px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FAQPreview.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/FAQPreview.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16 md:mb-20 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h2 mb-4 uppercase leading-[1.3] text-foreground",
                                children: [
                                    "Common ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-foreground dark:text-white",
                                        children: "Questions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                        lineNumber: 22,
                                        columnNumber: 20
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                        lineNumber: 22,
                                        columnNumber: 86
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-outfit",
                                children: "Everything you need to know about working with our engineering collective."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/FAQPreview.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faqs"].map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card dark:transparent dark:glass rounded-[2rem] md:rounded-3xl overflow-hidden transition-all duration-500 border border-border dark:border-white/5 shadow-sm", openIndex === index ? "shadow-premium border-primary/20" : "hover:border-border dark:hover:border-white/10"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenIndex(openIndex === index ? null : index),
                                        className: "w-full p-6 md:p-8 flex items-center justify-between text-left group transition-all",
                                        "aria-expanded": openIndex === index,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base md:text-xl font-black uppercase tracking-tight transition-colors font-outfit pr-4", openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"),
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all shrink-0 border border-border dark:border-white/10 group-hover:border-primary/40 shadow-inner", openIndex === index ? "bg-primary text-white border-primary" : "bg-primary/5 dark:bg-white/5 text-muted-foreground"),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform duration-300", openIndex === index ? "rotate-180" : "")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden transition-all duration-300", openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 md:p-8 pt-0 border-t border-border dark:border-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground leading-relaxed text-[13px] md:text-sm mb-6 max-w-2xl",
                                                    children: faq.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/faq/${faq.slug}`,
                                                    className: "inline-flex items-center gap-2 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest hover:gap-3 transition-all",
                                                    children: [
                                                        "Details in our FAQ ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 40
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/FAQPreview.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 md:mt-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "text-muted-foreground hover:text-primary transition-colors text-[10px] md:text-xs font-bold uppercase tracking-widest",
                            children: [
                                "Still have questions? ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary underline underline-offset-8",
                                    children: "Talk to an expert"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/FAQPreview.tsx",
                                    lineNumber: 82,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/FAQPreview.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/FAQPreview.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/FAQPreview.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/FAQPreview.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(FAQPreview, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FAQPreview;
var _c;
__turbopack_context__.k.register(_c, "FAQPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/FinalCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-google-recaptcha/lib/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$magnetize$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/magnetize-button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function FinalCTA() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recaptchaToken, setRecaptchaToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please enter a valid email address", {
                duration: 4000,
                position: 'top-right'
            });
            return;
        }
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(formData.phone)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please enter a valid 10-digit Indian mobile number", {
                duration: 4000,
                position: 'top-right'
            });
            return;
        }
        if (!recaptchaToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please complete the reCAPTCHA", {
                duration: 4000,
                position: 'top-right'
            });
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: ("TURBOPACK compile-time value", "dcd60d8a-099b-4b76-ab03-0fa2d0988ea9"),
                    subject: "New Consultation Request from Webkaro",
                    from_name: "Webkaro Agency"
                })
            });
            const result = await response.json();
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("✓ Thank you! We'll contact you within 24 hours", {
                    duration: 5000,
                    position: 'top-right',
                    style: {
                        background: '#10B981',
                        color: '#fff'
                    }
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: ""
                });
                setRecaptchaToken(null);
            } else {
                throw new Error(result.message || "Something went wrong");
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("❌ Something went wrong. Please try again", {
                duration: 4000,
                position: 'top-right'
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-background transition-colors duration-500 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/FinalCTA.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-4xl mx-auto space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-5xl md:text-7xl font-black text-foreground tracking-tighter font-outfit uppercase leading-[1.1]",
                                children: [
                                    "Get a Free ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary italic",
                                        children: "Consultation."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 98,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl md:text-2xl text-muted-foreground font-medium font-outfit",
                                        children: [
                                            "Discuss your project with our ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground dark:text-white underline decoration-primary decoration-2 underline-offset-8",
                                                children: "startup experts."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 103,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed italic",
                                        children: "Our team of engineering specialists has helped 100+ brands boost their digital traffic and sales through high-performance solutions."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 opacity-80 dark:opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+919310390980",
                                        className: "flex items-center gap-3 text-[10px] font-black uppercase text-foreground dark:text-white tracking-widest hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            "+91 93103 90980"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXwPhTZZdSDTrRrvMcvWTxSfztXNVGffnJCllGGJgncZznPQkcDvglhQKkNKPsDrnCJB",
                                        className: "flex items-center gap-3 text-[10px] font-black uppercase text-foreground dark:text-white tracking-widest hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            "info@webkaro.in"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://webkaro.in",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-3 text-[10px] font-black uppercase text-foreground dark:text-white tracking-widest hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            "webkaro.in"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://maps.app.goo.gl/M3aJuqSq4LnDk8YFA",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-3 text-[10px] font-black uppercase text-foreground dark:text-white tracking-widest hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this),
                                            "Sovia Vihar 3rd Pusta Delhi, India"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 mt-12",
                                children: [
                                    "https://flagcdn.com/in.svg",
                                    "https://flagcdn.com/us.svg",
                                    "https://flagcdn.com/gb.svg",
                                    "https://flagcdn.com/ca.svg",
                                    "https://flagcdn.com/au.svg"
                                ].map((flag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: flag,
                                        alt: `Global clients from ${flag.split('/').pop()?.split('.')[0].toUpperCase() || 'Webkaro trusted regions'}`,
                                        className: "h-5 md:h-6 w-auto rounded-sm    opacity-30 grayscale saturate-0    hover:opacity-100 hover:grayscale-0 hover:saturate-100    transition-all duration-300 ease-in-out"
                                    }, idx, false, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mt-12 lg:mt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            className: "glass p-8 md:p-14 rounded-[3rem] border-white/5 bg-white/[0.03] shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "flex flex-col gap-6 md:gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name-input",
                                                className: "absolute left-8 top-3 text-[10px] font-black uppercase text-foreground/60 dark:text-white/40 tracking-widest cursor-pointer group-focus-within:text-primary transition-colors",
                                                children: "Your Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "name-input",
                                                type: "text",
                                                value: formData.name,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        name: e.target.value
                                                    }),
                                                placeholder: "John Doe",
                                                className: "w-full h-16 bg-background dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl px-8 pt-5 text-foreground dark:text-white font-bold focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-outfit shadow-sm",
                                                "aria-label": "Your full name",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email-input-footer",
                                                className: "absolute left-8 top-3 text-[10px] font-black uppercase text-foreground/60 dark:text-white/40 tracking-widest cursor-pointer group-focus-within:text-primary transition-colors",
                                                children: "Your Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "email-input-footer",
                                                type: "email",
                                                value: formData.email,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        email: e.target.value
                                                    }),
                                                placeholder: "name@example.com",
                                                className: "w-full h-16 bg-background dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl px-8 pt-5 text-foreground dark:text-white font-bold focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-outfit shadow-sm",
                                                "aria-label": "Your email address",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "phone-input",
                                                className: "absolute left-8 top-3 text-[10px] font-black uppercase text-foreground/60 dark:text-white/40 tracking-widest cursor-pointer group-focus-within:text-primary transition-colors",
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "phone-input",
                                                type: "tel",
                                                value: formData.phone,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        phone: e.target.value
                                                    }),
                                                placeholder: "98765 43210",
                                                className: "w-full h-16 bg-background dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl px-8 pt-5 text-foreground dark:text-white font-bold focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-outfit shadow-sm",
                                                "aria-label": "Your 10-digit mobile number",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center scale-[0.8] sm:scale-90 md:scale-100 origin-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                            sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
                                            onChange: (token)=>setRecaptchaToken(token),
                                            theme: theme === "dark" ? "dark" : "light"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$magnetize$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MagnetizeButton"], {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        particleCount: 16,
                                        className: "w-full h-16 rounded-2xl font-black text-lg md:text-xl",
                                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Processing..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Get a Free Quote"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-5 h-5 transition-transform group-hover:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-muted-foreground/30 text-[10px] md:text-xs font-bold leading-relaxed",
                                        children: "By clicking the button above, you agree to our Terms of Use and Privacy Policy."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/FinalCTA.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/FinalCTA.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/FinalCTA.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/FinalCTA.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(FinalCTA, "8dB7Di4mAaN3yh5+fy4aZHSvki8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = FinalCTA;
var _c;
__turbopack_context__.k.register(_c, "FinalCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_8518026d._.js.map