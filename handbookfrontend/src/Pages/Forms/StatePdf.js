import React, { useEffect, useState } from "react";
import "./StatePdf.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
// import State from "../../../../handbookbackend/Models/Form/State";
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
    const data = document.getElementById("pdfData");
    html2canvas(data, { scale: 1, width: 2000, height: 9000 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("Alabama.pdf");
      }
    );
    setDisplay("Generating ...");
  };
  console.log("StateData :", statePDFData);
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <div className="pdf-container my-5 " id="pdfData">
          <div className="header">
            <h1 className="text-center fw-bold mt-2 mb-5">
              {statePDFData.name} Leave Information
            </h1>
          </div>
          <div className="index">
            <h1 className="content-header my-4">Content</h1>
            <Index td1="Voting Leave" td2="1" />
            <Index td1="Jury Duty" td2="1" />
            <Index td1="At-Will Employment" td2="1" />
            <Index td1="Vacation" td2="1" />
            <Index td1="Garnishments of Pay" td2="1" />
          </div>
          <div className="content">
            <div className="leave my-5">
              <h2 className="text-center content-header">Voting Leave</h2>
              <h4 className="text-left">
                Alabama employers are required to give employee’s time off to
                vote.The law provides with restrictions on how and when time is
                allowed to be take off.
                <strong>
                  Review your policy for these specific restrictions.
                </strong>
              </h4>
            </div>

            <div className="leave my-5">
              <h2 className="text-center content-header">Jury Duty</h2>
              <h4 className="text-left">
                Alabama employers who meet these law requirements must provide
                employees with leave for jury duty.
                <strong>
                  Review your policy for these specific restrictions.
                </strong>
              </h4>
            </div>

            <div className="content">
              <div className="leave my-5">
                <h2 className="text-center content-header">
                  At-Will Employment
                </h2>
                <h4 className="text-left">
                  In Alabama the general rule is that employment is terminable
                  at will by either party in the absence of an employment
                  contract for a definite period. Employees may be terminated
                  for any reason not expressly prohibited by federal, state, or
                  local law.
                  <br />
                  <br />
                  Courts recognize claims for breach of implied contract based
                  on provisions in an employee handbook limiting the right to
                  terminate employees if the language in the handbook is
                  specific and was communicated to employees through the
                  distribution of the handbook or otherwise. Employers may avoid
                  implied contracts by having employees sign an express written
                  at-will agreement and by including an express disclaimer
                  reserving the company's right to deviate from policies in the
                  employee handbook.
                  <strong>
                    Your HR Consultant will go over any questions about at-will
                    employment and how to preserve an employees at-will
                    employment relationship.
                  </strong>
                </h4>
              </div>
            </div>

            <div className="leave my-5">
              <h2 className="text-center content-header">Vacation</h2>
              <h4 className="text-left">
                Alabama employers are not required to provide vacation. If any
                employer does provide vacation, they are required to detail
                certain aspects of the policy.{" "}
                <strong>
                  Your HR Consultant will go over this policy with you during
                  your intake meeting.
                </strong>
              </h4>
            </div>

            <div className="leave my-5">
              <h2 className="text-center content-header">
                Garnishments of Pay
              </h2>
              <h4 className="text-left">
                Employer’s may withhold a fee of $2 per month for child support.
              </h4>
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
