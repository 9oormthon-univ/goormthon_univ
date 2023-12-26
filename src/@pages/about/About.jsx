import { GoormNavbar } from '@goorm-dev/gds-components';
import React from 'react';
import * as S from './style';
import { ActivityIcon, CheckCircleIcon } from '@goorm-dev/gds-icons';
import { HScrollTable } from '@goorm-dev/gds-tables';
//...

export default function About() {
  return (
    <div class="bg-white">
      <h1>아아</h1>

      <div class="row">
        <div class="col-sm-8">col-sm-8</div>
        <div class="col-sm-4">col-sm-4</div>
      </div>
      <div class="row">
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
        <div class="col-sm">col-sm</div>
      </div>
      <h2>아아</h2>
      <h3>아아</h3>
      <h4>아아</h4>
      <h5>아아</h5>
      <a href="#">구름 a태그가 맞나?</a>

      <h6>은?</h6>
    </div>
  );
}
