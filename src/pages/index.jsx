"use client";
import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import StickyCursor from "../components/stickyCursor/index";
import Style from "./home.module.css";
import {
  FaPlay,
  FaInstagram,
  FaBehance,
  FaRegLightbulb,
  FaMobileAlt,
} from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { IoBasketballOutline } from "react-icons/io5";
import { GrUnlink } from "react-icons/gr";
import { RiLinkedinLine } from "react-icons/ri";
import "animate.css";
import Footer from "@/components/footer";
import SecondaryFooter from "@/components/secondaryFooter";
import { SiUpwork } from "react-icons/si";
import { BsFillStarFill } from "react-icons/bs";
import { motion } from "framer-motion";

const VisibilityObserver = ({ id, children, onVisible, className }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onVisible(id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [id, onVisible]);

  return (
    <div ref={componentRef} id={id} className={className}>
      {children}
    </div>
  );
};

export default function Home() {
  const stickyElement = useRef(null);
  const [visibleComponent, setVisibleComponent] = useState(null);

  const handleVisibilityChange = (id) => {
    setTimeout(() => {
      setVisibleComponent(id);
    }, 200);
  };

  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         setProgress(0);
  //       }
  //     },
  //     { threshold: 0.1 }
  //   );

  //   observer.observe(document.getElementById('your-component'));

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    if (isVisible) {
      const handleScroll = () => {
        const scrollFactor = 1.2;
        const newProgress =
          (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
          scrollFactor;
        setProgress(Math.min(newProgress, 2));
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isVisible]);

  const makeClipPath = (progress, endSize, x) => {
    let progressSize = endSize * progress;
    let size = Math.max(0, Math.min(progressSize, endSize));
    let y = Math.min(100 - endSize + progressSize, 100);

    return `circle(${size}% at ${x}% ${y}%)`;
  };

  const clipPath = makeClipPath(progress, 175, 50);
  const opacity = Math.min(progress * 5, 1);

  function AnimateCompoenet({ id, children }) {
    const [isVisible1, setIsVisible1] = useState(false);
    const componentRef1 = useRef(null);

    useEffect(() => {
      const observer1 = new IntersectionObserver(
        ([entry]) => {
          setIsVisible1(entry.isIntersecting && entry.intersectionRatio < 1);
        },
        { threshold: 0.1 }
      );

      observer1.observe(componentRef1.current);

      return () => {
        if (componentRef1.current) {
          observer.unobserve(componentRef1.current);
        }
      };
    }, []);
    return (
      <div ref={componentRef1} id={id}>
        <motion.div
          animate={{ opacity: isVisible1 ? 1 : 0, y: isVisible1 ? 0 : 250 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <h1 className="relative font-ZonaSemiFont text-4xl md:text-5xl lg:text-6xl font-thin cursor-pointer px-2">
            <a
              href=""
              className={`${Style.DesignElement1} before:dark:bg-white after:bg-white before:bg-white`}
            >
              Design.
            </a>
          </h1>
          <h1 className="relative font-ZonaSemiFont text-4xl md:text-5xl lg:text-6xl font-thin cursor-pointer px-2 mt-4 lg:mt-0">
            <a
              href=""
              className={`${Style.DesignElement2} before:bg-white after:bg-white`}
            >
              Development.
            </a>
          </h1>
          <h1 className="relative font-ZonaSemiFont text-4xl md:text-5xl lg:text-6xl font-thin cursor-pointer px-2 mt-4 lg:mt-0">
            <a
              href=""
              className={`${Style.DesignElement3} before:bg-white after:bg-white`}
            >
              Maintenance.
            </a>
          </h1>
        </div>

        <svg
          viewBox="0 0 140 140"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute ${Style.showreel_showreel_text}`}
        >
          <path
            className={Style.showreelText}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.58272 72.7168L9.25306 74.3328L2.23439 78.1074L2.3153 78.7254L10.0578 80.5794L3.0801 84.1445L3.24192 85.3802L12.3602 80.6478L12.2793 80.0302L4.5449 78.1341L11.5295 74.2962L11.4486 73.6782L1.4209 71.4816L1.58272 72.7168ZM11.6141 64.8821C11.6741 64.4162 11.6344 63.9429 11.4974 63.4936C11.3604 63.0443 11.1294 62.6293 10.8196 62.2761L11.6837 62.3461L11.7701 61.2796L4.46546 60.6872L4.37906 61.7541L5.18926 61.82C4.48927 62.4757 4.07033 63.3769 4.02027 64.3348C3.8471 66.4681 5.16033 68.0423 7.49611 68.2316C9.85861 68.4235 11.434 67.0967 11.6137 64.8825L11.6141 64.8821ZM10.6091 64.7053C10.4821 66.2718 9.34239 67.253 7.58727 67.1106C5.87241 66.9715 4.92053 65.8072 5.04318 64.2948C5.08342 63.8166 5.23312 63.354 5.48071 62.9428C5.72829 62.5316 6.06712 62.1829 6.471 61.9236L9.54961 62.1732C9.92708 62.47 10.2225 62.8582 10.4079 63.3012C10.5932 63.7441 10.6624 64.227 10.6088 64.7042L10.6091 64.7053ZM13.1781 55.3076C13.3026 54.8051 13.3538 54.2871 13.33 53.77L12.3276 53.5345C12.3763 53.9888 12.3486 54.448 12.2456 54.8932C12.0106 55.8956 11.4728 55.9915 10.4177 55.7444L6.63172 54.8558L7.22592 52.3235L6.24987 52.0943L5.65568 54.6266L2.84653 53.9677L2.60196 55.0096L5.41112 55.6686L5.1358 56.8427L6.11185 57.0715L6.38716 55.8978L10.2782 56.8109C11.8477 57.1806 12.797 56.9302 13.1774 55.308L13.1781 55.3076ZM15.4689 48.0773C15.7041 47.5338 15.8144 46.9444 15.7915 46.3526C15.7687 45.7607 15.6132 45.1816 15.3367 44.6579L14.3764 45.1148C14.5949 45.5086 14.7216 45.9467 14.7469 46.3964C14.7723 46.8461 14.6957 47.2957 14.5228 47.7116C13.9231 49.2657 12.5268 49.8738 10.935 49.2595C9.36802 48.6547 8.74747 47.2536 9.36656 45.6489C9.52104 45.246 9.76245 44.8821 10.0736 44.5831C10.3847 44.2841 10.758 44.0574 11.1667 43.9191L10.745 42.943C10.2093 43.1385 9.72325 43.4495 9.32128 43.854C8.91931 44.2584 8.61129 44.7463 8.41907 45.2832C7.56091 47.5069 8.38978 49.4967 10.5253 50.3208C12.6835 51.1552 14.5935 50.3395 15.4681 48.0777L15.4689 48.0773ZM17.9218 42.2302L18.4709 41.312L13.8558 38.5508C13.7291 38.1194 13.6897 37.667 13.74 37.2201C13.7903 36.7733 13.9292 36.341 14.1487 35.9485C14.6773 35.0647 15.5315 34.3761 17.1471 35.343L20.7511 37.499L21.3002 36.5804L17.615 34.3757C15.4758 33.0943 14.2409 33.8412 13.3923 35.2595C12.9084 36.0785 12.7341 37.0439 12.901 37.9804L9.70411 36.0679L9.15494 36.9864L17.9218 42.2302ZM29.2056 27.5324C30.8978 25.8915 30.9996 23.6608 29.4059 22.0173C27.8316 20.3929 25.5984 20.4255 23.9062 22.0664C22.214 23.7073 22.1024 25.9471 23.6774 27.5712C25.2696 29.2154 27.512 29.1733 29.2042 27.5328L29.2056 27.5324ZM28.4983 26.8027C27.3022 27.9626 25.6635 27.9853 24.4942 26.7793C23.3439 25.5927 23.4171 23.9555 24.6135 22.7957C25.8001 21.6454 27.4384 21.6241 28.5887 22.8092C28.8612 23.0685 29.0765 23.3819 29.2208 23.7293C29.365 24.0767 29.4351 24.4504 29.4264 24.8265C29.4178 25.2026 29.3306 25.5726 29.1705 25.913C29.0104 26.2534 28.781 26.5566 28.4968 26.8031L28.4983 26.8027ZM36.9063 21.2379C37.302 20.9798 37.6401 20.6429 37.8996 20.2483C38.1591 19.8536 38.3345 19.4097 38.4147 18.9442L38.9287 19.7094L39.8158 19.1104L35.7154 13.0359L34.8283 13.6349L37.7938 18.0253C37.7677 18.4738 37.64 18.9106 37.4203 19.3025C37.2006 19.6944 36.8947 20.0312 36.5256 20.2875C35.6949 20.8483 34.6292 21.1101 33.5755 19.5494L31.2254 16.0684L30.3362 16.6663L32.7393 20.2256C34.1342 22.2919 35.5799 22.133 36.9049 21.2386L36.9063 21.2379ZM42.9991 17.408L43.9642 16.946L42.3899 13.6594C41.6475 12.1079 42.0762 10.7763 43.1511 10.2616C43.4839 10.1065 43.8432 10.0161 44.2099 9.99505L43.701 8.93333C43.4119 8.96256 43.1309 9.04616 42.8728 9.17972C42.4402 9.36716 42.0649 9.66571 41.7849 10.0451C41.505 10.4244 41.3303 10.8711 41.2788 11.3398L40.7992 10.3381L39.8341 10.8001L42.9991 17.408ZM56.9805 12.4992C58.9227 12.0599 59.6549 11.1834 59.3129 9.67726C59.031 8.43542 57.988 8.1861 56.1406 8.18866C54.7801 8.19196 54.1578 8.08322 54.0018 7.39604C53.8554 6.74876 54.4199 6.30064 55.3315 6.09379C56.1177 5.91238 56.9349 5.91238 57.7211 6.09379L57.8782 5.07161C56.9704 4.90479 56.0386 4.9181 55.136 5.11079C53.5508 5.47067 52.6161 6.43317 52.9027 7.70137C53.1876 8.95639 54.1501 9.27967 56.0341 9.25477C57.2668 9.23866 58.0312 9.30127 58.1872 9.98699C58.3493 10.7005 57.999 11.2383 56.7835 11.5144C55.8772 11.723 54.9324 11.6935 54.041 11.4287L53.8473 12.4729C54.8729 12.7406 55.9489 12.7499 56.979 12.5L56.9805 12.4992ZM62.9931 11.2351L64.061 11.1688L63.7253 5.802C64.0096 5.45361 64.3605 5.16546 64.7576 4.95442C65.1546 4.74338 65.5898 4.6137 66.0376 4.57297C67.0649 4.50927 68.116 4.82412 68.2324 6.70336L68.492 10.8942L69.56 10.8279L69.2945 6.54227C69.1404 4.05493 67.8275 3.45744 66.1782 3.55995C65.2289 3.62452 64.3343 4.02718 63.6564 4.69488L63.4276 0.975586L62.3593 1.04185L62.9931 11.2351ZM76.6299 11.4441C78.973 11.7132 80.7614 10.3784 81.0232 8.10409C81.2817 5.85655 79.8414 4.15012 77.4998 3.88103C75.1581 3.61193 73.355 4.9453 73.0966 7.19248C72.833 9.46711 74.2864 11.175 76.628 11.4445L76.6299 11.4441ZM76.7459 10.4347C75.0908 10.2444 74.0349 8.99117 74.2267 7.32282C74.4157 5.68118 75.7278 4.70038 77.3833 4.89039C79.0253 5.0793 80.0812 6.33249 79.8923 7.97412C79.8646 8.3494 79.7587 8.71474 79.5814 9.04667C79.4042 9.3786 79.1595 9.6698 78.863 9.90155C78.5665 10.1333 78.2249 10.3005 77.86 10.3924C77.4951 10.4843 77.115 10.4988 76.7441 10.4351L76.7459 10.4347ZM94.176 8.06968L90.7327 12.7101L90.4146 6.80221L89.7959 6.60304L86.1234 11.1984L86.0385 5.45053L84.9299 5.09358L85.1954 12.977L85.7753 13.1637L89.4759 8.56356L89.8369 14.4711L90.4428 14.6662L95.2443 8.41419L94.176 8.06968ZM95.4633 16.7604L96.4107 17.2572L98.1029 14.031C98.9017 12.5076 100.226 12.054 101.281 12.6083C101.604 12.7823 101.891 13.0161 102.128 13.2973L102.677 12.2539C102.48 12.0398 102.245 11.8646 101.984 11.7377C101.575 11.5033 101.111 11.3811 100.64 11.3837C100.169 11.3863 99.7064 11.5135 99.3001 11.7524L99.8156 10.769L98.8681 10.2722L95.4633 16.7604ZM109.468 21.3616C110.797 19.5311 110.697 17.4995 108.679 16.0358C106.914 14.7545 104.798 15.0624 103.447 16.9266C102.079 18.8124 102.443 20.9172 104.329 22.2861C105.601 23.2086 106.805 23.3957 107.886 23.0585L107.633 22.0891C107.172 22.2011 106.692 22.2068 106.229 22.1057C105.766 22.0045 105.332 21.7993 104.96 21.5055C104.373 21.1291 103.958 20.536 103.806 19.8553C103.654 19.1746 103.778 18.4615 104.149 17.8711L109.292 21.6018L109.468 21.3616ZM108.099 16.8537C109.417 17.8082 109.564 19.0365 108.909 20.1688L104.72 17.1301C105.144 16.6667 105.729 16.3807 106.355 16.3294C106.982 16.2782 107.605 16.4654 108.099 16.8537V16.8537ZM117.179 28.9163C118.802 27.342 119.053 25.3229 117.317 23.5345C115.797 21.9697 113.662 21.909 112.008 23.5132C110.336 25.1362 110.333 27.2725 111.956 28.9441C113.05 30.0717 114.204 30.4624 115.327 30.3163L115.246 29.319C114.773 29.3502 114.299 29.2733 113.86 29.0941C113.421 28.9149 113.029 28.6381 112.713 28.2847C112.199 27.8131 111.893 27.1575 111.86 26.4609C111.827 25.7642 112.071 25.0828 112.539 24.5651L116.964 29.1242L117.179 28.9163ZM116.607 24.2422C117.739 25.4086 117.672 26.6435 116.834 27.647L113.229 23.9335C113.728 23.5503 114.353 23.3694 114.979 23.4269C115.605 23.4845 116.186 23.7763 116.607 24.244V24.2422ZM116.457 33.9708L117.123 34.8601L125.299 28.7358L124.633 27.8465L116.457 33.9708ZM125.068 42.2082C125.203 42.4775 125.414 42.7009 125.676 42.8502C125.937 42.9996 126.237 43.0682 126.537 43.0474C126.837 43.0267 127.125 42.9174 127.363 42.7335C127.601 42.5496 127.78 42.2993 127.876 42.0141C127.973 41.7288 127.982 41.4215 127.904 41.1308C127.826 40.8401 127.663 40.579 127.437 40.3805C127.211 40.182 126.931 40.0549 126.632 40.0153C126.334 39.9757 126.03 40.0254 125.76 40.158C125.579 40.246 125.417 40.3691 125.284 40.5203C125.151 40.6715 125.049 40.8477 124.985 41.0385C124.92 41.2294 124.894 41.4312 124.909 41.6322C124.923 41.8331 124.977 42.0292 125.068 42.209V42.2082Z"
            fill="black"
          ></path>
          <path
            className={Style.showreelText}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M137.979 63.4203L130.247 62.1268L137.102 58.0594L136.995 57.4454L129.18 55.9187L136.003 52.0629L135.789 50.835L126.875 55.9488L126.982 56.5627L134.79 58.1319L127.974 62.2612L128.08 62.8752L138.193 64.6482L137.979 63.4203ZM128.277 71.6728C128.237 72.1407 128.296 72.612 128.452 73.0552C128.607 73.4984 128.856 73.9034 129.18 74.2432L128.313 74.2092L128.272 75.2786L135.594 75.5656L135.635 74.4962L134.823 74.4643C135.495 73.7795 135.876 72.861 135.885 71.9016C135.969 69.7628 134.592 68.2449 132.25 68.153C129.885 68.0618 128.366 69.4531 128.279 71.6728H128.277ZM129.289 71.8071C129.35 70.2373 130.448 69.2078 132.208 69.2781C133.928 69.3458 134.927 70.4694 134.867 71.9873C134.847 72.4669 134.716 72.9355 134.486 73.3566C134.255 73.7778 133.931 74.1403 133.538 74.416L130.452 74.2948C130.062 74.0136 129.751 73.6374 129.548 73.202C129.345 72.7666 129.256 72.2864 129.29 71.8071H129.289ZM127.119 81.2894C127.016 81.7964 126.987 82.3157 127.032 82.831L128.044 83.0236C127.976 82.572 127.984 82.1121 128.068 81.6631C128.26 80.6516 128.793 80.5326 129.858 80.7351L133.677 81.4611L133.191 84.0161L134.175 84.2036L134.662 81.6485L137.496 82.1874L137.696 81.1363L134.861 80.5974L135.087 79.413L134.102 79.2256L133.877 80.41L129.954 79.662C128.37 79.3607 127.432 79.6514 127.12 81.2894H127.119ZM125.133 88.6185C124.921 89.1714 124.836 89.765 124.883 90.3554C124.931 90.9457 125.111 91.5179 125.409 92.0295L126.35 91.5323C126.115 91.1479 125.97 90.7155 125.926 90.2672C125.882 89.819 125.94 89.3666 126.096 88.9439C126.63 87.3657 128 86.699 129.616 87.2459C131.207 87.7845 131.886 89.1581 131.337 90.7877C131.199 91.1968 130.973 91.5706 130.675 91.8825C130.377 92.1945 130.013 92.4368 129.611 92.5922L130.074 93.5496C130.601 93.3317 131.073 93.0005 131.458 92.5794C131.842 92.1583 132.129 91.6577 132.299 91.1131C133.063 88.855 132.152 86.9029 129.982 86.1681C127.788 85.4264 125.912 86.32 125.135 88.617L125.133 88.6185ZM122.933 94.5626L122.423 95.5035L127.151 98.0663C127.296 98.4921 127.354 98.9425 127.323 99.3912C127.291 99.8398 127.171 100.278 126.968 100.679C126.477 101.584 125.653 102.309 123.997 101.411L120.305 99.4095L119.795 100.35L123.57 102.397C125.762 103.586 126.965 102.789 127.752 101.336C128.201 100.497 128.335 99.5246 128.128 98.5957L131.404 100.372L131.914 99.4308L122.933 94.5626ZM112.279 109.717C110.657 111.426 110.648 113.659 112.309 115.235C113.95 116.792 116.179 116.666 117.8 114.957C119.422 113.247 119.441 111.003 117.8 109.447C116.141 107.869 113.903 108.005 112.28 109.715L112.279 109.717ZM113.016 110.416C114.163 109.208 115.798 109.117 117.017 110.273C118.216 111.41 118.211 113.049 117.064 114.257C115.927 115.456 114.291 115.547 113.092 114.409C112.809 114.162 112.58 113.857 112.422 113.516C112.263 113.175 112.177 112.805 112.17 112.428C112.163 112.052 112.235 111.679 112.381 111.332C112.527 110.985 112.743 110.672 113.017 110.414L113.016 110.416ZM104.846 116.331C104.462 116.606 104.139 116.957 103.896 117.362C103.653 117.767 103.497 118.218 103.436 118.686L102.889 117.945L102.028 118.58L106.38 124.477L107.241 123.841L104.096 119.58C104.103 119.13 104.212 118.689 104.415 118.288C104.618 117.887 104.909 117.538 105.267 117.266C106.073 116.671 107.127 116.365 108.245 117.88L110.739 121.259L111.6 120.623L109.05 117.168C107.572 115.161 106.134 115.381 104.848 116.33L104.846 116.331ZM98.9155 120.416L97.9705 120.918L99.6806 124.136C100.486 125.655 100.116 127.003 99.063 127.563C98.7369 127.731 98.3817 127.837 98.0163 127.873L98.5695 128.914C98.8571 128.873 99.1344 128.777 99.3866 128.633C99.8108 128.428 100.173 128.113 100.437 127.723C100.7 127.332 100.856 126.878 100.888 126.408L101.409 127.389L102.354 126.887L98.9155 120.416ZM85.152 125.913C83.2303 126.436 82.5361 127.341 82.9418 128.832C83.276 130.061 84.3289 130.266 86.1741 130.184C87.5335 130.123 88.1595 130.205 88.3448 130.885C88.5191 131.526 87.9736 131.997 87.0715 132.243C86.2939 132.458 85.4776 132.493 84.6844 132.345L84.5709 133.373C85.4849 133.501 86.4152 133.448 87.3087 133.217C88.8771 132.79 89.7701 131.789 89.4285 130.534C89.0906 129.292 88.1149 129.01 86.2342 129.115C85.003 129.183 84.2367 129.153 84.0514 128.473C83.8596 127.768 84.1865 127.215 85.3892 126.888C86.2857 126.641 87.231 126.63 88.1328 126.857L88.2818 125.806C87.2465 125.582 86.1719 125.619 85.1542 125.912L85.152 125.913ZM79.2056 127.429L78.1413 127.539L78.6978 132.888C78.4283 133.248 78.0896 133.551 77.7017 133.778C77.3138 134.005 76.8843 134.153 76.4386 134.213C75.4135 134.319 74.3518 134.049 74.1562 132.176L73.7217 127.999L72.657 128.108L73.1015 132.38C73.3578 134.859 74.6963 135.401 76.3401 135.23C77.2858 135.126 78.1631 134.687 78.8128 133.992L79.1983 137.697L80.2629 137.587L79.2056 127.429ZM65.5681 127.788C63.2176 127.616 61.4856 129.025 61.3194 131.308C61.1554 133.563 62.6652 135.208 65.0171 135.379C67.369 135.55 69.1127 134.143 69.2771 131.887C69.4441 129.603 67.9207 127.957 65.5703 127.785L65.5681 127.788ZM65.4948 128.801C67.1566 128.922 68.2637 130.129 68.1418 131.803C68.0217 133.45 66.7506 134.485 65.0899 134.366C63.4424 134.246 62.335 133.038 62.4539 131.39C62.4659 131.014 62.5563 130.644 62.7195 130.305C62.8827 129.966 63.115 129.665 63.4015 129.421C63.688 129.177 64.0224 128.996 64.3832 128.889C64.7439 128.782 65.1231 128.751 65.4963 128.799L65.4948 128.801ZM48.1856 131.905L51.4282 127.121L51.9979 133.012L52.625 133.185L56.0968 128.436L56.4263 134.176L57.5496 134.485L56.9521 126.617L56.3663 126.455L52.8645 131.21L52.252 125.322L51.638 125.153L47.1037 131.605L48.1856 131.905ZM46.5267 123.271L45.5588 122.815L44.0035 126.11C43.2695 127.666 41.9658 128.174 40.8879 127.665C40.5573 127.505 40.2602 127.284 40.0126 127.012L39.511 128.078C39.7161 128.284 39.9583 128.449 40.2249 128.565C40.6435 128.782 41.112 128.884 41.5829 128.862C42.0539 128.839 42.5106 128.693 42.9067 128.437L42.4307 129.442L43.3983 129.898L46.5267 123.271ZM32.3382 119.255C31.0872 121.14 31.2714 123.164 33.3476 124.543C35.1646 125.748 37.2649 125.354 38.5372 123.435C39.8259 121.495 39.3748 119.408 37.4337 118.118C36.1249 117.249 34.9149 117.112 33.8488 117.494L34.1398 118.451C34.5953 118.32 35.0747 118.295 35.5415 118.376C36.0084 118.458 36.4505 118.645 36.8344 118.923C37.4365 119.275 37.8752 119.85 38.0552 120.524C38.2352 121.198 38.1418 121.915 37.7954 122.52L32.503 119.005L32.3382 119.255ZM33.8909 123.7C32.5363 122.801 32.3389 121.58 32.9452 120.422L37.2558 123.284C36.8504 123.764 36.2787 124.074 35.6548 124.151C35.031 124.228 34.401 124.067 33.8909 123.7V123.7ZM24.3182 112.031C22.7619 113.673 22.5975 115.7 24.405 117.413C25.988 118.914 28.1239 118.885 29.7081 117.213C31.3109 115.522 31.2249 113.388 29.5338 111.785C28.3934 110.704 27.2248 110.362 26.1089 110.554L26.2311 111.547C26.7024 111.497 27.1791 111.554 27.625 111.715C28.0709 111.875 28.4744 112.135 28.8049 112.475C29.3379 112.925 29.6715 113.567 29.7333 114.262C29.795 114.956 29.5797 115.647 29.1344 116.184L24.5232 111.814L24.3182 112.031ZM25.0849 116.677C23.9049 115.559 23.9199 114.323 24.7158 113.285L28.4717 116.845C27.9898 117.249 27.3733 117.456 26.7454 117.425C26.1174 117.394 25.5244 117.127 25.0849 116.677V116.677ZM24.8304 106.954L24.1275 106.094L16.2173 112.555L16.9199 113.415L24.8304 106.954ZM13.5824 94.4451C13.4591 94.1708 13.2573 93.9391 13.0026 93.7792C12.7478 93.6193 12.4514 93.5385 12.1507 93.5467C11.8501 93.555 11.5586 93.6521 11.313 93.8257C11.0674 93.9994 10.8787 94.2418 10.7707 94.5225C10.6626 94.8032 10.6401 95.1096 10.7058 95.4031C10.7716 95.6966 10.9228 95.9641 11.1403 96.1718C11.3578 96.3796 11.6319 96.5183 11.9281 96.5705C12.2244 96.6227 12.5294 96.5861 12.8048 96.4653C12.9897 96.3851 13.1567 96.2689 13.2962 96.1235C13.4357 95.978 13.5448 95.8063 13.6172 95.6182C13.6896 95.4302 13.7238 95.2296 13.7178 95.0282C13.7119 94.8268 13.6658 94.6285 13.5824 94.4451V94.4451Z"
            fill="black"
          ></path>
        </svg>
        <div className="flex items-center justify-center absolute bottom-24 rounded-full overflow-hidden h-28 w-28">
          <div className={Style.VideoStarterBtn}>
            <FaPlay size={22} />
          </div>
          <video
            className={Style.reelVideo}
            controls={false}
            autoPlay={"autoplay"}
            muted
            preload="none"
          >
            <source
              src="https://ronasit.com/img/home/showreel.mp4"
              type="video/mp4"
            />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={Style.SocialLinkLeft}>
          <div className={`${Style.SocilaLink} bg-black dark:bg-white`}>
            <FaInstagram color="black" size={22} />
          </div>
          <div className={`${Style.SocilaLink} bg-black dark:bg-white`}>
            <BiLogoFacebook color="black" size={24} />
          </div>
          <div className={`${Style.SocilaLink} bg-black dark:bg-white`}>
            <IoBasketballOutline color="black" size={24} />
          </div>
          <div className={`${Style.SocilaLink} bg-black dark:bg-white`}>
            <FaBehance color="black" size={22} />
          </div>
          <div className={`${Style.SocilaLink} bg-black dark:bg-white`}>
            <RiLinkedinLine color="black" size={22} />
          </div>
        </div>
      </div>

      <AnimateCompoenet id="AfterBanner">
        <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
          <div className="grid md:grid-cols-12">
            <div className="px-12 m-2 lg:col-span-12 sm:col-span-12 md:col-span-12">
              <p className="font-ZonaNormalFont text-lg">What We Do</p>
            </div>

            <div className="p-12 m-2 lg:col-span-8 sm:col-span-12 md:col-span-12">
              <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12">
                Ronas IT is an engineering company that provides professional IT
                services for entrepreneurs and <br /> companies around the
                world.
              </h2>
              <button className="font-ZonaBoldFont px-14 py-5 border rounded-full">
                View More
              </button>
            </div>

            <div className="p-12 m-2 lg:col-span-4 sm:col-span-12 md:col-span-12">
              <p className="font-ZonaNormalFont text-lg">
                We have been designing, developing, and maintaining apps since
                2007.
              </p>
              <br></br>
              <p className="font-ZonaNormalFont text-lg">
                Our goal is to create software solutions that match our clients’
                needs and expectations. Ronas IT workflow is based on analytics
                and agile methodology that help us to provide high-quality IT
                services to small businesses and startups.
              </p>
            </div>
          </div>
        </div>
      </AnimateCompoenet>

      <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
        <div className="grid md:grid-cols-6">
          <div className="p-12 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
            <p className="font-ZonaNormalFont text-3xl">
              You may need our<br></br> services if you want to:
            </p>
          </div>

          <div className="p-12 m-2 lg:col-span-3 sm:col-span-6 animate__animated animate__fadeInUp">
            <AnimateCompoenet id="WhatWD1">
              <div className="flex pb-8 items-start">
                <div className="pr-8">
                  <FaRegLightbulb size={60} color="#26a0f8" />
                </div>
                <h2 className="text-4xl font-ZonaBoldFont leading-tight	mb-12">
                  Create an MVP to attract investors and test your business idea
                </h2>
              </div>
            </AnimateCompoenet>

            <AnimateCompoenet id="WhatWD2">
              <div className="flex pb-8 items-start">
                <div className="pr-8">
                  <GrUnlink size={60} color="#26a0f8" />
                </div>
                <h2 className="text-4xl font-ZonaBoldFont leading-tight	mb-12">
                  Automate the internal processes of your business
                </h2>
              </div>
            </AnimateCompoenet>

            <AnimateCompoenet id="WhatWD3">
              <div className="flex pb-8 items-start">
                <div className="pr-8">
                  <FaMobileAlt size={60} color="#26a0f8" />
                </div>
                <h2 className="text-4xl font-ZonaBoldFont leading-tight	mb-12">
                  Create a web or mobile app to attract new customers and make
                  your service more convenient for them
                </h2>
              </div>
            </AnimateCompoenet>
          </div>
        </div>
      </div>

      <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
        <AnimateCompoenet id="Design">
          <div className="grid md:grid-cols-6">
            <div className="px-12 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp">
              <p className="font-ZonaNormalFont text-lg">01</p>
            </div>

            <div className="p-12 m-2 lg:col-span-2 sm:col-span-6 animate__animated animate__fadeInUp">
              <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12">
                Design
              </h2>
            </div>

            <div className="p-12 m-2 lg:col-span-4 sm:col-span-6 animate__animated animate__fadeInUp">
              <p className="font-ZonaNormalFont text-3xl leading-tight pb-12">
                We work hard to create eye-catching and intuitive interface
                designs that provide users with enjoyable experience.
              </p>
              <button className="font-ZonaBoldFont px-14 py-5 border rounded-full">
                View More
              </button>

              <AnimateCompoenet id="Designinner">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 pt-32">
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Website and
                      <br />
                      Platforms
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Mobile Apps
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Strategy and
                      <br /> Branding
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Design
                      <br />
                      Concept
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                </div>
              </AnimateCompoenet>
            </div>
          </div>
        </AnimateCompoenet>
      </div>

      <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
        <AnimateCompoenet id="Development">
          <div className="grid md:grid-cols-6">
            <div className="px-12 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp">
              <p className="font-ZonaNormalFont text-lg">02</p>
            </div>

            <div className="p-12 m-2 lg:col-span-2 sm:col-span-6 animate__animated animate__fadeInUp">
              <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12">
                Development
              </h2>
            </div>

            <div className="p-12 m-2 lg:col-span-4 sm:col-span-6 animate__animated animate__fadeInUp">
              <p className="font-ZonaNormalFont text-3xl leading-tight pb-12">
                We work hard to create eye-catching and intuitive interface
                designs that provide users with enjoyable experience.
              </p>
              <button className="font-ZonaBoldFont px-14 py-5 border rounded-full">
                View More
              </button>

              <AnimateCompoenet id="Developmentinner">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 pt-32">
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Website and
                      <br />
                      Platforms
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Mobile Apps
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Strategy and
                      <br /> Branding
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Design
                      <br />
                      Concept
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                </div>
              </AnimateCompoenet>
            </div>
          </div>
        </AnimateCompoenet>
      </div>

      <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
        <AnimateCompoenet id="Maintenance">
          <div className="grid md:grid-cols-6">
            <div className="px-12 m-2 lg:col-span-6 sm:col-span-6 animate__animated animate__fadeInUp">
              <p className="font-ZonaNormalFont text-lg">03</p>
            </div>

            <div className="p-12 m-2 lg:col-span-2 sm:col-span-6 animate__animated animate__fadeInUp">
              <h2 className="text-5xl font-ZonaBoldFont leading-tight	mb-12">
                Maintenance
              </h2>
            </div>

            <div className="p-12 m-2 lg:col-span-4 sm:col-span-6 animate__animated animate__fadeInUp">
              <p className="font-ZonaNormalFont text-3xl leading-tight pb-12">
                We work hard to create eye-catching and intuitive interface
                designs that provide users with enjoyable experience.
              </p>
              <button className="font-ZonaBoldFont px-14 py-5 border rounded-full">
                View More
              </button>

              <AnimateCompoenet id="MaintenanceInner">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 pt-32">
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Website and
                      <br />
                      Platforms
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                  <div
                    className={`md:grid-col-6 sm:grid-col-12 pt-4 pb-32 px-6 ${Style.AboutHoverCard}`}
                  >
                    <div className={Style.AboutHoverCardInner}></div>
                    <h4 className="font-ZonaNormalFont text-3xl leading-tight pb-6 font-semibold h-28">
                      Mobile Apps
                    </h4>
                    <p className="font-ZonaNormalFont text-slate-300">
                      We are ready to work on projects of any complexity and
                      size. With our profound design experience, we can create
                      both one-page sites and complex admin panels with several
                      dashboards
                    </p>
                  </div>
                </div>
              </AnimateCompoenet>
            </div>
          </div>
        </AnimateCompoenet>
      </div>

      <div className={`py-20 flex items-center justify-center flex-col ${Style.MVPBanner}`} >
        <h3 className="font-ZonaBoldFont text-5xl">MVP calculator</h3>
        <div
          className="font-ZonaNormalFont text-center pt-6"
          style={{ width: "36rem" }}
        >
          <p>
            An MVP is a basic version of a product built with the core features
            to satisfy early users and validate a product idea quickly and with
            minimal costs. Here you can get a rough estimate of your future
            product and set budget frames.
          </p>
          <button className={Style.MVPBannerBtn}>Start</button>
        </div>
      </div>

      <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
        <div className="grid md:grid-cols-12">
          <div className="p-12 m-2 lg:col-span-7 sm:col-span-12 animate__animated animate__fadeInUp">
            <div className="h-72 mb-96">
              <h3 className="font-ZonaNormalFont text-3xl leading-normal">
                As an IT service company, we are <br /> not only releasing
                successful <br /> projects but also constantly <br /> sharing
                our experience.
                <br />
                <br />
                Take a look at some projects <br /> that we have implemented.
              </h3>
            </div>

            <div id="visible1" className="py-72">
              <div className="flex items-center py-8">
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="pl-1 pr-8">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>

                <div
                  className="px-6 flex items-end justify-center m-0"
                  style={{ borderLeft: "1px solid hsla(0,0%,100%,.5)" }}
                >
                  <h5 className="font-ZonaNormalFont text-3xl">5.0</h5>
                </div>
              </div>
              <h1 className="font-ZonaSemiFont text-5xl leading-10	leading-snug">
                Ronas IT demonstrates an excellent understanding of user needs
                and all of their designs are creative and elegant in their
                simplicity. They’re very well thought out and have an excellent
                response to feedback. All of these qualities are why they’re our
                go-to user experience experts.
              </h1>
            </div>

            <div id="visible2" className="py-72">
              <div className="flex items-center py-8">
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="pl-1 pr-8">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>

                <div
                  className="px-6 flex items-end justify-center m-0"
                  style={{ borderLeft: "1px solid hsla(0,0%,100%,.5)" }}
                >
                  <h5 className="font-ZonaNormalFont text-3xl">5.0</h5>
                </div>
              </div>
              <h1 className="font-ZonaSemiFont text-5xl leading-10	leading-snug">
                Fantastic service. The guys went above and beyond. They also
                suggested improvements to my app which I really appreciated - as
                apposed to doing exactly what I asked, it resulted in a better
                product. I also had a view of project progress and things that
                were done and getting done. Very effective.{" "}
              </h1>
            </div>

            <div id="visible3" className="py-72">
              <div className="flex items-center py-8">
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="pl-1 pr-8">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>

                <div
                  className="px-6 flex items-end justify-center m-0"
                  style={{ borderLeft: "1px solid hsla(0,0%,100%,.5)" }}
                >
                  <h5 className="font-ZonaNormalFont text-3xl">5.0</h5>
                </div>
              </div>
              <h1 className="font-ZonaSemiFont text-5xl leading-10	leading-snug">
                A technically skilled team, Ronas IT goes the extra mile to
                deliver high-quality solutions. With a broad understanding of
                both the product and current technologies, they provide
                impactful, timely, and flexible support.{" "}
              </h1>
            </div>

            <div id="visible4" className="py-72">
              <div className="flex items-center py-8">
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="pl-1 pr-8">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>

                <div
                  className="px-6 flex items-end justify-center m-0"
                  style={{ borderLeft: "1px solid hsla(0,0%,100%,.5)" }}
                >
                  <h5 className="font-ZonaNormalFont text-3xl">5.0</h5>
                </div>
              </div>
              <h1 className="font-ZonaSemiFont text-5xl leading-10	leading-snug">
                The quality of their work stands out the most. They’re
                knowledgeable and provide useful feedback.
              </h1>
            </div>
          </div>

          {/* <div className={`m-2 lg:col-span-5 sm:col-span-12 ${Style.visibleClass2}`}>
            <div style={{ height: '100%', width: "100%", position: 'relative' }}>
              <div className="expand" style={{
                position: 'absolute',
                bottom: 0,
                clipPath: clipPath,
                opacity: opacity,
                transition: 'clip-path 0.1s, opacity 0.1s',
                transform: 'rotate(180deg)',
              }}>
                <img src="https://ronasit.com/_next/image/?url=%2F_next%2Fst…ia%2Fhome-delivery-dark.7ed863bf.jpeg&w=1920&q=75" alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
        <div className="grid md:grid-cols-12">
          <div
            className={`p-12 m-2 lg:col-span-3 sm:col-span-12 ${Style.visibleClass}`}
          >
            <div className="pb-6">
              <div
                className={`h-16 w-16 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${
                  visibleComponent == "visible1"
                    ? "border-4 border-theme-blue"
                    : ""
                }`}
              >
                <img
                  className="h-full w-full rounded-full"
                  src="https://ronasit.com/_next/image/?url=%2Fimg%2Favatar-1.webp&w=48&q=75"
                  alt=""
                />
              </div>
              <h6 className="font-ZonaNormalFont text-base ">Bob Glazebrook</h6>
              <p className="font-ZonaNormalFont text-base text-theme-gray">
                Principal, Visual
                <br />
                Engineering Inc.
              </p>
            </div>
            <div className="pb-6">
              <div
                className={`h-16 w-16 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${
                  visibleComponent == "visible2"
                    ? "border-4 border-theme-blue"
                    : ""
                }`}
              >
                <img
                  className="h-full w-full rounded-full"
                  src="https://ronasit.com/_next/image/?url=%2Fimg%2Favatar-1.webp&w=48&q=75"
                  alt=""
                />
              </div>
              <h6 className="font-ZonaNormalFont text-base ">Bob Glazebrook</h6>
              <p className="font-ZonaNormalFont text-base text-theme-gray">
                Principal, Visual
                <br />
                Engineering Inc.
              </p>
            </div>
            <div className="pb-6">
              <div
                className={`h-16 w-16 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${
                  visibleComponent == "visible3"
                    ? "border-4 border-theme-blue"
                    : ""
                }`}
              >
                <img
                  className="h-full w-full rounded-full"
                  src="https://ronasit.com/_next/image/?url=%2Fimg%2Favatar-1.webp&w=48&q=75"
                  alt=""
                />
              </div>
              <h6 className="font-ZonaNormalFont text-base ">Bob Glazebrook</h6>
              <p className="font-ZonaNormalFont text-base text-theme-gray">
                Principal, Visual
                <br />
                Engineering Inc.
              </p>
            </div>
            <div className="pb-6">
              <div
                className={`h-16 w-16 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${
                  visibleComponent == "visible4"
                    ? "border-4 border-theme-blue"
                    : ""
                }`}
              >
                <img
                  className="h-full w-full rounded-full"
                  src="https://ronasit.com/_next/image/?url=%2Fimg%2Favatar-1.webp&w=48&q=75"
                  alt=""
                />
              </div>
              <h6 className="font-ZonaNormalFont text-base ">Bob Glazebrook</h6>
              <p className="font-ZonaNormalFont text-base text-theme-gray">
                Principal, Visual
                <br />
                Engineering Inc.
              </p>
            </div>
          </div>
          <div className="p-12 m-2 lg:col-span-9 sm:col-span-12 animate__animated animate__fadeInUp">
            <VisibilityObserver
              className="py-72"
              id="visible1"
              onVisible={handleVisibilityChange}
            >
              <div className="flex items-center py-8">
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="pl-1 pr-8">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div
                  className="px-6 flex items-end justify-center m-0"
                  style={{ borderLeft: "1px solid hsla(0,0%,100%,.5)" }}
                >
                  <h5 className="font-ZonaNormalFont text-3xl">5.0</h5>
                </div>
              </div>
              <h1 className="font-ZonaSemiFont text-5xl leading-10	leading-snug">
                Ronas IT demonstrates an excellent understanding of user needs
                and all of their designs are creative and elegant in their
                simplicity. They’re very well thought out and have an excellent
                response to feedback. All of these qualities are why they’re our
                go-to user experience experts.
              </h1>
            </VisibilityObserver>

            <VisibilityObserver
              className="py-72"
              id="visible2"
              onVisible={handleVisibilityChange}
            >
              <div className="flex items-center py-8">
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="pl-1 pr-8">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div
                  className="px-6 flex items-end justify-center m-0"
                  style={{ borderLeft: "1px solid hsla(0,0%,100%,.5)" }}
                >
                  <h5 className="font-ZonaNormalFont text-3xl">5.0</h5>
                </div>
              </div>
              <h1 className="font-ZonaSemiFont text-5xl leading-10	leading-snug">
                Fantastic service. The guys went above and beyond. They also
                suggested improvements to my app which I really appreciated - as
                apposed to doing exactly what I asked, it resulted in a better
                product. I also had a view of project progress and things that
                were done and getting done. Very effective.{" "}
              </h1>
            </VisibilityObserver>

            <VisibilityObserver
              id="visible3"
              onVisible={handleVisibilityChange}
              className="py-72"
            >
              <div className="flex items-center py-8">
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="pl-1 pr-8">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div
                  className="px-6 flex items-end justify-center m-0"
                  style={{ borderLeft: "1px solid hsla(0,0%,100%,.5)" }}
                >
                  <h5 className="font-ZonaNormalFont text-3xl">5.0</h5>
                </div>
              </div>
              <h1 className="font-ZonaSemiFont text-5xl leading-10	leading-snug">
                A technically skilled team, Ronas IT goes the extra mile to
                deliver high-quality solutions. With a broad understanding of
                both the product and current technologies, they provide
                impactful, timely, and flexible support.{" "}
              </h1>
            </VisibilityObserver>

            <VisibilityObserver
              id="visible4"
              onVisible={handleVisibilityChange}
              className="py-72"
            >
              <div className="flex items-center py-8">
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="px-1">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div className="pl-1 pr-8">
                  <BsFillStarFill color="#ef4335" size={28} />
                </div>
                <div
                  className="px-6 flex items-end justify-center m-0"
                  style={{ borderLeft: "1px solid hsla(0,0%,100%,.5)" }}
                >
                  <h5 className="font-ZonaNormalFont text-3xl">5.0</h5>
                </div>
              </div>
              <h1 className="font-ZonaSemiFont text-5xl leading-10	leading-snug">
                The quality of their work stands out the most. They’re
                knowledgeable and provide useful feedback.
              </h1>
            </VisibilityObserver>
          </div>
        </div>
      </div>

      <div className="container pt-28 mx-auto lg:px-28 sm:px-4">
        <div className="grid md:grid-cols-12">
          <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
            <p className="font-ZonaBoldFont text-3xl">Numbers</p>
          </div>
          <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
            <h4 className="font-ZonaBoldFont text-6xl">1870</h4>
            <p className="font-ZonaNormalFont text-xl pt-2">
              reviews
              <br />
              across 5 platforms
            </p>
          </div>
          <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
            <h4 className="font-ZonaBoldFont text-6xl">Top 50</h4>
            <p className="font-ZonaNormalFont text-xl pt-2">
              app development
              <br />
              companies on
            </p>
          </div>
          <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp">
            <h4 className="font-ZonaBoldFont text-6xl">4.9 / 5</h4>
            <p className="font-ZonaNormalFont text-xl pt-2">average rate</p>
          </div>
          <div className="p-12 m-2 lg:col-span-3 sm:col-span-12 animate__animated animate__fadeInUp"></div>
          <div className="flex p-12 m-2 grid md:grid-cols-12 lg:col-span-9 sm:col-span-12 animate__animated animate__fadeInUp">
            <div className="lg:col-span-6">
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full border	flex items-center justify-center">
                  <SiUpwork color="#14a800" size={42} />
                </div>
                <div>
                  <div className="flex items-center pl-3">
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <p className="font-ZonaNormalFont text-base pt-2">4.9</p>
                    </div>
                  </div>
                  <div className="pl-4">
                    <h6 className="font-ZonaBoldFont text-base pt-2">
                      1813 reviews
                    </h6>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-12">
                <div className="h-24 w-24 rounded-full border	flex items-center justify-center">
                  <SiUpwork color="#14a800" size={42} />
                </div>
                <div>
                  <div className="flex items-center pl-3">
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <p className="font-ZonaNormalFont text-base pt-2">4.9</p>
                    </div>
                  </div>
                  <div className="pl-4">
                    <h6 className="font-ZonaBoldFont text-base pt-2">
                      1813 reviews
                    </h6>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-12">
                <div className="h-24 w-24 rounded-full border	flex items-center justify-center">
                  <SiUpwork color="#14a800" size={42} />
                </div>
                <div>
                  <div className="flex items-center pl-3">
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <p className="font-ZonaNormalFont text-base pt-2">4.9</p>
                    </div>
                  </div>
                  <div className="pl-4">
                    <h6 className="font-ZonaBoldFont text-base pt-2">
                      1813 reviews
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full border	flex items-center justify-center">
                  <SiUpwork color="#14a800" size={42} />
                </div>
                <div>
                  <div className="flex items-center pl-3">
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <p className="font-ZonaNormalFont text-base pt-2">4.9</p>
                    </div>
                  </div>
                  <div className="pl-4">
                    <h6 className="font-ZonaBoldFont text-base pt-2">
                      1813 reviews
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-12">
                <div className="h-24 w-24 rounded-full border	flex items-center justify-center">
                  <SiUpwork color="#14a800" size={42} />
                </div>
                <div>
                  <div className="flex items-center pl-3">
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <BsFillStarFill color="#ef4335" size={22} />
                    </div>
                    <div className="px-1">
                      <p className="font-ZonaNormalFont text-base pt-2">4.9</p>
                    </div>
                  </div>
                  <div className="pl-4">
                    <h6 className="font-ZonaBoldFont text-base pt-2">
                      1813 reviews
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 h-72 flex items-center justify-start">
              <img
                src="https://ronasit.com/_next/static/media/clutch-dark-1.bc510330.svg"
                alt=""
              />
            </div>
            <div className="lg:col-span-4 h-72 flex items-center justify-center">
              <img
                src="https://ronasit.com/_next/static/media/clutch-dark-1.bc510330.svg"
                alt=""
              />
            </div>
            <div className="lg:col-span-4 h-72 flex items-center justify-end">
              <img
                src="https://ronasit.com/_next/static/media/clutch-dark-1.bc510330.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <SecondaryFooter />
      <Footer />
    </>
  );
}
