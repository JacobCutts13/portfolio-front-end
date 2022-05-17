import { Fade } from "react-awesome-reveal";
import { useState } from "react";

export default function Platforms(): JSX.Element {
  const [showNotion, setShowNotion] = useState<boolean>(false);
  return (
    <section id="updates">
      <Fade direction="right" duration={2000}>
        <div className="row">
          <h1>Platforms</h1>
          {!showNotion && (
            <li>
              <button
                className="toggle-button"
                onClick={() => setShowNotion(true)}
              >
                CodeWars &darr;
              </button>
            </li>
          )}
          {showNotion && (
            <>
              <li>
                <button
                  className="toggle-button"
                  onClick={() => setShowNotion(false)}
                >
                  Hide &uarr;
                </button>
              </li>
              <iframe
                title="codewars"
                src="https://v1.embednotion.com/embed/a690962a0dc74f70bffb5697a772981e"
              ></iframe>
            </>
          )}
        </div>
      </Fade>
    </section>
  );
}
