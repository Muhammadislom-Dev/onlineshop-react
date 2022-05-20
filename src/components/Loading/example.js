import React from "react";
import ReactLoading from "react-loading";
import { Section,  Article, Prop, list } from "./generic";

const Example = () => (
  <Section>
    {/* <Title>React Loading</Title> */}
    {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="#87ADFF" />
        <Prop>{l.name}</Prop>
      </Article>
    ))}
  </Section>
);

export default Example;