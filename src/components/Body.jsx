import React from "react";
import { Container, Card, Row, Col, Form, Table } from "react-bootstrap";
import { AiFillHome, AiOutlineBars, AiTwotoneSetting, AiFillFolder } from "react-icons/ai";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

export default function Body() {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
  const options = {
    maintainAspectRatio: true,

    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const labels = ["00:00", "01:00", "03:00"];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Data",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <main className="p-4">
        <section className="px-5 py-4">
          <div className="d-flex flex-row w-full justify-content-between">
            <h2>Home</h2>
            <div className="d-flex flex-row">
              <div className="ms-2 rounded-pill d-flex align-items-center px-3" style={{ background: "white" }}>
                <AiFillHome className="me-2 " color="#5CA6B9" />
                <span style={{ color: "#5CA6B9" }}>Home</span>
              </div>
              <div className="ms-2 rounded-pill d-flex align-items-center px-3" style={{ background: "white" }}>
                <AiOutlineBars className="me-2 " color="#5CA6B9" />
                <span style={{ color: "#5CA6B9" }}>Logs</span>
              </div>
              <div className="ms-2 rounded-pill d-flex align-items-center px-3" style={{ background: "white" }}>
                <AiTwotoneSetting className="me-2 " color="#5CA6B9" />
                <span style={{ color: "#5CA6B9" }}>Configuration</span>
              </div>
              <div className="ms-2 rounded-pill d-flex align-items-center px-3" style={{ background: "white" }}>
                <AiFillFolder className="me-2 " color="#5CA6B9" />
                <span style={{ color: "#5CA6B9" }}>Save Files</span>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 ">
          <Row>
            <Col xs lg="3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Container>
                    <Row>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "15px" }}>
                        Last Update
                      </span>
                      <span className="fw-bold text-info" style={{ fontSize: "10px" }}>
                        12-07-2022 00:00:00 AM
                      </span>
                      <hr />
                      <span className="fw-semibold text-secondary" style={{ fontSize: "15px" }}>
                        Log Summary
                      </span>
                      <span className="fw-bold text-secondary" style={{ fontSize: "15px" }}>
                        Last 24 Hours
                      </span>
                      <span className="fw-semibold text-secondary mt-2" style={{ fontSize: "15px" }}>
                        Data Transfer
                      </span>
                      <Row>
                        <Col>
                          <Row>
                            <span>Error</span>
                            <span className="text-danger">1</span>
                          </Row>
                        </Col>

                        <Col>
                          {" "}
                          <Row>
                            <span>Warning</span>
                            <span className="text-warning">0</span>
                          </Row>
                        </Col>
                      </Row>
                      <span className="fw-semibold text-secondary mt-2" style={{ fontSize: "15px" }}>
                        Measurement
                      </span>
                      <Row>
                        <Col>
                          <Row>
                            <span>Error</span>
                            <span className="text-danger">1</span>
                          </Row>
                        </Col>

                        <Col>
                          {" "}
                          <Row>
                            <span>Warning</span>
                            <span className="text-warning">0</span>
                          </Row>
                        </Col>
                      </Row>
                      <span className="fw-semibold text-secondary mt-2" style={{ fontSize: "15px" }}>
                        Device Health
                      </span>
                      <Row>
                        <Col>
                          <Row>
                            <span>Error</span>
                            <span className="text-danger">1</span>
                          </Row>
                        </Col>

                        <Col>
                          {" "}
                          <Row>
                            <span>Warning</span>
                            <span className="text-warning">0</span>
                          </Row>
                        </Col>
                      </Row>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Row>
                    <Col xs lg="3" className="ps-4">
                      <Row>
                        <span className="fw-semibold text-secondary fs-2">pH</span>
                        <span className="fw-semibold text-secondary fs-2">7</span>
                        <Col>
                          <Table borderless className="mt-2">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="text-secondary fw-semibold ">Unit ID</span>
                                </td>
                                <td>
                                  <span className="text-secondary fw-semibold">01</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="text-secondary fw-semibold">Device ID</span>
                                </td>
                                <td>
                                  <span className="text-secondary fw-semibold">SW-02</span>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          <Table borderless className="mt-4">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="text-secondary fw-semibold ">Min</span>
                                </td>
                                <td>
                                  <span className="text-secondary fw-semibold">01</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="text-secondary fw-semibold">Max</span>
                                </td>
                                <td>
                                  <span className="text-secondary fw-semibold">02</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="text-secondary fw-semibold">Median</span>
                                </td>
                                <td>
                                  <span className="text-secondary fw-semibold">02</span>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col className="d-flex align-items-end flex-column">
                          <Form.Select size="sm" style={{ width: "300px" }}>
                            <option>Select Date</option>
                          </Form.Select>
                        </Col>
                      </Row>
                      <Line options={options} data={data} />{" "}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="px-5 mt-3 d-flex justify-content-end">
          <Row>
            <Col>
              <Form.Select size="sm" style={{ width: "300px" }}>
                <option>All Unit</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select size="sm" style={{ width: "300px" }}>
                <option>All Device Type</option>
              </Form.Select>
            </Col>
          </Row>
        </section>
        <section className="center-col px-5 mt-3">
          <Row>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-3">
              <Card style={{ width: "15rem", height: "100%" }}>
                <Card.Body>
                  <Row>
                    <Col>
                      <span className="fw-semibold text-secondary" style={{ fontSize: "20px" }}>
                        Debit
                      </span>
                    </Col>
                    <Col className="text-end">
                      {" "}
                      <span className="fw-semibold text-secondary" style={{ fontSize: "13px" }}>
                        Unit 01
                      </span>
                    </Col>
                  </Row>
                  <Col>
                    <span className="text-secondary fw-bold fs-2">30</span>
                    <span className="text-secondary fw-bold fs-4 ms-2">m3/s</span>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
}
