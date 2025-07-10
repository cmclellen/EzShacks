import { getCountries } from "../_lib/apiShacks";

type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
};

async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryProps) {
  console.log(defaultCountry);

  const countries = await getCountries();
  const flag =
    countries.find((country: any) => country.name === defaultCountry)?.flag ??
    "";

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c: any) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
