import React from 'react'
import { sectionIds } from '../../constants'

import personImage from '../../images/person-meditation.png';

import iconZ from '../../images/icon-z.svg';
import iconCircle from '../../images/icon-circle.svg';
import iconCircleOutline from '../../images/icon-circle-outline.svg';
import iconCircleColor from '../../images/icon-circle-color-2.svg';
import iconx from '../../images/icon-x.svg';

export default function Benefits() {
  return (
    <section className="py-5" id={sectionIds.benefits}>
      <div className="container-narrow position-relative">
        <div className="text-center">
          <h2 className="display-4">Узнай свою судьбу</h2>
        </div>
        <p className="mx-auto text-center mt-4">
          Для того, чтобы анализ был возможен, необходимо будет заполнить короткую анкету при регистрации, что позволит настроить нашу нейросеть именно на Вас и запустить аналитику.
        </p>

        <div className="mt-4">
          <div className="progress">
            <div className="progress-bar w-50" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="mt-2 fs-small">
            <span>Людей, которые узнали свою судьбу</span>
            <span className='float-end'>35,929</span>
          </div>
        </div>

        <div className="my-5 text-center">
          <a href={`#${sectionIds.predictions}`} className="btn btn-primary">Начать</a>
        </div>

        <div className="d-none d-lg-block">
          <img className="position-absolute" style={{ top: -140, right: 0, transform: 'rotate(-85deg)' }} src={iconZ} alt="" />
          <img className="position-absolute" style={{ top: 45, left: -160, transform: 'rotate(60deg)' }} src={iconZ} alt="" />
          <img className="position-absolute" style={{ bottom: -40, right: 80, transform: 'rotate(0deg)' }} src={iconZ} alt="" />
          <img className="position-absolute" style={{ bottom: -60, right: -300, transform: 'rotate(90deg)' }} src={iconZ} alt="" />
          <img className="position-absolute" style={{ bottom: -20, left: -220, transform: 'rotate(45deg)' }} src={iconZ} alt="" />

          <img className="position-absolute" style={{ top: -100, left: -220, transform: 'rotate(0deg)' }} src={iconCircle} alt="" />
          <img className="position-absolute" style={{ top: 100, right: -200, transform: 'rotate(0deg)' }} src={iconCircle} alt="" />

          <img width={10} height={10} className="position-absolute" style={{ top: 20, right: -120, transform: 'rotate(0deg)' }} src={iconCircle} alt="" />
          <img width={10} height={10} className="position-absolute" style={{ bottom: -110, right: -110, transform: 'rotate(0deg)' }} src={iconCircle} alt="" />
          <img width={10} height={10} className="position-absolute" style={{ top: 35, left: 30, transform: 'rotate(0deg)' }} src={iconCircle} alt="" />
          <img width={10} height={10} className="position-absolute" style={{ top: 225, left: -220, transform: 'rotate(0deg)' }} src={iconCircle} alt="" />
        </div>
      </div>

      <div style={{ height: 120 }} />

      <div className="container-fluid mt-5 position-relative">
        <div className="d-flex">
          <div className="d-none d-lg-block">
            <img src={personImage} alt="" />
          </div>

          <div className="mx-auto ms-lg-auto me-lg-5 col-md-10 col-lg-4">
            <h4 className="text-center text-md-start display-5">Новые технологии предсказания</h4>
            <p className="mt-3">Наша нейросеть поможет Вам разобраться в знаках судьбы, определиться со сложным выбором или подгадать наиболее благоприятное время для важных решений или перемен в жизни, чтобы раскрыть свой потенциал.</p>
          </div>
        </div>

        <div style={{ height: 120 }} />

        <div className="mt-5 container">
          <div className="row gy-4 justify-content-around align-items-center">
            <div className="col-lg-5">
              <h4 className="display-6">Лучшие из лучших</h4>
              <p className="mt-3">Нейросеть, обученная на предсказаниях величайших предсказателей мира, среди них:</p>
            </div>
            <div className="col-lg-4">
              <h5 className="h2 mb-2">Ванга</h5>
              <h5 className="h2 mb-2">Вольф Мессинг</h5>
              <h5 className="h2 mb-2">Григорий Распутин</h5>
              <h5 className="h2">Василий Немчин</h5>
            </div>
          </div>
        </div>

        <div style={{ height: 120 }} />

        <div className="d-none d-lg-block">
          <img width={88} height={88} className="position-absolute" style={{ top: -140, left: "45%", transform: 'rotate(90deg)' }} src={iconCircleColor} alt="" />
          <img width={160} height={160} className="position-absolute" style={{ bottom: 310, right: "18%", transform: 'rotate(270deg)' }} src={iconCircleColor} alt="" />
          <img width={66} height={66} className="position-absolute" style={{ bottom: 340, left: "26%", transform: 'rotate(0deg)' }} src={iconCircle} alt="" />
          <img width={356} height={356} className="position-absolute" style={{ bottom: 390, right: -225, transform: 'rotate(0deg)' }} src={iconCircleOutline} alt="" />
          <img width={27} height={27} className="position-absolute" style={{ bottom: 540, right: 20, transform: 'rotate(0deg)' }} src={iconx} alt="" />
          <img width={27} height={27} className="position-absolute" style={{ bottom: 575, right: 20, transform: 'rotate(0deg)' }} src={iconx} alt="" />
          <img width={356} height={356} className="position-absolute" style={{ top: -120, left: -245, transform: 'rotate(0deg)' }} src={iconCircleOutline} alt="" />
          <img width={27} height={27} className="position-absolute" style={{ bottom: 100, right: "46%", transform: 'rotate(0deg)' }} src={iconx} alt="" />
          <img width={27} height={27} className="position-absolute" style={{ bottom: 100, right: "50%", transform: 'rotate(0deg)' }} src={iconx} alt="" />
        </div>
      </div>
    </section>
  )
}
