import React, { useState } from 'react';

import Header from './Components/Header'
import QuestionName from './Components/QuestionName';
import QuestionCountry from './Components/QuestionCountry';
import QuestionTravelPartner from './Components/QuestionTravelPartner';
import Summary from './Components/Summary';
import Button from 'Components/Button';


export const App = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [partner, setPartner] = useState('');
  const [question, setQuestion] = useState('start');

  return (
    <>
      {question === 'start' && (
        <section className="form-section">
          <Header />
            
          <h2 tabIndex="0">Are you ready for your next adventure? Please fill in the form!</h2>

          <Button
            title='START SURVEY'
            function={setQuestion}
            value='firstQuestion'
            disabled=''
          />
          
        </section>
      )}

      {question === 'firstQuestion' && (
        <section className='form-section'>
          <Header />
          <form>
            <QuestionName
              name={name}
              funcSetName={setName}
            />
          </form>
          <Button
            title='NEXT QUESTION'
            function={setQuestion}
            value='secondQuestion'
            disabled={name === ''}
          />
        </section>
      )}

      {question === 'secondQuestion' && (
        <section className='form-section'>
          <Header />
          <form>
            <QuestionCountry
              place={place}
              funcSetPlace={setPlace}
            />
          </form>
          <Button
            title='NEXT QUESTION'
            function={setQuestion}
            value='thirdQuestion'
            disabled={place === ''}
          />
        </section>
      )}

      {question === 'thirdQuestion' && (
        <section className='form-section'>
          <Header />
          <form>
            <QuestionTravelPartner
              partner={partner}
              funcSetPartner={setPartner}
            />
          </form>
          <Button
            title='SUBMIT'
            function={setQuestion}
            value='summary'
            disabled={partner === ''}
          />
        </section>
      )}

      {question === 'summary' && (
        <section className='form-section'>
          <Summary
            name={name}
            place={place}
            partner={partner}
          />
        </section>
      )}
    </>
  )
}
