"use client";
import { useEffect, useState } from "react";
import "../../app/lb/components/hor.css";
import Back from "../BENYAHIA-Family/components/Back";
import Loader from './components/Loader';

export default function NewGenerations() {
  const [isFading, setIsFading] = useState(false); // Fade-out state

  useEffect(() => {
    // Start fade-out process after 3 seconds
    const timer = setTimeout(() => {
      setIsFading(true); // Trigger fade-out
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      <Loader isFading={isFading} />
      <Back />
      <div className="relative mx-auto flex gap-4 flex-col text-center place-content-center xl:max-w-[1200px] max-[500px]:px-2 pb-16 pt-5">
        <div className="flex flex-row-reverse max-[360px]:flex-col-reverse justify-center gap-10 max-[360px]:gap-5 items-center "></div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-5xl max-[450px]:text-2xl capitalize">
            new dental generation
          </div>
          <div className="flex flex-col gap-3 max-[450px]:gap-0 font-semibold text-4xl max-[450px]:text-lg capitalize mx-1">
            <h1 className="text-3xl text-word-purple py-5">SOON</h1>
            <h1>will be exclusive for dentists</h1>
            <br />
            <h1>be the first to know about our updates</h1>
          </div>

          <section id="contact-me">
            <div className="contact-form-wrapper " style={{ marginBottom: 100 }}>
              <form action="https://formspree.io/f/mblrnqqr" method="post" className="contact-form">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded border-white mb-3 form-input"
                    id="name"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded border-white mb-3 form-input"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control rounded border-white mb-3 form-text-area"
                    rows={5}
                    cols={30}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="submit-button-wrapper">
                  <input type="submit" defaultValue="Send" className="btn btn-primary btn-lg" />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
