import React, { Component } from 'react';
import i18next from 'i18next';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { LanguageOutlined } from '@material-ui/icons/';
import Section from '../../components/Section';

class Language extends Component {
  constructor(props) {
    super(props);
    this.changeLanguageHandler = this.changeLanguageHandler.bind(this);

    this.state = {
      lang: i18next.language
    };
  }

  // If user changes the language manually
  changeLanguageHandler(event) {
    const newLanguage = event.target.value;
    this.setState({
      lang: newLanguage
    });
    i18next.changeLanguage(newLanguage);
  }

  render() {
    const { lang } = this.state;

    return (
      <Section title="Pick a language" icon={<LanguageOutlined />}>
        <FormControl>
          <RadioGroup name="position" value={lang} onChange={this.changeLanguageHandler} row>
            <FormControlLabel value="en" control={<Radio color="primary" />} label="English" labelPlacement="end" />
            <FormControlLabel value="fr" control={<Radio color="primary" />} label="French" labelPlacement="end" />
          </RadioGroup>
        </FormControl>
      </Section>
    );
  }
}

export default Language;
