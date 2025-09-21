import React from "react";
import { useForm } from "react-hook-form";
import styles from "./DynamicForm.module.css";

const MIN_LENGTH = 3;

export default function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting},
  } = useForm();

  const isChange = watch('firstField', '');
  //   для примера вывожу отслеживаемые изменения в консоль
  console.log(isChange);

  const handleReg = async (data) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleReg)}>
      <div className={styles.field}>
        <label htmlFor="firstField">First Field</label>
        <input
          id="firstField"
          className={styles.input}
          type="text"
          {...register("firstField", {
            required: "Fill first input!",
            minLength: {
              value: MIN_LENGTH,
              message: `Minimum ${MIN_LENGTH} symbols!`,
            },
          })}
        />
        {errors.firstField && <p>{errors.firstField.message}</p>}
      </div>


      {isChange.length >= MIN_LENGTH && (
        <div className={styles.field}>
          <label htmlFor="secondField">Second Field</label>
          <input
            id="secondField"
            className={styles.input}
            type="text"
            {...register("secondField", {required: "Fill second input!"})}
          />
          {errors.secondField && <p className={styles.err} >{errors.secondField.message}</p>}
        </div>
      )}

      <button className={styles.button} type="submit">
        {isSubmitting ? 'sending...' : 'Submit'}
      </button>
    </form>
  );
}
