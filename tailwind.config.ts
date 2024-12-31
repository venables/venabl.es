import typography from "@tailwindcss/typography"
import defaultTheme from "tailwindcss/defaultTheme"
import animate from "tailwindcss-animate"
import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        display: [
          "ClashDisplay-Variable",
          "iA Writer Duo",
          ...defaultTheme.fontFamily.mono
        ],
        mono: ["iA Writer Duo", ...defaultTheme.fontFamily.mono]
      },
      animation: {
        swing: "swing 2s ease-in-out forwards"
      },
      keyframes: {
        swing: {
          "0%": {
            transform: "rotate(0deg)"
          },
          "10%": {
            transform: "rotate(20deg)"
          },
          "100%": {
            transform: "rotate(12.5deg)"
          },
          "30%": {
            transform: "rotate(7.5deg)"
          },
          "50%": {
            transform: "rotate(15deg)"
          },
          "70%": {
            transform: "rotate(11.5deg)"
          },
          "90%": {
            transform: "rotate(12.5deg)"
          }
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      }
    }
  },
  plugins: [animate, typography]
} satisfies Config
