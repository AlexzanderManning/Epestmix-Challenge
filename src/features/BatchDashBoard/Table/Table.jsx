import Label from "../../../components/Label/Label";

export default function Table({batches, handleClick}) {
  const parseDate = date => {
    let newDate =  date.slice(0, 10).split('-');
    return `${newDate[1]}-${newDate[2]}-${newDate[0]}`;
  }
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Batch ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Batch Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                  >
                    Batch Created At
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {batches?.map((batch) => (
                  <tr key={`batch-id-${batch.id}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                     {`00000-${batch?.id}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Label status={batch?.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="inline-flex text-xs leading-5 font-semibold">
                        {parseDate(batch?.createdAt)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                      <span
                        onClick={() => handleClick(batch)}
                        className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                      >
                        View
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
