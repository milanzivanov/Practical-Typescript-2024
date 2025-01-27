type ProfileCardProps = {
  type: "basic" | "advanced";
  name: string;
  email?: string;
};

function Component(props: ProfileCardProps) {
  const { type, name, email } = props;

  const aleretType = type === "basic" ? "success" : "danger";
  const classname = `alert alert-${aleretType}`;

  return (
    <article className={classname}>
      <h2>user : {name}</h2>
      {type && "advanced" && <h2>Email: {email}</h2>}
    </article>
  );
}
export default Component;
