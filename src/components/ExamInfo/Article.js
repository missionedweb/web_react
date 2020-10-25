import React from "react";
import { Card } from "ui-neumorphism";
//Short Q&A articles on each exam
export default function Article() {
  return (
    <div className="ml-2">
      <div id="accordion">
        <Card style={{ background: "white" }}>
          <div className="card-header" role="tab" id="onehead">
            <h1 className="mb-0" style={{ color: "#FB8F1D" }}>
              <a data-toggle="collapse" data-target="#one">
                Question ?
              </a>
            </h1>
          </div>
          <div role="tabpanel" className="collapse show" id="one" data-parent="#accordion">
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque malesuada vel
                arcu non varius pharetra, pretium pretium mollis. Quisque etiam nulla integer ac et.
                Massa odio a proin eget risus mauris scelerisque amet. Eget scelerisque consequat
                nibh felis amet egestas orci. Varius blandit mauris congue praesent semper quam
                metus at habitant. At ultrices lectus etiam feugiat nec facilisi. Tortor tincidunt
                parturient consectetur magnis egestas odio. Phasellus ultrices justo, commodo risus
                lobortis enim at enim arcu. Semper massa gravida aliquam imperdiet justo, in aliquet
                vel. Porttitor proin tristique ultrices etiam. Tristique elit imperdiet elementum
                sed urna, sed auctor ac sed. Leo nec etiam nisi, amet odio eleifend nibh suscipit.
                Bibendum ac id donec euismod suspendisse. Nibh vulputate lobortis tellus urna,
                viverra ullamcorper elit viverra donec. Cursus dolor nibh nunc tellus. Ipsum et,
                egestas vestibulum sit dapibus elit orci. Nunc suspendisse massa dictumst sed
                ultrices orci varius id morbi. Senectus vulputate dignissim non leo nunc ultrices.
                Tincidunt venenatis, suscipit ullamcorper sed potenti eleifend commodo. Sit ante sed
                in sit ante et a. Magna libero tincidunt scelerisque ipsum, nec. Porta sed luctus
                scelerisque ut id. Sapien ut sapien turpis placerat hac massa. Lectus in in cum
                maecenas et. Enim, tempor nullam orci, nisl nulla enim turpis. Pulvinar nibh integer
                pellentesque lobortis amet malesuada donec. In scelerisque sed id auctor volutpat
                massa pharetra, tristique mauris. Mi etiam libero arcu, lorem. Nisi.
              </p>
            </div>
          </div>
        </Card>
        <br />
        <Card style={{ background: "white" }}>
          <div className="card-header" role="tab" id="twohead">
            <h1 className="mb-0" style={{ color: "#FB8F1D" }}>
              <a data-toggle="collapse" data-target="#two">
                Question ?
              </a>
            </h1>
          </div>
          <div role="tabpanel" className="collapse" id="two" data-parent="#accordion">
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque malesuada vel
                arcu non varius pharetra, pretium pretium mollis. Quisque etiam nulla integer ac et.
                Massa odio a proin eget risus mauris scelerisque amet. Eget scelerisque consequat
                nibh felis amet egestas orci. Varius blandit mauris congue praesent semper quam
                metus at habitant. At ultrices lectus etiam feugiat nec facilisi. Tortor tincidunt
                parturient consectetur magnis egestas odio. Phasellus ultrices justo, commodo risus
                lobortis enim at enim arcu. Semper massa gravida aliquam imperdiet justo, in aliquet
                vel. Porttitor proin tristique ultrices etiam. Tristique elit imperdiet elementum
                sed urna, sed auctor ac sed. Leo nec etiam nisi, amet odio eleifend nibh suscipit.
                Bibendum ac id donec euismod suspendisse. Nibh vulputate lobortis tellus urna,
                viverra ullamcorper elit viverra donec. Cursus dolor nibh nunc tellus. Ipsum et,
                egestas vestibulum sit dapibus elit orci. Nunc suspendisse massa dictumst sed
                ultrices orci varius id morbi. Senectus vulputate dignissim non leo nunc ultrices.
                Tincidunt venenatis, suscipit ullamcorper sed potenti eleifend commodo. Sit ante sed
                in sit ante et a. Magna libero tincidunt scelerisque ipsum, nec. Porta sed luctus
                scelerisque ut id. Sapien ut sapien turpis placerat hac massa. Lectus in in cum
                maecenas et. Enim, tempor nullam orci, nisl nulla enim turpis. Pulvinar nibh integer
                pellentesque lobortis amet malesuada donec. In scelerisque sed id auctor volutpat
                massa pharetra, tristique mauris. Mi etiam libero arcu, lorem. Nisi.
              </p>
            </div>
          </div>
        </Card>
        <br />
        <Card style={{ background: "white" }}>
          <div className="card-header" role="tab" id="threehead">
            <h1 className="mb-0" style={{ color: "#FB8F1D" }}>
              <a data-toggle="collapse" data-target="#three">
                Question ?
              </a>
            </h1>
          </div>
          <div role="tabpanel" className="collapse" id="three" data-parent="#accordion">
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque malesuada vel
                arcu non varius pharetra, pretium pretium mollis. Quisque etiam nulla integer ac et.
                Massa odio a proin eget risus mauris scelerisque amet. Eget scelerisque consequat
                nibh felis amet egestas orci. Varius blandit mauris congue praesent semper quam
                metus at habitant. At ultrices lectus etiam feugiat nec facilisi. Tortor tincidunt
                parturient consectetur magnis egestas odio. Phasellus ultrices justo, commodo risus
                lobortis enim at enim arcu. Semper massa gravida aliquam imperdiet justo, in aliquet
                vel. Porttitor proin tristique ultrices etiam. Tristique elit imperdiet elementum
                sed urna, sed auctor ac sed. Leo nec etiam nisi, amet odio eleifend nibh suscipit.
                Bibendum ac id donec euismod suspendisse. Nibh vulputate lobortis tellus urna,
                viverra ullamcorper elit viverra donec. Cursus dolor nibh nunc tellus. Ipsum et,
                egestas vestibulum sit dapibus elit orci. Nunc suspendisse massa dictumst sed
                ultrices orci varius id morbi. Senectus vulputate dignissim non leo nunc ultrices.
                Tincidunt venenatis, suscipit ullamcorper sed potenti eleifend commodo. Sit ante sed
                in sit ante et a. Magna libero tincidunt scelerisque ipsum, nec. Porta sed luctus
                scelerisque ut id. Sapien ut sapien turpis placerat hac massa. Lectus in in cum
                maecenas et. Enim, tempor nullam orci, nisl nulla enim turpis. Pulvinar nibh integer
                pellentesque lobortis amet malesuada donec. In scelerisque sed id auctor volutpat
                massa pharetra, tristique mauris. Mi etiam libero arcu, lorem. Nisi.
              </p>
            </div>
          </div>
        </Card>
        <br />
      </div>
    </div>
  );
}
