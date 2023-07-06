import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// set content margin to be 20px
const MARGIN = 20;
//create a screenshot pdf for the specific element
const createPDF = () => {
  // get the content element
  const content = document.getElementById("content");

  // get content size
  const width = content.offsetWidth;
  const height = content.offsetHeight;

  // call html2canvas to save the screenshot to a pdf file
  html2canvas(content, {}).then(function (canvas) {
    // convert the canvas content to a Data URI/URL
    var img = canvas.toDataURL("image/jpeg/svg", 5); // 5 is quality scale
    var doc = new jsPDF({
      orientation: "landscape",
      unit: "px", // set pixel as unit
      format: [width + MARGIN * 2, height + MARGIN * 2],
    });

    // add canvas as an image
    doc.addImage(img, "JPEG", MARGIN, MARGIN, width, height);

    // save the content to screenshot.pdf
    doc.save("ticket.pdf");
  });
};

export default createPDF;
