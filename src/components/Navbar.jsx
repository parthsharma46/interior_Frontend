function Navbar() {
  return (
    <nav
      style={{
        padding: "18px 40px",
        backgroundColor: "#603808",
        color: "#f3d5b5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0, letterSpacing: "1px" }}>ModernWoods</h2>

      <div style={{ display: "flex", gap: "24px" }}>
        {["Home", "Shop", "Categories", "Offers"].map((item) => (
          <span
            key={item}
            style={{
              position: "relative",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.children[0].style.width = "100%";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.children[0].style.width = "0";
            }}
          >
            {item}
            <span
              style={{
                position: "absolute",
                bottom: "-6px",
                left: 0,
                height: "2px",
                width: "0",
                backgroundColor: "#f3d5b5",
                transition: "width 0.3s ease",
              }}
            />
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;