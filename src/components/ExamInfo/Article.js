import React from "react";
import { Card } from "ui-neumorphism";
//Short Q&A articles on each exam
export default function Article({ question, answer, id }) {
  return (
    <div className="ml-2">
      <div id="accordion">
        <Card style={{ background: "white" }} id={id}>
          <div className="card-header" role="tab" id="onehead">
            <h2 className="mb-0" style={{ color: "#FB8F1D" }}>
              <a data-toggle="collapse" data-target="#one">
                {question}
              </a>
            </h2>
          </div>
          <div role="tabpanel" className="collapse show" id="one" data-parent="#accordion">
            <div className="card-body">
              <p>{answer}</p>
            </div>
          </div>
        </Card>
        <br />
      </div>
    </div>
  );
}
