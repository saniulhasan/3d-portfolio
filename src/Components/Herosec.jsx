import Scene from "./Scene";

function Herosec() {
  return (
    <div className="hero-container">
      {/* Top Content */}
      <div className="hero-top">
        <h1>Welcome to 3D World</h1>
        <p>Experience immersive 3D visualization right in your browser.</p>
      </div>

      {/* 3D Canvas */}
      <div className="canvas-container">
    <Scene/>
      </div>

      {/* Bottom Content */}
      <div className="hero-bottom">
        <h2>Enhance your experience</h2>
        <p>Customize, interact, and explore various 3D elements.</p>
      </div>
    </div>
  );
}

export default Herosec;