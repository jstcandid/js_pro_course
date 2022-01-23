export function Input({ value, onChange }) {
  return (
    <div>
      <p>Text</p>
      <input value={value} onChange={onChange} type='text' />
    </div>
  );
}
