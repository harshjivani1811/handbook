import React, { useEffect, useState } from "react";
import "./StatePdf.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import { useSelector } from "react-redux";
import $ from "jquery";
// import onePageCanvas from "jspdf"


const Index = ({ td1, td2 }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "100%" }}>
              <h3>{td1}</h3>
            </td>
            <td>
              <h3>{td2}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const StatePdf = () => {
  const AllStatePDFData = useSelector(
    (state) =>
      state.rootReducer.stateWithLeavesReducer.stateAndLeaves[1].singleState
  );
  const [statePDFData, setStatePDFData] = useState([]);
  const [display, setDisplay] = useState("Generate PDF");

  useEffect((id) => {
    axios({
      url: "http://localhost:8000/api/state/get-state-pdf",
      method: "post",
      data: { _id: id },
    })
      .then((res) => {
        console.log("Result :", res);
        setStatePDFData(res.data.data);
      })
      .catch((err) => console.log("Error :", err));
  }, []);
  const generatePdf = () => {
      
        setDisplay("Generating ...");
        // var quotes = document.getElementById("pdfData");
      
		var HTML_Width = $(".pdf-container").width();
    var HTML_Height = $(".pdf-container").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;
  debugger
    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($(".pdf-container")[0], { allowTaint: true }).then(function (
      canvas
    ) {
      canvas.getContext("2d");

      console.log(canvas.height + "  " + canvas.width);
      debugger;
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );

      for (var i = 1; i <= totalPDFPages; i++) {
        debugger;
        pdf.addPage();
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height
        );
      }

      pdf.save("HTML-Document.pdf");
    });
    
    }
    //   var HTML_Width = $(".pdf-container").width();
    //   var HTML_Height = $(".pdf-container").height();
    //   var top_left_margin = 1;
    //   var PDF_Width = HTML_Width + top_left_margin * 2;
    //   var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    //   var canvas_image_width = HTML_Width;
    //   var canvas_image_height = HTML_Height;

    //   var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
    //   html2canvas($(".pdf-container")[0], { allowTaint: true }).then(function (
    //     canvas
    //   ) {
    //     canvas.getContext("2d");
    //     console.log(canvas.height + "  " + canvas.width);
    //     var imgData = canvas.toDataURL("image/jpeg", 1.0);
    //     var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
    //     pdf.addImage(
    //       imgData,
    //       "JPG",
    //       top_left_margin,
    //       top_left_margin,
    //       canvas_image_width,
    //       canvas_image_height
    //     );
    //     let counter = 0;
    //     for (var i = 1; i <= totalPDFPages; i++) {
    //         counter++;
    //       pdf.addPage(PDF_Width, PDF_Height);
    //       pdf.addImage(
    //         imgData,
    //         "JPG",
    //         top_left_margin,
    //         -(PDF_Height * i) + top_left_margin * 4,
    //         canvas_image_width,
    //         canvas_image_height
    //       );
    //     }

    //     pdf.save("HTML-Document.pdf");
    //   });
    // };
    // const data = document.getElementById("pdfData");
    // html2canvas(data, { scale: 1, width: 2000, height: 9000 }).then(
    //   (canvas) => {
    //     const imgData = canvas.toDataURL("image/png");
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, "JPEG", 0, 0);
    //     pdf.save(`${AllStatePDFData[1].stateId.name}.pdf`);
    //   }
    // );
 
//   };
  console.log("StateData :", statePDFData);
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <div className="pdf-container my-5 " id="pdfData">
          <div className="header">
            <h1 className="text-center fw-bold mt-2 mb-5">
              {AllStatePDFData[1].stateId.name} Leave Information
            </h1>
          </div>
          {/* <div className="index">
            <h1 className="content-header my-4">Content</h1>
            <Index td1="Voting Leave" td2="1" />
            <Index td1="Jury Duty" td2="1" />
            <Index td1="At-Will Employment" td2="1" />
            <Index td1="Vacation" td2="1" />
            <Index td1="Garnishments of Pay" td2="1" />
          </div> */}
          <div className="content">
            <div className="leave my-5">
              {AllStatePDFData.map((item, i) => {
                return (
                  <div key={i} className="my-5 px-2">
                    <h4 className="text-center content-header">
                      {item.title}
                    </h4>
                    <h4 className="text-justify">{item.description}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border test">
        <button
          style={{ width: "200px" }}
          onClick={generatePdf}
          className="btn pdf-generate-btn"
        >
          {display}
        </button>
      </div>
    </>
  );
};

export default StatePdf;
