import '../styles/SelectInput.css';

function SelectInput({ options, selectedValue, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className='option-select'>
      <select value={selectedValue} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    </div>

  );
}

export default SelectInput;