import { useState, useEffect } from 'react';

// svg
import editorMobile from '../assets/illustration-editor-mobile.svg';
import editorDesktop from '../assets/illustration-editor-desktop.svg';

import phones from '../assets/illustration-phones.svg';
import cicrclePattern from '../assets/bg-pattern-circles.svg';

export default function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div id="about">
      <h1 className="title">Designed for the future</h1>
      <div className="container">
        <div className="about-content">
          <div className="about-desc">
            <div className="para para-1">
              <h2 className="para-title">Introduction an extensible editor</h2>
              <p className="para-desc">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionalitty or
                change the looks of a blog.
              </p>
            </div>
            <div className="para para-2">
              <h2 className="para-title">Robust content management</h2>
              <p className="para-desc">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionalitty,
                you're in full control.
              </p>
            </div>
          </div>
          <div className="about-display">
            <img
              src={windowWidth > 1023 ? editorDesktop : editorMobile}
              alt="mobile"
              className="about-img"
            />
          </div>
        </div>
        <div className="art">
          <div className="art-container">
            <div className="pattern">
              <img
                src={cicrclePattern}
                alt="pattern"
                className="circle-pattern"
              />
            </div>
            <div className="art-display">
              <img src={phones} alt="art" className="art-img" />
            </div>
            <div className="art-blog">
              <h2 className="art-blog-title">
                State of the Art Infrastructures
              </h2>
              <p>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
