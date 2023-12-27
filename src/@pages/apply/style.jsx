import styled from 'styled-components';

export const RecuritBody = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const BodyTitle = styled.h2`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  margin-bottom: 2.25rem;
`;

export const ApplyHeaderContainer = styled.div`
  background: var(--light-gray-gray-050, #f7f7fa);
  height: 20rem;
  width: 30%;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: start;
  justify-content: start;
  padding: 1rem;
`;

// In your './style' file
export const SubmitButton = styled.button`
  background-color: #007bff; // Example color
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3; // Example hover color
  }
`;

export const FormGroup = styled.div`
  width: 80%;
  margin-bottom: 1.5rem;
`;

export const FormDescription = styled.div`
  font-size: 1rem;
  color: #333;
  text-align: left; /* Align text to the left */
  margin-bottom: 1.5rem;

  ul {
    padding-left: 20px; /* Add padding for bullet points */
  }

  li {
    margin-bottom: 0.5rem; /* Space between list items */
  }

  h4 {
    margin-top: 1rem; /* Space before the heading */
    margin-bottom: 0.5rem; /* Space after the heading */
    font-weight: bold;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputGroupText = styled.span`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ApplyTitle = styled.h4`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
`;
export const FormText = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
`;
export const ApplyTextArea = styled.textarea`
  flex-grow: 1;
  height: 9rem;
  padding: 1rem;
  padding-left: 1.5rem;
  resize: none;
  border-radius: 8px;
  border: 1px solid #aeafb9;
  font-size: 1rem;
  margin-right: 1rem;
  font-family: inherit;
  ::placeholder {
    color: #acacac;
  }
  font-weight: 500;
`;

export const ApplyInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  padding-left: 1rem;
  border-radius: 8px;
  border: 1px solid #aeafb9;
  font-size: 1rem;
  margin-right: 1rem;
  font-family: inherit;
  ::placeholder {
    color: #acacac;
  }
  font-weight: 500;
`;
