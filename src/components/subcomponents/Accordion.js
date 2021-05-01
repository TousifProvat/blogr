import React, { useState } from 'react';

export default function Accordion({ title, links }) {
  let [active, setActive] = useState(false);
  const onClick = () => {
    setActive((active = !active));
  };
  return (
    <div className={`${active ? 'accordion-active' : ''} accordion`}>
      <li onClick={onClick}>
        {title}{' '}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </li>
      <div>
        {links &&
          links.map((link) => (
            <a href="#" key={links.indexOf(link)}>
              {link}
            </a>
          ))}
      </div>
    </div>
  );
}
