import Link from "next/link";
import React, { forwardRef } from "react"; // Import forwardRef

// Use forwardRef to allow parent components to pass a ref to the DOM element
const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref} // Attach the forwarded ref to the div
      id="about" // Keep the ID for fallback/accessibility if needed
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <h1 className="text-5xl font-bold mb-4">About Me</h1>
      <p className="text-xl mb-8">
        This is the About page. Learn more about Fendyra Restu here!
      </p>
      <Link href="/" passHref legacyBehavior>
        <a className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
          Go back to Home
        </a>
      </Link>
    </div>
  );
});

export default About;
