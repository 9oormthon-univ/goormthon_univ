import React, { useState } from 'react';
import { Alert, FormText } from '@goorm-dev/gds-components';
import * as S from './style';
import { dbService } from '../../fbase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { AlertMessage } from '../../@components/layout/navbar/style';

function Apply() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    univ: '',
    introduction: '',
    motivation: '',
    necessity: '',
    questions: '',
  });

  const [charCount, setCharCount] = useState({
    introduction: 0,
    motivation: 0,
    necessity: 0,
    questions: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (['introduction', 'motivation', 'necessity', 'questions'].includes(name)) {
      setCharCount({ ...charCount, [name]: value.length });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 이메일 유효성 검사
    // if (!validateEmail(formData.email)) {
    //   alert('잘못된 메일을 기입하셨습니다!');
    //   return;
    // }
    // // 휴대전화 유효성 검사
    // if (!validatePhone(formData.phone)) {
    //   alert('전화번호를 다시 확인해주세요!');
    //   return;
    // }

    // confirm 대화 상자 추가
    const isConfirmed = window.confirm('제출 후 수정이 불가합니다. 제출하시겠습니까?');
    if (isConfirmed) {
      if (isConfirmed) {
        try {
          await addDoc(collection(dbService, 'resume'), formData);
          alert(
            '제출해주셔서 감사합니다! 제출하신 이메일 주소로 후속 안내가 발송될 예정이니, 메일을 확인해 주시기 바랍니다 :)',
          );
          // 홈으로 이동
          navigate('/');
        } catch (error) {
          console.error('Error adding document: ', error);
          alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
      } else {
        console.log('제출이 취소되었습니다.');
      }
    } else {
      // 사용자가 아니오를 클릭했을 때의 처리
      console.log('제출이 취소되었습니다.');
    }
  };

  return (
    <S.RecuritBody>
      <S.BodyTitle>Apply</S.BodyTitle>
      <S.FormDescription>
        <p>대표 모집 기간 및 중앙행사는 아래와 같습니다.</p>
        <ul>
          <li>
            <strong>신규대학 모집 신청:</strong> 12월 29일(금) ~ 1월 12일(금) - 총 14일
          </li>
          <li>
            <strong>인터뷰 기간:</strong> 신청 후 상시 인터뷰 진행
          </li>
          <li>
            <strong>대표 OT:</strong> 1월 00일(토)
          </li>
          <li>
            <strong>운영진 모집 기간:</strong> 1월 11일 ~ 2월 11일
          </li>
        </ul>
        <h4 style={{ color: '#FF4B4B' }}>유의사항</h4>
        <p>기존 등록된 학교가 있다면 대표 신청이 불가합니다.</p>
        <p>미등록된 학교에 2명 이상의 대표 신청이 올 시 인터뷰 진행 후 대표 선정됩니다.</p>
        <p>이를 유의해서 확인 후 지원해주세요!</p>
      </S.FormDescription>

      <S.FormContainer onSubmit={handleSubmit}>
        <S.FormGroup style={{ width: '15rem' }}>
          <S.InputGroup>
            <S.ApplyTitle>이름</S.ApplyTitle>
            <S.ApplyInput
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              onChange={handleInputChange}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup style={{ width: '15rem' }}>
          <S.InputGroup>
            <S.ApplyTitle>전화번호</S.ApplyTitle>
            <S.ApplyInput type="tel" name="phone" placeholder="000-0000-0000" onChange={handleInputChange} required />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup style={{ width: '20rem' }}>
          <S.InputGroup>
            <S.ApplyTitle>메일</S.ApplyTitle>
            <S.ApplyInput type="email" name="email" placeholder="이메일 주소" onChange={handleInputChange} required />
          </S.InputGroup>
          <FormText>제출해주신 메일로 연락갈 예정입니다.</FormText>
        </S.FormGroup>
        <S.FormGroup style={{ width: '20rem' }}>
          <S.InputGroup>
            <S.ApplyTitle>소속 대학</S.ApplyTitle>
            <S.ApplyInput
              type="text"
              name="univ"
              placeholder="00대학, 캠퍼스가 있는 경우 00대학(캠퍼스명)"
              onChange={handleInputChange}
              required
            />
          </S.InputGroup>
          <FormText>중복 제출 대학 대표가 있을 경우 인터뷰를 통해 한 분이 결정될 예정입니다.</FormText>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>1. 자기 소개 ({charCount.introduction}/300)</S.ApplyTitle>
            <S.ApplyTextArea
              name="introduction"
              maxLength="300"
              placeholder="300자 이하로 작성해주세요"
              onChange={handleInputChange}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>2. 지원 동기 ({charCount.motivation}/500)</S.ApplyTitle>
            <S.ApplyTextArea
              name="motivation"
              maxLength={500}
              placeholder="500자 이하로 작성해주세요"
              onChange={handleInputChange}
              minLength={10}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>
              3. 본인 학교에 구름톤 유니브 필요 이유가 무엇인가요? ({charCount.necessity}/ 500)
            </S.ApplyTitle>
            <S.ApplyTextArea
              name="necessity"
              maxLength={500}
              placeholder="500자 이하로 작성해주세요"
              onChange={handleInputChange}
              minLength={10}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>4. 질문 및 궁금한 점이 있다면 작성해주세요! ({charCount.questions}/1000)</S.ApplyTitle>
            <S.ApplyTextArea
              name="questions"
              maxLength={500}
              placeholder="질문이나 궁금한 점을 작성해주세요"
              onChange={handleInputChange}
              minLength={10}
              required
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.SubmitButton type="submit">제출하기</S.SubmitButton>
      </S.FormContainer>
    </S.RecuritBody>
  );
}

export default Apply;
