import React from "react";
import { Controller, useForm } from "react-hook-form";

import Select from "react-select";

const ScanningOptions = [
  {
    id: "1",
    value: "Create as-built drawings/3D model",
    label: "Create as-built drawings/3D model"
  },
  {
    id: "2",
    value: "Space Planning/Area survey for real estate",
    label: "Space Planning/Area survey for real estate"
  },
  {
    id: "3",
    value: "Clash detection of new design vs. existing structures",
    label: "Clash detection of new design vs. existing structures"
  },
  {
    id: "4",
    value: "Scanning for prefabrication and shop drawings",
    label: "Scanning for prefabrication and shop drawings"
  },
  {
    id: "5",
    value: "Construction verification/progress tracking",
    label: "Construction verification/progress tracking"
  },
  {
    id: "6",
    value: "Floor flatness validation",
    label: "Floor flatness validation"
  },
  {
    id: "7",
    value: "Underground utilities location",
    label: "Underground utilities location"
  },
  {
    id: "8",
    value: "Urban planning",
    label: "Urban planning"
  },
  {
    id: "9",
    value: "Facilities Management",
    label: "Facilities Management"
  },
  {
    id: "10",
    value: "Marketing/Virtual tours",
    label: "Marketing/Virtual tours"
  }
];

const App = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Controller
        control={control}
        defaultValue={[
          {
            id: "10",
            value: "Marketing/Virtual tours",
            label: "Marketing/Virtual tours"
          }
        ].map((c) => c.value)}
        name="options"
        render={({ field: { onChange, value, ref } }) => (
          <Select
            value={ScanningOptions.filter((c) => value.includes(c.value))}
            onChange={(val) => onChange(val.map((c) => c.value))}
            options={ScanningOptions}
            isMulti
          />
        )}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default App;
