"use client";

import { useSelector } from "react-redux";

const About = () => {
  const val = useSelector((state) => state.counter.value);
  return <div>hel</div>;
};

export default About;
