import { createFileRoute } from '@tanstack/react-router'
import { motion as m } from 'framer-motion'
import { useState, useMemo } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [darkTheme, setDarkTheme] = useState(sessionStorage.getItem('dark') ? Boolean(sessionStorage.getItem('dark')) : false);

  const sunPath:string = "M61.5 85C74.6628 85 85.3333 74.2548 85.3333 61C85.3333 47.7452 74.6628 37 61.5 37C48.3372 37 37.6667 47.7452 37.6667 61C37.6667 74.2548 48.3372 85 61.5 85Z"
  const moonPath:string = "M61.5 85C74.6628 85 85.3333 74.2548 85.3333 61C63.2416 71.1061 54.7819 58.0231 61.5 37C48.3372 37 37.6667 47.7452 37.6667 61C37.6667 74.2548 48.3372 85 61.5 85Z"

  const raysVariants = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rayVariant = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      scale: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        pathLength: {duration: 0.3},
        opacity: {duration: 0.2},
        scale: {duration: 0.3}
      }
    }
  }

  const handleDarkModeClick = (e: any) => {
    setDarkTheme(!darkTheme);
  }

  useMemo(() => {
    sessionStorage.setItem('dark', darkTheme.toString());
  }, [darkTheme]);

  return (
    <div className="App flex  left-2 item-center">
      <button onClick={handleDarkModeClick}>
      <m.svg animate={darkTheme ? {
        rotate: 360
      } : {
        rotate: 0,
        transition: {
          duration: 0.5
        }
      }} className={'relative'} width="52" height="52" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg"
      strokeLinecap={'round'} strokeWidth={'4'}
      >
        <m.path className='' initial={{ fillOpacity: 0, strokeOpacity: 0}}
        animate={darkTheme ? 
          {
            stroke:"var(--color-blue-400)",
            fill: "var(--color-blue-400)",
            fillOpacity: 0.35,
            strokeOpacity: 1,
            d: moonPath
          }
          : 
          {
          fillOpacity:0.35, 
          strokeOpacity: 1, 
          rotate:0, 
          stroke:"var(--color-yellow-600)",
          fill: "var(--color-yellow-600)",
          d: sunPath
        }}
        />
        <m.g variants={raysVariants} initial="hidden" animate={darkTheme ? "hidden" : "visible"} className={`stroke-4 stroke-yellow-600`}>
          <m.path className="origin-center" variants={rayVariant}  d="M61.5 1V13" />
          <m.path variants={rayVariant}  d="M1.91667 61H13.8333" />
          <m.path variants={rayVariant}  d="M103.625 18.58L95.2242 27.04" />
          <m.path variants={rayVariant}  d="M109.167 61H121.083" />
          <m.path variants={rayVariant}  d="M27.7758 94.96L19.3746 103.42" />
          <m.path variants={rayVariant}  d="M61.5 109V121" />
          <m.path variants={rayVariant}  d="M19.3746 18.58L27.7758 27.04" />
          <m.path variants={rayVariant}  d="M95.2242 94.96L103.625 103.42" />
        </m.g>
      </m.svg>
      </button>
    </div>
  )
}
