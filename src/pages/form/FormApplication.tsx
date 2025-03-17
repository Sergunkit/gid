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
    navigate('/', { replace: false });
    const formData = { skill, role, hireDate, stack };
    sessionStorage.setItem('jobApplicationData', JSON.stringify(formData));
    console.log('Данные формы:', formData);
    
  };

  const navigate = useNavigate();

  return (
    <div >
        <h2 className="header">Форма подачи заявки на прием работника</h2>
        <form className="form-application" onSubmit={handleSubmit}>
            <label className="label1" htmlFor="stack">Выберите стек:</label>
            <select
                className="input1"
                id="stack"
                value={stack}
                onChange={(e) => setStack(e.target.value)}
            >
                <option value="">-  Выберите язык программирования  -</option>
                <option value="typescript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="go">C#</option>
                <option value="c++">PHP</option>
            </select>
     
            <label className="label2" htmlFor="skill">Введите навык:</label>
            <select
                className="input2"
                id="skill"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
            >
                <option value="">-  Выберите уровень навыков  -</option>
                <option value="typescript">junior</option>
                <option value="python">middle</option>
                <option value="java">senior</option>
            </select>
         
            <label className="label3" htmlFor="role">Выберите должность:  </label>
            <select
                className="input3"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            >
                <option value="">-  Выберите должность  -</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Developer</option>
            </select>

            <label className="label4" htmlFor="hireDate">Дата выхода сотрудника:  </label>
            <input
                className="input4"
                type="date"
                id="hireDate"
                value={hireDate}
                onChange={(e) => setHireDate(e.target.value)}
            />

            <button className="button1" type="submit">Добавить</button>
            <button className="button2" onClick={() => navigate('/', { replace: false })} type='button'>
                Сохранить
            </button>
      </form>
    </div>
  );
};

