import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, worktimeline, education, skills } from "../../hook";

export default function About() {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> About | {meta.title}</title>
                    <meta
                        name="description"
                        content={meta.description}
                    />
                </Helmet>
                <Row className="mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">CV</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">{dataabout.title}</h3>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <div>
                            <p>{dataabout.phone}</p>
                            <p>{dataabout.email}</p>
                            <p>{dataabout.location}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">Technical Skills</h3>
                    </Col>
                    <Col lg="7">
                        {skills.map((data, i) => {
                            return (
                                <div key={i}>
                                    <h3 className="progress-title text-uppercase">{data.name}</h3>
                                    <p className="py-2">{data.additional}</p>
                                    <div className="progress ">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${data.value}%`,
                                            }}
                                        >
                                            <div className="progress-value">{data.value}%</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
                <Row className="">
                    <Col lg="5">
                        <h3 className="py-4">Work Experience</h3>
                    </Col>
                    <Col lg="7">
                        <table className="table caption-top">
                            <tbody>
                                {worktimeline.map((data, i) => {
                                    return (
                                        <>
                                            <tr key={i}>
                                                <th scope="row">{data.jobtitle}</th>
                                                <td>{data.where}</td>
                                                <td>{data.date}</td>
                                            </tr>
                                            <tr key={`responsibility-${i}`}>
                                                <td colSpan="3">
                                                    <p>Responsibilities: </p>
                                                    <ul>
                                                        <li className="responsibility-text">* {data.responsibility1}</li>
                                                        <li className="responsibility-text">* {data.responsibility2}</li>
                                                        <li className="responsibility-text">* {data.responsibility3}</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row className=" sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">Education</h3>
                    </Col>
                    <Col lg="7">
                        <table className="table caption-top">
                            <tbody>
                                {education.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{data.education}</th>
                                            <td>{data.university}</td>
                                            <td>{data.duration}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Col>
                </Row>


            </Container>
        </HelmetProvider>
    );
}
