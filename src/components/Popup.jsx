function Popup() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#f3d5b5",
          padding: "30px",
          borderRadius: "12px",
          width: "320px",
          textAlign: "center",
          color: "#603808",
        }}
      >
        <h2>Sign In</h2>
        <input
          placeholder="Email"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <input
          placeholder="Password"
          type="password"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />
        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "#8b5e34",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Popup;