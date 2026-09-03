import type { ReactNode } from "react";
type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section = (props: SectionProps) => {
  return (
    <section>
      <h1>{props.title}</h1>
      {props.children}
    </section>
  );
};
export default Section;
