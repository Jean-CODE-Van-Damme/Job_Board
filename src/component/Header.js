import Title from "./Title";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <Title name={props.name} />
      </div>
    </>
  );
};

export default Header;
