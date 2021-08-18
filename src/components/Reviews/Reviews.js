import React from 'react'
import { sectionIds } from '../../constants'
import starFilled from '../../images/star-filled.svg';
import starOutline from '../../images/star-outline.svg';

import review1Image from '../../images/review-1.jpg';
import review2Image from '../../images/review-2.jpg';
import review3Image from '../../images/review-3.jpg';

const reviewsList = [
  { name: "Егор Иванов", rating: 4, photo: review1Image, text: "Невероятный сервис, очень классные впечатления, моя жизнь имзенилась. Спасибо за помощь и удачи вам." },
  { name: "Егор Иванов", rating: 4, photo: review2Image, text: "Невероятный сервис, очень классные впечатления, моя жизнь имзенилась. Спасибо за помощь и удачи вам." },
  { name: "Егор Иванов", rating: 4, photo: review3Image, text: "Невероятный сервис, очень классные впечатления, моя жизнь имзенилась. Спасибо за помощь и удачи вам." },
]

export default function Reviews() {
  return (
    <section id={sectionIds.reviews} className="py-5">
      <div className="container">
        <div className="text-center">
          <h2 className="display-4">Отзывы</h2>
        </div>

        <div className="mt-5">
          <div className="row justify-content-center gx-4 gy-4">
            {reviewsList.map(({ name, rating, photo, text }, index) => <div key={index} className="col-lg-4">
              <div className="rounded border h-100 p-5">
                <div className="text-center"><img className="rounded-circle" src={photo} alt="person photo" /></div>
                <p className="mt-5">{text}</p>

                <div className="my-5">
                  <div className="d-flex justify-content-center">
                    {[...Array(5)].map((_, index) => <img width={25} height={25} src={index < rating ? starFilled : starOutline} />)}
                  </div>
                </div>

                <h6 className='text-center'>{name}</h6>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
