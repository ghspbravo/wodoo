import React from 'react'
import { sectionIds } from '../../constants'
import iconCircle from '../../images/icon-circle-color.svg'
import iconCircle2 from '../../images/icon-circle-color-2.svg'
import Claim from '../Forms/Claim'

const catalogueList = [
  { title: "Отношения", description: "Диагностика отношений", price: 200 },
  { title: "Учеба", description: "Как мне самореализоваться?", price: 250 },
  { title: "Здоровье", description: "Как прекратить болеть?", price: 350 },
  { title: "Карьера", description: "Как улучшить финансовое состояние?", price: 400 },
  { title: "Конфликты", description: "Как уйти от внутреннего конфликта?", price: 500 },
]

export default function Catalogue() {
  return (
    <section className="position-relative py-5" id={sectionIds.predictions}>
      <div className="container">
        <div className="text-center">
          <h2 className="display-4">Каталог Гаданий</h2>
        </div>

        <div className="mt-5">
          <div className="row justify-content-center gx-4 gy-4">
            {catalogueList.map(({ title, description, price }, index) => <div key={index} className="col-lg-4">
              <div className="rounded border h-100 p-5">
                <h4>{title}</h4>
                <p className="mt-3 mb-5">{description}</p>
                <span className="fw-xbold display-3">{price} ₽</span>

                <div className="mt-4">
                  <button data-bs-toggle="modal" data-bs-target="#claimModal" className="btn btn-primary w-100">Начать</button>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <img className="position-absolute" width={355} height={355} style={{ bottom: 60, left: -140, transform: 'rotate(0deg)' }} src={iconCircle} alt="" />
        <img className="position-absolute" style={{ bottom: 220, right: 50, transform: 'rotate(0deg)' }} src={iconCircle} alt="" />
        <img className="position-absolute" style={{ top: 30, right: 250, transform: 'rotate(0deg)' }} src={iconCircle2} alt="" />
      </div>

      <div id="claimModal" className="modal text-dark" tabindex="-1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Анкета</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <Claim />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
