import { Button } from '@/components/ui/button';
import React from 'react';
// Instagram SVG icon from simpleicons.org
const InstagramIcon = () => (
  <svg
    viewBox="0 0 "
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="currentColor"
  >
    <title>Instagram</title>
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

// Facebook SVG icon from simpleicons.org
const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-[#ffffff]"
  >
    <title>Facebook</title>
    <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 6.006 4.388 10.983 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.926-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.056 24 18.079 24 12.073z" />
  </svg>
);

// An SVG icon for TikTok.
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="currentColor"
  >
    <path d="M12.52.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.85-.98-6.46-2.9-1.6-1.92-2.3-4.5-1.96-6.91.34-2.4 1.91-4.45 4.12-5.36 2.21-.91 4.86-.57 6.75 1.15.02-1.6.02-3.2.01-4.8z" />
  </svg>
);

const socialLinks = [
  {
    name: 'Facebook',
    // Using the numeric Page ID is more reliable for deep linking.
    webUrl: 'https://www.facebook.com/zodiaccoffeelounge',
    // For Facebook's "New Pages Experience", pages are treated as profiles.
    appUrl: 'fb://profile/61564319966383',
    icon: <FacebookIcon />,
    // Use Facebook's brand blue, ensuring consistency in both light and dark modes.
    // buttonClassName: 'bg-[#1877F2] hover:opacity-90',
    buttonClassName:
      'bg-gradient-to-br from-[#405DE6] via-[#E1306C] to-[#F77737] bg-[#1877F2]',
  },
  {
    name: 'TikTok',
    webUrl: 'https://www.tiktok.com/@zodiac.coffee.lounge',
    appUrl: 'snssdk1233://user/@zodiac.coffee.lounge',
    icon: <TikTokIcon />,
    // Use a black background for brand consistency across themes.
    buttonClassName: 'bg-black hover:bg-black/90',
  },
  {
    name: 'Instagram',
    // Corrected the username to include the dot for accuracy.
    webUrl: 'https://www.instagram.com/zodiaccoffeelounge',
    appUrl: 'instagram://user?username=zodiaccoffeelounge',
    icon: <InstagramIcon />,
    // Using the iconic Instagram gradient.
    buttonClassName:
      'bg-gradient-to-br from-[#405DE6] via-[#E1306C] to-[#F77737] hover:opacity-90',
  },
];

export function SocialLinks() {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    appUrl: string,
    webUrl: string
  ) => {
    // We only want this custom behavior on mobile devices.
    // On desktop, we'll let the default browser behavior take over.
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      return;
    }

    e.preventDefault();

    // Attempt to open the app.
    window.location.href = appUrl;

    // If the app isn't installed, the above line will fail silently.
    // After a short delay, we'll open the web URL as a fallback.
    // If the app opens, the user will be switched to it, and this timeout
    // might not run, or they won't see the browser tab open.
    setTimeout(() => {
      window.open(webUrl, '_blank');
    }, 2500);
  };

  return (
    <div className="flex justify-center gap-4 my-5">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.webUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${link.name} page`}
          onClick={(e) => handleLinkClick(e, link.appUrl, link.webUrl)}
        >
          <Button
            size="icon" // Kept for base icon button styles (e.g., no padding)
            className={`h-12 w-12 rounded-full text-white transition-colors ${link.buttonClassName}`}
          >
            {link.icon}
          </Button>
        </a>
      ))}
    </div>
  );
}
