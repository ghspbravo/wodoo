import React from 'react'
import { sectionIds } from '../../constants'
import './Reviews.scss';

import review1Image from '../../images/review-1.jpg';
import review2Image from '../../images/review-2.jpg';
import review3Image from '../../images/review-3.jpg';
import iconTwitter from '../../images/icon-tw.svg';
import bgImage from '../../images/footer-bg.svg';

const reviewsList = [
  { name: "Егор Иванов", rating: 4, photo: review1Image, text: "Невероятный сервис, очень классные впечатления, моя жизнь имзенилась. Спасибо за помощь и удачи вам." },
  { name: "Егор Иванов", rating: 4, photo: review2Image, text: "Невероятный сервис, очень классные впечатления, моя жизнь имзенилась. Спасибо за помощь и удачи вам." },
  { name: "Егор Иванов", rating: 4, photo: review3Image, text: "Невероятный сервис, очень классные впечатления, моя жизнь имзенилась. Спасибо за помощь и удачи вам." },
  { name: "Егор Иванов", rating: 4, photo: review3Image, text: "Невероятный сервис, очень классные впечатления, моя жизнь имзенилась. Спасибо за помощь и удачи вам." },
  { name: "Егор Иванов", rating: 4, photo: review3Image, text: "Невероятный сервис, очень классные впечатления, моя жизнь имзенилась. Спасибо за помощь и удачи вам." },
  { name: "Егор Иванов", rating: 4, photo: review3Image, text: "Невероятный сервис, очень классные впечатления, моя жизнь имзенилась. Спасибо за помощь и удачи вам." },
]

export default function Reviews() {
  return (
    <section id={sectionIds.reviews} style={{ overflow: 'hidden' }} className="py-5 position-relative">
      <div className="container">
        <div className="col-lg-4 col-md-8 mx-auto">
          <div className="text-center">
            <h2 className="display-4">Отзывы</h2>
            <p className="mt-4">Мы ценим наших клиентов и их мнение о нас. И рады делиться вашими впечатлениями.</p>
          </div>
        </div>

        <div className="mt-5">
          <div className="row justify-content-center gx-4 gy-4">
            {reviewsList.map(({ name, photo, text }, index) => <div key={index} className="col-lg-4">
              <div className="rounded border bg-light text-dark h-100 p-4">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <img width={50} height={50} className="rounded-circle" src={photo} alt="person photo" />
                    <h5 className='ms-3 fw-bold'>{name}</h5>
                  </div>
                  <img width={22} height={22} className="ms-auto" src={iconTwitter} alt="" />
                </div>

                <p className="mt-4">{text}</p>

              </div>
            </div>)}
          </div>
        </div>

        <img className="footer-bg" src={bgImage} alt=""  />
        <div className="d-none d-md-block" style={{ height: 220 }} />
      </div>
    </section>
  )
}
