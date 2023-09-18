import React from "react";
import Image from "next/image";

export default function SocialMedia() {
  return (
    <div>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/Ikona_biała_FB.png"
          alt="Facebook"
          width={64}
          height={64}
        />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/Ikona_biała_INSTA.png"
          alt="Instagram"
          width={64}
          height={64}
        />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/Ikona_biała_YT.png"
          alt="YouTube"
          width={64}
          height={64}
        />
      </a>
    </div>
  );
}
