"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Style from "./Employee.module.css";

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
const Employee = () => {
  const [visibleComponent, setVisibleComponent] = useState(null);

  const handleVisibilityChange = (id) => {
    setTimeout(() => {
      setVisibleComponent(id);
    }, 200);
  };

  const [personFirst, setPersonFirst] = useState(false);
  const [personSecond, setPersonSecond] = useState(false);
  const [personThird, setPersonThird] = useState(false);

  const handleFirst = () => {
    setPersonFirst(true);
    setPersonSecond(false);
    setPersonThird(false);
  };
  const handleSecond = () => {
    setPersonFirst(false);
    setPersonSecond(true);
    setPersonThird(false);
  };
  const handleThird = () => {
    setPersonFirst(false);
    setPersonSecond(false);
    setPersonThird(true);
  };

  return (
    <div className=" pt-28 mx-auto  sm:px-4">
      <div className={`grid md:grid-cols-12 ${Style.sub}`}>
        <div className={` m-2 col-span-3  ${Style.visibleClass}`}>
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

        <div
          className={`m-2 col-span-9 lg:px-28  animate__animated animate__fadeInUp ${Style.responsiveSide}`}
        >
          <VisibilityObserver
            className="py-72 "
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
            <h1
              className={`font-ZonaSemiFont text-5xl leading-snug md:text-3xl md:leading-snug sm:text-2xl sm:leading-snug ${Style.responsiveText}`}
            >
              Ronas IT demonstrates an excellent understanding of user needs and
              all of their designs are creative and elegant in their simplicity.
              They’re very well thought out and have an excellent response to
              feedback. All of these qualities are why they’re our go-to user
              experience experts.
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
            <h1
              className={`font-ZonaSemiFont text-5xl leading-snug md:text-3xl md:leading-snug sm:text-2xl sm:leading-snug ${Style.responsiveText}`}
            >
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
            className="py-72 "
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
            <h1
              className={`font-ZonaSemiFont text-5xl leading-snug md:text-3xl md:leading-snug sm:text-2xl sm:leading-snug ${Style.responsiveText}`}
            >
              A technically skilled team, Ronas IT goes the extra mile to
              deliver high-quality solutions. With a broad understanding of both
              the product and current technologies, they provide impactful,
              timely, and flexible support.{" "}
            </h1>
          </VisibilityObserver>

          <VisibilityObserver
            id="visible4"
            onVisible={handleVisibilityChange}
            className="py-72 "
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
            <h1
              className={`font-ZonaSemiFont text-5xl leading-snug md:text-3xl md:leading-snug sm:text-2xl sm:leading-snug ${Style.responsiveText}`}
            >
              The quality of their work stands out the most. They’re
              knowledgeable and provide useful feedback.
            </h1>
          </VisibilityObserver>
        </div>
      </div>
      <div className={`grid md:grid-cols-12 ${Style.Ressub}`}>
        <h1>That's what our clients say about us</h1>
        <div className={` m-2 col-span-12  ${Style.ResvisibleClass}`}>
          <div className="pb-6 m-5" onClick={handleFirst}>
            <div
              className={`h-12 w-12 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${
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
            <h6 className={`font-ZonaNormalFont text-base ${Style.text}`}>Bob Glazebrook</h6>
            <p className={`font-ZonaNormalFont text-base text-theme-gray ${Style.paratext}`}>
              Engineering Inc.
            </p>
          </div>

          <div className="pb-6 m-5" onClick={handleSecond}>
            <div
              className={`h-12 w-12 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${
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
            <h6 className={`font-ZonaNormalFont text-base ${Style.text}`}>Bob Glazebrook</h6>
            <p className={`font-ZonaNormalFont text-base text-theme-gray ${Style.paratext}`}>
              Engineering Inc.
            </p>
          </div>

          <div className="pb-6 m-5" onClick={handleThird}>
            <div
              className={`h-12 w-12 bg-white rounded-full mb-4 transition duration-300 ease-in-out ${
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
            <h6 className={`font-ZonaNormalFont text-base ${Style.text}`}>Bob Glazebrook</h6>
            <p className={`font-ZonaNormalFont text-base text-theme-gray ${Style.paratext}`}>
              Engineering Inc.
            </p>
          </div>
        </div>

        <div
          className={`m-2 col-span-9 lg:px-28  animate__animated animate__fadeInUp ${Style.responsiveSide}`}
        >
          {personFirst ? (
            <VisibilityObserver
              className=""
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
              <h1
                className={`font-ZonaSemiFont text-5xl leading-snug md:text-3xl md:leading-snug sm:text-2xl sm:leading-snug ${Style.responsiveText}`}
              >
                Ronas IT demonstrates an excellent understanding of user needs
                and all of their designs are creative and elegant in their
                simplicity. They’re very well thought out and have an excellent
                response to feedback. All of these qualities are why they’re our
                go-to user experience experts.
              </h1>
            </VisibilityObserver>
          ) : (
            ""
          )}

          {personSecond ? (
            <VisibilityObserver
              className=""
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
              <h1
                className={`font-ZonaSemiFont text-5xl leading-snug md:text-3xl md:leading-snug sm:text-2xl sm:leading-snug ${Style.responsiveText}`}
              >
                Fantastic service. The guys went above and beyond. They also
                suggested improvements to my app which I really appreciated - as
                apposed to doing exactly what I asked, it resulted in a better
                product. I also had a view of project progress and things that
                were done and getting done. Very effective.{" "}
              </h1>
            </VisibilityObserver>
          ) : (
            ""
          )}

          {personThird ? (
            <VisibilityObserver
              id="visible3"
              onVisible={handleVisibilityChange}
              className=""
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
              <h1
                className={`font-ZonaSemiFont text-5xl leading-snug md:text-3xl md:leading-snug sm:text-2xl sm:leading-snug ${Style.responsiveText}`}
              >
                A technically skilled team, Ronas IT goes the extra mile to
                deliver high-quality solutions. With a broad understanding of
                both the product and current technologies, they provide
                impactful, timely, and flexible support.{" "}
              </h1>
            </VisibilityObserver>
          ) : (
            ""
          )}
          {/* 
        <VisibilityObserver id="visible4" onVisible={handleVisibilityChange} className='py-72 '>
          <div className='flex items-center py-8'>
            <div className='px-1'>
              <BsFillStarFill color='#ef4335' size={28} />
            </div>
            <div className='px-1'>
              <BsFillStarFill color='#ef4335' size={28} />
            </div>
            <div className='px-1'>
              <BsFillStarFill color='#ef4335' size={28} />
            </div>
            <div className='px-1'>
              <BsFillStarFill color='#ef4335' size={28} />
            </div>
            <div className='pl-1 pr-8'>
              <BsFillStarFill color='#ef4335' size={28} />
            </div>


            <div className='px-6 flex items-end justify-center m-0' style={{ borderLeft: '1px solid hsla(0,0%,100%,.5)' }}>
              <h5 className='font-ZonaNormalFont text-3xl'>5.0</h5>
            </div>
          </div>
          <h1 className={`font-ZonaSemiFont text-5xl leading-snug md:text-3xl md:leading-snug sm:text-2xl sm:leading-snug ${Style.responsiveText}`}>
            The quality of their work stands out the most. They’re knowledgeable and provide useful feedback.
          </h1>
        </VisibilityObserver> */}
        </div>
      </div>
    </div>
  );
};

export default Employee;
