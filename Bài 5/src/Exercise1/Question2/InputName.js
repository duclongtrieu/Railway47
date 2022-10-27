function InputName(props) {
  const handleThayDoiKhiNhap = (e) => {
    props.changeInputName(e.target.value);
  };
  return (
    <div>
      <label>
        Tên:
        <input
          type={"text"}
          value={props.ten}
          onChange={handleThayDoiKhiNhap}
        ></input>
      </label>
    </div>
  );
}
export default InputName;
