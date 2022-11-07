import React from "react";

function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/welcome")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
    <div>
      <header>
        <h2>{!data ? "Loading..." : data}</h2>
      </header>
    </div>
    </>
  );
}

export default Home;