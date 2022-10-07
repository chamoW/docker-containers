import { Fragment } from "react";

export default function Layout(props) {
  return (
    <Fragment>
      <header>header</header>
      <main>{props.children}</main>
      <footer>footer</footer>
    </Fragment>
  );
}
