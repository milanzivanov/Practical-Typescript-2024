import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider defaultTheme="system">
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log(context);
  return (
    <div>
      <h2>React & Context API</h2>
      <button
        onClick={() => {
          if (context.theme === "dark") {
            context.setTheme("system");
            return;
          }
          context.setTheme("dark");
        }}
        className="btn btn-center"
      >
        Toggle Theme
      </button>
    </div>
  );
}
export default ParentComponent;
