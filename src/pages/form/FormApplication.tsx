import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormApplication.styles.css';

export function JobApplicationForm() {
  const [skill, setSkill] = useState('');
  const [role, setRole] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [stack, setStack] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Обработка данных формы
    console.log({
      skill,
      role,
      hireDate,
      stack,
    });
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <div className="form-application-details">
      <h2>Форма подачи заявки на прием работника</h2>
      <form onSubmit={handleSubmit} className="form-header">
        <div>
          <label htmlFor="stack">Выберите стек:  </label>
          <select
            id="stack"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
          >
            <option value="">-- Выберите стек технологий --</option>
            <option value="typescript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="go">C#</option>
            <option value="c++">PHP</option>
            {/* Добавьте другие языки программирования по мере необходимости */}
          </select>
        </div>

        <div>
          <label htmlFor="skill">Введите навык:</label>
          <input
            type="text"
            id="skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="role">Выберите должность:  </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">-- Выберите должность --</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
            {/* Добавьте другие должности по мере необходимости */}
          </select>
        </div>

        <div>
          <label htmlFor="hireDate">Дата выхода сотрудника:  </label>
          <input
            type="date"
            id="hireDate"
            value={hireDate}
            onChange={(e) => setHireDate(e.target.value)}
          />
        </div>

        <div className="form-button">
          <button type="submit">Сохранить</button>
          <button onClick={handleNavigation} type='button'>
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};

