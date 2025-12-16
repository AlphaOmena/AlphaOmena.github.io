// Include the libraries in your HTML <head> or before your script
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

document.getElementById('saveButton').addEventListener('click', function() {
  document.getElementById('saveOptions').style.display = 'block';
});

document.getElementById('saveAsPdf').addEventListener('click', function() {
  const input = document.getElementById('myDiv');
  html2canvas(input).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save('kqurada_cashreport.pdf');
    document.getElementById('saveOptions').style.display = 'none';
  });
});

document.getElementById('saveAsImage').addEventListener('click', function() {
  const input = document.getElementById('myDiv');
  html2canvas(input).then(canvas => {
    const link = document.createElement('a');
    link.download = 'kqurada_cashreport.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    document.getElementById('saveOptions').style.display = 'none';
  });
});

document.getElementById('saveAsHtml').addEventListener('click', function() {
  const content = document.getElementById('myDiv').innerHTML;
  const blob = new Blob([content], { type: 'text/html' });
  const link = document.createElement('a');
  link.download = 'kqurada_cashreport.html';
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href); // Clean up the URL object
  document.getElementById('saveOptions').style.display = 'none';
});

