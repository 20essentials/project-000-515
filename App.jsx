import React from "react";
import { createRoot } from "react-dom/client";
import { stylex } from "@ladifire-opensource/stylex";

const styles = stylex.create({
  body: {
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexWrap: "wrap",
    placeContent: "center",
    backgroundColor: "#000",
  },
  bg: {
    backgroundImage: "url('assets/fondo.avif')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    position: "relative",
    borderRadius: "50%",
    animation: `${stylex.keyframes([
      { "0%": { borderRadius: "50% 50% 40% 60% / 60% 40% 50% 50%" } },
      { "25%": { borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" } },
      { "50%": { borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%" } },
      { "75%": { borderRadius: "50% 50% 60% 40% / 40% 50% 50% 60%" } },
      { "100%": { borderRadius: "50% 50% 40% 60% / 60% 40% 50% 50%" } },
    ])} 3s ease-in-out infinite alternate both, ${stylex.keyframes([
      { "0%": { width: "480px", height: "270px" } },
      { "100%": { width: "1920px", height: "1080px" } },
    ])} 10s linear forwards`,
    "::before": {
      position: "absolute",
      content: "''",
      inset: "-25px",
      zIndex: -1,
      background: "inherit",
      filter: "blur(30px) saturate(400%)",
      borderRadius: "inherit",
    },
  },
});

function App() {
  return <section className={stylex(styles.bg)} />;
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className={stylex(styles.body)}>
      <App />
    </div>
  </React.StrictMode>
);

export default App;
