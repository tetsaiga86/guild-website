import React from 'react'
import Footer from './footer'
import Header from './header'
import {
  Grid,
  Row,
  Clearfix,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Radio,
  Button

} from 'react-bootstrap'
import FieldGroup from './fieldGroup'
import $ from 'jquery'

const submitUrl = '/recruitment_application'
class RecruitApplication extends React.Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
    this.onEditNameServer = this.createEditHandler('name_server');
    this.onEditBattletag = this.createEditHandler('battletag');
    this.onEditClassSpec = this.createEditHandler('class_spec');
    this.onEditArmoryUrl = this.createEditHandler('armoryUrl');
    this.onEditEmail = this.createEditHandler('email');
    this.onEditQ1 = this.createEditHandler('q1');
    this.onEditQ2 = this.createEditHandler('q2');
    this.onEditQ3 = this.createEditHandler('q3');
    this.onEditQ4 = this.createEditHandler('q4');
    this.onEditQ5 = this.createEditHandler('q5');
    this.getValidationState = this.getValidationState.bind(this);
    this.checkValidation = this.checkValidation.bind(this);

    this.state = {
      name_server: "",
    	battletag: "",
    	class_spec: "",
    	armoryUrl: "",
    	email: "",
    	q1: undefined,
    	q2: undefined,
    	q3: undefined,
    	q4: "",
    	q5: "",
    }
  }

  submit(){
    //post to recruit app model
    $.post(submitUrl, this.state, () => {
      if(confirm('Application Submitted')){
        location = ('/')
      }
    })
  }

  createEditHandler(field_name) {
    return (e) => {
      this.setState({[field_name]: e.target.value});
    }
  }

  checkValidation(vs){
    for (var key in vs){
      if (vs[key].state!='success') {
        return false
      }
    }
    return true
  }

  getValidationState(){
    const fieldValidators = {
      name_server: {
        isValid: (val) => {
          return val.match(/\w@\w/)
        },
        errorMessage: 'Must follow pattern Name@Server'
      },
      battletag: {
        isValid: (val) => {
          return val.match(/\w#\d{4}/)
        },
        errorMessage: 'Must follow pattern Name#1234'
      },
      class_spec: {
        isValid: (val) => {
          return val.match(/^\w+\s+\w+$/)
        },
        errorMessage: 'Must follow pattern DeathKnight Frost'
      },
      email: {
        isValid: (val) => {
          return val.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        },
        errorMessage: 'Must be a valid email address (this will be used to contact you)'
      },
      armoryUrl: {
        isValid: (val) => {
          return val.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/)
        },
        errorMessage: 'Must be a valid link to your character\'s armory page'
      },
      q1: {
        isValid: (val) => {
          return this.state.q1=="true"
        },
        errorMessage: 'This is a requirement for joining the guild'
      },
      q2: {
        isValid: (val) => {
          return this.state.q2=="false"
        },
        errorMessage: 'This is a requirement for joining the guild'
      },
      q3: {
        isValid: (val) => {
          return this.state.q3=="false"
        },
        errorMessage: 'This is a requirement for joining the guild'
      },
      q5:{
        isValid: (val)=> {
          return val.length>20
        },
        errorMessage: 'Tell us more!'
      }
    }

    const validationStates = {};

    Object.keys(fieldValidators).forEach((field) => {
      const validator = fieldValidators[field];
      const value = this.state[field];

      if (validator.isValid(value)) {
        validationStates[field] = { state: 'success' }
      }

      else if (!value) {
        validationStates[field] = { state: null }
      }

      else {
        validationStates[field] = { state: 'error', help: validator.errorMessage }
      }
    });

    return validationStates
  }

  render () {
    const validationStates = this.getValidationState();
    return (
      <div className="home-div">
        <Header className="header" />
        <div className="main-page">
          <Grid>
            <Row className="top-row">
              <Col xs={18} md={12}>
                <Row>
                  <Col xs={12} md={8}>
                    <p>F O O L S A V A G E is always looking for active members. We list our most needed classes on our homepage, but we take and review all aplicants for serious consideration. If you believe you could be an asset to our guild and are dedicated to progression, please fill out the form below and we will be in contact asap.</p>
                    <h6>All information shared in this application will only be used for contact purposes and will be destroyed after the application is considered closed. Only officers in the guild will have access to this information.</h6>
                  </Col>
                  <Col xs={6} md={4}>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={8}>
                    <form>
                      <FieldGroup
                        id="fg1"
                        type="text"
                        label="Character Name and current Server"
                        placeholder="Name@Kiljaeden"
                        value={this.state.name_server}
                        onChange={this.onEditNameServer}
                        validationState={validationStates.name_server.state}
                        help={validationStates.name_server.help}
                      />
                      <FieldGroup
                        id="fg2"
                        type="text"
                        label="BattleTag"
                        placeholder="Name#1234"
                        value={this.state.battletag}
                        onChange={this.onEditBattletag}
                        validationState={validationStates.battletag.state}
                        help={validationStates.battletag.help}
                      />
                      <FieldGroup
                        type="text"
                        id="fg3"
                        label="Class and Main Spec"
                        placeholder="Class Spec"
                        value={this.state.class_spec}
                        onChange={this.onEditClassSpec}
                        validationState={validationStates.class_spec.state}
                        help={validationStates.class_spec.help}
                      />
                      <FieldGroup
                        type="text"
                        id="fg4"
                        label="Armory profile Link"
                        placeholder="Copy link here"
                        value={this.state.armoryUrl}
                        onChange={this.onEditArmoryUrl}
                        validationState={validationStates.armoryUrl.state}
                        help={validationStates.armoryUrl.help}
                      />
                    <FieldGroup
                        type="email"
                        id="fg5"
                        label="Email Address"
                        placeholder="Enter Email Here"
                        value={this.state.email}
                        onChange={this.onEditEmail}
                        validationState={validationStates.email.state}
                        help={validationStates.email.help}
                      />

                      <FormGroup validationState={validationStates.q1.state}>
                        <ControlLabel>Are you able to commit to our raid times?</ControlLabel>
                        <Radio name="q1" id="q1o1" value="true" onChange={this.onEditQ1} checked={this.state.q1 === "true"} inline>
                          Yes
                        </Radio>
                        <Radio name="q1" id="q1o2" value="false" onChange={this.onEditQ1} checked={this.state.q1 === "false"} inline>
                          No
                        </Radio>
                        <HelpBlock>{validationStates.q1.help}</HelpBlock>
                      </FormGroup>

                      <FormGroup validationState={validationStates.q2.state}>
                        <ControlLabel>
                          If you need to miss or be late for a raid, we require you to let an officer know, asap. Would this be a problem for you?
                        </ControlLabel>
                        <Radio name="q2" id="q2o1" value="true" onChange={this.onEditQ2} checked={this.state.q2 === "true"} inline>
                          Yes
                        </Radio>
                        <Radio name="q2" id="q2o2" value="false" onChange={this.onEditQ2} checked={this.state.q2 === "false"} inline>
                          No
                        </Radio>
                        <HelpBlock>{validationStates.q2.help}</HelpBlock>
                      </FormGroup>

                      <FormGroup validationState={validationStates.q3.state}>
                        <ControlLabel>
                          We require certain addons for loot distribution and to assist in progression. Will installing and keeping these addons up to date be an issue for you?
                        </ControlLabel>
                        <Radio name="q3" id="q3o1" value="true" onChange={this.onEditQ3} checked={this.state.q3 === "true"} inline>
                          Yes
                        </Radio>
                        <Radio name="q3" id="q3o2" value="false" onChange={this.onEditQ3} checked={this.state.q3 === "false"} inline>
                          No
                        </Radio>
                        <HelpBlock>{validationStates.q3.help}</HelpBlock>
                      </FormGroup>

                      <FieldGroup
                        componentClass="textarea"
                        id="fg6"
                        label="What secondary specs or alternative characters do you feel you play at a similar level to your main? Do {word}you have sufficient gear to be raid viable with these specs/characters? What recent experience do you have playing them?"
                        placeholder=""
                        value={this.state.q4}
                        onChange={this.onEditQ4}
                      />

                      <FieldGroup
                        componentClass="textarea"
                        id="fg7"
                        label="Tell us about yourself. Show us the man/woman behind the character.  Impress us, make us laugh. Convince us we want you in our guild. If you don't take the time to sell yourself, there's no reason for us to want to take you. We've worked hard to make this a great place to raid and demand incoming candidates prove they're committed to continuing that."
                        placeholder=""
                        value={this.state.q5}
                        onChange={this.onEditQ5}
                        validationState={validationStates.q5.state}
                        help={validationStates.q5.help}
                      />

                    <Button bsStyle="success" onClick={this.submit} disabled={!this.checkValidation(validationStates)}>
                        Submit
                      </Button>
                    </form>
                  </Col>
                </Row>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
            <Row className="footer">
              <Footer />
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default RecruitApplication
