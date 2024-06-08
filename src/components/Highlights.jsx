import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCareousel from "./VideoCareousel"


const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      duration: 1.5,
      delay: 0.5
    })
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      delay: 1.5,
      duration: 1,
      stagger: 0.25
    }) 
  }, [])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc ">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end md:flex justify-between ">
          <h1 id="title" className="section-heading pb-16">
            Get the highlights.

          </h1>
          <div className=" flex flex-wrap items-end gap-5 ">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className=" ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className=" ml-2" />
            </p>
          </div>
        </div>
        <VideoCareousel />
      </div>

    </section>
  )
}

export default Highlights
