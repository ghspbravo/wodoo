import React from 'react'
import { sectionIds } from '../../constants';
import './EntranceBanner.scss';
import bannerBg from '../../images/banner-bg.svg'

export default function EntranceBanner() {
  return (
    <section className="position-relative">
      <div className="banner-layout">
        <div className="d-flex align-items-center h-100">
          <div className="banner-contents ms-md-5 px-3">
            <h1 className="banner-title display-5 fw-xbold">Предсказания Wild Woodo</h1>
            <p style={{ maxWidth: 440 }} className="banner-subtitle mt-5">
              Уникальный сервис, в основе которого лежит искусственный интеллект.
              <br /> Нейросеть, обученная на предсказаниях величайших предсказателей мира.
            </p>
            <a href={`#${sectionIds.benefits}`} className="btn btn-lg btn-primary mt-5 text-nowrap">Начать гадания</a>
          </div>
        </div>
        <img className='d-md-block banner-bg' src={bannerBg} />
      </div>
    </section>
  )
}
