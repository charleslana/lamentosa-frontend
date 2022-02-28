import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import React from 'react';
import translate from '../../translate/translate';

function TermsOfServicePage() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <h1 className='text-center'>{translate.termsOfService.title}</h1>
        <h2>{translate.termsOfService.subTitle1}</h2>
        <ol>
          <li>{translate.termsOfService.detail1}</li>
          <li>{translate.termsOfService.detail2}</li>
          <li>{translate.termsOfService.detail3}</li>
          <li>{translate.termsOfService.detail4}</li>
          <li>{translate.termsOfService.detail5}</li>
          <li>{translate.termsOfService.detail6}</li>
          <li>{translate.termsOfService.detail7}</li>
          <li>{translate.termsOfService.detail8}</li>
          <li>{translate.termsOfService.detail9}</li>
          <li>{translate.termsOfService.detail10}</li>
          <li>{translate.termsOfService.detail11}</li>
          <li>{translate.termsOfService.detail12}</li>
        </ol>
        <h2>{translate.termsOfService.subTitle2}</h2>
        <ol>
          <li>
            {translate.termsOfService.detail13}
            <ol>
              <li>{translate.termsOfService.detail14}</li>
              <li>{translate.termsOfService.detail15}</li>
              <li>{translate.termsOfService.detail16}</li>
            </ol>
          </li>
          <br />
          <li>
            {translate.termsOfService.detail17}
            <ol>
              <li>{translate.termsOfService.detail18}</li>
              <li>{translate.termsOfService.detail19}</li>
            </ol>
          </li>
          <br />
          <li>
            {translate.termsOfService.detail20}
            <ol>
              <li>{translate.termsOfService.detail21}</li>
              <li>{translate.termsOfService.detail22}</li>
              <li>{translate.termsOfService.detail23}</li>
              <li>{translate.termsOfService.detail24}</li>
              <li>{translate.termsOfService.detail25}</li>
              <li>{translate.termsOfService.detail26}</li>
              <li>{translate.termsOfService.detail27}</li>
            </ol>
          </li>
          <br />
          <li>
            {translate.termsOfService.detail28}
            <ol>
              <li>{translate.termsOfService.detail29}</li>
              <li>{translate.termsOfService.detail30}</li>
              <li>{translate.termsOfService.detail31}</li>
              <li>{translate.termsOfService.detail32}</li>
            </ol>
          </li>
          <br />
          <li>
            {translate.termsOfService.detail33}
            <ol>
              <li>{translate.termsOfService.detail34}</li>
              <li>{translate.termsOfService.detail35}</li>
              <li>{translate.termsOfService.detail36}</li>
              <li>{translate.termsOfService.detail37}</li>
            </ol>
          </li>
          <br />
          <li>
            {translate.termsOfService.detail38}
            <ol>
              <li>{translate.termsOfService.detail39}</li>
            </ol>
          </li>
          <br />
          <li>
            {translate.termsOfService.detail40}
            <ol>
              <li>{translate.termsOfService.detail41}</li>
              <li>{translate.termsOfService.detail42}</li>
              <li>{translate.termsOfService.detail43}</li>
              <li>{translate.termsOfService.detail44}</li>
              <li>{translate.termsOfService.detail45}</li>
              <li>{translate.termsOfService.detail46}</li>
            </ol>
          </li>
        </ol>
      </main>
      <Footer />
    </>
  );
}

export default TermsOfServicePage;
