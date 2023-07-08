import "./styles.scss";
import { DownloadButton } from "./ui/DownloadButton";
import { ProgressDisplay } from "./ui/ProgressDisplay";

// import { defaultBus as bus } from "@rxfx/bus";
// bus.errors.subscribe(console.error);

export default function App() {
  return (
    <div className="window">
      <header>𝗥𝘅𝑓𝑥 Downloader UX</header>
      <div className="App">
        <p>
          <DownloadButton />
        </p>
        <p>
          <ProgressDisplay />
        </p>
      </div>
    </div>
  );
}
