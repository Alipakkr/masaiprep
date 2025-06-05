function BottomMainRight({ userName }) {
  return (
    <div className="bottom-main-right">
      <h4>Bottom Main Right Component</h4>
      <p>Deeply nested display: <strong>{userName || "No name entered"}</strong></p>
    </div>
  );
}

export default BottomMainRight;