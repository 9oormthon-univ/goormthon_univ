import React, { useState } from 'react';
import { Button } from '@goorm-dev/gds-components';
import * as S from './style';
import { dbService } from '../../fbase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

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
      <S.BodyTitle>지원서 작성하기</S.BodyTitle>
      <S.FormDescription>
        <S.CautionTitle>유니브 대표 주요 일정</S.CautionTitle>
        <ul>
          <li>
            <strong>신규 유니브 모집 신청</strong> : 12월 29일 (금) ~ 1월 12일 (금) (총 14일)
          </li>
          <li>
            <strong>대표 인터뷰 기간</strong> : 별도 안내 예정
          </li>
          <li>
            <strong>합격 발표</strong> : 1월 17일(수)
          </li>
          <li>
            <strong>대표 OT</strong> : 1월 00일(토)
          </li>
          <li>
            <strong>운영진 모집 기간</strong> : 1월 11일 ~ 2월 11일
          </li>
          <S.CautionWrapper>
            <S.Caution2Li>현재 함께하는 유니브에서는 대표 신청이 불가합니다.</S.Caution2Li>
            <S.Caution2Li>2명 이상 대표 신청을 할 시 인터뷰 진행 후 대표 선정됩니다.</S.Caution2Li>
            <S.Caution2Li>제출해주신 메일로 인터뷰 안내 예정입니다.</S.Caution2Li>
          </S.CautionWrapper>
        </ul>
      </S.FormDescription>

      <S.FormContainer onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>이름</S.ApplyTitle>
            <S.ApplyInput
              bsSize="xl"
              containerClassName=""
              maxLength={null}
              type="text"
              name="name"
              placeholder="이름 입력"
              onChange={handleInputChange}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>전화번호</S.ApplyTitle>
            <S.ApplyInput
              bsSize="xl"
              containerClassName=""
              maxLength={null}
              type="tel"
              name="phone"
              placeholder="000-0000-0000"
              onChange={handleInputChange}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>메일</S.ApplyTitle>
            <S.ApplyInput
              bsSize="xl"
              containerClassName=""
              maxLength={null}
              type="email"
              name="email"
              placeholder="example@mail.com"
              onChange={handleInputChange}
              required
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>소속 대학</S.ApplyTitle>
            <S.ApplyInput
              bsSize="xl"
              maxLength={null}
              type="text"
              name="univ"
              placeholder="구름대학교(구름캠퍼스)"
              onChange={handleInputChange}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>1. 본인을 소개해주세요! ({charCount.introduction}/500)</S.ApplyTitle>
            <S.ApplyTextArea
              type="textarea"
              bgSize="xl"
              name="introduction"
              maxLength="500"
              placeholder="500자 이하로 작성해주세요"
              onChange={handleInputChange}
              minLength={10}
              required
              style={{ height: '8rem' }}
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>
              2. 구름톤 유니브 대표로 지원하신 동기가 무엇인가요? ({charCount.motivation}/500)
            </S.ApplyTitle>
            <S.ApplyTextArea
              type="textarea"
              bgSize="xl"
              name="motivation"
              maxLength={500}
              placeholder="500자 이하로 작성해주세요"
              onChange={handleInputChange}
              minLength={10}
              required
              style={{ height: '8rem' }}
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>3. 대표로서 구름톤 유니브를 어떻게 운영하실건가요? ({charCount.necessity}/500)</S.ApplyTitle>
            <S.ApplyTextArea
              type="textarea"
              bgSize="xl"
              name="necessity"
              maxLength={500}
              placeholder="500자 이하로 작성해주세요"
              onChange={handleInputChange}
              minLength={10}
              required
              style={{ height: '8rem' }}
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>4. (선택)질문 및 궁금한 점이 있다면 작성해주세요! ({charCount.questions}/1000)</S.ApplyTitle>
            <S.ApplyTextArea
              type="textarea"
              bgSize="xl"
              name="questions"
              maxLength={1000}
              placeholder="질문이나 궁금한 점을 작성해주세요"
              onChange={handleInputChange}
              style={{ height: '8rem' }}
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.ButtonWrapper>
          <Button color="primary" iconSide="right" size="xl" tag="button" type="submit">
            제출하기
          </Button>
        </S.ButtonWrapper>
      </S.FormContainer>
    </S.RecuritBody>
  );
}

export default Apply;
