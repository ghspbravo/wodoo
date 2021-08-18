import React from 'react'
import { sectionIds } from '../../constants';
import './EntranceBanner.scss';
import bannerBg from '../../images/banner-bg.svg'

export default function EntranceBanner() {
  return (
    <section className="position-relative">
      <div className="banner-layout container vh-100">
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className='text-center'>
            <h1 className="banner-title display-3 fw-xbold">Общее описание</h1>
            <p className="banner-subtitle mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, magnam.
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quod.
            </p>
            <a href={`#${sectionIds.benefits}`} className="btn btn-lg btn-primary mt-5">Начать гадания</a>
          </div>
        </div>
        <img className='d-none d-md-block banner-bg' src={bannerBg} />
      </div>
    </section>
  )
}
