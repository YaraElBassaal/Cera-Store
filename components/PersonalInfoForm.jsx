import { useForm } from "react-hook-form";
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
export default function PersonalInfoForm() {
  return (
    <div className="personal-info">
      <h1 className="personal-info-title">Personal Information</h1>
      <form action="">
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          {errors.name?.type === "required" ? (
            <span>This field is required</span>
          ) : (
            errors.name?.type === "maxLength" && <span>Max lenght is 20</span>
          )}
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            placeholder="Email"
          />
        </div>
        <div className="input-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="number"
            {...register("phoneNumber", { required: true })}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="input-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="number"
            {...register("phoneNumber", { required: true })}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <span className="error-message">This field is required</span>
          )}
        </div>
        <div className="input-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="number"
            {...register("phoneNumber", { required: true })}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <span className="error-message">This field is required</span>
          )}
        </div>
      </form>
    </div>
  );
}
