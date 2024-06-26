import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Popover, OverlayTrigger } from "react-bootstrap";
import { dataabout, meta, worktimeline, services } from "../../content_option";
import { skills } from "./skills";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
            <p className="instruction-text">
              Hover over the icons to see more details
            </p>
          </Col>
          <Col lg="7">
            <div className="skills-container">
              {skills.map((mainSkill, i) => {
                const Icon = mainSkill.icon;

                const popover = (
                  <Popover id={`popover-${i}`}>
                    <Popover.Body className="popover-body">
                      {mainSkill.subs.map((subSkill, j) => {
                        const SubIcon = subSkill.icon;
                        return (
                          <div key={j} className="sub-skill-item">
                            <SubIcon className="skill-icon" />
                            <p className="skill-name">{subSkill.name}</p>
                          </div>
                        );
                      })}
                    </Popover.Body>
                  </Popover>
                );

                return (
                  <OverlayTrigger
                    key={i}
                    trigger="hover"
                    placement="bottom"
                    overlay={popover}
                    flip={true}
                  >
                    <div className="main-skill">
                      <Icon size={50} className="skill-icon" />
                      <p className="skill-name">{mainSkill.name}</p>
                    </div>
                  </OverlayTrigger>
                );
              })}
            </div>
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
