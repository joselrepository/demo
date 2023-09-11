import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { User, postUser } from "./UserSlice";
import { generateRandomUid } from "../../utils";
import { useEffect, useState } from "react";
import { Calendar } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

type FormType = {
  name: string;
  email: string;
};

function UserProfile() {
  const { data, status } = useAppSelector((state) => state.user);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>();

  useEffect(() => {
    console.log(JSON.stringify(data, null, 2));
  }, [data]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const newUser: User = {
      userId: generateRandomUid(),
      name: data.name,
      email: data.email,
    };

    dispatch(postUser(newUser));
  };

  const handleSelect = (d: Date) => {
    setSelectedDate(d);
  };

  return (
    <div>
      <Calendar date={selectedDate} onChange={handleSelect} />
      <p>{JSON.stringify(data)}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        {errors.name && errors.name.message}
        <input type="text" {...register("email")} />
        {errors.name && errors.name.message}
        <input type="submit" />
      </form>
    </div>
  );
}

export default UserProfile;
