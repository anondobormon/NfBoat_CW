import React from "react";
import { Fade } from "react-reveal";
import "./Accordion.scss";

export default class Accordion extends React.Component {
  render() {
    const {
      props: { data },
    } = this;
    return (
      <Fade>
        <div {...{ className: "wrapper" }}>
          <ul {...{ className: "accordion-list" }}>
            {data.map((data, key) => {
              return (
                <li {...{ className: "accordion-list__item", key }}>
                  <AccordionItem {...data} />
                </li>
              );
            })}
          </ul>
        </div>
      </Fade>
    );
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { paragraph, title, index },
      state: { opened },
    } = this;

    return (
      <div
        {...{
          className: `accordion-item acc125 , ${
            opened && "accordion-item--opened"
          }`,
          onClick: () => {
            this.setState({ opened: !opened });
          },
        }}
      >
        <div {...{ className: "accordion-item__line" }}>
          <h3 {...{ className: "accordion-item__title" }}>
            <span>{index}. </span> {title}
          </h3>
          <span {...{ className: "accordion-item__icon" }}>
            <div className="faq-icon-1"></div>
            <div className="faq-icon-2"></div>
          </span>
        </div>
        <div {...{ className: "accordion-item__inner" }}>
          <div {...{ className: "accordion-item__content" }}>
            <p {...{ className: "accordion-item__paragraph" }}>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}
