import { useEffect } from 'react';
import Spline from '@splinetool/react-spline/next';

const LostOrb = () => {
  useEffect(() => {
    const loadSpline = async () => {
      // Load the Spline script dynamically
      const script = document.createElement('script');
      script.src = 'https://spline.design/spline.js'; // Replace with the actual script URL
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Initialize the Spline scene here if necessary
        // Example: window.spline = new Spline.Scene({ ... });
      };
    };

    loadSpline();

    return () => {
      // Clean up if necessary
      // Example: removeEventListener, cleanup Spline instances, etc.
    };
  }, []);

  return (
      <Spline
        scene="https://prod.spline.design/kVbOOfwISRC36KJd/scene.splinecode"
      />
  );
};

export default LostOrb;
