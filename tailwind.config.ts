import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        "wave-background": "wave-background 10s ease-in-out infinite",
        "wave-slow": "wave-slow 8s ease-in-out infinite",
        "wave-medium": "wave-medium 6s ease-in-out infinite",
        "wave-fast": "wave-fast 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-delayed": "float-delayed 8s ease-in-out infinite 2s",
        "float-reverse": "float-reverse 10s ease-in-out infinite 1s",
      },
      keyframes: {
        aurora: {
          "0%": {
            "background-position": "50% 50%, 50% 50%",
          },
          "100%": {
            "background-position": "350% 50%, 350% 50%",
          },
        },
        "wave-background": {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) skewX(0deg)",
          },
          "25%": {
            transform: "translateX(5px) translateY(-3px) skewX(1deg)",
          },
          "50%": {
            transform: "translateX(-3px) translateY(5px) skewX(-0.5deg)",
          },
          "75%": {
            transform: "translateX(2px) translateY(-2px) skewX(0.5deg)",
          },
        },
        "wave-slow": {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) rotate(0deg)",
          },
          "33%": {
            transform: "translateX(-8px) translateY(4px) rotate(1deg)",
          },
          "66%": {
            transform: "translateX(6px) translateY(-6px) rotate(-0.5deg)",
          },
        },
        "wave-medium": {
          "0%, 100%": {
            transform: "translateX(0) translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateX(4px) translateY(-4px) scale(1.02)",
          },
        },
        "wave-fast": {
          "0%, 100%": {
            transform: "translateX(0) translateY(0)",
          },
          "25%": {
            transform: "translateX(3px) translateY(-2px)",
          },
          "75%": {
            transform: "translateX(-2px) translateY(3px)",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.2",
          },
          "50%": {
            transform: "translateY(-20px) translateX(10px)",
            opacity: "0.4",
          },
        },
        "float-delayed": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.15",
          },
          "50%": {
            transform: "translateY(15px) translateX(-15px)",
            opacity: "0.3",
          },
        },
        "float-reverse": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.1",
          },
          "50%": {
            transform: "translateY(25px) translateX(20px)",
            opacity: "0.25",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-conic": 
          "conic-gradient(var(--conic-position, from 0deg at 50% 50%), var(--tw-gradient-stops))",
      },
      perspective: {
        '1000': '1000px',
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config; 