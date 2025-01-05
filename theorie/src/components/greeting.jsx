export function Greeting({ name, age = 16, majeur=true }) {
  console.log(name, age, majeur);
  return <h1>hello { name }!</h1>;
}
