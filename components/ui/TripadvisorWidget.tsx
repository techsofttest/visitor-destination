"use client";

import { useEffect, useRef } from "react";

export function TripadvisorWidget({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.minWidth = "240px";
    iframe.style.height = "250px";
    iframe.style.border = "none";
    iframe.style.borderRadius = "12px";
    iframe.style.overflow = "hidden";
    iframe.scrolling = "no";
    iframe.title = "TripAdvisor Reviews";

    const iframeHtml = `<!DOCTYPE html>
<html>
  <head>
    <base target="_blank">
    <style>
      * {
        box-sizing: border-box;
      }
      html, body {
        margin: 0;
        padding: 0;
        background: transparent;
        overflow: hidden;
        border-radius: 12px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      #CDSWIDWRL {
        width: 100% !important;
        border-radius: 12px !important;
        overflow: hidden !important;
      }
      #CDSWIDWRL .widWRL,
      #CDSWIDWRL .widWRLData,
      #CDSWIDWRL .widWRLForm {
        border-radius: 12px !important;
      }
    </style>
  </head>
  <body>
    <div id="TA_cdswritereviewlgvi339" class="TA_cdswritereviewlgvi">
      <ul id="soQpzY" class="TA_links Tju4DlqHB">
        <li id="nLevXlk" class="ED8KEZ">
          <a target="_blank" href="https://www.tripadvisor.com/UserReview-g294013-d26530014-Visitors_Destination_Tours_Safari-Abu_Dhabi_Emirate_of_Abu_Dhabi.html">
            <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor"/>
          </a>
        </li>
      </ul>
    </div>
    <script async src="https://www.jscache.com/wejs?wtype=cdswritereviewlgvi&amp;uniq=339&amp;locationId=26530014&amp;lang=en_US&amp;lang=en_US&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
  </body>
</html>`;

    container.innerHTML = "";
    container.appendChild(iframe);

    const doc = iframe.contentWindow?.document || iframe.contentDocument;
    if (doc) {
      doc.open();
      doc.write(iframeHtml);
      doc.close();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-[270px] h-[250px] rounded-xl overflow-hidden shadow-sm ${className}`}
    />
  );
}
