function Home() {
  const encoded = "aHR0cHM6Ly9jdXJzby5kZXYvd2ViL2Rucy1oNGNrM3I=";
  const decoded = atob(encoded);

  return (
    <h1>
      Eu amo sushi!!!
      <br />
      <a href={decoded}>{decoded}</a>
    </h1>
  );
}

export default Home;
