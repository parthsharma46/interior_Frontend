function Hero() {
  return (
    <section
      style={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px",
        backgroundColor: "#d4a276",
        color: "#603808",
      }}
    >
      <h1 style={{ fontSize: "52px", marginBottom: "20px" }}>
        Modern Interior Designs
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "600px" }}>
        Elegant furniture, décor, and lighting crafted for modern homes.
      </p>
    </section>
  );
}

export default Hero;