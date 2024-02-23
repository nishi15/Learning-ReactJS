const root = ReactDOM.createRoot(document.getElementById("container"));

const head1 = React.createElement("h1", {}, "Hello from React");
const head2 = React.createElement("h2", {}, "Hello from React");

const div = React.createElement("div", {}, [head1, head2]);

root.render(div);
