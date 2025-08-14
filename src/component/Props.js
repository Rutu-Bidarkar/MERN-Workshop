export default function Propsexample(props) {
  return (
    <div>
      <h1>Hello {props.dataattribute.fname} {props.dataattribute.lname}</h1>
      <h2>You are {props.dataattribute.age} years old!!</h2>
      <h3>You live in {props.dataattribute.city}</h3>
    </div>
  );
}
