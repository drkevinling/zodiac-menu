import { Button } from '@/components/ui/button';
import { Facebook, Instagram } from 'lucide-react';
import React from 'react';

// An SVG icon for TikTok.
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
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
    icon: <Facebook className="h-6 w-6" />,
    buttonClassName: 'bg-[#1877F2] hover:bg-[#1877F2]/90',
  },
  {
    name: 'TikTok',
    // Using the numeric User ID is more reliable than the username.
    webUrl: 'https://www.tiktok.com/@zodiac.coffee.lounge',
    appUrl: 'snssdk1233://user/@zodiac.coffee.lounge',
    icon: <TikTokIcon />,
    // Using a simple black for a clean look, reflecting the app's dark UI.
    buttonClassName: 'bg-black hover:bg-zinc-800',
  },
  {
    name: 'Instagram',
    // Corrected the username to include the dot for accuracy.
    webUrl: 'https://www.instagram.com/zodiaccoffeelounge',
    appUrl: 'instagram://user?username=zodiaccoffeelounge',
    icon: <Instagram className="h-6 w-6" />,
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
