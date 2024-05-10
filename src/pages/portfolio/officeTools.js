import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { officeTools, meta } from "../../hook";

function OfficeTools() {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Portfolio | {meta.title} </title>{" "}
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4"> Office Tools </h1>{" "}
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <div className="mb-5 po_items_ho">
                    {officeTools.map((data, i) => {
                        return (
                            <div key={i} className="po_item">
                                <img src={data.img} alt="" />
                                <div className="content">
                                    <h2 className="text-primary">{data.description}</h2>
                                    <ul className="h6 " style={{ textAlign: 'left' }}>
                                        <li className="py-2">{data.description1}</li>
                                        <li className="py-2">{data.description2}</li>
                                        <li className="py-2">{data.description3}</li>
                                        <li className="py-2">{data.description4}</li>
                                    </ul>
                                    <div className="inline">
                                        <a href={data.website}>WebSite</a>
                                        <a href={data.github}>GitHub</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </HelmetProvider>
    );
}

export default OfficeTools;
