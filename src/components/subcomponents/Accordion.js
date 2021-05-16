/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

export default function Accordion({ title, links }) {
  let [active, setActive] = useState(false);
  const onClick = () => {
    setActive((active = !active));
  };
  return (
    <div className={`${active ? 'accordion-active' : ''} accordion`}>
      <h2 onClick={onClick}>
        {title}{' '}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </h2>
      <div>
        {links && links.map((link) => <a key={links.indexOf(link)}>{link}</a>)}
      </div>
    </div>
  );
}
