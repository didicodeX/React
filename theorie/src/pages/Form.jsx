import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

//npm i react-hook-form yup @hookform/resolvers

const Form = () => {
  const zodSchema = {
    valueAsNumber: true,
  };

  const defaultValues = {
    name: "Pop John",
    activities: [],
  };

  const {
    control, //permet d'ajouter des champs
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    // resolver: zodResolver(zodSchema),
    mode: "onSubmit", // permet de preciser a quel moment je fait de la validation
  });

  const { fields, append, remove } = useFieldArray({
    name: "activities",
    control,
  });

  function addActivities() {
    append({
      value: "uoo",
    });
  }

  function deleteActivity(index) {
    remove(index);
  }

  function submit(values) {
    console.log(values);
  }
  // console.log(errors);

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <input
        className={errors.name ? "input-error" : ""}
        {...register("name", {
          maxLength: {
            value: 3,
            message: "Trop long !",
          },
        })}
        type="text"
        placeholder="name"
        id="name"
      />
      <input
        {...register("age", { valueAsNumber: true })}
        type="number"
        name="age"
        id="age"
      />
      <div>
        <span>Activities </span>
        <button onClick={addActivities} type="button" className="button">
          +
        </button>
      </div>
      <ul>
        {fields.map((activity, i) => (
          <li key={activity.id}>
            <input
              {...register(`activities[${i}].value`)}
              type="text"
              name="activity"
              placeholder="activity"
            />
            <button
              onClick={() => deleteActivity(i)}
              type="button"
              className="button"
            >
              {" "}
              -{" "}
            </button>
          </li>
        ))}
      </ul>
      <input type="submit" value="Save" onSubmit={handleSubmit} />
      {errors?.name && <p className="errors">{errors.name.message} </p>}
    </form>
  );
};

export default Form;
/** La méthode handleSubmit()
 * 
 * Cette méthode permet de prévenir le comportement de la soumission du formulaire, c'est-à-dire le rafraîchissement de la page.
 * Le premier argument est une fonction de rappel qui est invoquée lorsque le formulaire est envoyé (lorsque le bouton de type submit, qui est le type par défaut des boutons dans les formulaires, est cliqué). Cette fonction de rappel reçoit en arguments les données du formulaire et l'objet d'événement.
 * Le deuxième argument est une fonction de rappel qui est invoquée lorsqu'une erreur est émise lors de l'envoi du formulaire. Cette fonction de rappel reçoit en arguments les erreurs du formulaire et l'objet d'événement.
 * 
 * import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <button type="submit">Submit</button>
    </form>
  );
}
* La méthode register()
Cette méthode permet d’enregistrer un champ et d'y appliquer des règles de validation.

Lorsqu'un champ est enregistré sa valeur sera disponible lors de l'envoi (dans l'objet data de la première fonction de rappel passé à handleSubmit()) et lors de la validation.
 */
