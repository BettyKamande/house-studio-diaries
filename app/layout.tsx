import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Diary Studios",
  description: "We curate exceptional interiors tailored to your unique style and preferences.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
    	<body className="bg-background flex flex-col items-center font-poppins">
        	<div className="mx-auto max-w-screen-xl w-full relative overflow-x-hidden">
				{children}
        	</div>
		</body>
    </html>
  );
}
