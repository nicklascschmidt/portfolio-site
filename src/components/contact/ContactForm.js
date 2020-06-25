import React from "react";
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

const SubmitRow = styled(FormGroup)`
  display: flex;
  flex-flow: row-reverse nowrap;
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitterSubject: '',
      submitterMessage: '',
    };
  }
  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { submitterSubject, submitterMessage } = this.state;
    window.open(`mailto:nicklas.c.schmidt@gmail.com?subject=${submitterSubject}&body=${submitterMessage}`, '_blank');
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="formSubject" sm='3' md='2'>Subject</Label>
          <Col sm='9' md='10'>
            <Input
              id="formSubject"
              type="text"
              name="submitterSubject"
              placeholder="ex. Interview Scheduling"
              value={this.state.submitterSubject}
              onChange={e => this.handleChange(e)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="formMessage" sm='3' md='2'>Message</Label>
          <Col sm='9' md='10'>
            <Input
              type="textarea"
              name="submitterMessage"
              id="formMessage"
              placeholder="ex. You rock and we want to hire you!"
              value={this.state.submitterMessage}
              onChange={e => this.handleChange(e)}
            />
          </Col>
        </FormGroup>
        <SubmitRow>
          <Button onClick={this.handleSubmit}>Submit</Button>
          <Label className='m-2'>
            <FormText color="muted">*submit will open external default mail client</FormText>
          </Label>
        </SubmitRow>
      </Form>
    );
  }
}

export default ContactForm;
