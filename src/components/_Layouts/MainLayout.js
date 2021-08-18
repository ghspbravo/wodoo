import React from 'react'
import { sectionIds } from '../../constants';

// global styles
import '../../scss/bootstrap.scss';

const navList = [
  { title: "Преимущества", href: sectionIds.benefits },
  { title: "Гадания", href: sectionIds.predictions },
  { title: "Отзывы", href: sectionIds.reviews },
]

export default function MainLayout({ title = "Wild Wodoo", children }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Wild Woodo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navList.map(({ href, title }, index) => <li key={index} className="nav-item">
                <a className="nav-link" href={`#${href}`}>{title}</a>
              </li>)}
            </ul>
          </div>
        </div>
      </nav>

      <title>{title}</title>
      <main>{children}</main>

      <footer className="py-5">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <a className="navbar-brand text-reset mx-auto mx-lg-0" href="#">Wild Woodo</a>
            <div className="w-100 d-lg-none" />
            <div className="mx-auto mx-lg-0">© 2021 Wild Woodo. All rights reserved.</div>
            <div className="w-100 d-lg-none" />
            <ul className="nav list-unstyled d-flex mx-auto mx-lg-0">
              {navList.map(({ href, title }, index) => <li key={index} className="nav-item">
                <a className="text-reset nav-link" href={`#${href}`}>{title}</a>
              </li>)}
            </ul>
          </div>

          <hr className="mt-4 mb-5" />

          <div className="row g-0">
            <span className="mb-4 mb-lg-0 col-lg-10 text-muted text-center text-lg-start">Уникальный сервис, в основе которого лежит искусственный интеллект.</span>
            <ul className="nav col justify-content-lg-end justify-content-center list-unstyled d-flex">
              <li className="ms-3"><a className="text-reset" href="#">tw</a></li>
              <li className="ms-3"><a className="text-reset" href="#">fb</a></li>
              <li className="ms-3"><a className="text-reset" href="#">G+</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
