interface TablesListProps {
  data: any[];
  columns: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TablesList = ({ data, columns, onEdit, onDelete }: TablesListProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {column}
            </th>
          ))}
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                {row[column.toLowerCase()]}
              </td>
            ))}
            <td className="px-6 py-4 whitespace-nowrap">
              <button onClick={() => onEdit(row.id)} className="mr-2 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">Editar</button>
              <button onClick={() => onDelete(row.id)} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};