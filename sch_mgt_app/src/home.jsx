import React from "react";

function Home() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

  return (
    <>
    <div>
      <header>
        <h2>Please <a href="/signup">register</a></h2>
      </header>
    </div>
    </>
  );
}

export default Home;