
"use client";

export function TripadvisorWidget({
  className = "",
}: {
  className?: string;
}) {
  const iframeHtml = `<!DOCTYPE html>
<html>
<head>
  <base target="_blank">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: transparent;
      overflow: hidden;
      font-family: Arial, sans-serif;
    }

    #TA_cdswritereviewlgvi339 {
      width: 100%;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div id="TA_cdswritereviewlgvi339" class="TA_cdswritereviewlgvi">
    <ul class="TA_links Tju4DlqHB">
      <li class="ED8KEZ">
        <a target="_blank"
          href="https://www.tripadvisor.com/Attraction_Review-g294013-d26530014-Reviews-Visitors_Destination_Tours_Safari-Abu_Dhabi_Emirate_of_Abu_Dhabi.html">
          <img
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
            alt="TripAdvisor"
          />
        </a>
      </li>
    </ul>
  </div>

  <script async
    src="https://www.jscache.com/wejs?wtype=cdswritereviewlgvi&uniq=339&locationId=26530014&lang=en_US&display_version=2">
  </script>
</body>
</html>`;

  return (
    <iframe
      title="TripAdvisor Write a Review"
      srcDoc={iframeHtml}
      className={`w-full max-w-[270px] h-[250px] border-0 rounded-xl overflow-hidden ${className}`}
      loading="lazy"
      scrolling="no"
    />
  );
}
