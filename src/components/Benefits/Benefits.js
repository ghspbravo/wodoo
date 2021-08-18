import React from 'react'
import { sectionIds } from '../../constants'

import analysis from '../../images/icon-analysis.svg';
import speed from '../../images/icon-speed.svg';
import technology from '../../images/icon-technology.svg';

import iconZ from '../../images/icon-z.svg';
import iconCircle from '../../images/icon-circle.svg';

const benefitsList = [
  { title: "Лучшая технология", image: technology, description: "Наша нейросеть поможет Вам разобраться в знаках судьбы, определиться со сложным выбором или подгадать наиболее благоприятное время для важных решений или перемен в жизни, чтобы раскрыть свой потенциал." },
  { title: "Самый быстрый способ", image: speed, description: "Искусственный интеллект анализирует весь массив данных персонально для Вас и составляет наиболее полезное индивидуальное предсказание." },
  { title: "Точный анализ", image: analysis, description: "Нейросеть учитывает способствующие и противодействующие вам силы на основании движения небесных тел, астрологического прогноза, предсказаний великих медиумов, дня вашего рождения, лунного календаря, нумерологии, раскладов Таро, игральных и цыганских карт, толкования рун." },
]

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

      <div style={{ height: 20 }} />

      <div className="container-fluid mt-5">
        <div className="row gy-3">
          {benefitsList.map(({ title, description, image }, index) => <div key={index} className="col-lg-4">
            <div className="text-center rounded border h-100 p-5">
              <img src={image} alt={title} />
              <h4 className="my-3">{title}</h4>
              <p className="mt-5">{description}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  )
}
