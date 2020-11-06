import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Test from "./php files/test";

function ScheduleClass() {
  var divStyle = {
    color: "Black",
    fontStyle: "bold",
  };
  return (
    <div>
      <h3 style={({ color: "#5840bb" }, { textAlign: "center" })}>Online Lectures Schedule</h3>
      <br></br>

      <Table style={{ textAlign: "center" }} striped bordered hover>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Class</th>

            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>8</td>

            <td>
              <a target="_blank" href="https://missioned.000webhostapp.com/class8/index_class8.php">
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>9</td>

            <td>
              <a target="_blank" href="https://missioned.000webhostapp.com/class9/index_class9.php">
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>10</td>

            <td>
              <a
                target="_blank"
                href="https://missioned.000webhostapp.com/class10/index_class10.php">
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>11 Science</td>

            <td>
              <a
                target="_blank"
                href="https://missioned.000webhostapp.com/class11Science/index_class11Science.php">
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>11 Commerce</td>

            <td>
              <a
                target="_blank"
                href="https://missioned.000webhostapp.com/class11Commerce/index_class11Commerce.php">
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>12 Science</td>

            <td>
              <a
                target="_blank"
                href="https://missioned.000webhostapp.com/class12Science/index_class12Science.php">
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>12 Commerce</td>

            <td>
              <a
                target="_blank"
                href="https://missioned.000webhostapp.com/class12Commerce/index_class12Commerce.php">
                Click here
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default ScheduleClass;
