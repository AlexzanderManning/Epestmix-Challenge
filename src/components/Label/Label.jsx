const Label = ({status}) => {
  const handleStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "succeeded":
        return `bg-green-100 text-green-800`;
      case "queued":
        return `bg-yellow-100 text-yellow-800`;
      case "failed":
        return `bg-red-100 text-red-800`;
      default:
        return `bg-red-100 text-red-800`;
    }
  }

  return (
    <div
      className={`w-24 text-center px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${handleStatusColor(
        status
      )}`}
    >
      <div className="mx-auto">{status}</div>
    </div>
  );
}

export default Label;