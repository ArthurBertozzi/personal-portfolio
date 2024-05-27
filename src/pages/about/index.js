import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, worktimeline, services } from "../../content_option";
import { skills } from "../../skills";

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
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((mainSkill, i) => {
              const Icon = mainSkill.icon;
              const subSkillsChunks = [];
              for (let i = 0; i < mainSkill.subs.length; i += 4) {
                subSkillsChunks.push(mainSkill.subs.slice(i, i + 4));
              }
              return (
                <div key={i} className="skill-block">
                  <div className="main-skill">
                    <Icon size={50} className="skill-icon" />
                    <p className="skill-name">{mainSkill.name}</p>
                  </div>
                  {subSkillsChunks.map((chunk, index) => (
                    <div key={index} className="sub-skills">
                      {chunk.map((subSkill, j) => {
                        const SubIcon = subSkill.icon;
                        return (
                          <div key={j} className="sub-skill-item">
                            <SubIcon className="skill-icon" />
                            <p className="skill-name">{subSkill.name}</p>
                          </div>
                        );
                      })}
                      {Array(4 - chunk.length)
                        .fill(null)
                        .map((_, k) => (
                          <div
                            key={`empty-${k}`}
                            className="sub-skill-item empty-skill"
                          ></div>
                        ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </Col>
        </Row>
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
