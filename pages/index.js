import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

// const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID | "G-XXXXXXX";
// ReactGA.initialize(TRACKING_ID);
const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID || "G-XXXXXXX";

if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
