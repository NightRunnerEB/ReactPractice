import React, { useState } from "react";
import { FormData } from "../types/FormData";
import "../styles/form.scss";

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    gender: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === "checkbox") {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
    setSuccess(false);
  };

  // Функция валидации формы
  const validate = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Имя не может быть пустым";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Некорректный email (должен содержать '@')";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }
    if (!formData.gender) {
      newErrors.gender = "Выберите пол";
    }
    if (!formData.agree) {
      newErrors.agree = "Необходимо согласиться с условиями";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSuccess(true);

    localStorage.setItem("formData", JSON.stringify(formData));

    // Очистка формы
    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      agree: false,
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      agree: false,
    });
    setErrors({});
    setSuccess(false);
  };

  return (
    <div className="form-container">
      {success && (
        <div className="success-message">Форма успешно отправлена!</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "invalid" : ""}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "invalid" : ""}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-field">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "invalid" : ""}
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        <div className="form-field">
          <label>Пол:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Мужской
            </label>
            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Женский
            </label>
          </div>
          {errors.gender && (
            <div className="error-message">{errors.gender}</div>
          )}
        </div>

        <div className="form-field">
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            Я согласен с условиями
          </label>
          {errors.agree && <div className="error-message">{errors.agree}</div>}
        </div>

        <div className="form-actions">
          <button type="submit">Отправить</button>
          <button type="button" onClick={handleReset}>
            Сбросить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
