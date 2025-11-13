import "./style.css"

export const Layout = () => {
  return (
    <>
      <div className="parallax-section bg1">
        <div className="content-box">
          <h1>First Parallax</h1>
          <p>Fixed background creates beautiful parallax effect</p>
        </div>
      </div>

      <div className="normal-section" style={{ backgroundColor: "#222" }}>
        <div>
          <h2>Normal section 1</h2>
          <p>This is the end of hour parallax demonstration.</p>
        </div>
      </div>

      <div className="parallax-section bg2">
        <div className="content-box">
          <h1>Third Parallax</h1>
          <p>Beautiful parallax effect with fixed background</p>
        </div>
      </div>

      <div className="normal-section" style={{ backgroundColor: "#222" }}>
        <div>
          <h2>Final section</h2>
          <p>This is the end of hour parallax demonstration.</p>
        </div>
      </div>

      <div className="parallax-section bg3">
        <div className="content-box">
          <h1>Third Parallax</h1>
          <p>Beautiful parallax effect with fixed background</p>
        </div>
      </div>
    </>
  );
};
