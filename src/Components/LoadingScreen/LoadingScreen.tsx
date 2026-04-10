import "./style.css";

export function LoadingScreen() {
  return (
    <section className="loading-screen">
      <video autoPlay muted loop playsInline className="loading-screen-video">
        <source src="/LoadingScreen/video.webm" type="video/webm" />
      </video>
    </section>
  );
}
