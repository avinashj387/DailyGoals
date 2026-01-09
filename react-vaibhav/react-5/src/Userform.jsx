import { useForm } from "react-hook-form"
function userform() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Submitting the form..", data);

  }
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>UserForm</h1>
      <div>
        <label>First Name :</label>
        <input type="text" {...register("firstname",
          {
            required: true,
            minLength: { value: 3, message: "Min len atleast 3" },
          })} />
        {errors.firstname && <p>{errors.firstname.message}</p>}
      </div>
      <br />
      <div>
        <label>Midle Name :</label>
        <input type="text" {...register("midleName", { required: true })} />
      </div>
      <br />
      <div>
        <label>Last Name :</label>
        <input type="text" {...register("lastName", { required: true })} />
      </div>
      <br />
      <input type="submit" />
    </form>
  );
}

export default userform;
