import React from "react";

function test($) {
  $(document).ready(function ($) {
    var calendar = $("#calendar").fullCalendar({
      editable: false,
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay",
      },
      events: "load.php",
      selectable: true,
      selectHelper: true,
    });
  });

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.js"></script>
      <script
        src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
        type="text/javascript"></script>

      <script type="text/javascript" src="js/script.js"></script>
      <script src="jquery.min.js"></script>
      <body>
        <br />
        <h2 align="center">ONLINE LECTURE CALENDAR</h2>
        <br />
        <div class="container">
          <div id="calendar"></div>
        </div>
      </body>
    </div>
  );
}

export default test;
