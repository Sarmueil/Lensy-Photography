import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script"; // Import Script component from Next.js

export const metadata: Metadata = {
  title: "Lensy Photography",
  description: "A portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full">
        {/* Embed the chat widget script here */}
        <Script id="chat-widget" strategy="lazyOnload">
          {`
            (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({ 
                    verify: { projectID: '64edfb791497f0000743e8eb' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production'
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
