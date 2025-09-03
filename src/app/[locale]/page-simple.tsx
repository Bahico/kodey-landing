export default function SimpleHome() {
  return (
    <div className="pt-20">
      <h1>Hello from {process.env.NODE_ENV} mode!</h1>
      <p>This is a simple test page for locale routing.</p>
    </div>
  );
}
