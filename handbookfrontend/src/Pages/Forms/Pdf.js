// @ts-nocheck
import React, { useState, useEffect } from 'react'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'
import $ from 'jquery'
import { getPdfData } from './../../API/Form/pdfData.api'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { useHistory } from 'react-router'

// index of PDF
const IndexTable = props => {
  return (
    <>
      <table>
        <tbody>
          <tr style={{ borderBottom: '1px solid lightgray' }}>
            <td style={{ width: '700px', height: '28px' }}>{props.data}</td>
            <td
              style={{
                width: '25px',
                textAlign: 'center'
              }}
            >
              {props.i}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

// Footer Component
const Footer = props => {
  return (
    <footer className='page-footer'>
      <p style={{ float: 'right' }}>{props.page} | Page</p>
      <br />
      <p className='footer-p-tag'>
        © EmployerESource, All content of this Employee Handbook are protected
        by U.S. copyright and may not be copied without express permission of
        EmployerESource.com, which reserves all rights.
      </p>
    </footer>
  )
}

// For Space
const Break = () => {
  return (
    <>
      <br />
      <br />
    </>
  )
}

// Page No 8 to 14s Dynamic Data binding is Pending
const Pdf = () => {
  const history = useHistory()
  const [pdfData, setPdfData] = useState([])

  let pdf
  function calculatePDFHeightWidth (selector, index) {
    $(selector).eq(index)
  }

  const [pdfBtnText, setPdfBtnText] = useState('Generate PDF')
  const generatePDF = () => {
    setPdfBtnText('Generating ...')
    html2canvas($('.pdf-pages:eq(0)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 0)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf = new JsPDF()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(1)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 1)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(2)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 2)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(3)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 3)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(4)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 4)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(5)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 5)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(6)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 6)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(7)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 7)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(8)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 8)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(9)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 9)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(10)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 10)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(11)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 11)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(12)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 12)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(13)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 13)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(14)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 14)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(15)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 15)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(16)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 16)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(17)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 17)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(18)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 18)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(19)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 19)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(20)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 20)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(21)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 21)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(22)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 22)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(23)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 23)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
    })

    html2canvas($('.pdf-pages:eq(24)')[0], {
      allowTaint: true,
      scale: 1,
      width: 2000,
      height: 9000
    }).then(canvas => {
      calculatePDFHeightWidth('.pdf-pages', 24)
      const imageData = canvas.toDataURL('image/jpeg')
      pdf.addPage()
      pdf.addImage(imageData, 'jpeg', 0, 0)
      pdf.save('Handbook.pdf')
    })
    setTimeout(() => {
      history.push('/')
    }, 12000)
  }

  useEffect(() => {
    const loginToken = JSON.parse(window.localStorage.getItem('handbook'))

    axios({
      url: getPdfData,
      method: 'post',
      data: { userId: loginToken.meta.id }
    })
      .then(res => {
        console.log('Result :', res)
        setPdfData(res.data.data)
      })
      .catch(err => console.log('Error :', err))
  }, [])

  return (
    /* eslint multiline-ternary: ["error", "never"] */
    <>
      {/* PDF Content */}
      {pdfData.length === 0 ? (
        <Loader
          type='BallTriangle'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000} // 3 secs
          className='text-center my-5'
        />
      ) : (
        <>
          {/* PDF Button */}
          <div className='text-center border test'>
            <button
              style={{ width: '200px' }}
              onClick={generatePDF}
              className='btn pdf-generate-btn'
            >
              {pdfBtnText}
            </button>
          </div>

          <div className='pdf-container'>
            <div
              id='pdf-front-page'
              className='pdf-pages pdf-header page-height'
              style={{ height: '1124px' }}
            >
              <div style={{ paddingTop: '15rem', margin: '0 0 0 6rem' }}>
                <section
                  style={{
                    height: '150px',
                    padding: '10px',
                    borderLeft: '3px solid #4F81BD'
                  }}
                >
                  <h1
                    style={{
                      marginTop: '10px',
                      fontSize: '45px',
                      color: '#365F91'
                    }}
                  >
                    {/* Company Name */}
                    {pdfData.GeneralInformation.companyName}
                  </h1>
                  <h2 style={{ color: '#4F81BD', fontSize: '35px' }}>
                    EMPLOYEE HANDBOOK
                  </h2>
                </section>
              </div>
              <section style={{ margin: '35rem 0 5rem 6rem' }}>
                <p style={{ color: '#4F81BD' }}>Employee Resource</p>
              </section>
            </div>
            <hr />

            {/* Page 1 */}
            <div className='pdf-pages page-height'>
              <div
                className='header-index'
                style={{ margin: '0rem 4rem -20px 4rem' }}
              >
                <h4
                  style={{
                    fontWeight: 'bold',
                    color: '#4F81BD',
                    margin: '1rem 0 2rem 0'
                  }}
                >
                  Content
                </h4>
              </div>
              <section className='section-page-margin'>
                {/* Point 1 */}
                <IndexTable data='1' i='3' />
                <IndexTable data='Introduction' i='3' />
                <IndexTable data='Equal Employment Opportunity' i='4' />
                <IndexTable data='Harassment and Sexual Harassment' i='4' />
                <IndexTable
                  data='Workplace Violence/Hostile Work Environment'
                  i='6'
                />
                <IndexTable data='Retaliation' i='7' />
                <IndexTable data='Personal Information' i='7' />
                <IndexTable data='Post-Employment Inquiries' i='7' />
                <IndexTable data='Confidential Information Policy' i='8' />
                <IndexTable
                  data='Fire Prevention and Emergency Exit Plan'
                  i='9'
                />
                <IndexTable data='Safety' i='10' />
                {/* Point 2 */}
                <IndexTable data='2' i='11' />
                <IndexTable data='Employment Categories' i='11' />
                <IndexTable data='Exempt/Non-Exempt Status' i='11' />
                <IndexTable
                  data='Probationary Period/Employment at Will'
                  i='11'
                />
                <IndexTable data='Regular Full-Time Employee' i='12' />
                <IndexTable data='Regular Part-Time Employee' i='12' />
                <IndexTable data='Normal Workweek/Workday' i='12' />
                <IndexTable data='Scheduling' i='12' />
                <IndexTable data='Absences' i='13' />
                <IndexTable data='Lunch Period/Break Time' i='13' />

                {/* Point 3 */}
                <IndexTable data='3' i='14' />
                <IndexTable data='Time Card' i='14' />
                <IndexTable data='Payday' i='14' />
                <IndexTable data='Payroll Advance' i='14' />
                <IndexTable data='Wages/Raises' i='14' />
                <IndexTable data='Overtime' i='15' />
                <IndexTable data='Final Pay Policy' i='15' />
                <IndexTable data='Deduction' i='15' />

                {/* Point 4 */}
                <IndexTable data='4' i='16' />
                <IndexTable data='Conduct/Customer Service' i='16' />
                <IndexTable data='Employee Purchases' i='16' />
                <IndexTable data='Company Vehicles Policy' i='17' />

                {/* Point 5 */}
                <IndexTable data='5' i='22' />
                <hr />
                <Footer page='1' />
              </section>
            </div>
            <hr />

            {/* Page 2 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                {/* Point 5 */}
                <IndexTable data='Personal Cellular Phone Use' i='22' />
                <IndexTable data='Company Cellular Phone' i='23' />
                <IndexTable data='Company Property' i='25' />
                <IndexTable data='Personal Use of Company Property' i='25' />
                <IndexTable data='Telephone Usage/Voice Mail Policy' i='26' />
                <IndexTable data='E-Mail Policy' i='27' />
                <IndexTable data='Social Media Policy' i='28' />
                <IndexTable data='Internet Policy' i='30' />
                <IndexTable data='Company Electronic Device Policy' i='32' />
                <IndexTable data='Key Policy' i='33' />

                {/* Point 6 */}
                <IndexTable data='6' i='33' />
                <IndexTable data='Reporting Accident or Injury' i='33' />
                <IndexTable data='Exempt/Non-Exempt Status' i='33' />
                <IndexTable
                  data='Stay At Work / Return To Work Policy'
                  i='33'
                />
                <IndexTable data='Alcohol & Drugs' i='36' />
                <IndexTable data='Substance Abuse Policy' i='36' />
                <IndexTable data='Dress and Hygiene Code Policy' i='37' />

                {/* Point 7 */}
                <IndexTable data='7' i='39' />
                <IndexTable data='Vacation Time' i='39' />
                <IndexTable data='Holidays' i='40' />
                <IndexTable data='Employee Health Benefits' i='41' />
                <IndexTable data='Employee Retirement Plan Benefit' i='41' />
                <IndexTable data='Jury Duty' i='41' />
                <IndexTable data='Maternity Leave' i='41' />
                <IndexTable data='Military Leave' i='42' />
                <IndexTable
                  data='Receipt and Acknowledgment of Employee Handbook'
                  i='42'
                />

                <hr style={{ marginTop: '17rem' }} />
                <Footer page='2' />
              </section>
            </div>
            <hr />

            {/* Page 3 - introduction */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='center-content'>
                  1
                  <br />
                  Introduction
                </p>
                <p className='justify-content'>
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}
                  established this manual in an effort to ensure the fair and
                  consistent application of Company policies and procedures
                  among all employees. The manual is intended to promote
                  understanding within the organization and to outline the
                  privileges of employment. It supersedes any previous employee
                  handbook, manual or administrative memorandum that you may
                  have received. Changes to the employee handbook that involve
                  Company specifics (example reporting hours, lunch time off)
                  will be issued to employees. Changes to the employee handbook
                  that are considered formatting changes (punctuation, format,
                  fonts, spelling errors) will not be issued to employees.
                  <Break /> This Employee Handbook does not constitute an
                  employment agreement, but has been established to identify the
                  obligations that the Company assumes toward its staff and vice
                  versa. The policies contained herein are intended to stress
                  the values of fair play, courtesy and teamwork. This Employee
                  Handbook is to be used as a working guide for all personnel in
                  the day-to-day work routine. It is anticipated the Employee
                  Handbook will be amended periodically to include new policies
                  and procedures and/or to make policy changes.
                  <Break /> From time to time, you may have questions about your
                  job and/or company policy. You are encouraged to discuss with
                  {/* R1,R2, R3 */}
                  {pdfData.CompanyStructure.R1}, {pdfData.CompanyStructure.R2},
                  {pdfData.CompanyStructure.R3}, questions or problems related
                  to any matters which may be affecting your performance. You
                  are also encouraged to offer suggestions for the improvement
                  of services, simplification of operations, saving of material
                  and/or time, prevention of accidents, reductions of cost, or
                  anything else you think will make the Company a better place
                  to work.
                </p>
                <br />

                <p className='center-content'>Equal Employment Opportunity</p>
                <p className='justify-content'>
                  In order to provide equal employment and advancement
                  opportunities to all individuals, employment decisions at
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}
                  will be based on merit, qualifications, skills and abilities.
                  We do not discriminate in employment opportunities or
                  practices on the basis of the race, color, religion, sex,
                  national origin, age, marital status, military status,
                  physical or mental disability, or any other characteristic
                  protected by law.
                  <Break />
                  The Company will make reasonable accommodations for qualified
                  individuals with known disabilities unless doing so would
                  result in an undue hardship. This policy governs all aspects
                  of employment, including selection, job assignment,
                  compensation, discipline, termination and access to benefits
                  and training. Any applicant or employees with questions or
                  concerns about any type of discrimination in the workplace are
                  encouraged to bring these issues to the attention of the
                  Management. Employees can raise concerns and make reports
                  without fear of reprisal. Anyone found to be engaging in any
                  type of unlawful discrimination will be subject to
                  disciplinary action, up to and including termination of
                  employment.
                  <Break />
                </p>

                <p className='center-content'>
                  Harassment and Sexual Harassment
                </p>
                <p className='justify-content'>
                  While all forms of harassment are prohibited, it is
                  specifically emphasized that sexual harassment in any form is
                  expressly prohibited. No sexually harassing conduct of any
                  kind by a supervisor, employee, vendor or customer will be
                  tolerated. It is your responsibility to report any harassing
                  or sexually harassing behavior when experienced or observed,
                  to your
                  {/* R1,R2, R3 */}
                  {pdfData.CompanyStructure.R1}, {pdfData.CompanyStructure.R2},
                  {pdfData.CompanyStructure.R3} immediately or contact
                  EmployerESource at 406-551-5716. Such reports can be made
                  without fear of reprisal. All reports of harassing or sexually
                  harassing behavior shall be investigated by the r3 and
                  determine appropriate follow up conducted. Depending on the
                  circumstances and the gravity of the violation, discipline may
                  range from reprimand, suspension to termination.
                  <Break />
                  Company policy prohibits sexual harassment, and harassment
                  based on pregnancy, childbirth or related medical condition,
                  race, religious creed, color, national origin or ancestry,
                  physical or mental disability, medical condition, marital
                  status, age, sexual orientation or any other basis protected
                  by federal, ordinance, regulation, state or local law. Sexual
                  harassment of employees, customers and any other persons is
                  prohibited. It is
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}'s policy to provide
                  employees with a work environment free of any type of
                  harassment.
                </p>
                <hr />
                <Footer page='3' />
              </section>
            </div>
            <hr />

            {/* Page 4 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  The Company will not retaliate against you for filing a
                  complaint and will not tolerate or permit retaliation by
                  management, employees or co-workers. Any person subjected to
                  conduct perceived as a reprimand or retaliation for initiating
                  an inquiry or lodging a complaint in good faith regarding
                  sexual harassment should promptly report all relevant
                  information to a{/* R1,R2, R3 */}
                  {pdfData.CompanyStructure.R1}, {pdfData.CompanyStructure.R2},
                  {pdfData.CompanyStructure.R3} or EmployerESource at
                  406-551-5716.
                  <Break />
                  Sexual harassment includes unwelcome verbal or physical
                  conduct of a sexual nature when:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Submission to the conduct is implicitly or explicitly made a
                    term or condition of employment.
                  </li>

                  <li className='li-pdf'>
                    Submission to or rejection of the conduct is used as the
                    basis for an employment decision affecting the individual.
                  </li>

                  <li className='li-pdf'>
                    The conduct has the purpose or effect of unreasonably
                    interfering with an individual's work performance or
                    creating an intimidating, hostile, or offensive working
                    environment.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  Examples of prohibited sexual harassment may include, but are
                  not limited to:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Harassment directed toward a person because of gender.
                  </li>
                  <li className='li-pdf'>
                    A pattern of favoritism toward sexual partners.
                  </li>
                  <li className='li-pdf'>
                    Propositions or pressure to engage in sexual activity.
                  </li>
                  <li className='li-pdf'>Sexual assault.</li>
                  <li className='li-pdf'>Repeated intentional body contact.</li>
                  <li className='li-pdf'>
                    Repeated sexual jokes, innuendoes, comments, constant
                    staring or leering.
                  </li>
                  <li className='li-pdf'>
                    Repeated inappropriate comments concerning appearance.
                  </li>
                  <li className='li-pdf'>
                    Numerous and/or continued display of magazines, books, or
                    pictures with a sexual connotation.
                  </li>
                  <li className='li-pdf'>
                    A pattern of hiring or promoting sex partners over more
                    qualified persons.
                  </li>
                  <li className='li-pdf'>
                    Any harassing behavior, whether or not sexual in nature,
                    directed toward a person because of the person's gender,
                    including, but not limited to, hazing employees working in
                    nontraditional work environments.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  This policy places great importance on the success of
                  Management in taking early, effective action in response to
                  reports of sexual harassment / harassment concerns. The policy
                  works best when Management is informed and can act to alert
                  management of the Company to alter behaviors that may
                  otherwise evolve into sexual harassment.
                  <Break />
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}
                  accepts no liability for harassment of one employee by another
                  employee. The individual who makes unwelcome advances,
                  threatens or in any way harasses another employee, is
                  personally liable for such actions and their consequences.
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} may or may not
                  provide legal, financial or any other assistance to an
                  individual accused of harassment if a legal complaint is
                  filed.
                </p>
                <br />
                <p className='center-content'>
                  Workplace Violence/Hostile Work Environment
                </p>
                <p className='justify-content'>
                  The Company prohibits violence, threats of violence in the
                  workplace, intimidation and the creation of a hostile work
                  environment by any employee, customer or vendor. The Company
                  is committed to providing a safe and respectful workplace for
                  our employees.
                  <Break />
                  It is your responsibility to report any violent behavior in
                  the workplace or any conduct that threatens another employee
                  or customer when experienced or observed to a{/* R1,R2, R3 */}
                  {pdfData.CompanyStructure.R1}, {pdfData.CompanyStructure.R2},
                  {pdfData.CompanyStructure.R3} immediately or contact
                  EmployerESource at 406-551-5716 . Such reports can be made
                  without fear of reprisal. All reports of workplace violence /
                  hostile work environment or sexually harassing behavior shall
                  be investigated by the r3 and will determine appropriate
                  follow up conducted. Depending on the circumstances and the
                  gravity of the violation, discipline may range from reprimand,
                  suspension to termination.
                  <Break />
                  No talk of violence or joking about violence will be
                  tolerated. “Violence” includes physically harming another
                  person (i.e. shoving, pushing, grabbing), threatening,
                  verbally harassing, intimidating, coercing, brandishing
                  weapons, or any talking or joking of engaging in these
                  activities.
                </p>
                <hr />
                <Footer page='4' />
              </section>
            </div>
            <hr />

            {/* Page 5 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  The Company is committed to the elimination of all forms of
                  bullying which create a hostile work environment. This policy
                  applies to normal working hours, at work related sponsored
                  functions and while traveling for work.
                  <Break />
                  “Hostile Work Environment or bullying” means any intentional
                  written, verbal, or physical act, when the intentional
                  written, verbal, or physical act:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Physically harms an employee or damages the employee’s
                    property; or
                  </li>
                  <li className='li-pdf'>
                    Has the effect of substantially interfering with an
                    employee’s work; or
                  </li>
                  <li className='li-pdf'>
                    Is severe, persistent, or pervasive that it creates an
                    intimidating or threatening work environment; or
                  </li>

                  <li className='li-pdf'>
                    Has the effect of substantially disrupting the orderly
                    operation of the business..
                  </li>
                  <br />
                </ul>
                <p className='justify-content'>
                  Anyone who receives a report of hostile work environment,
                  violence or a threat of violence must report it to the r3
                  immediately. The Company will not retaliate against anyone for
                  filing a complaint and will not tolerate or permit retaliation
                  by management, employees or co-workers.
                  <Break />
                  Any person subjected to conduct perceived as a reprimand or
                  retaliation for initiating an inquiry or lodging a complaint
                  in good faith regarding workplace violence, should promptly
                  report all relevant information to a{/* R1,R2, R3 */}
                  {pdfData.CompanyStructure.R1}, {pdfData.CompanyStructure.R2},
                  {pdfData.CompanyStructure.R3} or EmployerESource,
                  406-551-5716.
                </p>
                <p className='center-content'>Retaliation</p>
                <p className='justify-content'>
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} will not retaliate
                  against any applicant, employee, or past employee for opposing
                  unlawful discriminatory practices, filing a discrimination
                  complaint, testifying or participating in any other manner in
                  a discrimination proceeding, unless the basis for the report
                  is untrue and the investigation establishes it was made
                  maliciously.
                </p>
                <br />

                <p className='center-content'>Personal Information</p>
                <p className='justify-content'>
                  For accurate administration of your wages and benefits, and
                  for compliance with Federal and State Regulations, it is
                  necessary that current and accurate personnel records be
                  maintained for each employee. This information is also
                  necessary in the event you must be reached for an emergency or
                  available work. If there are changes or if you observe or are
                  aware of any errors in your personnel records, please notify
                  Management immediately. Falsification of any personal
                  information is cause for termination. <Break />
                  Personnel files are maintained for each employee. Personnel
                  files are the property of the company and may not leave
                  company premises. The employee has the right to inspect his or
                  her personnel file at a reasonable time, at a reasonable
                  place, and on reasonable notice. In addition, employees have
                  the right to request copies of all employment-related
                  documents that they have signed. An employee may inspect only
                  his or her own personnel file and only in the presence of a
                  Company representative. The Company will not give out personal
                  information unless approved by an employee.
                </p>
                <br />

                <p className='center-content'>Post-Employment Inquiries</p>
                <p className='justify-content'>
                  As an employee of
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} do not under any
                  circumstances respond to any requests for information
                  regarding another employee. Please forward the information
                  request to Management. If it is a personal reference then the
                  call should be made from the employees’ personal phone and on
                  personal time as not to be perceived as a Company referral.
                </p>
                <br />

                <p className='center-content'>
                  Confidential Information Policy
                </p>
                <p className='justify-content'>
                  Proper management of Confidential Information is critical to
                  the success of
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}. Employees are often
                  entrusted with or become aware of trade secrets, proprietary
                  information and confidential information not generally known
                  to the public. This type of information, whether or not
                  subject to intellectual property rights, is considered
                  confidential and is to be protected by all employees, retirees
                  and other former employees. Any unauthorized disclosure of
                  Company information is prohibited.
                  {/* <Break /> */}
                  In addition, employees, retirees and other former employees
                  are prohibited from using or attempting to use “inside”
                  Company information for their own personal use, gain or
                  advantage; or providing or “tipping” it to others.
                </p>
                <hr />
                <Footer page='5' />
              </section>
            </div>
            <hr />

            {/* Page 6 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  Confidential Information is any information not known to
                  outsiders that has value to the Company or whose premature
                  disclosure would help competitors or be harmful to the
                  Company. It also includes information obtained from others
                  that the Company is obligated to keep confidential. Examples
                  of “Confidential Information” include but are not limited to:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Physically harms an employee or damages the employee’s
                    property; or
                  </li>
                  <li className='li-pdf'>
                    Actual and forecasted financial results
                  </li>
                  <li className='li-pdf'>Ideas, formulas and/or techniques</li>
                  <li className='li-pdf'>Design data and information</li>
                  <li className='li-pdf'>
                    Processes, formulae, systems, programs and compilations
                  </li>
                  <li className='li-pdf'>Research and development</li>
                  <li className='li-pdf'>Information regarding finances</li>
                  <li className='li-pdf'>Actual or potential customer lists</li>
                  <li className='li-pdf'>Supplier lists</li>
                  <li className='li-pdf'>Plans</li>
                  <li className='li-pdf'>New product information </li>
                  <li className='li-pdf'>Strategies </li>
                  <li className='li-pdf'>
                    Information regarding legal proceedings
                  </li>
                  <li className='li-pdf'>Market share data </li>
                  <li className='li-pdf'>Ingredient formulas and recipes </li>
                  <li className='li-pdf'>Photos </li>
                  <li className='li-pdf'>
                    Management information (this does not include employee’s
                    ability to act together to try and improve their pay and/or
                    working conditions)
                  </li>

                  <br />
                </ul>
                <p className='justify-content'>
                  This does not include information that a company voluntarily
                  gives to potential customers, posts on its website, or
                  otherwise freely provides to others outside of the Company.
                  <Break />
                  In handling Confidential Information, employees must comply
                  with the following guidelines:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Except where it is a normal part of their job, employees may
                    not use or disclose any Confidential Information of the
                    Company. If there is a chance that the information is
                    confidential, the employee must contact Management before
                    the information is used or disclosed.
                  </li>
                  <li className='li-pdf'>
                    Efforts should be made to avoid the leak of Confidential
                    Information. Discretion should be used when discussing
                    Confidential Information in situations where one might be
                    overheard (e.g. breakrooms, reception area).
                  </li>
                  <li className='li-pdf'>
                    All electronic Confidential Information should be protected
                    via firewalls, encryption and passwords.
                  </li>
                  <li className='li-pdf'>
                    Employee should clear their desks of any Confidential
                    Information before going home at the end of the day.
                  </li>
                  <li className='li-pdf'>
                    Employees should refrain from leaving Confidential
                    Information visible on their computer monitors when they
                    leave their work stations.
                  </li>
                  <li className='li-pdf'>
                    Before employee’s take photos of Company's proprietary work
                    product developments, they are required to obtain written
                    permission from Management allowing photos to be take.
                  </li>
                </ul>
                <br />

                <p className='justify-content'>
                  Employees must surrender all documents, drawings and
                  information to the Company upon termination or employment or
                  at any time upon the request of Management.
                </p>
                <br />
                <p className='center-content'>
                  Fire Prevention and Emergency Exit Plan
                </p>
                <p className='justify-content'>
                  It is the policy of
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} to provide a place of
                  employment that is free from recognized hazards that cause or
                  are likely to cause death or serious physical harm to
                  employees or the public. The Company has developed the
                  following plan which all employees are expected to follow in
                  preventing or responding to emergency situations that we
                  reasonably expect in our workplace.
                </p>

                <br />
                <hr style={{ marginTop: '3rem' }} />
                <Footer page='6' />
              </section>
            </div>
            <hr />

            {/* Page 7 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  If the alarm sounds or if someone orders the evacuation of the
                  building, remain calm, walk to the nearest exit and leave the
                  building immediately.
                  <Break />
                  Fire Emergency Procedures;
                  <br />
                  The person who discovers a fire should call 911 and notify all
                  building occupants. If you plan to fight the fire - notify the
                  closest occupant and instruct them to notify all building
                  occupants and YOU must call 911.
                  <Break />
                  You should only fight a fire if the fire department has been
                  notified; if the fire is small and confined to its point of
                  origin; if you have an escape route available and can fight
                  the fire with your back to the exit. Be sure you have a
                  proper, fully functioning fire extinguisher, and are trained
                  to use it.
                  <Break />
                  Leave your work area if someone informs you there is a fire.
                  Close all windows and doors, and evacuate the building and
                  move away from exits, and assemble a safe distance from the
                  front door. Remain outside until a competent authority says it
                  is safe to re-enter the building.
                  <Break />
                  {/* FireExit Location */}
                  Exits are located at {pdfData.FireExit.location}. All exits
                  have a sign designating an exit.
                  <Break />
                  <br />
                  <b>
                    After leaving the building, report to the front of the
                    building.
                  </b>
                  Do not leave the area. Do not return into the building. Follow
                  your supervisor's instructions.
                  <br />
                </p>

                <p className='center-content'>Safety</p>
                <p className='justify-content'>
                  The management at
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} are firmly committed
                  to a policy that enables all work activities to be carried out
                  with reasonable practicable measures taken to eliminate or at
                  least minimize risks to the health, safety and welfare of
                  employees, contractors, visitors, customers and any other
                  person who may be affected by our operations. The most
                  valuable assets of the Company are its people, and we are
                  committed to ensuring their health and safety in all that we
                  do.
                  <Break />
                  The Company has a strong commitment to a pro-active injury
                  prevention strategy, it ranks equal with all other activities
                  of the organization. The Company management is committed to
                  ensuring that all employees, customers, vendors and visitors
                  are safe from risks to health while they are at workplaces
                  under our control.
                  <Break />
                  Health and safety is a line management function. However, all
                  staff have health and safety responsibilities. Employees
                  should make any injuries or complaints about health and safety
                  to any member of management. All Company personnel will
                  protect the health and safety of employees, customers, vendors
                  and visitors by requiring them to follow the provisions of
                  Company safety policy and procedures.
                </p>

                <p className='center-content'>
                  2<br />
                  Employment Categories
                </p>
                <p className='justify-content'>
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} defines employment
                  classifications so that all employees understand their
                  employment status and benefit eligibility. These
                  classifications do not guarantee employment for any specified
                  period of time. Accordingly, the right to terminate the
                  employment relationship in accordance with state and federal
                  laws is retained by both the employee and the Company.
                </p>

                <p className='center-content'>Exempt/Non-Exempt Status</p>
                <p className='justify-content'>
                  Each employee is designated as either Non-Exempt or Exempt in
                  federal and state wage and hour laws. Non-Exempt employees are
                  entitled to overtime pay under the specific provisions of
                  federal and state laws. Exempt employees are specifically
                  excluded from the provisions of federal and state wage and
                  hour laws. An employee's Exempt or Non-Exempt classification
                  may be changed only upon written notification by
                  {/* R3 */}
                  the Company {pdfData.CompanyStructure.R3}.
                </p>

                <p className='center-content'>
                  <i>At-Will Employment</i>
                </p>
                <p className='justify-content'>
                  {/* Company Name */}
                  <i>
                    {pdfData.GeneralInformation.companyName} hires and employs
                    under terms known as employment at-will. Employment at-will
                    means that the Company may alter the terms of your
                    employment, and either you or the Company may terminate your
                    employment at any time and
                  </i>
                </p>

                <hr />
                <Footer page='7' />
              </section>
            </div>
            <hr />

            {/* Page 8 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  <i>
                    for any reason or for no reason, with or without notice.
                    <Break />
                    No one in the Company, except the Owner/s, has authority to
                    alter the employment-at-will relationship, orally or in
                    writing. This employee handbook does not create an
                    employment contract, establish rights, privileges or
                    benefits of employment or establish any job guarantee.
                  </i>
                </p>
                <br />
                <p className='center-content'>Regular Full-Time Employee</p>
                <p className='justify-content'>
                  A full-time employee is one who works a continuous annual
                  average of forty (40) hours or more per week, has
                  satisfactorily completed the probationary period and is
                  eligible for full time benefits as specified in the terms and
                  conditions of each benefit program.
                </p>
                <br />
                <p className='center-content'>Regular Part-Time Employee</p>
                <p className='justify-content'>
                  A part-time employee is one who works a continuous annual
                  average of less than forty (40) hours per week and has
                  satisfactorily completed the probationary period. Part-time
                  employees may be eligible for certain benefits as specified in
                  the terms and conditions of each benefit program.
                </p>
                <br />
                <p className='center-content'>Normal Workweek/Workday</p>
                <p className='justify-content'>
                  The workweek begins at 12:01am on Sunday and ends at 12:00
                  midnight on the following Saturday. <br />
                  Employees are expected to arrive to work, with minim
                  disturbance to other employees already working.
                </p>
                <br />
                <p className='center-content'>Scheduling</p>
                <p className='justify-content'>
                  NO schedule changes will be made without prior approval.
                  <Break />
                  Requests for time off must be submitted in writing, using the
                  designated time off request forms, and turned in as soon as
                  possible. Excessive absenteeism or tardiness in connection
                  with scheduled work times, breaks and meal periods will result
                  in disciplinary action up to and including termination.{' '}
                  <Break />
                  Reporting to work on time is required. "On time" is defined as
                  being properly dressed and prepared to begin work at the start
                  of the scheduled work period.
                  <br />
                </p>
                <br />
                <p className='center-content'>Absences</p>
                <p className='justify-content'>
                  Should an employee be unable to report to work due to illness,
                  employees must notify Management, one (1) hour before the
                  start of your shift, on each day of the absence.
                  <Break />
                  {/* Didn't get It */}
                  <mark>Text messages, voicemails and emails</mark> are
                  considered a valid form of communication for the
                  <mark>first two (2) days</mark> of an absence. The employees
                  <mark>
                    must speak directly with Management starting on the third
                    (3) day of the absence, and every day following.
                  </mark>
                  {/* Company Name */}
                  Failure to properly notify the{' '}
                  {pdfData.GeneralInformation.companyName} will result in an
                  unexcused absence.
                  <Break />
                  If an employee is absent more than four (4) consecutive
                  workdays, a statement from a physician may be required before
                  the employee is permitted to return to work. Employees who are
                  absent from work without giving proper notice to Management
                  will be considered to have voluntarily resigned. Personal
                  appointments should be made during non-work time if possible.
                </p>
                <br />
                <p className='center-content'>Lunch Period/Break Time</p>
                <p className='justify-content'>
                  Meal and rest break periods are encouraged; it is an important
                  break that allows employees to recharge. Also, employees will
                  be rested and will be more productive during the rest of the
                  day if a meal and rest break period is taken.
                  <Break />
                </p>
                <p className='center-content'>
                  3<br />
                  Time Recording
                </p>
                <hr />
                <Footer page='8' />
              </section>
            </div>
            <hr />

            {/* Page 9 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  All hourly employees are responsible for recording there
                  worked hours. If you leave the premises for any reason before
                  your scheduled quitting time, be sure to record this.
                  <Break />
                  Employees falsifying hours worked will be subject to
                  disciplinary action up to and including termination. No one
                  may clock in and out for another employee. <Break />
                  Tampering with another's time record is cause for disciplinary
                  action, up to and including termination, of both employees. In
                  the event of an error in recording your time, please report
                  the matter to Management immediately. For payroll purposes,
                  hours punched are rounded to four decimal places.
                </p>
                <br />
                <p className='center-content'>Payday</p>
                <p className='justify-content'>
                  {pdfData.PayRoll.isPayRoll === 'monthly' ? (
                    <span>
                      <mark>All personnel are paid </mark>. On the **.
                      <br />
                    </span>
                  ) : (
                    ''
                  )}
                  {pdfData.PayRoll.isPayRoll === 'semiMonthly' ? (
                    <span>
                      <mark>All personnel are paid semi-monthly</mark>. On the
                      **.
                    </span>
                  ) : (
                    ''
                  )}
                  {pdfData.PayRoll.isPayRoll === 'biweekly' ? (
                    <span>
                      <mark>All personnel are paid bi-weekly</mark>. On the **.
                    </span>
                  ) : (
                    ''
                  )}
                  {pdfData.PayRoll.isPayRoll === 'weekly' ? (
                    <span>
                      {/* Payroll Dynamic Data */}
                      All personnel are paid weekly. On the{' '}
                      {pdfData.PayRoll.isPayRollOps.firsthalf}.
                    </span>
                  ) : (
                    ''
                  )}
                  <Break />
                  Should a payday fall on a holiday or weekend, payment will be
                  made on the next working day. You must be sure all your time
                  is accounted for and recorded or it could result in a loss of
                  pay. Any late time turned in will be paid on the next pay
                  period.
                  <Break />
                </p>
                <p className='center-content'>Wages / Raises</p>
                <p className='justify-content'>
                  The Company recommends that all questions regarding wages and
                  raises be directed to the r3 of the Company. Discussing other
                  employees’ wages and raises are the confidential information
                  of that employee and are prohibited from being discussed.
                  <br />
                </p>
                <p className='center-content'>Overtime</p>
                <p className='justify-content'>
                  For purposes of overtime pay, employees are classified as
                  exempt or non-exempt. Exempt employees are not eligible for
                  overtime pay. All overtime must be approved by Management.
                  Overtime is paid for all hours worked over forty in the work
                  week. If, during that week, you were away from work and
                  receive pay for non-physically worked hours, those hours not
                  worked will not be counted as hours worked for the purpose of
                  computing eligibility for overtime pay.
                  <Break />
                  All overtime work must be authorized by a member of
                  Management, before worked. Any employee working unauthorized
                  overtime will be subject to discipline up to and including
                  termination. No member of Management will take action that
                  encourages employees to work off the clock without recording
                  the hours. <Break />
                  Employees may generally not be hired to perform contract labor
                  as independent contractors in an effort to avoid overtime. Any
                  member of Management who is found to have violate this policy
                  is subject to discipline, up to and including discharge.{' '}
                  <Break />
                </p>
                <p className='center-content'>Final Pay Policy</p>
                <p className='justify-content'>
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}
                  <br />
                  If an employee fails to return to work, his or her paycheck
                  will be mailed by regular mail to his or her last known
                  address the next scheduled pay period after the date when an
                  employee is considered to have terminated. <Break /> The
                  employee's final paycheck will include payment for all wages
                  due and not previously paid minus authorized deductions.
                  <Break />
                  NOTE: All organization property shall be returned to
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} upon termination.
                </p>
                <Break />
                <p className='center-content'>Deductions</p>
                <p className='justify-content'>
                  Each paycheck will have certain amounts deducted from the
                  gross pay: Those required by law. All required deductions are
                  made on gross salary:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Each paycheck will have certain amounts deducted from the
                    gross pay: Those required by law. All required deductions
                    are made on gross salary:
                  </li>
                </ul>
                <hr />
                <Footer page='9' />
              </section>
            </div>
            <hr />

            {/* Page 10 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <ul>
                  <li className='li-pdf'>Social Security Contributions</li>
                  <li className='li-pdf'>Medicare Contributions</li>
                  <li className='li-pdf'>Orders to withhold (Garnishments)</li>
                </ul>
                <br />
                <p className='justify-content'>
                  Optional: Those authorized by the employee and approved by the
                  Company.
                  {/* Didn't get It */}
                  <mark>
                    Garnishments: When the Company receives a garnishment, the
                    money will be paid (to the extent that they are available)
                    to the creditors and a $5.00 per month fee may be charged
                    against the employee’s check.
                  </mark>
                </p>
                <br />
                <p className='center-content'>
                  4<br />
                  Conduct/Customer Service
                </p>
                <p className='justify-content'>
                  Excellent customer service and employee’s conduct is essential
                  to the operation of
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}. It is important for
                  employees to treat customers to a pleasant and professional
                  experience to retain their patronage.
                  <Break />
                  Although the temptation to discuss or share difficult
                  co-workers, customers, vendors or products is great, such
                  discussions should not happen where customers or vendors can
                  overhear or be part of the conversation. Remember that the
                  details of such interactions are confidential.
                  <Break />
                  Appropriate employee conduct includes:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Refrain from using slang or profane language. It is very
                    easy for a customer, vendor or co-worker to misinterpret the
                    use of such language or gestures or to be offended by it.
                  </li>
                  <li className='li-pdf'>
                    Treating all customers, vendors, guests and coworkers in a
                    courteous manner.
                  </li>
                  <li className='li-pdf'>
                    Reporting to any member of management any suspicious,
                    unethical or illegal conduct by customer, vendor or
                    coworkers.
                  </li>
                  <li className='li-pdf'>
                    Reporting to any form of threatening or potentially violent
                    behavior by coworkers, customers, vendors or guests.
                  </li>
                  <li className='li-pdf'>
                    Complying with all safety regulations.
                  </li>
                  <li className='li-pdf'>
                    Portraying a team concept at all times while working.
                  </li>
                </ul>

                <Break />
                <p className='center-content'>Company Vehicles Policy</p>
                <p className='justify-content'>
                  <mark>
                    Personal Company vehicle use by an employee is a privilege
                    which can be rescinded at any time.
                  </mark>
                  It is Company policy to insist that employees operate in a
                  safe and economical manner all vehicles owned, rented by the
                  Company and employee personal vehicles used for Company
                  business.
                  <br />
                  {/* GPS Dynamic Data */}
                  {pdfData.CompanyVehicles.isGpsSystem === 'on' ? (
                    <span>
                      <br />
                      {pdfData.CompanyVehicles.isGpsSystem} : GPS Company
                      vehicles are all equipped with a Global Positioning System
                      (GPS) tracking system.
                      <Break />
                      This GPS system records the vehicles starts in the
                      morning, location, the exact route the vehicle was driven,
                      time spent at each stop and the speed the vehicle was
                      traveling. Vehicles started on a weekend will send out an
                      automatic text message to the Company that the vehicle was
                      turned on. All GPS information will then be stored and
                      analyzed for compliance to company policy and increase
                      efficiency.
                      <br />
                    </span>
                  ) : (
                    ''
                  )}
                  <br />
                  <mark>Review of state Motor Vehicle Records (MVRs)</mark> will
                  be used as the source for verifying employee driver history.
                  MVRs will be obtained and reviewed at least annually on
                  employee drivers. (The insurance company requires that we
                  provide them with the driver’s license number and date of
                  birth for anyone who may drive a Company vehicle.)
                  <Break />
                  Driving privileges may be withdrawn or suspended and/or the
                  Company vehicle removed from any employee that the Company
                  determines is uninsurable. Employees that driving privileges
                  are withdraw and require a Company vehicle for work, are
                  considered to have voluntarily resigned from employment. Any
                  Company employee whose driving license or privileges have been
                  suspended or revoked must notify Management immediately.
                  Operating or using a Company vehicle or a personal vehicle for
                  Company business
                </p>
                {pdfData.CompanyVehicles.isGpsSystem === 'on' ? (
                  ''
                ) : (
                  <div style={{ marginTop: '10rem' }} />
                )}
                <hr />
                <Footer page='10' />
              </section>
            </div>
            <hr />

            {/* Page 11 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  under a suspended or revoked license is a violation of this
                  policy.
                  <Break />
                  Company Business Use shall be defined as: Activities that
                  involve performance of one’s duties for the benefit of the
                  Company in accordance with the directives and instructions
                  received from Management.
                  <Break />
                  <mark>
                    Personal Company vehicle use:
                    <Break />
                    Prior approval from Management must be received before the
                    employee is allowed to borrow a Company vehicle.
                    <Break />
                    Prior approval from Management must be received for
                    passengers not employed by the Company to ride in a Company
                    vehicle.
                    <Break />
                    Employees with approval to use a Company vehicle for
                    personal use may NOT use the vehicle for incidental stops on
                    the way to work destinations.
                    <Break />
                    Personal vehicle use for Company business:
                  </mark>
                  Any employee who is authorized to use a personally owned
                  vehicle for Company business must have personal insurance in
                  accordance with state law and a valid state driver’s license.
                  The employee understands they will be responsible for all
                  traffic tickets and other citations issued in the course of
                  driving for the Company.
                  <Break />
                  Company vehicle use for Company business: Only employee’s
                  assigned to operate Company vehicles, are authorized or
                  permitted to operate or use a Company vehicle, including but
                  not limited to the spouse, friend, children, or other family
                  member of the Company employee.
                  <Break />
                  Under no circumstances shall an operator of a Company vehicle
                  remove or in any way deface company information, safety
                  information, or other Company authorized information on a
                  Company vehicle. No other decals, bumper stickers, or other
                  information may be displayed on a Company vehicle.
                  <Break />
                  Employees, under no circumstances, are to operate a Company
                  vehicle that have consumed any alcoholic beverage of any
                  amount whatsoever or consumed, ingested any controlled or
                  illegal substance or drug, unless the controlled substance or
                  drug has been prescribed by a physician having knowledge that
                  a Company vehicle may be operated or used by that employee
                  while under the influence of the controlled substance or drug.
                  No employee driving, operating, or occupying a vehicle shall
                  engage in any activity that is or could be construed as
                  detrimental to the Company’s reputation in the community.
                  <Break />
                  Safety is the number one concern for the Company when
                  employees operate a vehicle. It is Company policy that seat
                  belts be used at all times, not only by the driver but by all
                  passengers as well. Drivers are responsible for wearing and
                  enforcing the use of safety restraints by all occupants. Obey
                  all traffic laws.
                  <Break />
                  <mark>Safety Guidelines to Prevent Accidents </mark>{' '}
                </p>
                <ul>
                  <li className='li-pdf'>Do Not Follow too close.</li>
                  <li className='li-pdf'>
                    Do Not Drive too fast for conditions.
                  </li>
                  <li className='li-pdf'>Do Not Fail to observe clearances.</li>
                  <li className='li-pdf'>Do Not Fail to obey signs.</li>
                  <li className='li-pdf'>Do Not Make Improper turns.</li>
                  <li className='li-pdf'>
                    Do Not Fail to observe signals from other drivers.
                  </li>
                  <li className='li-pdf'>Do Not Fail to reduce speed.</li>
                  <li className='li-pdf'>Do Not Park improperly.</li>
                  <li className='li-pdf'>Do Not Pass improperly.</li>
                  <li className='li-pdf'>Do Not Fail to yield.</li>
                  <li className='li-pdf'>Do Not Back up improperly.</li>
                </ul>

                <hr />
                <Footer page='11' />
              </section>
            </div>
            <hr />

            {/* Page 12 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                {/* whole list is dynamic */}
                <ul>
                  <li className='li-pdf'>
                    Do Not Fail to obey traffic signals or directions.
                  </li>
                  <li className='li-pdf'>
                    Do Not Exceed the posted speed limit.
                  </li>
                  <li className='li-pdf'>
                    Do Not Drive While Intoxicated (DWI) or Drive Under the
                    Influence (DUI) or similar charges.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  <mark>
                    Employees must practice safe driving techniques and adhere
                    to current safety requirements.
                  </mark>
                </p>
                <ul>
                  <li className='li-pdf'>
                    Drivers are prohibited from overloading and/or overcrowding
                    a vehicle that may result in unsafe operation.
                  </li>
                  <li className='li-pdf'>
                    Loose items that could be blown out of pickup boxes or off
                    the flatbed should be secured before driving the vehicle.
                  </li>
                  <li className='li-pdf'>
                    Do not carry more passengers than the number of occupant
                    safety restraint systems in the vehicle.
                  </li>
                  <li className='li-pdf'>
                    Driving is a full-time job. Avoid all distraction.
                    Concentrate on the other drivers by assuming that person
                    will not do what is expected.
                  </li>
                  <li className='li-pdf'>
                    Roads are crowded. Consider all vehicles as potential
                    accidents looking for a place to happen.
                  </li>
                  <li className='li-pdf'>
                    Beware when entering intersections. Always count to two
                    before entering an intersection from a stoplight or stop
                    sign.
                  </li>
                  <li className='li-pdf'>
                    Signal entry onto freeways and stay in the center or inside
                    lane for ease of emergency maneuvering. Do not insist on the
                    right-of-way. Assume the other driver will.
                  </li>
                  <li className='li-pdf'>
                    During winter driving, use caution as bridges are slippery
                    and freeze before roads because they lack the warmth of the
                    ground under them.
                  </li>
                  <li className='li-pdf'>
                    Drivers must operate a vehicle only at a speed appropriate
                    to the road, traffic and weather conditions.
                  </li>
                  <li className='li-pdf'>
                    Prior to backing a vehicle with trailer, a large truck or
                    tractor/trailer, the driver should get out of the cab and
                    assess the area into which the vehicle is to be backed. Look
                    for obstructions, low hanging electrical wires, tree
                    branches, parked cars, pedestrians or people in the area and
                    any potential for traffic to pass behind while backing. Roll
                    down the window and turn off the air conditioner and radio
                    while backing so any warning sounds can be heard. Try to
                    obtain a "spotter" to help back into the space.
                  </li>
                  <li className='li-pdf'>
                    Use turn signals for parking, lane changes, and all turns in
                    shopping and office center parking lots.
                  </li>
                  <li className='li-pdf'>
                    Always keep a full level of windshield washer solvent.
                  </li>
                  <li className='li-pdf'>
                    Before night driving, wipe off your headlights.
                  </li>
                  <li className='li-pdf'>
                    If you are wondering whether or not you should turn on your
                    headlights, turn them on.
                  </li>
                </ul>
                <Break />
                <p className='justify-content'>
                  The Company does not provide automobile liability insurance
                  coverage for any accidents, claims, demands, suits, damages,
                  etc. occurring or arising out of the non-business related use
                  of a Company vehicle, or for the operation or use of a Company
                  or personal vehicle in a manner which is in violation of this
                  policy. Employees who drive a Company vehicle for non-business
                  related purposes will be held responsible for any and all
                  accidents or damage that occurs. If you are involved in an
                  accident (regardless of who is driving) you must notify
                  Management immediately after contacting law enforcement.
                  <mark>
                    AEmployees are required to use the Motor Vehicles Accident
                    Report in the glove compartment of the Company Vehicle.
                  </mark>
                  <Break />
                  <mark>Accidents Involving Company vehicles -</mark>
                  <br />
                  In the event of an accident:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Call the police on all accidents and obtain a copy of the
                    police report.
                  </li>
                  <li className='li-pdf'>
                    Do not admit negligence or liability.
                  </li>
                  <li className='li-pdf'>
                    Do not attempt settlement, regardless of how minor.
                  </li>
                  <li className='li-pdf'>
                    Get Drivers name (and owners name if different from driver),
                    address and phone number of injured person and witnesses if
                    possible.
                  </li>
                  <li className='li-pdf'>
                    Exchange vehicle identification, insurance company name and
                    policy numbers with the other driver.
                  </li>
                  <li className='li-pdf'>
                    Get VIN, vehicle year, make, model and license plate.
                  </li>
                  <li className='li-pdf'>
                    Take a photograph of the scene of accident if possible.
                  </li>
                  <li className='li-pdf'>
                    If you are found to be under the influence of drugs or
                    alcohol at the time of the accident, regardless of whether
                    you are found at fault or not, your employment will be
                    terminated.
                  </li>
                  <li className='li-pdf'>
                    Complete the accident report in your vehicle.
                  </li>
                </ul>
                <hr />
                <Footer page='12' />
              </section>
            </div>
            <hr />

            {/* Page 13 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <ul>
                  <li className='li-pdf'>
                    Turn all information over to Management with in twenty-four
                    (24) hours.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  <mark>Cellular/mobile phones cannot</mark> be used while
                  operating a Company vehicle or personal vehicle for Company
                  use. Using a cell phone while driving leads to an increased
                  risk of having an accident through a lack of attention to
                  driving.
                </p>
                <ul>
                  <li className='li-pdf'>
                    Allow voice mail to handle calls and return them at your
                    destination.
                  </li>
                  <li className='li-pdf'>
                    If you need to place or receive a call pull off the road to
                    a safe location.
                  </li>
                  <li className='li-pdf'>
                    Ask a passenger to make or take the call.
                  </li>
                  <li className='li-pdf'>
                    Inform regular callers your driving schedule, and when you
                    will be available to talk.
                  </li>
                  <li className='li-pdf'>
                    Keep your hands on the wheel and your eyes and mind on the
                    road while driving.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  <mark>
                    Employees assigned a Company vehicle are responsible to keep
                    up on all maintenance of that vehicle.
                  </mark>
                  <Break />
                  <mark>Traffic violations fines</mark> for parking or moving
                  violations, towing storage or impoundment are the personal
                  responsibility of the employee assigned the Company vehicle.
                  <Break />
                  The Company will not condone nor excuse ignorance of any motor
                  vehicle violations that result in court summons being directed
                  to the Company as owner of the Company vehicle.
                  <Break />
                  Each employee is required to report all moving violations to
                  Management within 24 hours. This requirement applies to
                  violations involving the use of any vehicle (Company, personal
                  or other) while on Company business.
                  <Break />
                  Employees that let a motor vehicle violations to in to court
                  summons will be subject to discipline, up to and including
                  termination. Anyone who is found to violate this policy is
                  subject to discipline, up to and including termination.
                  <Break />
                </p>

                <p className='center-content'>
                  5<br />
                  Personal Cellular Phone Use
                </p>
                <p className='justify-content'>
                  Employees must exercise the same discretion in using personal
                  cell phones as using Company phones. Personal calls during
                  working hours, regardless of the phone used, can interfere
                  with employee productivity and be distracting to others.
                  <Break />
                  Personal cell phone use while at work is not allowed unless
                  the employee is clocked out. This includes text messaging,
                  surfing the Internet, checking phone messages or receiving or
                  responding to email.
                  <Break />
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} encourages the safe
                  use of cellular telephones by employees; engaging in Company
                  business using a cell phone or similar device while driving is
                  prohibited, except with the use of a hands-free device and in
                  accordance with applicable laws. You may not use your cellular
                  phone or similar device to receive or place calls, text
                  messages, surf the internet, check phone messages, or receive
                  or respond to email while driving if you are in any way doing
                  activities that are related to your employment. We recognize
                  that other distractions occur during driving; however, curbing
                  the use of cell phones while driving, is one way to minimize
                  the risk, for our employees, of accidents. Therefore, you are
                  required to stop your vehicle in a safe location so that you
                  can safely use your cell phone or similar device.
                  <Break />
                  Employees should plan calls to allow placement of calls either
                  prior to traveling or while on rest breaks. Employees who are
                  charged with traffic violations resulting from the use of
                  their cell phone while driving will be solely responsible for
                  all liabilities that result from such actions.
                  <Break />
                  Camera phones can present risks and potentially compromise
                  sensitive information, trade secrets, or the privacy of other
                  employees. Video voyeurism laws prohibit the recording or
                  sharing of images without consent, when the recording was made
                  in a location that the person expected would be private. The
                  Company will not be liable for the loss of personal cell
                  phones brought into the workplace.
                </p>
                <hr />
                <Footer page='13' />
              </section>
            </div>
            <hr />

            {/* Page 14 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  Employees who are found to have violated this policy may be
                  subject to disciplinary action up to and including
                  termination.
                </p>
                <br />

                <p className='center-content'>Company Cellular Phone</p>
                <p className='justify-content'>
                  The Company entrusts employees with communications equipment
                  to enhance productivity and safety. It is the employee’s
                  responsibility to use the equipment prudently to ensure the
                  safety of themselves, their co-workers and the general public.
                  <Break />
                  Employee are not to download large amounts of data from their
                  cellular phones. Game playing, movies and music downloads are
                  all examples of large data downloads. Streaming is not
                  acceptable on Company cellular phones. Using cellular phones
                  for tethering as "hotspot" is not allowed. Cellular phone
                  plans only cover a limited amount of data downloads.
                  <Break />
                  <mark>
                    If employees download exceed the covered amount the Company
                    reserves the right to charge employees for the excess charge
                    from the cellular service company.
                  </mark>
                  <Break />
                  The Company may review, access, intercept and disclose an
                  employee's text messages or data downloads at any time at its
                  sole discretion. All messages and data downloads distributed
                  via the Company's cellular phone system even personal text
                  messages and data downloads, are Company property. Employees
                  text messages and downloads can be monitored without prior
                  notification if Management deems this necessary. Deleting or
                  erasing information, documents, or messages maintained on the
                  Company's cellular phone system is, in most cases,
                  ineffective. <Break />
                  All employees should understand that any information kept and
                  sent on the Company's phone system may be electronically
                  recalled or recreated regardless of whether it may have been
                  "deleted" or "erased" by an employee. Because the Company's
                  cellular phone provider has records of all files and messages,
                  files and messages may exist that are thought to have been
                  deleted or erased. Therefore, employees who delete or erase
                  information or messages should not assume that such
                  information or messages are confidential. Even though
                  employees may be issued a private password or other private
                  access code to log in to the Company cellular phone, employees
                  should have no expectation of privacy with regard to your use
                  of the cellular phone system.
                  <Break />
                  Employees must have NO expectation of privacy in anything that
                  you create, store, send or receive on the Company's cellular
                  phone system.
                  <Break />
                  Reasonable precautions should be made to prevent theft and
                  vandalism of any cellular phone. In the event that a cellular
                  phone is lost, stolen, or vandalized due to an employee’s
                  failure to use reasonable precautions,
                  <mark>
                    the Company may require the employee responsible for such
                    cellular phone to reimburse the Company for the reasonable
                    cost to replace such cellular phone.
                  </mark>
                  <Break />
                  Cellular phone use in violation of any local, state, or
                  federal law is prohibited. Cellular phone use in violation of
                  Company work policies or for the purpose of personal financial
                  gain is prohibited. Upon resignation or termination of
                  employment, or at any time upon request, the employee can be
                  asked to produce the cellular phone for return or inspection.
                  Employees unable to present the phone in good working
                  condition within the time period requested may be expected to
                  bear the cost of replacement.
                  <Break />
                </p>

                <p className='center-content'>Company Property</p>
                <p className='justify-content'>
                  Computers, desks, phones, and miscellaneous office equipment
                  (including computer accounts, voice mail, laptop computers,
                  printers, facsimile machines, networks, software, electronic
                  mail, internet and World Wide Web access connections) are
                  Company property whether owned, leased, rented or used by the
                  Company. "Company Premises" includes all premises and
                  locations owned or leased by the Company or under control of
                  the Company, including parking lots, lockers and storage areas
                  and must be maintained according to Company rules and
                  regulations. They must be kept clean and are to be used only
                  for work-related purposes. The Company reserves the right to
                  inspect all Company property to insure compliance with its
                  rules and regulations, without notice to the employee and/or
                  in the employee's absence.
                </p>

                <hr />
                <Footer page='14' />
              </section>
            </div>
            <hr />

            {/* Page 15 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  An employee may not engage in activities on company time, or
                  cause to be used, company facilities, equipment, including any
                  computing resources, materials or supplies for his/her
                  personal convenience or profit. Nor may an employee take
                  advantage in this manner of an outside individual or
                  organization doing business, or seeking business, with the
                  company. Company resources also may not be utilized for
                  nonprofit organizations without prior management approval.
                  <Break />
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} reserves the right to
                  monitor for any purpose all communications and access usage
                  via the company or client computing systems. Prior
                  authorization must be obtained before any Company property may
                  be removed from the premises.
                  <Break />
                  For security reasons, employees should not leave personal
                  belongings of value on Company property. Personal items are
                  subject to inspection and search, with or without notice, with
                  or without the employee's prior consent.
                  <Break />
                  The Company is not responsible for personal mail or packages
                  sent to the Company. The use of Company paid postage for
                  personal correspondence is not permitted.
                </p>
                <br />
                <p className='center-content'>
                  Telephone Usage/Voice Mail Policy
                </p>
                <p className='justify-content'>
                  Company telephones are tools for conducting business. Personal
                  telephone calls should be made only when communication cannot
                  take place off-hours. Personal calls should be limited to
                  break times and lunch periods.
                  <Break />
                  Telephone communication creates a lasting impression in the
                  mind of the customer as to our professionalism, sensitivity
                  and responsiveness. Show fellow employees the same level of
                  courtesy and professionalism that we show our customers.
                  <Break />
                  At most office locations, company telephones are equipped with
                  voice mail to record incoming messages for an employee who is
                  absent, away from his or her work area or on another line.
                  Employees must use good judgment when leaving voice mail
                  messages. Messages may not include anything that should not be
                  said in public.
                  <Break />
                  As with all company communications devices, voice mail should
                  not be used to:
                </p>
                <ul>
                  <li className='li-pdf'>
                    State personal information, sexually suggestive jokes or
                    personal comments to or about other employees or
                    individuals.
                  </li>
                  <li className='li-pdf'>
                    Express a personal philosophy that is not related to
                    business.
                  </li>
                  <li className='li-pdf'>
                    Communicate Company information that is considered
                    confidential and, therefore, not for distribution.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  An employee who misuses voice mail will be subject to
                  disciplinary action up to and including termination. Each case
                  will be dealt with on an individual basis by the Company. The
                  Company reserves the right to listen to voice mail messages
                  and to access voice mail messages to ensure compliance with
                  this policy, without notice to the employee and/or in the
                  employee's absence.
                </p>
                <br />
                <p className='center-content'>E-Mail Policy</p>
                <p className='justify-content'>
                  This policy covers appropriate use of any email sent from a
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}
                  email address and applies to all employees operating on behalf
                  of the Company. The use of e-mail is a privilege extended by
                  the Company, which may be withdrawn at any time. Employees
                  must use good judgment when sending e-mail messages.
                  <Break />
                  The Company does not allow personal use of Company email. It
                  is the responsibility of employees to see that these
                  information systems are used in an efficient, ethical and
                  lawful manner.
                  <Break />
                  The Company specifically prohibits the use of the Company
                  e-mail system in ways that are disruptive, offensive to others
                  or harmful to morale, including sexually explicit messages,
                  images and cartoons, ethnic slurs, racial comments, off-color
                  jokes or anything that could be construed as harassment or
                  shows disrespect for others, defames or slanders others, or
                  otherwise harms another person or business.
                </p>
                <hr />
                <Footer page='15' />
              </section>
            </div>
            <hr />

            {/* Page 16 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  All company employees using a company email should be aware of
                  the following:
                </p>
                <br />
                <ul>
                  <li className='li-pdf'>
                    The Company may review, access, intercept and disclose an
                    employee's e-mail messages at any time at its sole
                    discretion.
                  </li>
                  <li className='li-pdf'>
                    All messages distributed via the Company's email system,
                    including personal emails, are Company property.
                  </li>
                  <li className='li-pdf'>
                    You must have NO expectation of privacy in anything that you
                    create, store, send or receive on the Company's email
                    system.
                  </li>
                  <li className='li-pdf'>
                    Your emails can be monitored without prior notification if
                    Company deems this necessary.
                  </li>
                  <li className='li-pdf'>
                    Even though you may be issued a private password or other
                    private access code to log in to the computer or email
                    system you should have no expectation of privacy with regard
                    to your use of the system.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  Deleting or erasing information, documents, or messages
                  maintained on the Company's technology resources is, in most
                  cases, ineffective. All employees should understand that any
                  information kept on the Company's technology resources may be
                  electronically recalled or recreated regardless of whether it
                  may have been "deleted" or "erased" by an employee. Because
                  the Company periodically backs-up all files and messages, and
                  because of the way in which computers re-use file storage
                  space, files and messages may exist that are thought to have
                  been deleted or erased. Therefore, employees who delete or
                  erase information or messages should not assume that such
                  information or messages are confidential.
                  <Break />
                  Unacceptable uses of email include, but are not limited to,
                  the following:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Using e-mail for personal commercial purposes.
                  </li>
                  <li className='li-pdf'>
                    Misrepresenting your identity or affiliation in e-mail
                    communications.
                  </li>
                  <li className='li-pdf'>
                    Intercepting, disrupting, or altering electronic
                    communications packets.
                  </li>
                  <li className='li-pdf'>
                    Using someone else's identity and password.
                  </li>
                  <li className='li-pdf'>
                    Use of the employment title or signature in private
                    communications. The public may potentially be misled by any
                    individual's unauthorized use of a Company employment title
                    representing their status or position in private
                    communications.
                  </li>
                  <li className='li-pdf'>
                    Causing congestion on the network by propagating chain
                    letters, broadcasting inappropriate messages to lists or
                    individuals, or using an excessive amount of data storage in
                    the e-mail system.
                  </li>
                  <li className='li-pdf'>
                    Using Company e-mail resources for political activities,
                    including organizing or participating in any political
                    meeting, rally, demonstration, soliciting contributions or
                    votes, distributing material, surveying or polling for
                    information connected to a political campaign, completing
                    political surveys or polling information, and any other
                    activities prohibited under the ethics act and/or other
                    state/federal laws.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  Employees are not to open any attachments from unfamiliar
                  addresses or solicitations. If there is evidence that you are
                  not adhering to the guidelines set out in this policy, the
                  Company reserves the right to take disciplinary action,
                  including termination and/or legal action.
                </p>
                <br />
                <p className='center-content'>Social Media Policy</p>
                <p className='justify-content'>
                  The main focus of this social media policy is to provide
                  guidelines for functioning in an electronic world. Social
                  media is a powerful communications tool that has a significant
                  impact on organizational and professional reputations. Privacy
                  does not exist in the world of social media.
                  <Break />
                  Consider what could happen if a post becomes widely known and
                  how that may reflect both on the poster and the Company.
                  Search engines can turn up posts years after they are created,
                  and comments can be forwarded or copied. If you wouldn’t say
                  it to your co-worker, customer or Management, consider whether
                  you should post it online. If you are unsure about posting
                  something or responding to a comment, ask management for
                  input. Transparency and honesty are values of the Company and
                  its employees. Posts on social media sites should protect the
                  Company's voice by remaining professional in tone and in good
                  taste. Social media should be broadly understood for purposes
                  of this policy to include blogs, wikis, micro-blogs, message
                </p>
                <hr />
                <Footer page='16' />
              </section>
            </div>
            <hr />

            {/* Page 17 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  boards, chat rooms, electronic newsletters, online forums,
                  social networking sites, and other sites and services that
                  permit users to share information with others in a
                  contemporaneous manner. Examples include but are not limited
                  to LinkedIn, Twitter, Facebook, YouTube, Instagram, Snapchat,
                  and MySpace.
                  <Break />
                  Any and all use of Company name, logo and/or related marks
                  requires prior, express, written consent of the Owner/s.
                </p>
                <ul>
                  <li className='li-pdf'>
                    Do not use Company logos for endorsements.
                  </li>
                  <li className='li-pdf'>
                    Do not use the Company logo or any other Company images or
                    iconography on personal social media sites.
                  </li>
                  <li className='li-pdf'>
                    Do not use Company name to promote a product, cause, or
                    political party or candidate.
                  </li>
                  <li className='li-pdf'>
                    Do not promote personal projects or endorse brands, causes
                    or opinions when posting from a Company account.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  If your posting is personal and not directly related to your
                  job activities, make it clear that you are speaking for
                  yourself and not on behalf of the Company. Attach this
                  disclaimer to all personal posts; “The postings on this site
                  are my own and don’t necessarily represent
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}’s positions or
                  opinions". Do not use ethnic slurs, profanity, personal
                  insults, or engage in any conduct that would not be acceptable
                  in the Company’s workplace. Avoid comments or topics that may
                  be considered objectionable or inflammatory. Do not post or
                  link to any materials that are defamatory, harassing or
                  indecent.
                  <Break />
                  Protect confidential and proprietary information:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Do not post confidential or proprietary information about
                    Company, clients, employees, or vendors.
                  </li>
                  <li className='li-pdf'>
                    Adhere to all applicable company privacy and confidentiality
                    policies.
                  </li>
                  <li className='li-pdf'>
                    Employees who share confidential information do so at the
                    risk of disciplinary action or termination.
                  </li>
                  <li className='li-pdf'>
                    Do not create anonymous or pseudonym online profiles to pad
                    link or page view stats.
                  </li>
                  <li className='li-pdf'>
                    Do not comment on your own or another's posts to create a
                    false sense of support.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  If what you publish is associated with your job activity,
                  identify your affiliation with the Company and your area of
                  concentration. This will add credibility to your profile and
                  the Company's profile/communications and will increase the
                  visibility of the Company and you personally.
                  <Break />
                  If a negative post or comment is found online about the
                  Company or yourself, do not counter with another negative
                  post. Seek help from Management in defusing these types of
                  situations. Get the facts straight before posting them on
                  social media. Review content for grammatical and spelling
                  errors. This is especially important if posting on behalf of
                  the Company in any capacity.
                  <Break />
                  Photographs posted on social media sites easily can be
                  appropriated by visitors. Add a watermark and/or post images
                  at 72 dpi and approximately 800x600 resolution to protect the
                  Company's intellectual property. Images at that size are
                  sufficient for viewing on the Web, but not suitable for
                  printing. Photographs of coworkers, clients, or vendors are
                  not appropriate without receiving a signed release prior to
                  posting.
                  <Break />
                  Do not “Like” or “Fan” any Facebook page on behalf of the
                  Company. Do not use the Company’s social media to collect
                  sensitive user information such as phone numbers and payment
                  information. Whenever possible, link back to the Company web
                  site. Ideally, posts should be very brief: redirecting a
                  visitor to content that resides within the Company web
                  environment. You may not use your personal social media
                  account or email to engage with a prospective or current
                  client.
                  <Break />
                  If you have any questions regarding the guidelines set forth
                  in this document, please seek the support or guidance of
                  Management. Your use of social media tools should never
                  interfere with your primary duties, with the exception of
                  where it is a primary duty to use these tools to do your job.
                  <br />
                  The Company reserves the right to restrict or remove any
                  content that is deemed in violation of this policy or any
                  applicable law. Employees found in violation of this policy
                  may be subject to disciplinary action, up to and including
                  termination of employment.
                </p>
                <hr />
                <Footer page='17' />
              </section>
            </div>
            <hr />

            {/* Page 18 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='center-content'>Internet Policy</p>
                <p className='justify-content'>
                  Employees are not permitted to use the internet for personal
                  use.
                  <Break />
                  Employee use of the internet is viewed as a privilege and not
                  a right. When using the Internet, employees should remember
                  that they are entering a global community and that all
                  information is public. Any actions taken by an employee will
                  be a reflection upon the Company, and such action must be of
                  an ethical and legal nature. An employee who misuses the
                  internet will be subject to disciplinary action up to and
                  including termination.
                  <Break />
                  The use of the internet is a privilege extended by the
                  Company, which may be withdrawn at any time.
                  <Break />
                  The Company reserves the right to periodically audit its
                  systems, including e-mail and internet access, to determine
                  whether there is evidence of abuse or misuse.
                  <Break />
                  In general, downloading files from the internet is prohibited
                  unless there is a legitimate business need. The primary
                  purpose of the company's internet connection is
                  business-related only. As such, employees must observe the
                  following:
                  <Break />
                  Appropriate Usage of Internet:
                </p>
                <ul>
                  <li className='li-pdf'>
                    To communicate with fellow employees and clients regarding
                    matters within an employee's assigned duties.
                  </li>
                  <li className='li-pdf'>
                    To acquire information related to, or designed to facilitate
                    the performance of regular assigned duties.
                  </li>
                  <li className='li-pdf'>
                    To facilitate performance of any task or project in
                    connection with the employees assigned duties.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  If you have any questions about any of these rules, you should
                  discuss them with Management to ensure your complete
                  understanding. Given the ever-changing nature of technology,
                  these conduct violations are not to be considered
                  all-inclusive and may be changed.
                  <Break />
                  Internet Usage that Company Expressly Prohibits:
                </p>
                <br />
                <ul>
                  <li className='li-pdf'>
                    The transmission of inappropriate or offensive information
                    is prohibited (gross, indecent, or sexually-oriented
                    materials accessed at any hour is not appropriate).
                  </li>
                  <li className='li-pdf'>
                    Non-encrypted, confidential information may not be sent to
                    or from the internet.
                  </li>
                  <li className='li-pdf'>
                    In the transmission of materials, applicable copyright laws
                    or patents must be obeyed.
                  </li>
                  <li className='li-pdf'>Job-search sites.</li>
                  <li className='li-pdf'>Entertainment sites.</li>
                  <li className='li-pdf'>Gambling sites.</li>
                  <li className='li-pdf'>Il1egal drug-oriented sites.</li>
                  <li className='li-pdf'>Personal pages of individuals,</li>
                  <li className='li-pdf'>
                    Politically-oriented sites or sites devoted to influencing
                    the course of legislation or public policy.
                  </li>
                  <li className='li-pdf'>
                    Internet access should not be used to gain unlawful access
                    to computers, information or communications devices.
                  </li>
                  <li className='li-pdf'>
                    Downloading games is forbidden. When the installation
                    programs are run for these games, some important auxiliary
                    files can be overwritten by older versions of the same
                    files.
                  </li>
                  <li className='li-pdf'>
                    Employees must not sign "guest books" at web sites or post
                    messages to internet news groups or discussion groups at web
                    sites. These actions will generate junk electronic mail and
                    may expose the Company to liability or unwanted attention.
                  </li>
                  <li className='li-pdf'>
                    Employees must not delete their history, cookies, and/or
                    cache from any internet browser.
                  </li>
                </ul>
                <br />

                <p className='center-content'>
                  Company Electronic Device Policy
                </p>
                <p className='justify-content'>
                  The Company entrusts employees with communications equipment
                  (cellular phones, tablets, laptops, etc.) to enhance
                  productivity and safety.
                </p>
                <br />

                <hr />
                <Footer page='18' />
              </section>
            </div>
            <hr />

            {/* Page 19 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  It is the employee’s responsibility to use the equipment
                  prudently to ensure the safety of themselves, their co-workers
                  and the general public.
                  <Break />
                  Employees are not to download large amounts of data from these
                  devices.
                  <Break />
                  Game playing, movies and music downloads are all examples of
                  large data downloads. Streaming is not acceptable on company
                  cellular telephones.
                  <Break />
                  Using cellular telephones for tethering as "hotspot" is
                  appropriate for work purposes only. Cellular telephone plans
                  only cover a limited amount of data downloads. If your
                  download exceeds the covered amount the company reserves the
                  right to charge you for the excess charge from the cellular
                  service company.
                  <Break />
                  The company may review, access, intercept and disclose an
                  employee's text messages or data downloads at any time at its
                  sole discretion. All messages and data downloads distributed
                  via the company's cellular phone system even personal text
                  messages and data downloads, are Company property. You must
                  have NO expectation of privacy in anything that you create,
                  store, send or receive on the company's cellular phone system.
                  Your text messages and downloads can be monitored without
                  prior notification if the Company deems this necessary.
                  Deleting or erasing information, documents, or messages
                  maintained on the Company's cellular phone system is, in most
                  cases, ineffective. All employees should understand that any
                  information kept and sent on the Company's phone system may be
                  electronically recalled or recreated regardless of whether it
                  may have been "deleted" or "erased" by an employee. Because
                  the Company's cellular phone provider has records of all files
                  and messages, files and messages may exist that are thought to
                  have been deleted or erased. Therefore, employees who delete
                  or erase information or messages should not assume that such
                  information or messages are confidential. Even though you may
                  be issued a private password or other private access code to
                  log in to the company cellular phone, you should have no
                  expectation of privacy with regard to your use of the cellular
                  phone system.
                  <Break />
                  Reasonable precautions should be made to prevent theft and
                  vandalism of any cellular telephone. In the event that a
                  cellular telephone is lost, stolen, or vandalized due to an
                  employee’s failure to use reasonable precautions, the Company
                  may require the employee responsible for such cellular
                  telephone to reimburse the Company for the reasonable cost to
                  replace such telephone.
                  <Break />
                  The Company reserves the right to monitor the use of all
                  Company-owned cell phones. Cell phone use in violation of any
                  local, state, or federal law is prohibited. Cell phone use in
                  violation of Company work policies or for the purpose of
                  personal financial gain is prohibited. Upon resignation or
                  termination of employment, or at any time upon request, the
                  employee may be asked to produce the cell phone for return or
                  inspection. Employees unable to present the phone in good
                  working condition within the time period requested may be
                  expected to bear the cost of replacement.
                </p>
                <br />

                <p className='center-content'>Key Policy</p>
                <p className='justify-content'>
                  Employees who receive keys are solely responsible for those
                  keys and those keys are never to be loaned out to anyone.
                  Failure to follow this policy may result in disciplinary
                  action up to and including termination.
                  <Break />
                  All employees issued company keys, upon employment
                  termination, must return all keys to Management. All lost
                  company keys must be reported to Management immediately so
                  appropriate action can be taken to prevent potential loss and
                  or unlawful entry. Employees who lose keys may be charged for
                  the cost or rekey all required areas.
                </p>
                <br />

                <p className='center-content'>
                  6<br />
                  Reporting Accident or Injury
                </p>
                <p className='justify-content'>
                  All injuries on
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}
                  property, or accidents involving company equipment or company
                  personnel MUST BE REPORTED AS SOON AS POSSIBLE to Management.
                </p>

                <hr />
                <Footer page='19' />
              </section>
            </div>
            <hr />

            {/* Page 20 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='center-content'>
                  Stay At Work / Return To Work Policy
                </p>
                <p className='justify-content'>
                  This policy is not intended as a guarantee of continuity of
                  benefits or rights. No permanent employment for any term is
                  intended or can be implied by this policy.
                  <Break />
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} has developed a
                  return-to-work policy. Its purpose is to return workers to
                  employment at the earliest date following any injury or
                  illness. Medical research has shown that people recover more
                  quickly if they remain active and return to their normal
                  routine as soon as possible. This policy applies to all
                  workers and will be followed whenever appropriate. This
                  program does not require the Company to create a position for
                  the sole purpose of accommodating an injured employee.
                  Transitional employment is available based on Company ability
                  to provide temporary modified employment and may not be
                  available in all circumstances.
                  <Break />
                  The Company defines “transitional” work as temporary modified
                  work assignments within the worker’s physical abilities,
                  knowledge, and skills. These temporary assignments are
                  designed to help them remain productive and speed their
                  medical recovery. Where feasible, transitional positions will
                  be made available to injured employees in order to minimize or
                  eliminate time loss. For any business reason, at any time, the
                  Company may elect to change the working shift of any employee
                  based on the business needs of this Company. The physical
                  requirements of transitional/temporary work will be provided
                  to the medical provider. Transitional/temporary positions are
                  then developed with consideration of the worker’s physical
                  abilities, the business needs of the Company, and the
                  availability of transitional work.
                  <Break />
                  The Company will determine appropriate work hours, shifts,
                  duration, and locations of all work assignments. The Company
                  reserves the right to determine the availability,
                  appropriateness, and continuation of all transitional
                  assignments and job offers. If the worker returns to a
                  transitional/temporary job, the worker must make sure that he
                  or she does not go beyond either the duties of the job or the
                  medical provider’s restrictions. If the worker’s restrictions
                  change at any time, he or she must notify the Company at once
                  and give the Company a copy of the new medical status form.
                  <Break />
                  The injured employee must fully understand that transitional
                  assignments are temporary, and part of their rehabilitation
                  program, and that they will be expected to return to their
                  time of injury job as soon as medically released to do so by
                  their treating physician.
                  <Break />
                  If an employee experiences any difficulties while performing
                  their transitional/temporary work, they are to report them to
                  Management immediately. If the employee finds that they cannot
                  work or has to leave work because of difficulties, they MUST
                  report to Management and then immediately see their attending
                  medical provider. The employee must provide an updated medical
                  status form completed by their medical provider, indicating
                  the reason for being off work and if they are unable to work
                  due to the industrial injury. Physical therapy and doctor
                  appointments should be scheduled around work hours, if
                  possible.
                  <Break />
                  If the injured employee chooses to decline a temporary
                  transitional employment assignment, it may result in loss of
                  workers’ compensation benefits.
                  <Break />
                  If medical treatment is sought, the worker should inform the
                  medical provider that the Company has a return-to-work program
                  with light duty/modified assignments available. Unless it is
                  an emergency situation, any employee seeking medical treatment
                  as a result of a work-related injury or disease must obtain a
                  medical status form from the Company. This should be provided
                  to the medical provider and should be returned to the Company
                  within 24 hours of the initial medical treatment. If the
                  medical provider releases the worker to return to work, the
                  employee must return to work within 24 hours. The worker must
                  report for work at their regular designated time.
                  <Break />
                  <b>
                    The worker cannot return to work without a status form
                    completed by the medical provider.
                  </b>
                  If the worker returns to a transitional/temporary job, the
                  worker must make sure that he/she does not go beyond either
                  the duties of the job or the medical provider’s restrictions.
                </p>

                <hr />
                <Footer page='20' />
              </section>
            </div>
            <hr />

            {/* Page 21 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  If the worker’s restrictions change at any time, he or she
                  must notify the Company at once and provide a copy of the
                  updated medical status form.
                  <Break />
                  All medical appointments must be kept or immediately
                  rescheduled. Failure to keep appointments may result in
                  termination of workers’ compensation benefits.
                  <Break />
                  If the worker is unable to report for any kind of work, the
                  worker must attend a work status meeting every Monday at 8:30
                  A.M. at a minimum.
                  <br />
                  These meetings will:
                </p>
                <ul>
                  <li className='li-pdf'>
                    Communicate availability of temp/modified work for the
                    injured worker.
                  </li>
                  <li className='li-pdf'>
                    Facilitate communication about the injured worker’s progress
                    towards returning to work.
                  </li>
                  <li className='li-pdf'>
                    Establish date of next medical appointment and updated
                    medical status form.
                  </li>
                  <li className='li-pdf'>
                    Help the employer identify and prepare job duties it can
                    make available to match the injured workers ability to
                    perform work.
                  </li>
                </ul>
                <br />
                <p className='justify-content'>
                  Additional meeting times will be determined at Monday
                  meetings. While off work, it is the responsibility of the
                  worker to supply the Company with a current telephone number
                  (listed or unlisted) and an address where the worker can be
                  reached. Failure to attend status meetings and/or mandatory
                  meetings without proper notification (as found in the
                  scheduling and absences policy of this handbook) will be
                  subject to disciplinary action, up to and including
                  termination of employment.
                  <Break />
                  Injured employees are required to follow their treating
                  physician’s orders and restrictions both at home and at work.
                  Any suspicions of fraud will be investigated and legally
                  pursued when warranted. It is every employee’s responsibility
                  to report any suspicion of fraud.
                </p>
                <br />

                <p className='center-content'>Alcohol & Drugs</p>
                <p className='justify-content'>
                  The use, sale, purchase, transfer, possession, distribution,
                  or being under the influence of any illegal drug by an
                  employee while performing company business or while on company
                  grounds is prohibited.
                </p>
                <br />

                <p className='center-content'>Substance Abuse Policy</p>
                <p className='justify-content'>
                  Our position regarding substance abuse is the same whether
                  alcohol, marijuana, illegal drugs, prescription drugs, or
                  controlled substances are involved ("substances").
                  <Break />
                  This policy is implemented because
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} believes that the
                  impairment of any employee due to his/her use of substances is
                  likely to result in the risk of injury to other employees, the
                  impaired employee, or to third parties, such as customers or
                  members of the public. "Impairment" or ''being impaired" means
                  that an employee's normal physical or mental abilities, or
                  faculties, while at work have been detrimentally affected by
                  the use of substances.
                  <Break />
                  Any employee who begins work while impaired or who becomes
                  impaired while at work is in violation of Company rules and is
                  subject to disciplinary action. Likewise, the use, possession,
                  transfer, or sale of any substance on Company premises
                  including parking lots, storage areas, or job sites is
                  prohibited; any violations are subject to disciplinary action
                  up to and including termination.
                  <Break />
                  Employees who are taking prescription drugs, which may have
                  side effects that present a danger to themselves or others,
                  are under a duty to report this to Management. This is for the
                  protection of the employee and for safety purposes in case of
                  an adverse reaction to the drug while at work, or so the
                  employee is not falsely accused of taking an illegal
                  substance.
                  <Break />
                  Anyone who suspects a substance abuse case should discuss the
                  situation immediately with Management. Because each case is
                  usually different, the handling and referral of the case must
                  be coordinated with r3.
                </p>

                <hr />
                <Footer page='21' />
              </section>
            </div>
            <hr />

            {/* Page 22 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  The Company is concerned with its employee's privacy,
                  especially where matters regarding medical and personal
                  information are involved. As long as the information is not
                  needed for police or security purposes, the Company shall
                  maintain employee medical and personal information in
                  confidence and release this information to authorized company
                  personnel on a "need to know" basis.
                </p>
                <br />

                <p className='center-content'>Dress and Hygiene Code Policy</p>
                <p className='justify-content'>
                  The Company does not wish to impose a strict dress code on its
                  employees, but some guidelines are necessary to promote the
                  image the Company.
                  <Break />
                  All Company employees shall maintain personal cleanliness and
                  grooming habits that reflect a professional image for both the
                  employee and the company. Assigned dress shall be kept clean,
                  neat and in good repair.
                  <Break />
                  Hair must be clean and neatly arranged at all times. Facial
                  hair must be neat and clean at all times.
                  <Break />
                  Employees should wear clothing that is comfortable, practical
                  for work, and safety oriented but not distracting or offensive
                  to others
                  <Break />
                  Although the Company is okay with employees’ tattoos,
                  piercings, hair coloring or such, the Company reserves the
                  right to determine when it is not appropriate. Any form of
                  tattoos or piercings that is sexual or offensive will be
                  required to be covered during working hours.
                  <Break />
                  The Company is a professional service organization and, as
                  such, all employees must dress in a professional manner
                  consistent with the business image of the Company. In
                  addition, employees are expected to represent the Company in a
                  professional manner at all times in their day to-day
                  interfacing with clients.
                  <Break />
                  The Company expects all employees to follow these appearance
                  standards:
                </p>
                <ul>
                  <li className='li-pdf'>No Sandals</li>
                  <li className='li-pdf'>No Ripped Jeans</li>
                  <li className='li-pdf'>No Shorts</li>
                  <li className='li-pdf'>No Mid-Drift Tops</li>
                  <li className='li-pdf'>No Miniskirts</li>
                  <li className='li-pdf'>No T-Shirts</li>
                </ul>
                <br />
                <p className='justify-content'>
                  Employees are expected to use good judgment to ensure that
                  their attire is appropriate for all activities (including
                  meetings and client contact) that they will be involved in
                  that day.
                  <Break />
                  The Company will make every effort to accommodate employee's
                  religious beliefs. Employees who violate the dress code may be
                  reprimanded, sent home to change, sent home for the day, or
                  terminated. Employees sent home will not be paid for their
                  travel time.
                  <Break />
                </p>
                <p className='center-content'>
                  7<br />
                  Dress and Hygiene Code Policy
                </p>
                <p className='justify-content'>
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} provides the
                  following holidays as paid time off to
                  <mark>regular full-time employees</mark> who have completed 90
                  days of employment on the following holidays:
                  <br />
                  <br />
                  <mark>
                    New Year's Day <br />
                    Memorial Day <br />
                    July 4th <br />
                    Labor Day <br />
                  </mark>
                </p>

                <hr />
                <Footer page='22' />
              </section>
            </div>
            <hr />

            {/* Page 23 */}
            <div className='pdf-pages page-height'>
              <section className='section-page-margin'>
                <p className='justify-content'>
                  <mark>
                    Thanksgiving Day <br />
                    Christmas Day <br />
                  </mark>
                  IN ORDER TO BE ELIGIBLE TO RECEIVE HOLIDAY PAY, EMPLOYEES ARE
                  REQUIRED TO WORK THE REGULARLY SCHEDULED HOURS THE WORK DAY
                  PRECEDING AND THE WORK DAY FOLLOWING THE HOLIDAY. Eligible
                  employees will receive their regular rate of pay for each paid
                  holiday.
                  <Break />
                  One day of holiday pay is 8 hours.
                  <Break />
                  An employee may observe a special or religious holiday (other
                  than those already designated by the Company), provided that
                  work schedules can be accommodated without undue hardship to
                  the employee’s department and provided that the time off is
                  charged to accrued paid time off or is without pay.
                </p>
                <br />

                <p className='center-content'>Jury Duty</p>
                <p className='justify-content'>
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} considers it a civic
                  duty if one of our employees is selected to serve on a jury.
                  Please bring your summons notice to Management the first
                  working day after you receive it. You will not be paid for
                  your time away from work. If released from court early, you
                  are expected to come back to work. Please advise your
                  {/* R1, R2, R3 */} {pdfData.CompanyStructure.R1} of your
                  status on a daily basis.
                </p>
                <br />

                <p className='center-content'>Maternity Leave</p>
                <p className='justify-content'>
                  Female employees are entitled to maternity leave under the
                  following guidelines:
                </p>
                <ul>
                  <li className='li-pdf'>
                    An employee will be granted an unpaid leave for the period
                    of disability for the birth of a child. The length of time
                    needed for a maternity leave must be medically based
                    supported by a physician's statement.
                  </li>
                  <li className='li-pdf'>
                    Upon return to work from a maternity leave, the employee
                    will be restored to the same or equivalent position.
                  </li>
                  <li className='li-pdf'>
                    All benefits (i.e. holiday and contributions to the
                    retirement plan) will be suspended during the leave and will
                    resume upon return to active employment.
                  </li>
                  <li className='li-pdf'>
                    All accrued paid time off must be applied toward the
                    Maternity Leave.
                  </li>
                </ul>
                <br />

                <p className='center-content'>Military Leave</p>
                <p className='justify-content'>
                  Employees who serve in U. S. military reserve organizations or
                  state militia may take the necessary time without pay to
                  fulfill this obligation. Please notify the Company of the
                  dates you will be on duty as early as possible so that
                  arrangements can be made for your absence. You will be
                  requested to provide military certification of the need for
                  such leave and medical certification of your ability to resume
                  your employment.
                  <Break />
                  <br />
                  You may apply accrued and unused vacation time to this
                  military leave
                </p>

                <hr style={{ marginTop: '18rem' }} />
                <Footer page='23' />
              </section>
            </div>
            <hr />

            {/* Page 24 */}
            <div className='pdf-pages page-height'>
              <div className='section-page-margin'>
                <p className='center-content'>IMPORTANT NOTICE TO EMPLOYEES</p>
                <br />
                <p className='center-content'>
                  Receipt and Acknowledgment of Employee Handbook
                </p>
                <br />
                <p className='justify-content'>
                  Understanding and Acknowledging Receipt of
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} Employee Handbook.
                  <Break />I acknowledge receipt of my copy of
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} employee handbook and
                  understand I am obligated to read and familiarize myself with
                  its contents. I understand this handbook is not intended to
                  cover every situation which may arise during my employment,
                  but is simply a general guide to the goals, policies,
                  practices, benefits and expectations of
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName}. I further understand
                  that the policies and benefits described in it are subject to
                  change, deletion, suspension, or discontinuation, at the sole
                  discretion of
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} at any time. Changes
                  to the employee handbook the involve Company specifics
                  (example reporting hours, lunch time off) will be issued to
                  employees. Changes to the employee handbook that are
                  considered formatting changes (punctuation, format, fonts,
                  spelling errors) will not be issued to employees.
                  <Break />
                  <br />I understand that neither myself nor
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} has entered into a
                  contract regarding the duration of my employment. I am free to
                  terminate my employment with
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} at any time.
                  Likewise,
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} has the right to
                  terminate my employment, or otherwise discipline, transfer, or
                  demote me at any time, with reason. No employee of
                  {/* Company Name */}
                  {pdfData.GeneralInformation.companyName} can enter into an
                  employment contract for a specified period of time, or make
                  any agreement contrary to this policy without the written
                  approval from the {/* R1,R2, R3 */}
                  {pdfData.CompanyStructure.R3} .
                  <Break />
                  <br />
                </p>

                <div className='sign-container'>
                  <div>
                    <p className='sign-p' />
                    <p className='sign-tag'>Employee's Printed Name</p>
                    <p className='sign-p' />
                    <p className='sign-tag'>Employee's Signature</p>
                  </div>

                  <div>
                    <p className='sign-p' />
                    <p className='sign-tag'>Position</p>
                    <p className='sign-p' />
                    <p className='sign-tag'>Date</p>
                  </div>
                </div>

                <hr style={{ marginTop: '16rem' }} />
                <Footer page='24' />
              </div>
            </div>
            <hr />
          </div>
        </>
      )}
    </>
  )
}

export default Pdf
