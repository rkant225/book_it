import HomePage from "../components/Home/HomePage";

const Home = (props) => {
  const { dateTime } = props;
  return <HomePage dateTime={dateTime} />;
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch("https://worldtimeapi.org/api/ip");
  const dateTime = await response.json();
  return {
    props: {
      dateTime: dateTime,
    },
  };
};
