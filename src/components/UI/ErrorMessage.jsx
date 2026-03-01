export const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return (
    <label className="label pb-0 pt-1">
      <span className="label-text-alt text-error text-sm">{message}</span>
    </label>
  );
};
