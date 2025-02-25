import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    timeshareConcern: '',
    timeshareConcernOther: '',
    contractHolder: '',
    timeshareCompany: '',
    stillMakingPayments: '',
    maintenanceFees: '',
    triedToCancel: '',
    exitTimeline: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    nextStep(); // Proceed to a "Thank You" screen
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2>1. What is your biggest concern with your timeshare?</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="timeshareConcern"
                  value="Monthly fees are too high"
                  checked={formData.timeshareConcern === 'Monthly fees are too high'}
                  onChange={handleChange}
                />
                Monthly fees are too high
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="timeshareConcern"
                  value="Can’t book vacations"
                  checked={formData.timeshareConcern === 'Can’t book vacations'}
                  onChange={handleChange}
                />
                Can’t book vacations
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="timeshareConcern"
                  value="No longer use it"
                  checked={formData.timeshareConcern === 'No longer use it'}
                  onChange={handleChange}
                />
                No longer use it
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="timeshareConcern"
                  value="Other"
                  checked={formData.timeshareConcern === 'Other'}
                  onChange={handleChange}
                />
                Other
              </label>
              {formData.timeshareConcern === 'Other' && (
                <input
                  type="text"
                  name="timeshareConcernOther"
                  placeholder="Please specify"
                  value={formData.timeshareConcernOther}
                  onChange={handleChange}
                />
              )}
            </div>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h2>2. Who is listed on the timeshare contract?</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="contractHolder"
                  value="Just me"
                  checked={formData.contractHolder === 'Just me'}
                  onChange={handleChange}
                />
                Just me
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="contractHolder"
                  value="Me and a spouse/partner"
                  checked={formData.contractHolder === 'Me and a spouse/partner'}
                  onChange={handleChange}
                />
                Me and a spouse/partner
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="contractHolder"
                  value="A family member/friend"
                  checked={formData.contractHolder === 'A family member/friend'}
                  onChange={handleChange}
                />
                A family member/friend
              </label>
            </div>
            <div className="button-group">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h2>3. Which company is your timeshare with?</h2>
            <div>
              <select
                name="timeshareCompany"
                value={formData.timeshareCompany}
                onChange={handleChange}
              >
                <option value="">Select a company</option>
                <option value="Marriott Vacation Club">Marriott Vacation Club</option>
                <option value="Wyndham">Wyndham</option>
                <option value="Hilton Grand Vacations">Hilton Grand Vacations</option>
                <option value="Disney Vacation Club">Disney Vacation Club</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="button-group">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-step">
            <h2>4. Are you still making payments on your timeshare?</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="stillMakingPayments"
                  value="Yes"
                  checked={formData.stillMakingPayments === 'Yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="stillMakingPayments"
                  value="No, it’s paid off"
                  checked={formData.stillMakingPayments === 'No, it’s paid off'}
                  onChange={handleChange}
                />
                No, it’s paid off
              </label>
            </div>
            <div className="button-group">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="form-step">
            <h2>5. How much are you paying in maintenance fees each year?</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="maintenanceFees"
                  value="Less than $1,000"
                  checked={formData.maintenanceFees === 'Less than $1,000'}
                  onChange={handleChange}
                />
                Less than $1,000
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="maintenanceFees"
                  value="$1,000–$3,000"
                  checked={formData.maintenanceFees === '$1,000–$3,000'}
                  onChange={handleChange}
                />
                $1,000–$3,000
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="maintenanceFees"
                  value="More than $3,000"
                  checked={formData.maintenanceFees === 'More than $3,000'}
                  onChange={handleChange}
                />
                More than $3,000
              </label>
            </div>
            <div className="button-group">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="form-step">
            <h2>6. Have you tried to cancel your timeshare before?</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="triedToCancel"
                  value="No, this is my first time"
                  checked={formData.triedToCancel === 'No, this is my first time'}
                  onChange={handleChange}
                />
                No, this is my first time
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="triedToCancel"
                  value="Yes, but I need help"
                  checked={formData.triedToCancel === 'Yes, but I need help'}
                  onChange={handleChange}
                />
                Yes, but I need help
              </label>
            </div>
            <div className="button-group">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="form-step">
            <h2>7. How soon are you looking to exit your timeshare?</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="exitTimeline"
                  value="As soon as possible"
                  checked={formData.exitTimeline === 'As soon as possible'}
                  onChange={handleChange}
                />
                As soon as possible
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="exitTimeline"
                  value="Within the next 3 months"
                  checked={formData.exitTimeline === 'Within the next 3 months'}
                  onChange={handleChange}
                />
                Within the next 3 months
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="exitTimeline"
                  value="I’m just exploring options"
                  checked={formData.exitTimeline === 'I’m just exploring options'}
                  onChange={handleChange}
                />
                I’m just exploring options
              </label>
            </div>
            <div className="button-group">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="button" onClick={nextStep}>Next</button>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="form-step">
            <h2>8. Please provide your contact information</h2>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-group">
              <button type="button" onClick={prevStep}>Back</button>
              <button type="submit">Submit</button>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="form-step">
            <h2>Thank You!</h2>
            <p>Your submission has been received.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="multi-step-form">
      {renderStep()}
    </form>
  );
};

export default MultiStepForm;
