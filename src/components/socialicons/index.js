import React from "react";
import "./style.css";
import { socialprofiles } from "../../content_option";

console.log(socialprofiles);

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofiles.map((profile, index) =>
          Object.entries(profile).map(([key, { url, icon: IconComponent }]) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <IconComponent />
              </a>
            </li>
          ))
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
