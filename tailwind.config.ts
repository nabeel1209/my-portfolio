import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        "poppins":['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        "sora": ['var(--font-sora)', ...defaultTheme.fontFamily.sans],
        "inter": ['var(--font-inter)', ...defaultTheme.fontFamily.sans]
      }, 
      animation:{
          navSlideRight:'navSlideRight 1s ease-in-out',
          navSlideLeft:'navSlideLeft 1s ease-in-out',
          topSlideRight:'topSlideRight 1s ease-in-out',
          topSlideLeft:'topSlideLeft 1s ease-in-out',
          midSlideRight:'midSlideRight 1s ease-in-out',
          midSlideLeft:'midSlideLeft 1s ease-in-out',
          botSlideRight:'botSlideRight 1s ease-in-out',
          botSlideLeft:'botSlideLeft 1s ease-in-out',
          headingHeroAnimation:'headingHeroAnimation 1s ease-in-out',
          
      },
      keyframes:{
        navSlideRight:{
          "from":{transform: 'translateX(-100%)'},
          "to":{transform: 'translateX(0%)'}
        }, 
        navSlideLeft:{
          "from":{transform: 'translateX(0%)'},
          "to":{transform: 'translateX(-100%)'}
        },
        topSlideRight:{
          "from":{transform:'rotate(0deg)'},
          "to":{transform:'rotate(45deg)'}
        },
        topSlideLeft:{
          "from":{transform:'rotate(45deg)'},
          "to":{transform:'rotate(0deg)'}
        },
        midSlideRight:{
          "from":{scale:"1"},
          "to":{scale:"0"}
        },
        midSlideLeft:{
          "from":{scale:"0"},
          "to":{scale:"1"}
        },
        botSlideRight:{
          "from":{transform:'rotate(0deg)'},
          "to":{transform:'rotate(-45deg)'}
        },
        botSlideLeft:{
          "from":{transform:'rotate(-45deg)'},
          "to":{transform:'rotate(0deg)'}
        },
        headingHeroAnimation:{
          "from":{transform: "translateX(-50%)"},
          "to":{transform: "translateX(0%)"}
        }
      }
    },
  },
  plugins: [],
};
export default config;
