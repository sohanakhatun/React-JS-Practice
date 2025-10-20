import MouseTracker from "./MouseTracker";
export default function MovingCircle() {
  return (
  <MouseTracker>
    {({ x, y }) => (
        <div
          style={{
            position: "absolute",
            top: y - 15,
            left: x - 15,
            width: 30,
            height: 30,
            background: "skyblue",
            borderRadius: "50%",
          }}
        />
      )}
  </MouseTracker>
  );
}
