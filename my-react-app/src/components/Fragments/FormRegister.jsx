import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form>
      <InputForm
        label="Full Name"
        type="text"
        placeholder="example: Jane Doe"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="*****"
        name="confirmpassword"
      />
      <Button className="w-full bg-blue-600">Register</Button>
    </form>
  );
};

export default FormRegister;
