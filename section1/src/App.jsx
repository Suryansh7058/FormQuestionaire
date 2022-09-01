import { useState } from 'react';
import './App.css';
import {
  TextField,
  Grid,
  Typography,
  Button,
  FormHelperText,
} from '@mui/material';
import CheckBoxQuestion from './Components/CheckBoxQuestion';
import { validateEmail, validatePhone } from './util/validate';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidate, setEmailValidate] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberValidate, setPhoneNumberValidate] = useState(true);
  const [feedback1, setFeedback1] = useState('');
  const [feedback2, setFeedback2] = useState('');
  const [feedback3, setFeedback3] = useState('');
  const [feedback4, setFeedback4] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailValidate(false);
      const element = document.getElementById('email-input');
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
      return;
    }
    if (!validatePhone(phoneNumber)) {
      setPhoneNumberValidate(false);
      const element = document.getElementById('phone-number');
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
      return;
    }
    const formData = {
      name,
      email,
      phoneNumber,
      feedback1,
      feedback2,
      feedback3,
      feedback4,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
  };
  return (
    <div className="App">
      <Typography variant="h2" textAlign={'center'}>
        Aromatic Bar
      </Typography>
      <Typography variant="p" textAlign={'center'} width={'25rem'}>
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you.
      </Typography>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <Grid
            container
            justify="center"
            direction="column"
            color="black"
            gap={'2rem'}
          >
            <Grid item justifySelf="start">
              <TextField
                id="name-input"
                name="name"
                label="Name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                fullWidth={true}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                id="email-input"
                name="email"
                label="Email"
                type="text"
                error={!emailValidate}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth={true}
                required
              />
              {!emailValidate && (
                <FormHelperText error={!emailValidate}>
                  Enter Correct Email
                </FormHelperText>
              )}
            </Grid>
            <Grid item>
              <TextField
                id="phone-number"
                name="phone-number"
                label="Phone Number"
                type="tel"
                pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                maxLength="12"
                value={phoneNumber}
                error={!phoneNumberValidate}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setPhoneNumberValidate(true);
                }}
                fullWidth={true}
                required
              />
              {!phoneNumberValidate && (
                <FormHelperText error={!phoneNumberValidate}>
                  Enter Correct Phone Number
                </FormHelperText>
              )}
            </Grid>
            <Grid item justifySelf={'start'}>
              <CheckBoxQuestion
                title={
                  'Please rate the quality of the service you received from your host.'
                }
                feedback={feedback1}
                setFeedback={setFeedback1}
              />
            </Grid>
            <Grid item justifySelf={'start'}>
              <CheckBoxQuestion
                title={'Please rate the quality of your beverage.'}
                feedback={feedback2}
                setFeedback={setFeedback2}
              />
            </Grid>
            <Grid item justifySelf={'start'}>
              <CheckBoxQuestion
                title={'Was our restaurant clean?'}
                feedback={feedback3}
                setFeedback={setFeedback3}
              />
            </Grid>
            <Grid item justifySelf={'start'}>
              <CheckBoxQuestion
                title={'Please rate your overall dining experience'}
                feedback={feedback4}
                setFeedback={setFeedback4}
              />
            </Grid>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default App;
