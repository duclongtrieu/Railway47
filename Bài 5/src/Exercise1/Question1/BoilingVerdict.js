function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Nước đủ sôi</p>;
  }
  return <p>Nước không đủ sôi</p>;
}
export default BoilingVerdict;
