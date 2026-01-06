import { forwardRef } from 'react';

const Textarea = forwardRef(({
  label,
  error,
  className = '',
  required = false,
  rows = 4,
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-lg border-2 
          ${error ? 'border-red-500' : 'border-secondary-200'} 
          focus:outline-none focus:border-primary-500 
          transition-colors duration-200
          resize-vertical
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
