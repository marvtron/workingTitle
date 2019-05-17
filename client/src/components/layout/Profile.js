import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "../Card/Card";
import { FormInputs } from "../FormInputs/FormInputs";
import { UserCard } from "../UserCard/UserCard";
import Button from "../CustomButton/CustomButton";

import avatar from "../../assets/img/faces/felix.jpg";

class Profile extends Component {
  render() {
    return (
      <div  style={{ fontFamily: "monospace"}} className="content">
        <Container fluid>
          <Row>
          <Col md={4}>
              <UserCard
                bgImage= 'https://i.ytimg.com/vi/E5rESN5urWc/maxresdefault.jpg'
                avatar={avatar}
                name="Felix Arvid Ulf Kjellberg"
                userName="PewDiePie"
                description={
                  <span>
                    "Don't be a salad,
                    <br />
                    be the best damn broccoli 
                    <br />
                    you could ever be."
                  </span>
                }
                socials={
                  <div className ='socials center-align'>
                    <Button simple>
                    <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button simple>
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button simple >
                      <i className="fab fa-youtube" />
                    </Button>
                  </div>
                }
              />
            </Col>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "YouTube",
                          disabled: true
                        },
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: "PewDiePie"
                        },
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "Felix"
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: "Kjellberg"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          defaultValue:
                            "Brighton, UK"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: "Brighton"
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: "UK"
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <FormLabel>About Me</FormLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Don't you dare die on me, Bob!"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
