import React from 'react'

export default function Claim() {
  const submitHandler = (e) => {
    e.preventDefault();

    alert('Предсказание готовится');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="row gy-4">
        <div className="col-md-6">
          <label for="firstName" className="form-label">Имя</label>
          <input type="text" className="form-control" id="firstName" placeholder="" />
        </div>
        <div className="col-md-6">
          <label for="gender" className="form-label">Пол</label>
          <select id="gender" className="form-select">
            <option value="1">Мужской</option>
            <option value="2">Женский</option>
          </select>
        </div>

        <div className="col-md-6">
          <label for="birthdate" className="form-label">Дата рождения</label>
          <input type="text" className="form-control" id="birthdate" placeholder="20-11-1982" />
        </div>
        <div className="col-md-6">
          <label for="timebirth" className="form-label">Время рождения</label>
          <input type="text" className="form-control" id="timebirth" placeholder="20:00" />
        </div>

        <div className="col-md-6">
          <label for="city" className="form-label">Город рождения</label>
          <input type="text" className="form-control" id="city" placeholder="Москва" />
        </div>
        <div className="col-md-6">
          <label for="email" className="form-label">Email</label>
          <input type="text" className="form-control" id="email" placeholder="example@gmail.com" />
        </div>

        <div className="col-md-6">
          <label for="eye-color" className="form-label">Цвет глаз</label>
          <input type="text" className="form-control" id="eye-color" placeholder="Зеленый" />
        </div>
        <div className="col-md-6">
          <label for="favourite-color" className="form-label">Любимый цвет</label>
          <input type="text" className="form-control" id="favourite-color" placeholder="Красный" />
        </div>

        <div className="col-md-6">
          <label for="favourite-animal" className="form-label">Любимое животное</label>
          <select id="favourite-animal" className="form-select">
            <option value="1">Кот</option>
            <option value="2">Собака</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="frighten-animal" className="form-label">Самое страшное животное для вас</label>
          <select id="frighten-animal" className="form-select">
            <option value="1">Кот</option>
            <option value="2">Собака</option>
          </select>
        </div>

        <div className="mt-5"><button className="btn btn-primary w-100">Дальше</button></div>
      </div>
    </form>
  )
}
