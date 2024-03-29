import React from 'react'
import './about.css'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const About = () => {

const [ref, inView] = useInView({
    triggerOnce: true, // pour déclencher une seule fois
});

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 0.8 };
    

  return (
    <div className='about container'>
        <div className="cards">
            <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{...transition,delay:.2}}

            className="card card-1">
                <h3>Free Shipping</h3>
                <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Deserunt, magnam!</p>
                <span className='logo-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="19" fill="#ffc107" />
                        <circle cx="24" cy="24" r="15" fill="#ffd54f" />
                        <path fill="#f44336" d="M6,32h36c1.105,0,2-0.895,2-2V18c0-1.105-0.895-2-2-2H6c-1.105,0-2,0.895-2,2v12C4,31.105,4.895,32,6,32z" />
                        <path fill="#fff" d="M15.867,30H13.57l-3.359-7.461V30H7.914V18.625h2.297l3.367,7.469v-7.469h2.289 C15.867,18.625,15.867,30,15.867,30z" />
                        <path fill="#fff" d="M23.586,25.078h-3.578v3.016h4.234V30h-6.531V18.625h6.516v1.914h-4.219v2.688h3.578 C23.586,23.227,23.586,25.078,23.586,25.078z" />
                        <path fill="#fff" d="M32.953,25.773l1.078-7.148h2.273L34.281,30h-2.305l-1.328-6.703L29.336,30h-2.313l-2.031-11.375 h2.289l1.07,7.141l1.336-7.141h1.93L32.953,25.773z" />
                        <path fill="#fff" d="M37.562,28.93c0-0.354,0.112-0.645,0.336-0.871s0.516-0.34,0.875-0.34 c0.354,0,0.644,0.113,0.867,0.34s0.336,0.517,0.336,0.871c0,0.349-0.11,0.636-0.332,0.859s-0.512,0.336-0.871,0.336 c-0.364,0-0.657-0.112-0.879-0.336S37.562,29.278,37.562,28.93z M39.695,26.5h-1.836l-0.258-7.875h2.352L39.695,26.5z" />
                    </svg>
                </span>
            </motion.div>
            <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{...transition,delay:.3}}

            className="card card-2">
                <h3>13 Day Easy Return</h3>
                <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Deserunt, magnam!</p>
                <span className='logo-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path fill="#3949AB" d="M32.615 12.257H36.615V17.256999999999998H32.615z" transform="rotate(38.956 34.616 14.757)" />
                        <path fill="#3949AB" d="M21 9H27V13H21z" />
                        <path fill="#EEE" d="M24 14.5A13.5 13.5 0 1 0 24 41.5A13.5 13.5 0 1 0 24 14.5Z" />
                        <path fill="#263238" d="M22.634,30.118c1.173,0.763,2.741,0.422,3.492-0.765c0.754-1.186,0.412-2.762-0.764-3.529c-1.176-0.761-2.736-0.417-3.493,0.773C21.116,27.782,21.456,29.361,22.634,30.118" />
                        <path fill="#263238" d="M14.778 22L24.199 26.084 22.38 28.943z" />
                        <path fill="#9FA8DA" d="M23.545,28.691c0.392,0.251,0.913,0.137,1.161-0.261c0.252-0.393,0.139-0.92-0.255-1.171c-0.388-0.256-0.913-0.14-1.165,0.254C23.036,27.909,23.15,28.438,23.545,28.691" />
                        <g>
                            <path fill="#90A4AE" d="M24.991 13.06c-.374-.025-.745-.06-1.12-.06-.296 0-.586.031-.88.047V18h2V13.06zM24.991 38.06c-.374-.025-.745-.06-1.12-.06-.296 0-.586.031-.88.047V43h2V38.06zM9.051 29c-.025-.374-.06-.745-.06-1.12 0-.296.031-.586.047-.88h4.953v2H9.051zM34.051 29c-.025-.374-.06-.745-.06-1.12 0-.296.031-.586.047-.88h4.953v2H34.051zM32.27 15.522c-.313-.208-.617-.421-.943-.607-.257-.146-.523-.263-.787-.396l-2.456 4.301 1.736.992L32.27 15.522zM19.87 37.23c-.312-.207-.617-.421-.942-.606-.258-.147-.524-.264-.788-.396l-2.456 4.301 1.736.992L19.87 37.23zM32.23 33.857c.163-.337.317-.677.504-1.002.146-.257.317-.493.477-.741l4.302 2.457-.992 1.736L32.23 33.857zM37.27 21.078c-.174-.333-.337-.667-.532-.988-.154-.252-.332-.482-.498-.727l-4.229 2.578 1.041 1.708L37.27 21.078zM15.922 34.089c-.173-.332-.337-.667-.532-.986-.154-.254-.331-.484-.498-.728l-4.229 2.578 1.041 1.708L15.922 34.089zM15.361 15.762c.307-.215.605-.438.926-.633.253-.154.517-.278.776-.418l2.577 4.229-1.708 1.04L15.361 15.762zM28.373 37.11c.306-.216.604-.439.926-.634.252-.154.516-.278.775-.419l2.578 4.23-1.708 1.04L28.373 37.11z" />
                        </g>
                        <g>
                            <path fill="#7986CB" d="M37.891 15.477c-.347.43-.977.497-1.406.149l-3.11-2.515c-.43-.348-.496-.977-.149-1.406l1.887-2.333c.348-.431.977-.497 1.406-.149l3.11 2.515c.43.348.497.977.149 1.406L37.891 15.477zM24 12c-8.835 0-16 7.165-16 16s7.165 16 16 16 16-7.165 16-16S32.835 12 24 12zM24 41c-7.181 0-13-5.819-13-13 0-7.18 5.819-13 13-13s13 5.82 13 13C37 35.181 31.181 41 24 41zM29 9c0 .553-.447 1-1 1h-8c-.553 0-1-.447-1-1V5c0-.553.447-1 1-1h8c.553 0 1 .447 1 1V9z" />
                        </g>
                    </svg>
                </span>
            </motion.div>
            <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{...transition,delay:.4}}
            className="card card-3">
                <h3>24/7 Custumer Support</h3>
                <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Deserunt, magnam!</p>
                <span className='logo-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12.59375 0C6.816406 0 2 4.25 2 10L2 12.71875C1.5 13.207031 1 13.949219 1 15C1 17.101563 3 18 3 18L4 18L4 10C4 5.351563 7.773438 2 12.59375 2C16.699219 2 20 5.714844 20 10L20 18L21 18C21 18 23 17.101563 23 15C23 13.949219 22.5 13.207031 22 12.71875L22 10C22 4.6875 17.890625 0 12.59375 0 Z M 6.5 11C5.398438 11 5 11.1875 5 11.1875L5 18.8125C5 18.8125 5.398438 19 6.5 19C7.601563 19 8 18.8125 8 18.8125L8 11.1875C8 11.1875 7.601563 11 6.5 11 Z M 17.5 11C16.398438 11 16 11.1875 16 11.1875L16 18.8125C16 18.8125 16.398438 19 17.5 19C18.601563 19 19 18.8125 19 18.8125L19 11.1875C19 11.1875 18.601563 11 17.5 11 Z M 20 19L20 21.5C20 22.328125 19.328125 23 18.5 23L14 23L14 22L10 22L10 24L18.5 24C19.871094 24 21 22.871094 21 21.5L21 19Z" fill="#9A9A9A" />
                    </svg>
                </span>
            </motion.div>
        </div>
    </div>
  )
}

export default About