const parent = React.createElement(
  "div",
  {
    id: 'parent',
    xyz: "abc",
  },
  [React.createElement(
    "div",
    {
      id: 'child1'
    },
    [
    React.createElement(
      "h1",
      {
        id: 'heading1',
        xyz: "abc",
      },
      "I am an H1 Tag Sibling 1!"
    ), React.createElement(
      "h1",
      {
        id: 'heading2',
        xyz: "abc",
      },
      "I am an H1 Tag Sibling 2!"
    )]
  ), React.createElement(
    "div",
    {
      id: 'child2'
    },
    [
    React.createElement(
      "h1",
      {
        id: 'heading1',
        xyz: "abc",
      },
      "I am an H1 Tag Sibling 1!"
    ), React.createElement(
      "h1",
      {
        id: 'heading2',
        xyz: "abc",
      },
      "I am an H1 Tag Sibling 2!"
    )]
  )]
);

console.log(parent) //Object printed not a Tag
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);