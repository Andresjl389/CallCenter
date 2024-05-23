type Props = {
  label?: string;
  first?: string;
  value?: string;
  children?: any;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectInputComponent = ({
  label,
  first,
  children,
  value,
  onChange,
}: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
      <label style={{ marginBottom: "8px", fontWeight: 700, fontSize: 14 }}>
        {label}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={value}
        onChange={onChange}
        style={{
          height: "100%",
          borderRadius: 4,
          padding: 8,
          border: "1px solid #ddd",
          width: "320px",
        }}
      >
        <option selected>{first}</option>
        {children}
      </select>
    </div>
  );
};

export default SelectInputComponent;
